import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectDiscovery } from "@/components/sections/ProjectDiscovery";
import { ContributionDashboard } from "@/components/sections/ContributionDashboard";
import { RewardsBounties } from "@/components/sections/RewardsBounties";
import { SkillGraph } from "@/components/sections/SkillGraph";
import { Leaderboard } from "@/components/sections/Leaderboard";
import { FutureVision } from "@/components/sections/FutureVision";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen matrix-bg">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section with 3D Background */}
      <HeroSection />
      
      {/* Project Discovery Section */}
      <section id="projects">
        <ProjectDiscovery />
      </section>
      
      {/* Contribution Dashboard */}
      <ContributionDashboard />
      
      {/* Rewards & Bounties */}
      <section id="bounties">
        <RewardsBounties />
      </section>
      
      {/* Skill Graph */}
      <section id="skills">
        <SkillGraph />
      </section>
      
      {/* Leaderboard */}
      <section id="leaderboard">
        <Leaderboard />
      </section>
      
      {/* Future Vision */}
      <FutureVision />
      
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Index;