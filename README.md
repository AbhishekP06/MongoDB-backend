# MongoDB-backend

This is a Node.js backend application built with Express.js and MongoDB. It provides RESTful API endpoints to manage data and can be used as a backend for TECH.GEEK applications.

## Features
- Express.js for building the server
- MongoDB for data storage
- Mongoose for MongoDB object modeling
- RESTful API endpoints
- Environment variables for configuration
- CORS support for frontend integration
- Deployed on Vercel

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/MongoDB-backend.git
   ```
2. Navigate to the project folder:
   ```sh
   cd MongoDB-backend
   ```
3. Install dependencies:
   ```sh
   npm install express mongoose cors dotenv
   ```
4. Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=8080
   MONGO_URI=your_mongodb_connection_string
   ```
5. Start the server:
   ```sh
   npm run start
   ```

## API Functionality
The backend handles requests to `GET /api/pioneers` or `GET /api/pioneers/:name`, fetches data from MongoDB using the Pioneer model, and returns that data as a JSON response.

## Testing
You can test the API with the following request:
```
GET http://localhost:8080/api/pioneers
```

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- CORS

---

Made with ❤️ by Abhishek