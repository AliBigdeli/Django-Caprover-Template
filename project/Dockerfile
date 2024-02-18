FROM python:3.10-slim-buster

LABEL maintainer="bigdeli.ali3@gmail.com"

ENV PYTHONUNBUFFERED=1

WORKDIR /usr/src/app

COPY ./requirements.txt .
COPY ./entrypoint.sh .
COPY ./core .
RUN chmod +x ./entrypoint.sh

RUN pip install --upgrade pip && pip install -r requirements.txt 


EXPOSE 8000

# execute our entrypoint.sh file
CMD ["sh","./entrypoint.sh"]