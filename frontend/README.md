# Task Management Application

This is a task management application designed to help you manage your tasks and projects efficiently. The application allows you to add projects, manage tasks, and filter tasks based on various criteria.

## Features

- **Home Page**: Introduction to the application with navigation to the task list.
- **Add Project Page**: Add new projects with details like project name, description, start date, end date, priority, and tags.
- **Task List Page**: View and manage tasks with options to filter, search, and sort tasks.
- **Task Card**: Display individual tasks with options to change status and delete tasks.
- **Header**: Display the header with navigation options.
- **Date Selector**: Select dates to filter tasks.
- **Bottom Navigation**: Navigate between different pages of the application.
- **Login Page**: Allows users to log in to their account.
- **Register Page**: Allows users to create a new account.
- **User Protected Wrapper**: Ensures that only authenticated users can access certain routes.

## New Components and Features

### BottomNavigation Component
The `BottomNavigation` component provides a fixed navigation bar at the bottom of the screen with buttons to navigate to the Home, Add Project, and Task List pages.

LoginPage 
The LoginPage allows users to log in to their account. It includes a form for entering email and password, and handles authentication by checking the credentials against stored user data.

### RegisterPage
The RegisterPage allows users to create a new account. It includes a form for entering name, email, and password, and stores the new user data in local storage.

### UserProtectedWrapper Component
The UserProtectedWrapper component ensures that only authenticated users can access certain routes. If a user is not logged in, they are redirected to the login page.

## Usage
- **Home Page**: Click on "Let's Start" to navigate to the task list page.
- **Add Project Page**: Fill in the project details and click "Add Project" to add a new project.
- **Task List Page**: Use the search bar, filter options, and sort dropdown to manage tasks. Click on the "+" button in the bottom navigation to add a new project.
- **Login Page**: Enter your email and password to log in.
- **Register Page**: Enter your name, email, and password to create a new account.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License.