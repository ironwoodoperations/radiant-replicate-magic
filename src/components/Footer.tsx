const Footer = () => {
  return (
    <footer className="section-dark py-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-comic text-3xl text-secondary mb-2">DANG!</p>
        <p className="text-primary-foreground/60 text-sm">
          Super Powered Pest Control • Tyler, TX
        </p>
        <p className="text-primary-foreground/40 text-xs mt-4">
          © {new Date().getFullYear()} Dang Pest Control. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
