import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  toolCount: number;
  slug: string;
}

const CategoryCard = ({ name, description, icon: Icon, toolCount, slug }: CategoryCardProps) => {
  // Use the category name for filtering since that's what the Directory page uses
  return (
    <Link to={`/directory?category=${encodeURIComponent(name)}`}>
      <Card className="group p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-accent/50 cursor-pointer bg-card">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-110">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="font-semibold text-lg text-card-foreground group-hover:text-accent transition-colors">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
            <p className="text-xs text-muted-foreground font-medium">
              {toolCount} tools available
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
