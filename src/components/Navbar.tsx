import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Pests", href: "#services" },
    { label: "Mosquitos", href: "#services" },
    { label: "Termites", href: "#services" },
    { label: "About", href: "#why-us" },
  ];

  return (
    <nav className="sticky top-0 z-50 section-orange">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-comic text-primary-foreground text-lg hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Logo Text */}
        <div className="text-comic text-4xl md:text-5xl text-secondary tracking-wider drop-shadow-lg">
          DANG!
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:9038710550" className="flex items-center gap-2 text-primary-foreground font-bold">
            <Phone className="w-5 h-5" />
            <span>(903) 871-0550</span>
          </a>
          <a href="#quote" className="btn-cta text-base px-6 py-3">
            Get Your Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden section-orange px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-comic text-primary-foreground text-lg"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="tel:9038710550" className="flex items-center gap-2 text-primary-foreground font-bold">
            <Phone className="w-5 h-5" />
            (903) 871-0550
          </a>
          <a href="#quote" className="btn-cta text-base px-6 py-3 w-full text-center">
            Get Your Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
