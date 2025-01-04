# HoxDEX

![Next.js](https://img.shields.io/badge/Next.js-14.0-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green)
![Redis](https://img.shields.io/badge/Redis-7.0-red)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-purple)
![License](https://img.shields.io/badge/License-MIT-yellow)

This is a clone of HoxDEX, a **cryptocurrency exchange platform** built with **Next.js**, **MongoDB**, and **Redis**. It allows users to manage their virtual wallets, simulate depositing/withdrawing funds, and view real-time cryptocurrency data with caching for improved performance.

---

## Features

- **User Authentication**:
  - Secure login and registration using **NextAuth.js**.
  - Protected routes for authenticated users.

- **Wallet Management**:
  - Deposit and withdraw funds for various cryptocurrencies.
  - Real-time balance updates stored in **MongoDB**.

- **Cryptocurrency Data**:
  - Fetch real-time cryptocurrency prices and market data.
  - Caching using **Redis** for improved performance.

- **Responsive Design**:
  - Built with **Tailwind CSS** for a modern and responsive UI.
  - Mobile-friendly layout with a collapsible sidebar.

- **Progress Bar**:
  - Smooth page transitions with a progress bar using `react-transition-progress`.

---

## Technologies Used

- **Frontend**:
  - Next.js 14
  - Tailwind CSS
  - React Transition Progress

- **Backend**:
  - Next.js API Routes
  - MongoDB (for user and wallet data)
  - Redis (for caching cryptocurrency data)

- **Authentication**:
  - NextAuth.js

- **State Management**:
  - React Context API

---

## Installation

### Prerequisites

- Node.js 18+
- MongoDB (local or cloud instance)
- Redis (local or cloud instance)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AmrMohamed27/HoxDEX.git
   cd HoxDEX
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Set Up Environment Variables**:
   Create a .env file in the root directory and add the following variables:
   ```env
   MONGODB_URI=
   NEXTAUTH_URL=
   NEXTAUTH_SECRET=
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   COINGEKKO_API_KEY=
   COINGEKKO_BASE_URL=
   COINGEKKO_AUTH=
   REDIS_URL=
   REDIS_PORT=
   REDIS_PASSWORD=
   ```
5. **Run the application**:
   ```bash
   npm run dev
   ```

### Usage

#### Authentication
  - Register a new account or log in using the /signin page.
  - Protected routes (e.g., /wallets) require authentication.

#### Wallet Management
  - Deposit funds into your wallet for supported cryptocurrencies.
  - Withdraw funds from your wallet.

#### Cryptocurrency Data
  - View real-time cryptocurrency prices and market data.

#### Responsive Design
  - Use the collapsible sidebar for navigation on desktop and mobile.



### Project Structure
```bash
HoxDEX/
├── app/
│   ├── (auth)/              # Authentication pages
│   ├── api/                 # API routes
│   ├── components/          # Reusable components
│   ├── context/             # React context providers
│   ├── lib/                 # Utility functions and configurations
│   ├── models/              # MongoDB models
│   ├── pages/               # Application pages
│   ├── providers.tsx        # Theme and context providers
│   ├── layout.tsx           # Root layout
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind CSS configuration
├── package.json             # Project dependencies
├── README.md                # Project documentation
```
   
