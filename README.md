# Frontend setup

Task management assignment setup

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it [here](https://nodejs.org/).

### Project Setup

1. Clone this repository:

    ```
    git clone https://github.com/supekarsuraj/Resotech_Solution_Assignment.git
    ```

2. Navigate to the project directory:

    ```
    cd frontend
    ```

3. Install dependencies:

    ```
    npm install
    ```

## Usage

### Development Server

To start the development server:

```bash
npm run dev
```

## Backend Setup 
Open your terminal (cmd, powershell, git bash)
Clone this repository by :
```
git clone https://github.com/supekarsuraj/ChainTech-Network.git
```
Enter to the repository folder :
```
cd ChainTech-Network
cd backend
```
Install all required dependencies using npm or you can also use` yarn`:
```
npm install or yarn install
```
## Setup Database
1. *Create a database* with a name of your choice in postgres.
```
mysql=# CREATE DATABASE db_name;
```
2. *Import SQL file*, you will find sql schema files in our cloned folder "ChainTech-Network/backend/schema" . Import those files or run those files in your mysql workbench.

3. *Setup .env file* according to your local settings. Add .env file in ChainTech-Network/backend folder.
```
PORT = 8081 // choose the port for server to run
DB_USER = "root" //your MySQL username
DB_HOST = "localhost" 
DB_DATABASE = "task_manangement" //the db_name you choose in 1st step
DB_PASSWORD = "root123" //password of your MySQL database
   ```
## How to use 
Now it's time to use API endpoints.
1. start node.js server
```
npm start
```

Thank you
