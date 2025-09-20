                  <div className="text-2xl font-bold">12.4 AVAX</div>
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Zap, GitCommit, Calendar, Award } from "lucide-react";
import { ArcTimeline } from "@/components/magicui/arc-timeline";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { useRef } from "react";

const contributions = [
  {
    id: 1,
    project: "Neural DeFi Protocol",
    type: "Bug Fix",
    date: "2024-01-15",
    xp: 250,
    status: "completed",
    difficulty: "Advanced"
  },
  {
    id: 2,
    project: "Quantum Chat SDK",
    type: "Feature",
    date: "2024-01-10",
    xp: 500,
    status: "completed",
    difficulty: "Intermediate"
  },
  {
    id: 3,
    project: "MetaVerse Builder",
    type: "Documentation",
    date: "2024-01-08",
    xp: 150,
    status: "completed",
    difficulty: "Beginner"
  },
  {
    id: 4,
    project: "AI Code Review Bot",
    type: "Enhancement",
    date: "2024-01-05",
    xp: 300,
    status: "in-progress",
    difficulty: "Intermediate"
  }
];

const badges = [
  { name: "First Contribution", icon: Award, color: "text-yellow-400", earned: true },
  { name: "Bug Hunter", icon: Zap, color: "text-red-400", earned: true },
  { name: "Documentation Master", icon: GitCommit, color: "text-blue-400", earned: true },
  { name: "Code Ninja", icon: Trophy, color: "text-purple-400", earned: false },
  { name: "Open Source Hero", icon: Award, color: "text-green-400", earned: false },
];

export function ContributionDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);
  
  const timelineItems = [
    {
      year: "2024",
      title: "GitHub Champion",
      description: "Achieved 500+ contributions across multiple repositories"
    },
    {
      year: "2024",
      title: "Bug Hunter Elite",
      description: "Identified and fixed 50+ critical issues"
    },
    {
      year: "2023",
      title: "Community Builder", 
      description: "Mentored 100+ developers in open source projects"
    },
    {
      year: "2023",
      title: "Code Architect",
      description: "Led development of 3 major framework features"
    }
  ];
  const totalXP = 1200;
  const currentLevel = Math.floor(totalXP / 500) + 1;
  const xpToNextLevel = (currentLevel * 500) - totalXP;
  const xpProgress = ((totalXP % 500) / 500) * 100;

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Your Contribution Hub
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your progress, level up your skills, and earn recognition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* XP Progress */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Level Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-primary">Level {currentLevel}</div>
                  <div className="text-sm text-muted-foreground">
                    {xpToNextLevel} XP to next level
                  </div>
                </div>
                
                <Progress value={xpProgress} className="mb-4 h-3" />
                
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{totalXP} XP</span>
                  <span>{currentLevel * 500} XP</span>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-gradient-primary/10 border border-primary/20">
                  <div className="text-lg font-semibold text-primary mb-1">Total Earned</div>
                  <div className="text-2xl font-bold">12.4 ETH</div>
                  <div className="text-sm text-muted-foreground">From 8 completed bounties</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Contributions Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitCommit className="h-5 w-5 text-secondary" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contributions.map((contribution, index) => (
                    <motion.div
                      key={contribution.id}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-glass/50 hover:bg-glass transition-colors"
                    >
                      <div className={`w-3 h-3 rounded-full mt-2 ${
                        contribution.status === 'completed' ? 'bg-green-400 animate-pulse' : 'bg-yellow-400 animate-pulse'
                      }`} />
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-sm truncate">
                            {contribution.project}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {contribution.type}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(contribution.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Zap className="h-3 w-3" />
                            +{contribution.xp} XP
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-400" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {badges.map((badge, index) => {
                    const IconComponent = badge.icon;
                    return (
                      <motion.div
                        key={badge.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          badge.earned 
                            ? 'bg-gradient-primary/10 border-primary/30 shadow-neon' 
                            : 'bg-glass/30 border-muted/30 opacity-50'
                        }`}
                      >
                        <IconComponent className={`h-6 w-6 mx-auto mb-2 ${
                          badge.earned ? badge.color : 'text-muted-foreground'
                        } ${badge.earned ? 'animate-pulse' : ''}`} />
                        <div className="text-xs font-medium truncate">
                          {badge.name}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-6 text-center">
                  <div className="text-sm text-muted-foreground mb-2">
                    Progress: 3/5 badges earned
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}