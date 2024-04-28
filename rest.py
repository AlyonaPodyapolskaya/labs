
from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Union

app = FastAPI()

# Добавляем CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Разрешаем запросы с любых доменов (можно заменить на домены вашего приложения)
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # Разрешаем использовать эти HTTP методы
    allow_headers=["*"],  # Разрешаем передавать любые заголовки
)
# Модели данных
class User(BaseModel):
    name: str
    last_name: str
    age: int
    id: int

class User_pwd(User):
    password: str

class Respons(BaseModel):
    message: str

class User_contacts(BaseModel):
    id: int
    user_phone: str
    user_email: str

# Данные
list_of_user = [User_pwd(name='Ivan', last_name='Ivanov', age=20, id=105, password='***********')]
list_of_users_contacts = []

# Создание пароля
def create_pwd(cod: str) -> str:
    return str(reversed(cod))

# Получение пользователя по ID
def find_user(id: int) -> Union[User_pwd, None]:
    for user in list_of_user:
        if user.id == id:
            return user
    return None

# Роуты
@app.get("/api/users/", response_model=Union[List[User_pwd], None])
def get_users():
    return list_of_user

@app.get("/api/users/{id}", response_model=Union[User, Respons])
def get_user(id: int):
    user = find_user(id)
    if user == None:
        return Respons(message="Такого пользователя нет")
    return user

@app.post("/api/users/", response_model=Union[User, Respons])
def create_user(item: User):
    user = User_pwd(name=item.name, last_name=item.last_name, age=item.age, id=item.id, password=create_pwd(item.name))
    list_of_user.append(user)
    return user

@app.post("/api/users/{id}", response_model=Union[User_contacts, Respons])
def add_contacts(id: int, item: User_contacts):
    user = find_user(id)
    if user == None:
        return Respons(message="Такого пользователя нет")
    users_contacts = User_contacts(id=item.id, user_phone=item.user_phone, user_email=item.user_email)
    list_of_users_contacts.append(users_contacts)
    return users_contacts

@app.put("/api/users/", response_model=Union[User, Respons])
def edit_user(item: User):
    user = find_user(item.id)
    if user == None:
        return Respons(message="Такого пользователя нет")
    user.last_name = item.last_name
    user.name = item.name
    user.age = item.age
    return user

@app.delete("/api/users/{id}", response_model=Union[List[User], Respons])
def delete_user(id: int):
    user = find_user(id)
    if user == None:
        return Respons(message="Такого пользователя нет")
    list_of_user.remove(user)
    return list_of_user
