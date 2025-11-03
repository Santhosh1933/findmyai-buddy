import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeftRight, X, Star, ExternalLink, Tag } from "lucide-react";
import { Tool } from "@/data/mockData";

interface CompareToolsProps {
  currentTool: Tool;
  categoryTools: Tool[];
}

const CompareTools = ({ currentTool, categoryTools }: CompareToolsProps) => {
  const [compareWith, setCompareWith] = useState<Tool | null>(null);
  const [showComparison, setShowComparison] = useState(false);

  const handleCompare = (toolId: string) => {
    const selectedTool = categoryTools.find(t => t.id === toolId);
    if (selectedTool) {
      setCompareWith(selectedTool);
      setShowComparison(true);
    }
  };

  const closeComparison = () => {
    setShowComparison(false);
    setCompareWith(null);
  };

  if (!showComparison || !compareWith) {
    return (
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <ArrowLeftRight className="h-5 w-5 text-primary" />
          Compare with Similar Tools
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Compare {currentTool.name} with other tools in the same category
        </p>
        <Select onValueChange={handleCompare}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a tool to compare" />
          </SelectTrigger>
          <SelectContent>
            {categoryTools
              .filter(tool => tool.id !== currentTool.id)
              .map((tool) => (
                <SelectItem key={tool.id} value={tool.id}>
                  {tool.name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <ArrowLeftRight className="h-5 w-5 text-primary" />
          Tool Comparison
        </h3>
        <Button variant="ghost" size="sm" onClick={closeComparison}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Current Tool */}
        <div className="space-y-4">
          <div className="relative">
            <img 
              src={currentTool.thumbnailUrl} 
              alt={currentTool.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <Badge className="absolute top-2 right-2 bg-primary">Current</Badge>
          </div>
          <div>
            <h4 className="font-semibold text-lg">{currentTool.name}</h4>
            <p className="text-sm text-muted-foreground">{currentTool.tagline}</p>
          </div>
          
          <div className="space-y-3 pt-2 border-t">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Rating</p>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="font-medium">{currentTool.rating}</span>
                <span className="text-sm text-muted-foreground">({currentTool.reviewCount} reviews)</span>
              </div>
            </div>

            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Pricing</p>
              <p className="text-sm font-medium">{currentTool.pricing}</p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Categories</p>
              <div className="flex flex-wrap gap-1">
                {currentTool.categories.map((cat) => (
                  <Badge key={cat} variant="secondary" className="text-xs">{cat}</Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Tags</p>
              <div className="flex flex-wrap gap-1">
                {currentTool.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs gap-1">
                    <Tag className="h-3 w-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Description</p>
              <p className="text-sm">{currentTool.description}</p>
            </div>

            <Button className="w-full mt-2" asChild>
              <a href={currentTool.officialUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Website
              </a>
            </Button>
          </div>
        </div>

        {/* Compare With Tool */}
        <div className="space-y-4">
          <div className="relative">
            <img 
              src={compareWith.thumbnailUrl} 
              alt={compareWith.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <Badge className="absolute top-2 right-2 bg-accent">Comparing</Badge>
          </div>
          <div>
            <h4 className="font-semibold text-lg">{compareWith.name}</h4>
            <p className="text-sm text-muted-foreground">{compareWith.tagline}</p>
          </div>
          
          <div className="space-y-3 pt-2 border-t">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Rating</p>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="font-medium">{compareWith.rating}</span>
                <span className="text-sm text-muted-foreground">({compareWith.reviewCount} reviews)</span>
              </div>
            </div>

            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Pricing</p>
              <p className="text-sm font-medium">{compareWith.pricing}</p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Categories</p>
              <div className="flex flex-wrap gap-1">
                {compareWith.categories.map((cat) => (
                  <Badge key={cat} variant="secondary" className="text-xs">{cat}</Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Tags</p>
              <div className="flex flex-wrap gap-1">
                {compareWith.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs gap-1">
                    <Tag className="h-3 w-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Description</p>
              <p className="text-sm">{compareWith.description}</p>
            </div>

            <Button className="w-full mt-2" variant="outline" asChild>
              <a href={compareWith.officialUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Website
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CompareTools;
