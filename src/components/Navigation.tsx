import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Menu, X, User, Wallet, Bell } from "lucide-react";

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Bounties", href: "#bounties" },
  { name: "Leaderboard", href: "#leaderboard" },
  { name: "Skills", href: "#skills" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "glass backdrop-blur-xl border-b border-glass-border shadow-glow" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Code className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold gradient-text">GitCare</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <Bell className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Badge className="absolute -top-2 -right-2 w-4 h-4 p-0 flex items-center justify-center text-xs animate-pulse">
                3
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2 glass p-2 rounded-lg"
            >
              <Wallet className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">12.4 ETH</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button variant="glass" size="sm" className="group">
                <User className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? "auto" : 0, 
            opacity: isOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-glass-border">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="block text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            
            <div className="flex items-center justify-between pt-4 border-t border-glass-border">
              <div className="flex items-center gap-2">
                <Wallet className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">12.4 ETH</span>
              </div>
              <Button variant="glass" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}