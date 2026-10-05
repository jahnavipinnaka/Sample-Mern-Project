from fastapi import APIRouter
from models import Student
from database import student_collection
from bson import ObjectId
# convert mongodb doc into json format
def student_details(Student):
    return{
        "id":str(Student["_id"]),
        "name":Student["name"],
        "email":Student["email"],
        "age":Student["age"],
        "mark":Student["mark"]
    }
student_router = APIRouter(prefix="/student", tags=["student"])
# localhost:8000/student/getStudents
@student_router.get("/getStudents")
def getStudents():
    students = student_collection.find()
    return [student_details(student)for student in students]
# localhost:8000/student/addstudent
@student_router.post("/register")
def register(stu:Student):
    result = student_collection.insert_one(stu.model_dump())
    # model dump used to convert object data to json data
    return {"message":"data inserted success"}

@student_router.get("/getParticularstudent/{stuid}")
def getParticularstudent(stuid:str):
    student = student_collection.find_one({"_id":ObjectId(stuid)})
    return student_details(student)
@student_router.delete("/deletestudent/{stuid}")
def deletestudent(stuid:str):
    result = student_collection.delete_one({"_id":ObjectId(stuid)})
    return "student delete success"
@student_router.put("/updatestudent/{stuid}")
def updatestudent(stuid:str,stu:Student):
    result=student_collection.update_one(
        {"_id":ObjectId(stuid)},
        {"$set":stu.model_dump()}
    )
    return "student updated success"