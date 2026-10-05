from fastapi import APIRouter
from models import Staff
from database import staff_collection
staff_router = APIRouter(prefix="/staff", tags=["staff"])
# localhost:8000/staff/getStaffs
@staff_router.get("/getStaffs")
def getStaffs():
    return "get staff method called"
# localhost:8000/staff/addstaff
@staff_router.post("/addstaf")
def addstaff():
    return "add staff method called"
