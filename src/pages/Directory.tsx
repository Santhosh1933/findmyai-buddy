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
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, SlidersHorizontal } from "lucide-react";
import { useTools } from "@/hooks/useTools";

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const toolsPerPage = 16; // 4 columns x 4 rows

  const { data: tools = [], isLoading } = useTools();

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || tool.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredTools.length / toolsPerPage);
  const startIndex = (currentPage - 1) * toolsPerPage;
  const endIndex = startIndex + toolsPerPage;
  const currentTools = filteredTools.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

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
          <AdSpace position="directory-top" fallbackSize="large" className="mb-8" />
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search tools by name, tags, or category..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
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

            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                {isLoading ? (
                  "Loading..."
                ) : (
                  `Showing ${startIndex + 1}-${Math.min(endIndex, filteredTools.length)} of ${filteredTools.length} ${filteredTools.length === 1 ? 'tool' : 'tools'}`
                )}
              </p>
              {totalPages > 1 && (
                <p className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </p>
              )}
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {[...Array(16)].map((_, i) => (
                  <Skeleton key={i} className="h-64 w-full" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {currentTools.map((tool) => (
                  <ToolCard key={tool.id} {...tool} />
                ))}
              </div>
            )}

            {!isLoading && filteredTools.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground mb-4">No tools found matching your criteria</p>
                <Button variant="outline" onClick={() => { setSearchTerm(""); setSelectedCategory("all"); setCurrentPage(1); }}>
                  Clear Filters
                </Button>
              </div>
            )}

            {totalPages > 1 && (
              <Pagination className="mb-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  
                  {[...Array(totalPages)].map((_, i) => {
                    const pageNum = i + 1;
                    if (
                      pageNum === 1 ||
                      pageNum === totalPages ||
                      (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                    ) {
                      return (
                        <PaginationItem key={pageNum}>
                          <PaginationLink
                            onClick={() => setCurrentPage(pageNum)}
                            isActive={currentPage === pageNum}
                            className="cursor-pointer"
                          >
                            {pageNum}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    } else if (
                      pageNum === currentPage - 2 ||
                      pageNum === currentPage + 2
                    ) {
                      return (
                        <PaginationItem key={pageNum}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      );
                    }
                    return null;
                  })}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}

            <AdSpace position="directory-bottom" fallbackSize="large" />
          </div>
        </div>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Directory;
