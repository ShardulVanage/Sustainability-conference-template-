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

const links = [
  {
    title: "About",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Committe",
    icon: (
      <IconUsersGroup className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Gallery",
    icon: (
      <IconPhoto className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
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
    href: "#",
  },

  {
    title: "Pricing",
    icon: (
      <IconBrandCashapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Submission",
    icon: (
      <IconLicense className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];
function App() {
  return (
    <>
      <div className="flex items-center justify-center  w-full">
        <FloatingDock
          mobileClassName="translate-y-20 relative z-50 fixed bottom-24 right-4"
          desktopClassName="translate-y-20 relative z-50 fixed  bottom-24"
          items={links}
        />
      </div>
      <Hero />
      <StatsSection />
      <AboutSection />
      <ObjectivesSection />
      <Timeline />
      <CtaRegister />
      <ContactUs />
      <VenueSection />
      <Footer />
    </>
  );
}

export default App;
