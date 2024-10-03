import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutSection from "./components/About";
import ContactUs from "./components/ContactUs";
import CtaRegister from "./components/CtaRegister";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ObjectivesSection from "./components/Objective";
import StatsSection from "./components/Stats";
import Timeline from "./components/Timeline";
import { FloatingDock } from "./components/ui/floating-dock";
import VenueSection from "./components/Venue";
import React from "react";
import {
  IconBrandCashapp,
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconLicense,
  IconNewSection,
  IconPhoto,
  IconTerminal2,
  IconUsersGroup,
} from "@tabler/icons-react";
import { Calendar } from "lucide-react";
import Aboutme from "./pages/Aboutme/Aboutme";
import NotFound from "./pages/NotFound/NotFound";
import Committe from "./pages/Committe/Committe";
import Gallery from "./pages/Gallery/Gallery";
import Schedule from "./pages/Schedule/Schedule";
import Pricing from "./pages/Piricing/Pricing";
import Submission from "./pages/Submission/Submission";

// Import new components for routes

const links = [
  {
    title: "About",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/about",
  },
  {
    title: "Committee",
    icon: (
      <IconUsersGroup className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/committee",
  },
  {
    title: "Gallery",
    icon: (
      <IconPhoto className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/gallery",
  },
  {
    title: "Zep Research",
    icon: (
      <img
        src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726731577/il2wr5yxd2w1sarnj3it.svg"
        width={60}
        height={60}
        alt="Aceternity Logo"
      />
    ),
    href: "/",
  },
  {
    title: "Schedule",
    icon: (
      <Calendar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/schedule",
  },
  {
    title: "Pricing",
    icon: (
      <IconBrandCashapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/pricing",
  },
  {
    title: "Submission",
    icon: (
      <IconLicense className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/submission",
  },
];

function MainContent() {
  return (
    <>
      <Hero />
      <StatsSection />
      <AboutSection />
      <ObjectivesSection />
      <Timeline />
      <CtaRegister />
      <ContactUs />
      <VenueSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="flex items-center justify-center w-full">
        <FloatingDock
          mobileClassName="translate-y-20 relative z-50 fixed bottom-24 right-4"
          desktopClassName="translate-y-20 relative z-50 fixed bottom-24"
          items={links}
        />
      </div>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/committee" element={<Committe />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/pricing" element={<Pricing />} />

        <Route path="/submission" element={<Submission />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
