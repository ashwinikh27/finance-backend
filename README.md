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
- Organize transactions by category

### 📊 Dashboard Analytics
- Total income and expenses
- Net balance calculation
- Category-wise breakdown
- Monthly trends

### 🔐 Role-Based Access Control (RBAC)
- **Admin** → Full access (create, read, update, delete)
- **Analyst** → Can view records and analytics
- **Viewer** → Restricted access (no modifications allowed)

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

### 💸 Records

* **POST** `/api/records` → Create a record (**Admin only**)
* **GET** `/api/records` → Fetch records (**Admin, Analyst**)

### 📊 Dashboard

* **GET** `/api/dashboard/summary` → Income, expense, and balance
* **GET** `/api/dashboard/categories` → Category-wise totals
* **GET** `/api/dashboard/trends` → Monthly trends

---

## 🔑 Role-Based Access

Pass the user role in request headers:

```
role: admin
role: analyst
role: viewer
```

---

## ⚠️ Assumptions

* Authentication is simulated using request headers
* Role-based access is handled using middleware
* MongoDB Atlas is used for data storage

---

## ❗ Error Handling

* Validates required fields (amount, type, category)
* Prevents duplicate user emails
* Returns appropriate HTTP status codes

---

## 👩‍💻 Author

Ashwini Hegde

```
