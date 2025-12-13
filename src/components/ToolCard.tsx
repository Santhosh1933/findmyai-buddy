import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface ToolCardProps {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  categories: string[];
  thumbnailUrl: string;
  featured?: boolean;
  toolOfTheWeek?: boolean;
  pricing?: string;
}

const ToolCard = ({ id, name, slug, tagline, categories, thumbnailUrl, featured, toolOfTheWeek, pricing }: ToolCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border bg-card">
      <Link to={`/tools/${slug}`}>
        <div className="relative h-48 overflow-hidden bg-muted">
          <img 
            src={thumbnailUrl} 
            alt={`${name} - AI Tool`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {toolOfTheWeek && (
            <Badge className="absolute top-3 right-3 bg-gradient-to-r from-accent to-primary text-white font-semibold">
              <Sparkles className="h-3 w-3 mr-1" />
              Tool of the Week
            </Badge>
          )}
          {featured && !toolOfTheWeek && (
            <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
              <Sparkles className="h-3 w-3 mr-1" />
              Featured
            </Badge>
          )}
        </div>
        
        <div className="p-5 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-lg text-card-foreground truncate group-hover:text-accent transition-colors">
                {name}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                {tagline}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {categories.slice(0, 2).map((cat) => (
              <Badge key={cat} variant="secondary" className="text-xs">
                {cat}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2 border-t">
            {pricing && (
              <span className="text-sm text-muted-foreground">{pricing}</span>
            )}
            
            <Button variant="ghost" size="sm" className="text-accent hover:text-accent/90 hover:bg-accent/10 ml-auto">
              View Details
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ToolCard;