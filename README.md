# 🛒 RouteCart – Modern React E-Commerce Platform

RouteCart is a modern and responsive **React-based E-Commerce Single Page Application (SPA)** built with **React, Vite, React Router DOM, and Context API**. The application enables users to browse products, explore detailed product information, manage a persistent shopping cart, and complete a protected checkout flow without page reloads. Product data is fetched from the **DummyJSON REST API**, while cart and authentication states are managed globally using **Context API** with **localStorage persistence**. The project follows a scalable folder structure, reusable components, and modern React development practices, making it an excellent demonstration of client-side routing, state management, and responsive UI design.

# Live Demo

🔗 **Live Website:**  
> Add your Vercel deployment URL here

Example:

```text
https://routecart.vercel.app
```

---

## 📂 GitHub Repository

🔗 **Repository:**  
> Add your GitHub repository URL here

Example:

```text
https://github.com/your-username/route-cart
```

---

# 📸 Preview

> Add screenshots of your application here.

### Home Page

![Home](screenshots/home.png)

### Shop Page

![Shop](screenshots/shop.png)

### Product Details

![Product](screenshots/product-details.png)

### Shopping Cart

![Cart](screenshots/cart.png)

### Checkout

![Checkout](screenshots/checkout.png)

---

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

---

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

---

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

---

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

# 🧪 Sprint Deliverables Covered

✅ Static Routing

✅ Dynamic Routing with `useParams()`

✅ Product Detail Fetching

✅ Global Cart using Context API

✅ Persistent Navbar

✅ Dynamic Cart Badge

✅ Add to Cart Functionality

✅ LocalStorage Persistence

✅ Guest Login

✅ Protected Checkout Route

---

# 👨‍💻 Author

**Vansh Saxena**

- GitHub: https://github.com/your-username
- LinkedIn: https://linkedin.com/in/your-profile

---

# 📄 License

This project is developed for educational, learning, and portfolio purposes.

---

⭐ If you found this project helpful, consider giving it a **Star** on GitHub!
