// import React from "react";
import BestPrompt from "../../sections/BestPrompt/BestPrompt";
import Hero from "../../sections/Hero/Hero";
import RowSection from "../../sections/RowSection/RowSection";
// import Image from "../../assets/site.png";
import Summerise from "../../assets/site.png";
import Meeting from "../../assets/meeting.jpg";
import Code from "../../assets/code.jpg";
import GridSection from "../../sections/GridSection/GridSection";
import Pricing from "../../sections/Pricing/Pricing";
import Join from "../../sections/Join/Join";
import Footer from "../../sections/Footer/Footer";

const Home = () => {
  return (
    <div className="text-white">
      <Hero />
      <BestPrompt />
      <RowSection
        bg="bg-yellow-600"
        title="Writes, brainstorms, edits, and explores ideas with you"
        image={Summerise}
      />
      <RowSection
        bg="bg-blue-500"
        title="Summarize meetings. Find new insights. Increase productivity."
        image={Meeting}
      />
      <RowSection
        bg="bg-indigo-500"
        title="Generate and debug code. Automate repetitive tasks. Learn new APIs."
        image={Code}
      />
      <GridSection />
      <Pricing />
      <Join />
      <Footer />
    </div>
  );
};

export default Home;
