import { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import SEOHead from "@/components/SEOHead";
import AdSpace from "@/components/AdSpace";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import { mockTools } from "@/data/mockData";

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTools = mockTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || tool.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AI Tools Directory",
    "description": "Browse our complete directory of AI-powered tools and services",
    "url": "https://tools.ainewstoday.org/directory"
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background">
        <SEOHead
          title="Browse AI Tools Directory"
          description="Explore our complete directory of AI-powered tools and services. Find the perfect AI solution for writing, design, data analytics, productivity, and more."
          canonical="/directory"
          schema={schema}
        />
        <Navigation />
        
        <div className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-foreground mb-4">Browse All AI Tools</h1>
            <p className="text-muted-foreground text-lg">Explore our complete directory of AI-powered solutions</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search tools by name, tags, or category..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Writing & Content">Writing & Content</SelectItem>
                    <SelectItem value="Image & Design">Image & Design</SelectItem>
                    <SelectItem value="Data & Analytics">Data & Analytics</SelectItem>
                    <SelectItem value="Productivity">Productivity</SelectItem>
                    <SelectItem value="Code & Development">Code & Development</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" className="w-full md:w-auto">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>

              <div className="mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTools.map((tool) => (
                  <ToolCard key={tool.id} {...tool} />
                ))}
              </div>

              {filteredTools.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-xl text-muted-foreground mb-4">No tools found matching your criteria</p>
                  <Button variant="outline" onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <AdSpace size="sidebar" />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Directory;
