import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import ButtonsSection from "./components/ButtonsSection";
import IntroSection from "./components/IntroSection";
import TabSection from "./components/TabSection";
import FeedbackSection from "./components/FeedbackSection";
import EffectSection from "./components/EffectSection";
import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("feedback");

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabSection active={tab} onChange={(current) => setTab(current)} />
        {tab === "main" && (
          <>
            <TeachingSection />
            <ButtonsSection />
          </>
        )}
        {tab === "feedback" && <FeedbackSection />}
        {tab === "effect" && <EffectSection />}
      </main>
    </>
  );
}
