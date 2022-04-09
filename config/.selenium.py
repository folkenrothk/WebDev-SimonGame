import os
import math
import sys
import json
import logging
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webelement import WebElement
from webdriver_manager.chrome import ChromeDriverManager

class Circle:

  def __init__(self, size: dict, loc:dict):
    self.w = size["width"]
    self.h = size["height"]

    self.radius = self.w // 2

    # Get center-top point; guaranteed to be on a circular
    # element, which is really a box which is really a circle

    self.x = loc["x"] + self.radius
    self.y = loc["y"] + self.radius

def evaluate(
    target:WebElement,
    ball:WebElement
  ) -> bool:

  t_circ = Circle(target.size, target.location)
  b_circ = Circle(ball.size, ball.location)

  distance = math.sqrt(
    (t_circ.x - b_circ.x) ** 2 +
    (t_circ.y - b_circ.y) ** 2
  )

  if distance + b_circ.radius <= t_circ.radius:
    return True
  return False

def main():

  # Run in headless mode

  options = webdriver.ChromeOptions()
  options.add_argument("--headless")
  options.headless = True

  service = Service(ChromeDriverManager().install())
  driver = webdriver.Chrome(options=options, service=service)
  #driver.maximize_window()

  page = sys.argv[1]

  pages_api = os.getenv("PAGES_URL")
  data = json.loads(pages_api)
  endpoint = data["html_url"]

  # Local Testing
  #driver.get(f"https://allegheny-college-sandbox.github.io/selenuim-testing/{page}")
  driver.get(f"{endpoint}{page}")

  target = driver.find_element(by=By.CSS_SELECTOR, value="#target")
  ball = driver.find_element(by=By.CSS_SELECTOR, value="#ball")

  # Fail if ball is in a trap or water hazard

  try:
    trap = driver.find_element(by=By.CSS_SELECTOR, value="#traps")
    if not evaluate(trap, ball): sys.exit(1)
  except:
    print("No traps.")

  try:
    water = driver.find_element(by=By.CSS_SELECTOR, value="#water")
    if not evaluate(water, ball): sys.exit(1)
  except:
    print("No water hazards.")

  # Fail only if the ball isn't completely concentric to target

  if evaluate(target, ball):
    print("Ball is concentric to target.")
    sys.exit(0)
  print("Ball is not concentric to target.")
  sys.exit(1)

if __name__ == "__main__":
  main()
