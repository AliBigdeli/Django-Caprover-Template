FROM python:3.11-slim-buster

LABEL maintainer="bigdeli.ali3@gmail.com"

ENV PYTHONUNBUFFERED=1

WORKDIR /usr/src/app

COPY requirements.txt .

RUN pip install --upgrade pip -i https://mirror-pypi.runflare.com/simple \
    && pip install -r requirements.txt -i https://mirror-pypi.runflare.com/simple 

COPY ./core .

#create a non root user to access the container 
RUN adduser -u 5678 --disabled-password --gecos "" vscode