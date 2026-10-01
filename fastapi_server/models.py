from pydantic import BaseModel
class Student(BaseModel):
    name:str
    email:str
    age:int
    mark:float
class Staff(BaseModel):
    name:str
    email:str
    designation:str