# AffWorldAssignment
Project created as part of Affworld Job Application

# Full Stack Task Management and Feed Web Application  

## Project Description  
This project is a full-stack web application developed using the **MERN** stack (MongoDB, Express.js, React.js, and Node.js). It provides users with the ability to:  
1. Register and log in to their accounts securely.  
2. Manage tasks with a drag-and-drop interface for task statuses.  
3. Create posts with captions and images that are displayed in a public feed.  

The application is designed to demonstrate key features like user authentication, CRUD operations, state management, and third-party integrations.  

---

## Features Implemented  
### 1. **Authentication**  
- User Registration (Name, Email, Password).  
- Login functionality with JWT-based token authentication.  
- Password hashing for secure storage using **bcryptjs**.  

### 2. **Task Management System**  
- Create tasks with a name and description.  
- Drag and drop tasks between statuses (Pending, Completed, Done).  
- Delete tasks with confirmation prompts.  

### 3. **Feed Section**  
- Post content with captions and images.  
- Store and retrieve images using **Cloudinary**.  
- Display a feed with all user posts.  

### 4. **UI/UX Design**  
- Responsive design with a clear layout for task columns and the feed section.  
- Intuitive forms for authentication and content creation.  

### 5. **Code Quality and Best Practices**  
- Modular and reusable code structure.  
- Clean, commented, and optimized code.  
- State management using **Redux Toolkit**.  

---

## Steps to Run the Project  

### Prerequisites  
- Install **Node.js** and **npm**.  
- Install **MongoDB** or use a cloud MongoDB service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).  
- Create a **Cloudinary account** for image storage and note your credentials.  

### Backend Setup  
1. Navigate to the backend directory:  
   ```bash  
   cd backend  
   ```  
2. Install dependencies:  
   ```bash  
   npm install  
   ```  
3. Create a `.env` file in the backend directory with the following variables:  
   ```env  
   MONGO_URI=<your_mongo_connection_string>  
   JWT_SECRET=<your_jwt_secret>  
   CLOUDINARY_NAME=<your_cloudinary_name>  
   CLOUDINARY_API_KEY=<your_cloudinary_api_key>  
   CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>  
   NODE_ENV=development  
   ```  
4. Start the backend server:  
   ```bash  
   npm run dev  
   ```  

### Frontend Setup  
1. Navigate to the frontend directory:  
   ```bash  
   cd frontend  
   ```  
2. Install dependencies:  
   ```bash  
   npm install  
   ```  
3. Update the API base URL in `/src/api/axiosInstance.js` if needed (e.g., for production deployment).  
4. Start the frontend development server:  
   ```bash  
   npm start  
   ```  

---

## Deployment Steps  
1. Create a production build for the frontend:  
   ```bash  
   cd frontend  
   npm run build  
   ```  
2. Serve the build folder using the backend or deploy it separately using **Netlify** or **Vercel**.  
3. Deploy the backend using **Heroku**, **Render**, or any preferred platform.  

---

## Technologies Used  
- **Frontend**: React.js, Redux Toolkit, Axios  
- **Backend**: Node.js, Express.js, MongoDB, Cloudinary  
- **Styling**: CSS  

