# AI Chatbot Application 🤖💬

## Overview 🌟
This project is an AI-powered chatbot application that integrates with the Gemini AI model, ImageKit for image management, and Clerk for user authentication. The app allows users to interact with the chatbot, upload images, and receive real-time responses based on the conversation history. 

The backend is built using Node.js, Express, and MongoDB, while the frontend is built with React.js and integrates with the API for communication with the AI model.

---

## Features ✨
- Real-time AI responses powered by the Gemini AI model. 🤖
- User authentication with Clerk. 🔒
- Image upload and transformation via ImageKit. 🖼️
- MongoDB database integration to store chat history and user data. 🗃️
- Seamless interaction between frontend and backend. 🔗
- Support for rich media responses including text and images. 📷

---

## Tech Stack 🛠️
- **Frontend**: React.js, Vite, Clerk (authentication), Markdown (rendering chat text)
- **Backend**: Node.js, Express, MongoDB, ImageKit (image handling), Gemini (AI model integration)
- **Database**: MongoDB 🗄️
- **Authentication**: Clerk 🔑
- **Image Storage & Transformation**: ImageKit 🖼️

---

## Environment Variables 🔑

### Backend (`.env`)

```env
PORT=5000
IMAGE_KIT_ENDPOINT=
IMAGE_KIT_PUBLIC_KEY=
IMAGE_KIT_PRIVATE_KEY=
CLIENT_URL=http://localhost:5173
MONGODB_URI=mongodb+srv://<your_mongo_uri>
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

### Frontend (`.env`)

```env
VITE_CLERK_PUBLISHABLE_KEY=
VITE_IMAGE_KIT_ENDPOINT=
VITE_IMAGE_KIT_PUBLIC_KEY=
VITE_GEMINI_PUBLIC_KEY=
VITE_API_URL=http://localhost:5000


