# KaamSetu 🛠️

KaamSetu is a service-provider platform that helps users find and connect with local skilled workers such as plumbers, electricians, carpenters, mechanics, and other service professionals.

## 🚀 Features

* 🏠 Home page with service-provider listings
* 👤 User/service-provider profiles
* ⭐ Ratings and reviews
* 📍 Location and distance information
* 🔧 Services offered by each worker
* 🔐 Login & Register page
* 📱 Responsive design
* 🧭 Navigation using React Router
* 🎨 Modern UI built with Tailwind CSS

## 🛠️ Tech Stack

* **React.js** – Frontend framework
* **Vite** – Development/build tool
* **Tailwind CSS** – Styling
* **React Router** – Page navigation and routing
* **Lucide React** – Icons
* **JavaScript** – Programming language

## 📁 Project Structure

```text
KaamSetu/
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Grid.jsx
│   │   │   └── Login Register.jsx
│   │   │   ├── Hero.jsx
│   │   │   └── UserProfile.jsx
│   │   │   
│   │   ├── data/
│   │   │   └── data.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate to the frontend folder:

```bash
cd KaamSetu/frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will then be available at the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

## 📄 Pages

### Home

Displays available service providers along with:

* Name
* Profile image
* Rating
* Location
* Distance
* Services offered
* Joined date
* Availability
* View Profile button

### User Profile

Each service provider has an individual profile page.

Example:

```text
/profile/1
/profile/2
/profile/3
```

The profile page dynamically displays the information of the selected service provider.

### Login / Register

Allows users to create an account or log into their existing account.

## 🧭 Routing

KaamSetu uses React Router for navigation.

Example routes:

```text
/                 → Home
/login            → Login / Register
/profile/:id      → User Profile
```

## 🎨 Styling

The project uses **Tailwind CSS** for styling and responsive layouts.

Example:

```jsx
className="bg-[#0D332D] text-white px-4 py-2 rounded-md"
```

## 🔮 Future Improvements

* Backend integration
* User authentication
* Database for service providers
* Search and filtering
* Location-based service discovery
* Booking system
* Online payments
* Reviews and ratings
* Worker dashboard
* User dashboard
* Real-time availability

## 👨‍💻 Author

**Naveen Chaubey**

---

⭐ If you like this project, consider giving it a star!
