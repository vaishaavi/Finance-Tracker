# Finance Tracker - Full Stack Personal Finance Tracker Application

---

## Project Overview

This is a full-stack Personal Finance Tracker app that enables users to manage income and expenses, track transactions, and view financial analytics via interactive charts.

**Tech Stack:**

- **Frontend:** React 18+ with hooks, context API, lazy loading, and Recharts for charts  
- **Backend:** Node.js + Express.js REST APIs  
- **Database:** MySQL (or PostgreSQL)  
- **Caching:** Redis for optimized API responses  
- **API Documentation:** Swagger/OpenAPI

---

## Features

### User Authentication & Authorization

- User registration and login with JWT-based authentication  
- Role-Based Access Control (RBAC) with roles:  
  - **admin:** Full access, including user & data management  
  - **user:** Can manage their own transactions & analytics  
  - **read-only:** View-only access to their own data  
- Backend middleware to protect routes by roles  
- Frontend conditional UI rendering based on user roles

### Transaction Management

- Add, edit, delete income and expense transactions (admin and user only)  
- Categorize transactions (Food, Transport, Entertainment, etc.)  
- Search and filter transactions  
- Read-only users can only view transactions

### Dashboard & Analytics

- Monthly and yearly spending overview  
- Category-wise expense breakdown  
- Income vs expense trend charts  
- Interactive charts: Pie, Line, Bar  
- Accessible by all users including read-only

### Performance & Security

- Lazy loading components and virtual scrolling for large data  
- Pagination on transaction lists  
- Redis caching for frequently accessed data with cache invalidation  
- Rate limiting for API endpoints to prevent abuse  
- Security against XSS and SQL Injection attacks

---

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher recommended)  
- MySQL or PostgreSQL database  
- Redis server running locally or remotely  
- npm (comes with Node.js)

---

### Backend Setup

1. Navigate to backend folder:

   ```bash
   cd backend
