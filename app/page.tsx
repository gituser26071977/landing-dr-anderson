"use client";

import { NavigationBar } from "./components/NavigationBar";
import { Hero } from "./sections/Hero";
import { WhatIsAHSD } from "./sections/WhatIsAHSD";
import { Identification } from "./sections/Identification";
import { ChildrenIdentification } from "./sections/ChildrenIdentification";
import { ThisMayBeYou } from "./sections/ThisMayBeYou";
import { Authority } from "./sections/Authority";
import { Proposal } from "./sections/Proposal";
import { Differential } from "./sections/Differential";
import { SocialProof } from "./sections/SocialProof";
import { Cannabis } from "./sections/Cannabis";
import { FAQ } from "./sections/FAQ";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavigationBar />
      <Hero />
      <WhatIsAHSD />
      <Identification />
      <ChildrenIdentification />
      <ThisMayBeYou />
      <Authority />
      <Proposal />
      <Differential />
      <SocialProof />
      <Cannabis />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
