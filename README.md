# Pomodone Service

## Introduction

Pomodone Service is an API-driven backend service that facilitates the management and retrieval of logs. This service allows users to create, read, and update log entries through a simple API.

## Features

- Log entry creation
- Fetching all log entries
- Fetching specific log entries by ID

## API Endpoints

Here are the API endpoints for the Pomodone Service:

### Log Management

- `GET /logs`: List all log entries
- `GET /logs/:id`: Get a specific log entry by ID
- `POST /logs`: Create a new log entry

## Setup and Installation

Follow these steps to set up and run the project on your local machine for development and testing purposes.

### Requirements

- Node.js (v14.0 or higher)
- npm (v6.0 or higher)

### Installation

1. Clone the repository

- git clone https://github.com/barathrum54/pomodone-service.git

2. Navigate to the project folder

- cd pomodone-service

3. Install the dependencies

- npm install 

4. Start the development server

- npm start


Now, the API service should be running on `http://localhost:3000/`. You can use tools like Postman to test the API endpoints.
