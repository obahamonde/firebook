from fastapi import FastAPI
from api.auth import auth

def main()->FastAPI:
    app = FastAPI()
    app.include_router(auth, prefix='/')
    return app
