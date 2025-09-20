import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  Twitter, 
  MessageCircle, 
  Linkedin, 
  Mail, 
  Send,
  Code,
  Heart,
  Zap
} from "lucide-react";
import { ScrollBasedVelocity } from "@/components/magicui/scroll-based-velocity";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#", color: "hover:text-white" },
  { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
  { name: "Discord", icon: MessageCircle, href: "#", color: "hover:text-indigo-400" },
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-500" },
];

const footerLinks = {
  Platform: [
    { name: "Projects", href: "#" },
    { name: "Bounties", href: "#" },
    { name: "Leaderboard", href: "#" },
    { name: "Skills", href: "#" },
  ],
  Developers: [
    { name: "Getting Started", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Tutorials", href: "#" },
  ],
  Community: [
    { name: "Forum", href: "#" },
    { name: "Events", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Ambassadors", href: "#" },
  ],
  Company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Contact", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-secondary to-background" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="max-w-2xl mx-auto p-8 rounded-2xl glass-card">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mail className="h-6 w-6 text-primary animate-pulse" />
              <h3 className="text-2xl font-bold gradient-text">Stay in the Loop</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Get the latest updates on new bounties, platform features, and developer opportunities
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                placeholder="Enter your email..."
                className="glass flex-1"
              />
              <Button variant="neon" className="group">
                Subscribe
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
              <Badge variant="outline" className="animate-pulse">
                <Zap className="h-3 w-3 mr-1" />
                10k+ Subscribers
              </Badge>
              <span>•</span>
              <span>No spam, unsubscribe anytime</span>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <Code className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold gradient-text">GitCare</span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The future of developer networking and bounty hunting. Building the decentralized ecosystem 
              where innovation meets opportunity.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color} hover:shadow-neon`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (categoryIndex + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: linkIndex * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-glass-border"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>for the developer community</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <span>© 2024 GitCare. All rights reserved.</span>
            </div>
          </div>
          
          {/* Status Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6 text-xs">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-muted-foreground">All systems operational</span>
            <Badge variant="outline" className="text-xs">
              99.9% uptime
            </Badge>
          </div>
        </motion.div>

        {/* Scrolling velocity footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 border-t border-glass-border pt-6"
        >
          <ScrollBasedVelocity baseVelocity={3} className="text-sm text-primary/20">
            ⭐ CONTRIBUTE • EARN • CONNECT • BUILD THE FUTURE • OPEN SOURCE • DECENTRALIZED • 
          </ScrollBasedVelocity>
        </motion.div>
      </div>
    </footer>
  );
}