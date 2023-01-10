from requests_html import HTMLSession
from bs4 import BeautifulSoup
import requests
import json
import random


apiURL = "https://www.ebay.com/globaldeals"

s = HTMLSession()

def getLinks(url):

    r = s.get(url=url)
    soup = BeautifulSoup(r.text, "html.parser")

    results = [link.attrs['href'] for link in soup.select("#mainContent div.ebayui-refit-main-wrapper div.sections-container div.ebayui-dne-item-pattern-card div.row div.col div.item div.dne-itemtile a") ]

    links = []
    [links.append(link) for link in results if link not in links]
    return links


def getData(links):

    productData = {}

    for link in links:

        name= ""
        price = ""
        image = ""

        r = s.get(link)
        soup = BeautifulSoup(r.text, "html.parser")

        titleResult = soup.find('div', class_="x-item-title")
        priceResult = soup.find('span', id= "prcIsum")
        imageResult = soup.find('img', id="icImg" )

        if titleResult and priceResult and imageResult:

            name = titleResult.get_text()
            productData["name"] = name.strip()

            price = priceResult.get_text()
            productData["price"] = price.strip()

            image = imageResult.get('src')
            productData["image"] = image

            productData["totalRating"] = random.randint(3,5)

            productData["degree"] = random.randint(300,700)

        if productData:
            deals.append(productData)
            print(productData)

            url = 'http://127.0.0.1:8000/api/'
            headers = {'content-Type': 'application/json'}

            json_data=json.dumps(productData)
            r=requests.post(url=url, headers=headers, data=json_data)
            data=r.json()

            print(data)
            print('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')



links = getLinks(apiURL)

deals = []
getData(links)
print('*************************************************************')
print("total deals added : ",len(deals))
print('*************************************************************')