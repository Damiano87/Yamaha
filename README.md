# Yamaha Store 🏍️

A modern e-commerce platform showcasing Yamaha motorcycles and ATV vehicles. The application allows users to browse the product catalog and view detailed information about each vehicle.

## 📋 About the Project

Yamaha Store is an e-commerce application designed to present Yamaha motorcycles and quads. Users can browse the list of available products, and after clicking on a selected model, they are redirected to a dedicated page with detailed vehicle descriptions.

**Note:** This application is for browsing purposes only - it does not handle actual purchase transactions.

## 🚀 Technologies

### Frontend
- **React.js** - library for building user interfaces
- **Tailwind CSS** - utility-first CSS framework
- **ShadCN** - UI components

### Backend
- **Node.js** - JavaScript runtime environment
- **Prisma** - ORM for database management
- **MongoDB** - NoSQL database

## ✨ Features

- 📱 Responsive user interface
- 🏍️ Browse list of Yamaha motorcycles and ATVs
- 🔍 Detailed product pages with full specifications
- 🎨 Modern design based on Tailwind CSS and ShadCN
- 🔎 Search functionality
- 🎛️ Product filtering system
- ⚖️ Model comparison tool
- 🖼️ Image gallery for each product

## 🎯 Running the Application

### Backend
```bash
cd api
npm run dev
```
The backend will start by default at `http://localhost:3500`

### Frontend
```bash
cd client
npm run dev
```
The frontend will start by default at `http://localhost:5173`

## 📁 Project Structure

```
yamaha-store/
├── client/          # React application
│   ├── src/
│   ├── public/
│   └── package.json
├── api/           # Node.js server
│   ├── prisma/
│   ├── src/
│   └── package.json
└── README.md
```
