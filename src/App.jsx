import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Topbar from "./components/Topbar/Topbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import TopSellersPage from "./pages/TopSellersPage";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const topbarLeft = "Get 10% Off on Your First Order";
  const topbarRight = ["Track Your Order", "Help", "USD $"];
  const brand = "BESTXTORE";
  const categories = "All Categories";
  const nav = [
    { label: "Home", to: "/" },
    { label: "New Arrivals", to: "/" },
    { label: "Top Sellers", to: "/top-sellers" },
    { label: "Blog", to: "/blog" },
    { label: "Contact Us", to: "/" },
  ];
  const icons = [
    {
      label: "Search",
      url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googlesearchconsole.svg",
    },
    {
      label: "User",
      url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg",
    },
    {
      label: "Heart",
      url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/heart.svg",
    },
    {
      label: "Cart",
      url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/shoppingcart.svg",
    },
  ];


  const footerBrand = "BESTXTORE";
  const footerDesc = "Quality products, fast delivery, easy returns.";
  const footerCols = [
    { title: "Customer Service", links: ["Help Center", "Track Order", "Returns", "Contact Us"] },
    { title: "About", links: ["About Us", "Careers", "Press", "Affiliate"] },
    { title: "Account", links: ["My Account", "Wishlist", "Orders", "Settings"] },
  ];
  const footerSocials = [
    { label: "instagram", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/instagram.svg" },
    { label: "facebook", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/facebook.svg" },
    { label: "tiktok", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/tiktok.svg" },
    { label: "youtube", url: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/youtube.svg" },
  ];
  const footerCopy = "© 2026 BESTXTORE. All rights reserved.";


  const homePageData = {
    hero: {
      mini: "Microsoft Headphone",
      titleLines: ["AirPods Pro", "2023"],
      desc: "The ultimate in-ear audio experience with premium sound and noise cancellation.",
      bullets: [
        "Up to 2x more Active Noise Cancellation",
        "Adaptive Transparency",
        "Personalized Spatial Audio",
      ],
      buttons: ["Shop Now", "Video"],
      bg: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  };

  return (
    <div className="app">
      <Topbar left={topbarLeft} right={topbarRight} />
      <Header
        brand={brand}
        categories={categories}
        nav={nav}
        icons={icons}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              data={homePageData}
            />
          }
        />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/top-sellers" element={<TopSellersPage />} />
      </Routes>

      <Footer
        brand={footerBrand}
        desc={footerDesc}
        cols={footerCols}
        socials={footerSocials}
        copy={footerCopy}
      />
    </div>
  );
}
