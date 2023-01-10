import pymongo
from requests_html import HTMLSession
from bs4 import BeautifulSoup


# created connection with mongoDB.............

client = pymongo.MongoClient("mongodb://localhost:27017/")

db = client["deals"]
collection = db["amazonDeals"]

# -----------------------------------------------------

baseUrl = "https://www.amazon.in"
url = "https://www.amazon.in/deal/00a3faef"

s = HTMLSession()

def getLinks(url, baseUrl):

    r = s.get(url=url)
    soup = BeautifulSoup(r.text, "html.parser")

    results = [(baseUrl + link.attrs['href']) for link in soup.select("#octopus-dlp-asin-stream ul li a")]

    productLinks = []
    [productLinks.append(link) for link in results if link not in productLinks]

    for link in productLinks:
        x = link.startswith('https://www.amazon.in/gp/help/')
        if x is True:
            productLinks.remove(link)


    return productLinks


def getData(links):
    for link in links:

        title= ""
        price = ""
        productData = {}

        r = s.get(link)
        soup = BeautifulSoup(r.text, "html.parser")

        titleResult = soup.find('h1', id= "title")
        priceResult = soup.find('span', class_="apexPriceToPay")

        if titleResult and priceResult:

            title = titleResult.get_text()
            productData["title"] = title.strip()

            price = priceResult.get_text()
            productData["price"] = price.strip()

        if productData:
            deals.append(productData)



links = getLinks(url, baseUrl)

deals = []
getData(links)
print(deals)
print(len(deals))

collection.insert_many(deals)