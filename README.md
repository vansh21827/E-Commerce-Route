# 🛒 RouteCart – Modern React E-Commerce Platform

RouteCart is a modern and responsive **React-based E-Commerce Single Page Application (SPA)** built with **React, Vite, React Router DOM, and Context API**. The application enables users to browse products, explore detailed product information, manage a persistent shopping cart, and complete a protected checkout flow without page reloads. Product data is fetched from the **DummyJSON REST API**, while cart and authentication states are managed globally using **Context API** with **localStorage persistence**. The project follows a scalable folder structure, reusable components, and modern React development practices, making it an excellent demonstration of client-side routing, state management, and responsive UI design.

# Live Demo

🔗 **Live Website:**  
https://e-commerce-route-ci19-gamma.vercel.app/

# 📸 Preview

### Home Page
<img width="1121" height="903" alt="image" src="https://github.com/user-attachments/assets/d4c0111d-7f8a-4dc2-a7e0-47fa366c5744" />

### Shop Page
<img width="930" height="917" alt="image" src="https://github.com/user-attachments/assets/4e39d1c7-a3ed-4b28-9a81-a8522254b7b4" />

### Product Details
<img width="932" height="907" alt="image" src="https://github.com/user-attachments/assets/e7be5bed-c308-4072-8116-46f365eaa5ac" />

### Shopping Cart
<img width="928" height="917" alt="image" src="https://github.com/user-attachments/assets/4de5df08-bcc4-434f-8c77-2a6083e0df9b" />

### Checkout
<img width="912" height="885" alt="image" src="https://github.com/user-attachments/assets/70e75ded-6344-4af3-a52c-d3a747486fd4" />

# ✨ Features

## 🏠 Home

- Modern responsive landing page
- Hero section with call-to-action
- Featured products section
- Responsive layout

## 🛍️ Shop

- Product listing from DummyJSON API
- Responsive product grid
- Product search
- Product sorting
- Dynamic routing

## 📦 Product Details

- Dynamic product pages
- Product image
- Brand
- Rating
- Stock information
- Description
- Add to Cart functionality

## 🛒 Shopping Cart

- Global cart using Context API
- Increase/decrease quantity
- Remove products
- Order summary
- Dynamic cart badge
- Persistent cart using localStorage

## 🔐 Authentication

- Guest Login
- Context API based authentication
- Protected Checkout Route
- Automatic redirect for unauthorized users

## 📱 User Experience

- Single Page Application
- Responsive Design
- Persistent Navbar
- Modern UI
- Reusable Components

# 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3

### Routing

- React Router DOM

### State Management

- Context API
- React Hooks

### API

- DummyJSON REST API

### Storage

- LocalStorage

# 📁 Project Structure

```text
route-cart/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   │
│   ├── hooks/
│   │   └── useProducts.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Cart.jsx
│   │   ├── Login.jsx
│   │   ├── Checkout.jsx
│   │   └── NotFound.jsx
│   │
│   ├── services/
│   │   └── productService.js
│   │
│   ├── styles/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```
Commit This Line in index.html
<script type="module" src="/src/main.jsx"></script>

# 🔄 Application Workflow

```text
Home
   │
   ▼
Shop
   │
   ▼
Product Details
   │
   ▼
Add To Cart
   │
   ▼
Cart
   │
   ▼
Login (If Required)
   │
   ▼
Checkout
```

---

# ⚙️ Installation

## Clone the repository

```bash
git clone https://github.com/your-username/route-cart.git
```

## Navigate to project folder

```bash
cd route-cart
```

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npm run dev
```

## Build for production

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

---

# 🌐 API Endpoints

### Get All Products

```http
GET https://dummyjson.com/products
```

### Get Product By ID

```http
GET https://dummyjson.com/products/:id
```

---

# 📚 React Concepts Used

- Functional Components
- Component Reusability
- React Hooks
- useState
- useEffect
- useContext
- Custom Hooks
- Context API
- BrowserRouter
- Routes
- Route
- useNavigate
- useParams
- Protected Routes
- Dynamic Routing
- Conditional Rendering
- Local Storage
- SPA Architecture

---

# 🎯 Key Functionalities

- Browse Products
- View Product Details
- Search Products
- Sort Products
- Global Shopping Cart
- Cart Persistence
- Guest Authentication
- Protected Checkout
- Responsive Layout
- Dynamic Routing
- Context API State Management

---

# 📈 Future Enhancements

- ❤️ Wishlist
- 📂 Category Filters
- 🎨 Dark Mode
- 🔔 Toast Notifications
- 💳 Payment Gateway Integration
- 📦 Order Confirmation Page
- 👤 User Profile
- 📜 Order History
- ⭐ Product Reviews
- ♾️ Infinite Scrolling

---

# 🎓 Learning Outcomes

This project demonstrates practical implementation of:

- Modern React Development
- Client-side Routing
- REST API Integration
- Context API State Management
- Protected Routes
- Local Storage Persistence
- Responsive Web Design
- Component-Based Architecture
- Single Page Applications (SPA)
- Clean Folder Structure

---

# 👨‍💻 Author

**Vansh Bansal**

---

# 📄 License

This project is developed for educational, learning, and portfolio purposes.

---

⭐ If you found this project helpful, consider giving it a **Star** on GitHub!
