# OneScan

> One QR scan to all social media

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit-blue)](https://one-scan-six.vercel.app)
[![License](https://img.shields.io/badge/License-ISC-green)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-64.9%25-yellow)]()
[![CSS](https://img.shields.io/badge/CSS-34.3%25-blue)]()

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Available Scripts](#available-scripts)
- [API Documentation](#api-documentation)
- [Project Architecture](#project-architecture)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

OneScan is a full-stack web application that allows users to generate QR codes containing links to all their social media profiles in one convenient QR code. Users can customize their profiles and share a single QR code that directs people to a public profile page with all their social media links.

## ✨ Features

- **QR Code Generation**: Create custom QR codes for your social media profiles
- **User Authentication**: Secure user registration and authentication via Clerk
- **Public Profiles**: Share your social media links with a shareable public profile URL
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Updates**: Instantly update your QR code and profile information

## 🛠️ Tech Stack

### Frontend
- **React** (v19.2.7) - UI Framework
- **React Router** (v8.2.0) - Client-side routing
- **Vite** (v8.1.1) - Build tool and dev server
- **Clerk** - Authentication & user management
- **QRCode.React** (v4.2.0) - QR code generation
- **Axios** - HTTP client
- **Lottie** - Animations

### Backend
- **Express.js** (v5.2.1) - Web framework
- **Node.js** - Runtime environment
- **MongoDB/Mongoose** (v9.7.4) - Database
- **Clerk SDK** - User management
- **CORS** - Cross-origin request handling
- **Multer** - File upload handling
- **Morgan** - HTTP request logging

## 📁 Project Structure

```
OneScan/
├── frontend/                          # React frontend application
│   ├── public/                        # Static assets
│   │   ├── favicon.svg                # App favicon
│   │   └── icons.svg                  # Icon sprite sheet
│   ├── src/                           # Source code
│   │   ├── components/                # Reusable React components
│   │   │   └── Protected.jsx          # Route protection wrapper
│   │   ├── features/                  # Feature-based modules
│   │   │   ├── auth/                  # Authentication feature
│   │   │   │   └── pages/
│   │   │   │       ├── Landing.jsx    # Landing page
│   │   │   │       └── Notfound_page.jsx  # 404 page
│   │   │   └── dasboard/              # Dashboard feature
│   │   │       ├── contexts/
│   │   │       │   ├── profile.context.jsx      # User profile context
│   │   │       │   └── publicProfile.context.jsx # Public profile context
│   │   │       └── pages/
│   │   │           ├── DasboardPage.jsx # User dashboard
│   │   │           └── PublicPage.jsx   # Public profile view
│   │   ├── App.jsx                    # Root component
│   │   ├── app.routes.jsx             # Route definitions
│   │   ├── main.jsx                   # React entry point
│   │   └── index.css                  # Global styles
│   ├── index.html                     # HTML template
│   ├── package.json                   # Dependencies and scripts
│   ├── vite.config.js                 # Vite configuration
│   ├── eslint.config.js               # ESLint configuration
│   ├── vercel.json                    # Vercel deployment config
│   └── .gitignore                     # Git ignore rules
├── backend/                           # Express backend application
│   ├── src/                           # Source code
│   │   ├── config/                    # Configuration files
│   │   ├── controllers/               # Route controllers
│   │   ├── middleware/                # Express middleware
│   │   ├── model/                     # Database schemas
│   │   ├── routes/                    # API routes
│   │   │   ├── dasboard.routes.js     # Protected user routes
│   │   │   └── public.routes.js       # Public routes
│   │   ├── utils/                     # Utility functions
│   │   └── app.js                     # Express app setup
│   ├── server.js                      # Server entry point
│   ├── package.json                   # Dependencies and scripts
│   ├── .env                           # Environment variables (gitignored)
│   ├── .env.example                   # Environment template
│   ├── .gitignore                     # Git ignore rules
│   └── node_modules/                  # Dependencies
└── README.md                          # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Clerk account for authentication setup
- MongoDB database

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env.local` file with Clerk configuration:**
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_BACKEND_URL=http://localhost:3000
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   
4. **Update `.env` file with your configuration:**
   ```env
   MONGODB_URI=your_mongodb_connection_string
   CLERK_API_KEY=your_clerk_api_key
   CLIENT_URL=http://localhost:5173
   PORT=3000
   ```

5. **Start development server:**
   ```bash
   npm run dev
   ```
   The API will be available at `http://localhost:3000`

## 📝 Available Scripts

### Frontend Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

### Backend Scripts

```bash
# Development with nodemon (auto-restart)
npm run dev

# Production start
npm start

# Run tests
npm test
```

## 📡 API Documentation

### Base URL
```
http://localhost:3000/v1/api
```

### Authentication Routes

All authenticated routes require Clerk authentication headers.

#### Protected Routes (Dashboard)
```
GET  /profile/me           - Get current user profile
POST /profile/me           - Update user profile
GET  /profile/me/qr        - Get user's QR code
```

#### Public Routes
```
GET  /u/:username          - Get public profile by username
```

### CORS Configuration
- Origin: Configured from `CLIENT_URL` env variable
- Credentials: Enabled
- Methods: GET, POST, PUT, DELETE, OPTIONS

## 🏗️ Project Architecture

### Frontend Architecture

```
Landing Page (/)
    ↓
  Auth (Clerk)
    ↓
Protected Routes
    ├── Dashboard (/dashboard)
    │   └── User Profile Management
    │       └── QR Code Generation & Management
    └── Public Profile (/u/:username)
        └── View User's Social Media Links
```

### Frontend Data Flow

```
App Component
    ├── ProfileProvider (Context)
    │   ├── User Profile Data
    │   └── QR Code State
    ├── RouterProvider
    │   ├── Protected Component (Auth Check)
    │   ├── Dashboard Feature
    │   └── Public Profile Feature
    └── LandieProvider (Context)
        └── Public Profile Data
```

### Backend Architecture

```
Express Server (server.js)
    ↓
App Setup (src/app.js)
    ├── CORS Middleware
    ├── JSON Parser
    ├── Morgan Logger
    ├── Routes
    │   ├── /v1/api/profile/me (Protected - Dashboard)
    │   └── / (Public Routes)
    └── Error Handler
```

### Backend Route Structure

```
/v1/api/profile/me (dasboard.routes.js)
    ├── GET     - Fetch user profile
    ├── POST    - Update user profile
    ├── PUT     - Update specific fields
    └── DELETE  - Delete profile data

/ (public.routes.js)
    └── GET /u/:username - Get public profile
```

## 🔐 Authentication Flow

1. User lands on landing page (/)
2. Clerk authentication widget is presented
3. User signs in/signs up with Clerk
4. Clerk provides authentication token
5. Protected route component checks authentication
6. If authenticated → Dashboard access
7. If not authenticated → Redirected to landing page
8. User data is stored in ProfileProvider context

## 🎨 Component Structure

### Key Components

- **App.jsx** - Root component with ProfileProvider
- **app.routes.jsx** - Route configuration
- **Protected.jsx** - Route guard component
- **LandingPage** - Entry point with authentication
- **DashboardPage** - Main user interface
- **PublicPage** - Public profile display

### Context Providers

- **ProfileProvider** - Manages authenticated user data
- **PublicProfileProvider** - Manages public profile data

## 🚢 Deployment

### Frontend (Vercel)
- Automatically deployed from GitHub
- Configuration in `vercel.json`
- Live at: https://one-scan-six.vercel.app

### Backend
- Ready for deployment on any Node.js hosting (Heroku, Railway, Render, etc.)
- Requires environment variables to be set
- MongoDB Atlas recommended for database

## 🐛 Troubleshooting

### Frontend Issues

**Port already in use:**
```bash
# Change port in vite.config.js or run on different port
npm run dev -- --port 3001
```

**Clerk authentication not working:**
- Verify `VITE_CLERK_PUBLISHABLE_KEY` is set correctly
- Check Clerk dashboard for allowed URLs
- Clear browser cache and local storage

### Backend Issues

**MongoDB connection failed:**
- Check `MONGODB_URI` in `.env`
- Ensure MongoDB Atlas cluster is accessible
- Verify IP whitelist settings

**CORS errors:**
- Verify `CLIENT_URL` matches frontend URL
- Check CORS configuration in `src/app.js`

## 📚 Additional Resources

- [Clerk Documentation](https://clerk.com/docs)
- [React Router Documentation](https://reactrouter.com)
- [Express.js Documentation](https://expressjs.com)
- [MongoDB Mongoose Documentation](https://mongoosejs.com)
- [Vite Documentation](https://vitejs.dev)

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Created by [@mondalpremendu0-sketch](https://github.com/mondalpremendu0-sketch)

---

**Last Updated:** 2026-09-12  
**Repository:** [mondalpremendu0-sketch/OneScan](https://github.com/mondalpremendu0-sketch/OneScan)
