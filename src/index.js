import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import News from "./pages/News";
import OfferId from "./pages/OfferId";
import ContactPage from "./pages/ContactPage";
import About from "./pages/About";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboardNews from "./pages/Admin/AdminDashboardNews";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import NewsId from "./pages/NewsId";
import PrivateRoutes from "./components/utils/PrivateRoutes";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const updateLoginStatus = (status) => {
    console.log(status)
    setIsLoggedIn(status);
  };

  localStorage.removeItem("token")
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/offer/:id" element={<OfferId />} />
        <Route path="/news/:id" element={<NewsId />} />
        <Route
          path="/admin"
          element={<AdminLogin updateLoginStatus={updateLoginStatus} />}
        />
        <Route element={<PrivateRoutes isLoggedIn={isLoggedIn} />}>
          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />
          <Route
            path="/admin/dashboard/news"
            element={<AdminDashboardNews />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
