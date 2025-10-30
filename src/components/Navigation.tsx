import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Sparkles } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <Sparkles className="h-6 w-6 text-accent" />
          AI Tools Finder
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/directory" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Browse Tools
          </Link>
          <Link to="/categories" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Categories
          </Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button size="sm" className="bg-accent hover:bg-accent/90">
            Submit Tool
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
