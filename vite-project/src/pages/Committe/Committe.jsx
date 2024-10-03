import React from "react";
import OrganizingCommittee from "./components/OrganizingCommittee";
import IACommittee from "./components/IACommitte";
import ScientificCommittee from "./components/ScientificCommittee";
import HeadingSection from "../Header";

function Committe() {
  return (
    <div>
      <HeadingSection />
      <OrganizingCommittee />
      <ScientificCommittee />
      <IACommittee />
    </div>
  );
}

export default Committe;
