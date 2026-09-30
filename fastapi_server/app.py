from fastapi import FastAPI
from pydantic import BaseModel
class Student(BaseModel):
    name:str
    email:str
    age:int
    mark:float

app = FastAPI()
#localhost:8000/getStudents
@app.get("/getStudents")
def getStudents():
    return "get students api called"
@app.post("/register")
def register(stu:Student):
    return stu
@app.put("/updateprofile")
def updateprofile():
    return "update profile called"

@app.delete("/deleteprofile")
def deleteprofile():
    return "delete profile called"
@app.get("/getStudentDet/{userid}")
def getStudentDet(userid:int):
    return{"user_id":userid}
@app.get("/getstudentsdetails")
def getstudentsdetails(page:int=1,limit:int=10):
    return {"page":page,"limit":limit}