<div align="center">
<h1 align="center">Django Caprover Deployment Template</h1>
<h3 align="center">Sample Deployment of django project in Caprover</h3>
</div>
<p align="center">
<a href="https://www.python.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a>
<a href="https://www.docker.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a>
<a href="https://www.postgresql.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a>
<a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a>
</p>

# Guideline
- [Guideline](#guideline)
- [Caprover](#caprover)
- [how to install Caprover on linux](#how-to-install-caprover-on-linux)
  - [Install Docker](#install-docker)
  - [Install Caprover](#install-caprover)
    - [allow necessary ports for caprover](#allow-necessary-ports-for-caprover)
    - [install caprover on docker](#install-caprover-on-docker)
    - [connect your domain to the server](#connect-your-domain-to-the-server)
    - [install Caprover CLI](#install-caprover-cli)
- [Setup PostgresDB App](#setup-postgresdb-app)
  - [create the app](#create-the-app)
  - [configurations](#configurations)
- [Setup Django Application](#setup-django-application)
  - [Setup Environments](#setup-environments)
  - [Create the Directories in nginx-shared](#create-the-directories-in-nginx-shared)
  - [Setup Nginx to support Media](#setup-nginx-to-support-media)
  - [Setup Persistent Data](#setup-persistent-data)


# Caprover

CapRover is an extremely easy to use app/database deployment & web server manager for your NodeJS, Python, PHP, ASP.NET, Ruby, MySQL, MongoDB, Postgres, WordPress (and etc...) applications!

for more information, visit in here:
- https://github.com/caprover/caprover


# how to install Caprover on linux

## Install Docker
you can install docker from the script which is in commands directory.

## Install Caprover

### allow necessary ports for caprover
```bash
ufw allow 80,443,3000,996,7946,4789,2377/tcp; ufw allow 7946,4789,2377/udp;
```

### install caprover on docker
```
docker run -p 80:80 -p 443:443 -p 3000:3000 -e ACCEPTED_TERMS=true -v /var/run/docker.sock:/var/run/docker.sock -v /captain:/captain caprover/caprover

```

output:
```
Installation of CapRover is starting...
For troubleshooting, please see: https://caprover.com/docs/troubleshooting.html

 >>> Checking System Compatibility <<<
   Docker Version passed.
   Ubuntu detected.
   X86 CPU detected.
   Total RAM 4001 MB
Pulling: nginx:1.24
Pulling: caprover/caprover-placeholder-app:latest
Pulling: caprover/certbot-sleeping:v1.6.0
February 4th 2024, 8:24:05.175 pm    Fresh installation!
February 4th 2024, 8:24:05.179 pm    Starting swarm at 95.216.163.102:2377
Swarm started: neh4dln36f7cocfctjq4miay7
*** CapRover is initializing ***
Please wait at least 60 seconds before trying to access CapRover.
```

### connect your domain to the server
if you want to have full potential of caprover please do connect a domain to it, so you can use ssl and other features.

TYPE: A record
HOST: *.something
POINTS TO: (IP Address of your server)
TTL: (doesn't really matter)

### install Caprover CLI
install node
```
sudo apt install nodejs npm
```

install caprover cli
```bash
npm install -g caprover
```
use the command to setup server

```bash
caprover serversetup
```
after hitting it it will ask some questions:
```bash
root@nettimuutto:~# caprover serversetup


Setup CapRover machine on your server...

? have you already started CapRover container on your server? Yes
? IP address of your server: xxx.xxx.xxx.xxx
? CapRover server root domain: domain.com
? new CapRover password (min 8 characters): [hidden]
? enter new CapRover password again: [hidden]
? "valid" email address to get certificate and enable HTTPS: info@domain.com
? CapRover machine name, with whom the login credentials are stored locally: cap

CapRover server setup completed: it is available as cap at https://captain.domain.com

For more details and docs see CapRover.com

```

# Setup PostgresDB App

## create the app
in order to create a postgresdb app you can head to one click app section and search for postgres and click on it. then you will be asked to enter following datas:
```
App Name : anything you want to name but will be used as domain name for app or internal service
Version : the image version of docker which you need to be installed
Username : obviously the username of default database
Password : obviously the password of default database
Default Database : obviously the password of default database
Optional Arguments: what ever you deem necessary to have
```
## configurations

for your django application to work you need to have these parameters:

```
PGDB_ENGINE=django.db.backends.postgresql
PGDB_NAME=DATABASE_NAME
PGDB_USER=USERNAME
PGDB_PASS=PASSWORD
PGDB_HOST=srv-captain-YOUR_APP_NAME
PGDB_PORT=5432
```
all the parameters can be found in the application configuration pages like HTTP Settings will give you the application internal host name and App Configs section will give you the variables for connecting to database.


# Setup Django Application
in the Apps page first enter the name of the application and then check Has Persistent Data in order to support uploading files and using disk in django app.




## Setup Environments



## Create the Directories in nginx-shared

## Setup Nginx to support Media
```
location /media/ {
    alias /nginx-shared/APPLICATION_NAME/media/;
   }

```

## Setup Persistent Data

```
/captain/data/nginx-shared/APPLICATION_NAME/media
```