import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import { CreateCampign } from "./pages/Campaigns/CreateCampign";
import { Campaigns } from "./pages/Campaigns/Campaigns";
import { SingleCampaign } from "./pages/Campaigns/SingleCampaign";
const PageRouter = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/create-campaign" element={<CreateCampign />} />
        <Route path="/home/campaigns" element={<Campaigns />} />
        <Route path="/home/campaigns/single" element={<SingleCampaign />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
    </BrowserRouter>
  );
};

export default PageRouter;