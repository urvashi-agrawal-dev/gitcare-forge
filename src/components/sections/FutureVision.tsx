import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Sparkles, Rocket, Eye, Zap, ArrowRight } from "lucide-react";

const aiRecommendations = [
  {
    id: 1,
    type: "Project Match",
    title: "Perfect match found!",
    description: "Based on your React & Web3 skills, you're 97% compatible with the DeFi Dashboard project",
    action: "View Project",
    confidence: 97,
    icon: Brain,
    color: "text-green-400"
  },
  {
    id: 2,
    type: "Skill Gap",
    title: "Level up opportunity",
    description: "Complete 2 more TypeScript projects to unlock Senior Developer tier (+500 XP bonus)",
    action: "Find Projects",
    confidence: 89,
    icon: Sparkles,
    color: "text-yellow-400"
  },
  {
    id: 3,
    type: "Trending Tech",
    title: "Hot technology alert",
    description: "AI/ML bounties increased 340% this month. Your Python skills put you ahead of the curve",
    action: "Explore AI Bounties",
    confidence: 85,
    icon: Rocket,
    color: "text-purple-400"
  }
];

const futureFeatures = [
  {
    title: "Neural Code Analysis",
    description: "AI-powered code review that learns from your style and suggests optimizations",
    status: "Coming Q2 2024",
    icon: Brain
  },
  {
    title: "Holographic Collaboration",
    description: "Virtual reality workspaces for distributed development teams",
    status: "Beta Testing",
    icon: Eye
  },
  {
    title: "Quantum Security",
    description: "Post-quantum cryptography for ultimate bounty and reward protection",
    status: "Research Phase",
    icon: Zap
  }
];

export function FutureVision() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Future Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the next generation of developer intelligence and collaboration
          </p>
        </motion.div>

        {/* AI Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
              <Brain className="h-6 w-6 text-primary animate-pulse" />
              AI-Powered Insights
            </h3>
            <p className="text-muted-foreground">
              Personalized recommendations powered by advanced machine learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiRecommendations.map((rec, index) => {
              const IconComponent = rec.icon;
              return (
                <motion.div
                  key={rec.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Card className="glass-card hover-lift h-full relative overflow-hidden">
                    {/* Holographic effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {rec.type}
                        </Badge>
                        <div className={`${rec.color} text-right`}>
                          <IconComponent className="h-5 w-5 animate-pulse" />
                        </div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {rec.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="relative z-10">
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {rec.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-xs text-muted-foreground">
                          Confidence: {rec.confidence}%
                        </div>
                        <div className="w-16 h-1 bg-muted rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${rec.confidence}%` }}
                            transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                      
                      <Button variant="outline-neon" size="sm" className="w-full group">
                        {rec.action}
                        <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Future Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 text-secondary animate-pulse" />
            Coming Soon
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {futureFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="glass-card hover-lift h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary/10 flex items-center justify-center group-hover:shadow-glow transition-all">
                        <IconComponent className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      
                      <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h4>
                      
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      <Badge variant="secondary" className="animate-pulse">
                        {feature.status}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-primary/10 border border-primary/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Shape the Future with Us
              </h3>
              <p className="text-muted-foreground mb-6">
                Join our beta program and be among the first to experience the next evolution of developer collaboration
              </p>
              <Button variant="hero" size="lg" className="group">
                Join Beta Program
                <Rocket className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}