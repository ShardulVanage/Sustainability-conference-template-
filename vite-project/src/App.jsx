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
import React, { useEffect } from "react";
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
import Award from "./pages/Award/Award";
import SponserShip from "./pages/Sponsership/SponserShip";
import CancellationPolicy from "./pages/Cancellation Policy/CancellationPolicy";
import DetailVenue from "./pages/Venue/DetailVenue";
import SpeakerSection from "./components/Speakers";
import ConferenceHighlights from "./components/ConferenceHighlights";
import Success from "./pages/Piricing/components/Success";
import Failed from "./pages/Piricing/components/Failed";
import TermsCondition from "./pages/Terms & Conditions/TermsCondition";
import PrivacyPolicy from "./pages/Privacy Policy/PrivacyPolicy";

import DetailPage from "./pages/highlightdetail/HighlightDetail";
import HighlightDetail from "./pages/highlightdetail/HighlightDetail";
import FAQSection from "./components/Faq";
import Organization from "./components/Organization";
import AboutConference from "./pages/About-Conference/About-Conference";
import Header from "./components/Header";
import TawkTo from "./components/TawkTo";
import WhatsAppButton from "./components/ui/whatsapp";
//pocketbase collections
import { useCoOrganizers } from './hooks/useCoOrganizers';
import { usedownloadButtons } from "./hooks/useDownloadButtons";
import { useSpeakers } from "./hooks/useSpeakers";
import { useCommittee } from "./hooks/useCommitte";
import SDGSection from "./components/SDGS";
// Import new components for routes

const links = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-neutral-50" />,
    href: "/",
  },
  {
    title: "Committee",
    icon: <IconUsersGroup className="h-full w-full text-neutral-50" />,
    href: "/committee",
  },
  {
    title: "Gallery",
    icon: <IconPhoto className="h-full w-full text-neutral-50" />,
    href: "/gallery",
  },
  {
    title: "AboutUs",
    icon: (
      <img
        src="https://res.cloudinary.com/dwlhesiyi/image/upload/v1726731577/il2wr5yxd2w1sarnj3it.svg"
        width={60}
        height={60}
        alt="Aceternity Logo"
      />
    ),
    href: "/AboutUs",
  },
  {
    title: "Schedule",
    icon: <Calendar className="h-full w-full text-neutral-50" />,
    href: "/schedule",
  },
  {
    title: "Registration",
    icon: <IconBrandCashapp className="h-full w-full text-neutral-50" />,
    href: "/pricing",
  },
  {
    title: "Submission",
    icon: <IconLicense className="h-full w-full text-neutral-50" />,
    href: "/submission",
  },
];

function MainContent({ coOrganizers ,downloadButtons,speakers}) {

  return (
    <>
      <h1 className="sr-only">ICSIFT Conference 2024</h1>
      <h2 className="sr-only">ICSIFT Conference 2024</h2>
      <Header />
      <Hero />
      <StatsSection />
      <Organization coOrganizers={coOrganizers} />
      <AboutSection downloadButtons={downloadButtons}/>
      <ObjectivesSection />
      <ConferenceHighlights />
      <SDGSection/>
      {/* <SpeakerSection speakers={speakers} /> */}
      <CtaRegister />
      <Timeline />
      <VenueSection />
      <FAQSection />
      <ContactUs />
    
     
     
    </>
  );
}

function App() {
  const { coOrganizers } = useCoOrganizers();
  const {speakers} =useSpeakers()
  const {downloadButtons} = usedownloadButtons();
  const {committee}=useCommittee();
  useEffect(() => {
    const wakeUpServer = async () => {
      try {
        await fetch("https://icsift.onrender.com/api/health");
        console.log("Server pinged successfully");
      } catch (error) {
        console.error("Error pinging server:", error);
      }
    };

    wakeUpServer();
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <Router>
      <div className="flex items-center justify-center w-full">
        <FloatingDock
          mobileClassName="translate-y-20 relative z-50 fixed bottom-40 left-4 drop-shadow-md"
          desktopClassName="translate-y-20 relative z-50 fixed bottom-24"
          items={links}
        />
         <TawkTo className="absolute"/>
         <WhatsAppButton phoneNumber="+918260080050" />
      </div>
      <Routes>
        <Route path="/" element={<MainContent coOrganizers={coOrganizers} downloadButtons={downloadButtons} speakers={speakers}  />} />
        <Route path="/AboutUs" element={<Aboutme />} />
        <Route path="/committee" element={<Committe committee={committee} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/submission" element={<Submission />} />

        <Route path="/awards" element={<Award />} />
        <Route path="/sponsorship" element={<SponserShip />} />
        <Route path="/venue" element={<DetailVenue />} />

        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        <Route path="/Terms-&-Conditions" element={<TermsCondition />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/highlights/:slug" element={<HighlightDetail />} />
        <Route path="*" element={<NotFound />} />

        <Route path="/Success" element={<Success />} />
        <Route path="/Failed" element={<Failed />} />

        <Route path="/AboutConference" element={<AboutConference />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
