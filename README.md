
# 🧩 CRM Dashboard - Full Stack Developer Assignment

An interactive CRM Dashboard built using **React** (frontend) and **Node.js/Express** (backend), integrating with a mock CRM or Salesforce-like system. It displays **sales data** and **customer interactions** through dynamic charts with filters and token-based authentication.

---

## 🚀 Features

- 📈 Bar chart for sales data
- 🧠 Pie chart for customer interaction types
- 🎛 Filter by date and interaction type
- 🔐 Token-based authentication
- 💻 Built with React, Material UI, Chart.js, and Express
- 📱 Fully responsive design
- 🧪 Mock CRM data (JSON-based)

---

## 📁 Project Structure

```
crm-dashboard/
├── backend/
│   ├── server.js
│   ├── routes/
│   │   ├── sales.js
│   │   └── interactions.js
│   └── mock/
│       ├── crmMock.json
│       └── interactionsMock.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── App.js
│   ├── .env
│   └── package.json
```

---

## 🛠️ Tech Stack

**Frontend**
- React
- Material UI
- Axios
- Chart.js
- Context API

**Backend**
- Node.js
- Express.js
- dotenv
- Mock data via JSON files

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/crm-dashboard.git
cd crm-dashboard
```

### 2. Backend Setup

```bash
cd backend
npm install
npm start
```

**Backend runs at:** `http://localhost:4000`

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend/` directory with:

```env
REACT_APP_API_URL=http://localhost:4000/api
REACT_APP_AUTH_TOKEN=demo_token
PORT=3000
```

Run the app:

```bash
npm start
```

---

## 🔗 API Endpoints

| Endpoint              | Method | Description                          |
|----------------------|--------|--------------------------------------|
| `/api/sales`         | GET    | Get mock sales data                  |
| `/api/interactions`  | GET    | Get customer interactions (filterable) |

### Example Interaction Filter:

```bash
GET /api/interactions?type=email&startDate=2024-01-01&endDate=2024-12-31
```

---

## 📊 Visualizations

- **Sales Bar Chart**: Time-based sales data
- **Interaction Pie Chart**: Distribution of types (Email, Call, Meeting)

---

## 📹 GDrive Video Walkthrough

🎥 [Click to watch demo](https://drive.google.com/drive/folders/1HapVZxTJvRO1NgTCGKbcFnLoAXz0DfUM?usp=share_link)


---

## 🧪 Filters

Users can adjust:
- 📅 Date Range (start & end)
- 🧾 Interaction Type

Filters trigger new API calls and update the UI dynamically.

---

## 🔐 Authentication

All API calls require a token in headers:

```js
const headers = {
  Authorization: `Bearer ${token}`
};
```

Set `REACT_APP_AUTH_TOKEN` in your `.env` file or manage it via login flow.

---

## ✨ Future Enhancements

- Replace mock data with real Salesforce or SuiteCRM APIs
- Add user login & role-based access
- Chart export (PDF, PNG, Excel)
- Dark mode toggle

---

## 🧑‍💻 Contributing

1. Fork the repo
2. Create your feature branch: `git checkout -b feat/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feat/my-feature`
5. Open a pull request 🎉

---

## 📄 License

MIT License — Use freely, contribute respectfully!

---

## 🙌 Acknowledgements

- MUI for sleek React components
- Chart.js for easy chart rendering
- Open-source CRM JSON structure

---

> Built with ❤️ by Chandeep
