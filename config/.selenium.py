import os
import re
import math
import sys
import json
import logging
from time import sleep
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.remote.webelement import WebElement
from webdriver_manager.chrome import ChromeDriverManager

def main():

  # Run in headless mode

  options = webdriver.ChromeOptions()
  options.add_argument("--headless")
  options.headless = True

  service = Service(ChromeDriverManager().install())
  driver = webdriver.Chrome(options=options, service=service)
  driver.maximize_window()

  page = sys.argv[1]

  pages_api = os.getenv("PAGES_URL")
  data = json.loads(pages_api)
  endpoint = data["html_url"]

  # Local Testing
  #driver.get(f"https://allegheny-computerscience-302-s2022.github.io/cmpsc-302-week-4-basic-javascript-solution/{page}")
  driver.get(f"{endpoint}{page}")

  ids = ["points", "start"]

  elements = driver.find_elements(by=By.CSS_SELECTOR, value="button")
  elements += driver.find_elements(by=By.CSS_SELECTOR, value="div")

  discovered = {}
  for id in ids:
    for element in elements:
      id_attr = element.get_attribute("id")
      if id in id_attr:
        discovered[id] = element

  sleep(2)

  discovered["start"].click()
  if not discovered["points"].text.lower() == "points: 0": exit(1)

  sleep(2)

  try:
    if not len(driver.execute_script("""return gamePattern""")) > 0: exit(1)
  except:
    if not len(driver.execute_script("""return simonSays""")) > 0: exit(1)

  print("SUCCESS!")

if __name__ == "__main__":
  main()
