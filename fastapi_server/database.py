from pymongo import MongoClient
import os
from dotenv import load_dotenv
load_dotenv()
client = MongoClient (os.getenv("MONGO_URL"))
# create database in mongodb
db = client["vignan"]
student_collection = db["student"]
staff_collection = db["staff"]