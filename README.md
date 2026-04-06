# Finance Data Processing & Access Control Backend

## 📌 Overview
This project is a backend system for a finance dashboard that helps manage users, track financial records, and generate useful insights. It also includes role-based access control to ensure that different users can only perform actions they are allowed to.

---

## 🚀 Features

### 👤 User Management
- Create and manage users
- Assign roles (Admin, Analyst, Viewer)
- Control user status (active/inactive)

### 💸 Financial Records
- Add income and expense entries
- View and filter records
- Update and delete records
- Organize transactions by category

### 📊 Dashboard Analytics
- Total income and expenses
- Net balance calculation
- Category-wise breakdown
- Monthly trends
- Recent activity

### 🔐 Role-Based Access Control (RBAC)
- **Admin** → Full access (create, update, delete)
- **Analyst** → Can view records and analytics
- **Viewer** → Restricted access (no modifications)

---

## 🛠️ Tech Stack
- Node.js  
- Express.js  
- MongoDB (Atlas)  
- Mongoose  

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/ashwinikh27/finance-backend.git
cd finance-backend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the server

```bash
npm run dev
```

---

## 📡 API Endpoints

### 👤 Users

* **POST** `/api/users` → Create a user
* **GET** `/api/users` → Fetch all users
* **POST** `/api/users/login` → Authenticate user and get token

---

### 💸 Records

* **POST** `/api/records` → Create record (**Admin only**)
* **GET** `/api/records` → Fetch records (**Admin, Analyst**)
* **PATCH** `/api/records/:id` → Update record (**Admin only**)
* **DELETE** `/api/records/:id` → Delete record (**Admin only**)

---

### 📊 Dashboard

* **GET** `/api/dashboard/summary` → Income, expense, balance
* **GET** `/api/dashboard/categories` → Category-wise totals
* **GET** `/api/dashboard/trends` → Monthly trends
* **GET** `/api/dashboard/recent` → Recent activity

---

## 🔐 Authentication & Access Control

* JWT-based authentication is implemented
* Users log in and receive a token
* Protected routes require a valid token

---

## 🖥️ Simple Frontend 

A minimal frontend interface is included to interact with the backend APIs.

* User registration and login
* Dashboard to view income, expenses, and balance
* Add and delete financial records
* Token-based authentication using JWT

This UI is built using HTML, Tailwind CSS, and JavaScript to demonstrate end-to-end functionality.

---

## ⚠️ Assumptions

* Each user has their own financial records (user-specific data)
* Role-based access is enforced using middleware
* JWT is used for authentication
* MongoDB Atlas is used for persistence

---

## ❗ Error Handling

* Validates required fields (amount, type, category)
* Prevents duplicate user emails
* Returns appropriate HTTP status codes
