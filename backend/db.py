from typing import Collection
import pymongo
#

# creating connection with mongoDB.............

client = pymongo.MongoClient("mongodb://localhost:27017/")
print("connection successful!!!", client)

db = client["ebay"]
collection = db["ebayDeals"]


collection.insert_many()


