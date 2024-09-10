# MERN Fullstack Authentication App

## Overview

This project is a fullstack MERN application that demonstrates user authentication using JWT and Google Sign-In. It includes a home page with a Sign In button, a sign-in page with email and Google authentication, and a page displaying mock course data.

## Features

- Home Page: Contains a Sign In button that redirects to the sign-in page.
- Sign In Page: Allows users to sign in with email and password or Google account. Displays an error message if the email is already in the database.
- Authenticated Page: Displays a list of mock courses after successful sign-in.
- **Persistent Authentication**: Remains logged in even after the window is restarted.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JWT, Google OAuth

## Installation

1. Clone the Repository

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```

2. Navigate to the Project Directory**

   ```bash
   cd your-repo-name
   ```

3. Install Dependencies

   - Backend:

     ```bash
     cd backend
     npm install
     ```

   - Frontend:**

     ```bash
     cd ../frontend
     npm install
     ```

4. set Up Environment Variables**

   Create a `.env` file in the `backend` directory and add the following environment variables:

   ```env
   MONGODB_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

5. Run the Application**

   - Backend:

     ```bash
     cd backend
     npm start
     ```

   - Frontend:

     ```bash
     cd ../frontend
     npm start
     ```

6. Access the Application**

   Open your browser and navigate to `http://localhost:3000` for the frontend. The backend API will be accessible at `http://localhost:5000`.

## Usage

- Home Page: Click on the Sign In button to be redirected to the Sign In page.
- Sign In Page**: 
  - Enter your email and password to sign in.
  - Use Google Sign-In for authentication.
  - If the email already exists, an error message will be displayed.
- **Authenticated Page**: After successful sign-in, view the list of mock courses.

## Testing

Run tests for both frontend and backend using the following commands:

- Backend:

  ```bash
  cd backend
  npm test
  ```

- Frontend:

  ```bash
  cd frontend
  npm test
  ```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

