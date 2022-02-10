---
sidebar_position: 9
---

# Local Development

This guide will help you to setup and run SAML Jackson in development mode. 

### Clone the repo

```bash
git clone https://github.com/boxyhq/jackson.git

cd jackson
```

### Install dependencies

Run the following command to install the Node dependencies.

```bash
npm install
```

### Setup environment variables

```bash
cp .env.example .env
```

Please refer to [environment variables](env-variables.md) to read on setting environment variables.

### Setup the database

Run the following command to create database instances for the local development. Make sure you have Docker installed on your machine.

```bash
npm run dev-dbs
```

### Start the development server

Start the development server by running the following command.

```bash
npm run dev
```

### Testing Jackson in your local environment

The Jackson service can be accessed locally using the following URL

```
http://localhost:5000
```

You can visit the following URL to see if the Jackson was started successfully!

```
http://localhost:5000/api/hello
```