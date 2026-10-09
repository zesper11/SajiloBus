import { BusFront } from "lucide-react";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Find a Route", href: "#routeFinder" },
      { label: "Plans", href: "#routeFinder" },
      { label: "How it works", href: "#routeFinder" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#features" },
      { label: "Contact", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Login", href: "#" },
      { label: "Sign up", href: "#" },
      { label: "Help", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <a className="footer-logo" href="#" aria-label="SajiloBus home">
              <span className="footer-logo-mark" aria-hidden="true">
                <BusFront size={26} strokeWidth={2.1} />
              </span>
              <span>SajiloBus</span>
            </a>
            <p>
              Simple route-based commuting for people who want a more
              predictable way to get around every day.
            </p>
          </div>

          {footerGroups.map((group) => (
            <nav
              className="footer-link-group"
              aria-label={`${group.title} links`}
              key={group.title}
            >
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© 2026 SajiloBus. Practice project.</p>
          <p>Made for a simpler daily commute.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
