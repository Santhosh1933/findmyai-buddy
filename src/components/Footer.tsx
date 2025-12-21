import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg">
              <Sparkles className="h-5 w-5 text-accent" />
              AI News Today Tools
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted source for discovering the best AI-powered tools and services.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://x.com/ainewstodayhq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="https://www.threads.com/@ainewstodayorg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Threads"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068V12c.016-3.67.88-6.588 2.564-8.67C5.931 1.2 8.684.024 12.186 0h.014c2.75.016 5.13.831 7.076 2.424 1.8 1.475 3.074 3.527 3.784 6.094l-2.032.547c-1.172-4.298-4.174-6.496-8.828-6.565-2.825.047-4.99.984-6.442 2.788-1.378 1.712-2.102 4.184-2.117 7.344v.068c.015 3.16.739 5.632 2.117 7.344 1.452 1.804 3.617 2.74 6.442 2.788 2.604-.047 4.504-.623 5.985-1.813 1.573-1.264 2.326-2.972 2.326-5.278v-.136c0-1.364-.318-2.403-.952-3.106-.606-.67-1.507-1.064-2.68-1.17.148.604.222 1.24.222 1.914 0 4.006-2.664 7.368-6.315 7.368-1.982 0-3.685-.873-4.733-2.3-.885-1.206-1.375-2.797-1.375-4.582 0-4.218 2.867-7.594 6.4-7.594 1.016 0 1.959.27 2.772.764l-.012-2.168 2.032-.012.034 5.904-.001.484c0 3.15-1.058 5.594-3.15 7.277-1.895 1.522-4.367 2.263-7.571 2.263zm.121-13.098c-2.242 0-4.368 2.356-4.368 5.562 0 1.37.349 2.558.984 3.42.713.97 1.755 1.463 3.093 1.463 2.242 0 4.283-2.326 4.283-5.336 0-.666-.075-1.29-.223-1.865-.58-2.262-2.066-3.244-3.77-3.244z" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/ainewstodayorg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/directory" className="text-muted-foreground hover:text-foreground transition-colors">Browse Tools</Link></li>
              <li><Link to="/categories" className="text-muted-foreground hover:text-foreground transition-colors">Categories</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Featured</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Submit a Tool</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 AI News Today Tools. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
