# Task Management Backend

This project is a backend for a task management application. It includes user authentication, task management, and database connectivity.

## Project Structure

- `server.js`: Entry point of the application.
- `routes/`: Contains route definitions for users and tasks.
- `models/`: Contains Mongoose models for User and Task.
- `middleware/`: Contains middleware for authentication.
- `controllers/`: Contains controllers for handling user and task operations.
- `config/`: Contains database configuration.
- `.env`: Environment variables for the application.

## Models

### User

- `name`: String, required
- `email`: String, required, unique
- `password`: String, required

### Task

- `title`: String, required
- `description`: String
- `dueDate`: Date
- `priority`: String, enum ["Low", "Medium", "High"], default "Medium"
- `completed`: Boolean, default false
- `user`: ObjectId, reference to User

## Middleware

### Auth Middleware

- Protects routes by verifying JWT tokens.

## Configuration

### Database

- MongoDB connection using Mongoose.

### Environment Variables

- `PORT`: Port number for the server.
- `MONGO_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key for JWT.

## Routes

### User Routes

- `POST /api/users/register`: Register a new user.
- `POST /api/users/login`: Login a user.
- `GET /api/users/profile`: Get user profile (protected).

### Task Routes

- `POST /api/tasks`: Create a new task (protected).
- `GET /api/tasks`: Get all tasks for the logged-in user (protected).
- `PUT /api/tasks/:id`: Update a task by ID (protected).
- `DELETE /api/tasks/:id`: Delete a task by ID (protected).
- `PUT /api/tasks/:id/complete`: Mark a task as completed by ID (protected).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task_management.git
   ```

2. Navigate to the backend directory:
   ```bash
   cd task_management/backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   Create a `.env` file in the backend directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

## Dependencies

- `express`: Web framework for Node.js.
- `mongoose`: MongoDB object modeling tool.
- `jsonwebtoken`: For generating and verifying JWT tokens.
- `dotenv`: For loading environment variables from a `.env` file.
- `bcryptjs`: For hashing passwords.
- `cors`: For enabling Cross-Origin Resource Sharing.

## Scripts

- `start`: Starts the server.

## License

This project is licensed under the MIT License.