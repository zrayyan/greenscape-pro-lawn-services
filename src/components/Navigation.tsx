"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">GS</span>
            </div>
            <span className={`font-serif font-bold text-xl ${
              isScrolled || !isHomePage ? "text-gray-900 dark:text-white" : "text-white"
            }`}>
              GreenScape Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-green-600 ${
                  isScrolled || !isHomePage ? "text-gray-700 dark:text-gray-300" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" className={`${
              isScrolled || !isHomePage ? "text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400" : "text-white hover:text-green-200"
            }`}>
              <Phone className="mr-2 h-4 w-4" />
              (555) 123-4567
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-md ${
              isScrolled || !isHomePage ? "text-gray-700 dark:text-gray-300" : "text-white"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{
                  x: isMobileMenuOpen ? 0 : -20,
                  opacity: isMobileMenuOpen ? 1 : 0
                }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{
                x: isMobileMenuOpen ? 0 : -20,
                opacity: isMobileMenuOpen ? 1 : 0
              }}
              transition={{ delay: navItems.length * 0.1 }}
              className="pt-4 border-t space-y-3"
            >
              <Button variant="outline" className="w-full justify-start">
                <Phone className="mr-2 h-4 w-4" />
                (555) 123-4567
              </Button>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <MessageCircle className="mr-2 h-4 w-4" />
                Get Free Quote
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}