from dotenv import load_dotenv
from os import environ
environ.clear()
load_dotenv()

from pydantic import BaseModel

from fastapi import APIRouter, Depends

from fastapi_cloudauth.auth0 import Auth0, Auth0CurrentUser, Auth0Claims
from fastapi_cloudauth.firebase import FirebaseCurrentUser, FirebaseClaims

auth = APIRouter()

get_firebase_user = FirebaseCurrentUser(environ.get('firebase_project_id'))

@auth.get('/{token}')
async def get_user(firebase_user:FirebaseClaims = Depends(get_firebase_user)):
    return firebase_user.json()