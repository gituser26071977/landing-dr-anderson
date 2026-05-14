"use client";

import { NavigationBar } from "./components/NavigationBar";
import { Hero } from "./sections/Hero";
import { ThisMayBeYou } from "./sections/ThisMayBeYou";
import { Identification } from "./sections/Identification";
import { Authority } from "./sections/Authority";
import { WhatIsAHSD } from "./sections/WhatIsAHSD";
import { ChildrenIdentification } from "./sections/ChildrenIdentification";
import { Proposal } from "./sections/Proposal";
import { Cannabis } from "./sections/Cannabis";
import { Differential } from "./sections/Differential";
import { SocialProof } from "./sections/SocialProof";
import { FAQ } from "./sections/FAQ";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavigationBar />
      <Hero />
      <ThisMayBeYou />
      <Identification />
      <Authority />
      <WhatIsAHSD />
      <ChildrenIdentification />
      <Proposal />
      <Cannabis />
      <Differential />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
