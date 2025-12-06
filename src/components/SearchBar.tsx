import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Sparkles } from "lucide-react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/directory?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleTagClick = (tag: string) => {
    navigate(`/directory?search=${encodeURIComponent(tag)}`);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input 
          type="search"
          placeholder="Search for AI tools... (e.g., content writing, image generation)"
          className="pl-12 pr-32 h-14 text-base border-2 focus-visible:ring-accent"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button 
          type="submit"
          size="lg"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent hover:bg-accent/90"
        >
          <Sparkles className="h-4 w-4 mr-2" />
          Search
        </Button>
      </form>
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        <span className="text-sm text-muted-foreground">Popular:</span>
        {["ChatGPT", "Midjourney", "Writing", "Video Editing", "Data Analysis"].map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => handleTagClick(tag)}
            className="text-sm px-3 py-1 rounded-full bg-secondary hover:bg-accent/10 hover:text-accent transition-colors"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
