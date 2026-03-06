import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const pestLinks = [
  { label: "General Pest Control", href: "/services/pest-control" },
  { label: "Ant Control", href: "/services/ant-control" },
  { label: "Spider Control", href: "/services/spider-control" },
  { label: "Roach Control", href: "/services/roach-control" },
  { label: "Scorpion Control", href: "/services/scorpion-control" },
  { label: "Wasp & Hornet Control", href: "/services/wasp-hornet-control" },
  { label: "Rodent Control", href: "/services/rodent-control" },
  { label: "Flea & Tick Control", href: "/services/flea-tick-control" },
  { label: "Bed Bug Control", href: "/services/bed-bug-control" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pestsOpen, setPestsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 section-orange">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Nav Links - Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {/* Pests Dropdown */}
          <div className="relative group">
            <button className="text-comic text-primary-foreground text-lg hover:text-secondary transition-colors flex items-center gap-1">
              Pests <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-1 w-56 bg-background rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {pestLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/services/mosquito-control" className="text-comic text-primary-foreground text-lg hover:text-secondary transition-colors">
            Mosquitos
          </Link>

          {/* Termites Dropdown */}
          <div className="relative group">
            <button className="text-comic text-primary-foreground text-lg hover:text-secondary transition-colors flex items-center gap-1">
              Termites <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-1 w-56 bg-background rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link to="/services/termite-inspections" className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors rounded-t-lg">
                Termite Control & Inspections
              </Link>
            </div>
          </div>

          <Link to="/about" className="text-comic text-primary-foreground text-lg hover:text-secondary transition-colors">
            About
          </Link>
        </div>

        {/* Logo */}
        <Link to="/" className="text-comic text-4xl md:text-5xl text-secondary tracking-wider drop-shadow-lg">
          DANG!
        </Link>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:9038710550" className="flex items-center gap-2 text-primary-foreground font-bold">
            <Phone className="w-5 h-5" />
            <span className="text-sm">Call us<br /><span className="text-base">(903) 871-0550</span></span>
          </a>
          <Link to="/quote" className="btn-cta text-base px-6 py-3">
            Get Your Quote
          </Link>
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
        <div className="md:hidden section-orange px-4 pb-4 space-y-2">
          <button
            onClick={() => setPestsOpen(!pestsOpen)}
            className="flex items-center gap-1 text-comic text-primary-foreground text-lg w-full"
          >
            Pests <ChevronDown className={`w-4 h-4 transition-transform ${pestsOpen ? "rotate-180" : ""}`} />
          </button>
          {pestsOpen && (
            <div className="pl-4 space-y-1">
              {pestLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-primary-foreground/80 text-sm py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
          <Link to="/services/mosquito-control" className="block text-comic text-primary-foreground text-lg" onClick={() => setMobileOpen(false)}>
            Mosquitos
          </Link>
          <Link to="/services/termite-inspections" className="block text-comic text-primary-foreground text-lg" onClick={() => setMobileOpen(false)}>
            Termites
          </Link>
          <Link to="/about" className="block text-comic text-primary-foreground text-lg" onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <a href="tel:9038710550" className="flex items-center gap-2 text-primary-foreground font-bold pt-2">
            <Phone className="w-5 h-5" />
            (903) 871-0550
          </a>
          <Link to="/quote" className="btn-cta text-base px-6 py-3 w-full text-center block" onClick={() => setMobileOpen(false)}>
            Get Your Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
