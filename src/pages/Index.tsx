import { HelmetProvider } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import ToolCard from "@/components/ToolCard";
import CategoryCard from "@/components/CategoryCard";
import SEOHead from "@/components/SEOHead";
import AdSpace from "@/components/AdSpace";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Zap, Users, PenTool, Image, Database, Code, Video, Briefcase } from "lucide-react";
import { useTools, useFeaturedTools, useToolOfTheWeek } from "@/hooks/useTools";
import { useCategories } from "@/hooks/useCategories";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const { data: tools = [], isLoading: toolsLoading } = useTools();
  const { data: featuredTools = [] } = useFeaturedTools();
  const { data: toolOfTheWeek } = useToolOfTheWeek();
  const { data: categories = [], isLoading: categoriesLoading } = useCategories();
  
  const toolsOfTheWeek = toolOfTheWeek ? [toolOfTheWeek] : [];
  const categoryIcons = [PenTool, Image, Database, Briefcase, Video, Code];

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI News Today Tools",
    "alternateName": "AI Tools Directory",
    "url": "https://tools.ainewstoday.org",
    "description": "Discover the best AI tools and services for writing, design, automation, data analytics, and more.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://tools.ainewstoday.org/directory?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background">
        <SEOHead
          title="Discover the Best AI Tools & Services"
          description="Find the perfect AI tool for your needs. Browse, compare, and discover AI-powered solutions for writing, design, automation, data analytics, and more."
          canonical="/"
          schema={schema}
        />
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-28">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <Badge className="bg-accent/20 text-accent-foreground border-accent/30 mb-4">
                <Sparkles className="h-3 w-3 mr-1" />
                Discover 500+ AI Tools
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Find the Perfect AI Tool in Seconds
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto">
                Browse, compare, and discover AI-powered solutions for writing, design, automation, and more.
              </p>
              <div className="pt-4">
                <SearchBar />
              </div>
              <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <span>Updated Daily</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-accent" />
                  <span>10k+ Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-accent" />
                  <span>Free to Use</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Space */}
        <div className="container mx-auto px-4 py-8">
          <AdSpace position="header" fallbackSize="large" />
        </div>

        {/* Tools of the Week */}
        {toolsOfTheWeek.length > 0 && (
          <section className="container mx-auto px-4 py-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
                  <Sparkles className="h-8 w-8 text-accent" />
                  Tools of the Week
                </h2>
                <p className="text-muted-foreground mt-2">Our top picks that you absolutely should check out</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {toolsOfTheWeek.map((tool) => (
                <div key={tool.id} className="animate-slide-up">
                  <ToolCard {...tool} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Featured Tools */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-6">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground">Featured AI Tools</h2>
                  <p className="text-muted-foreground mt-2">Hand-picked tools that are making waves</p>
                </div>
                <Button variant="outline">View All</Button>
              </div>
              {toolsLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-64 w-full" />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredTools.map((tool) => (
                    <div key={tool.id} className="animate-slide-up">
                      <ToolCard {...tool} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <AdSpace position="sidebar" fallbackSize="sidebar" />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">Browse by Category</h2>
              <p className="text-muted-foreground text-lg">Find tools organized by what you need to accomplish</p>
            </div>
            {categoriesLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="h-32 w-full" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                  <div key={category.slug} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <CategoryCard {...category} icon={categoryIcons[index]} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Ad Space */}
        <div className="container mx-auto px-4 py-8">
          <AdSpace position="inline" fallbackSize="medium" />
        </div>

        {/* Latest Tools */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Latest Additions</h2>
              <p className="text-muted-foreground mt-2">Newly discovered tools worth checking out</p>
            </div>
            <Button variant="outline">See More</Button>
          </div>
          {toolsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="h-64 w-full" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {tools.slice(0, 8).map((tool) => (
                <ToolCard key={tool.id} {...tool} />
              ))}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Have an AI Tool to Share?</h2>
              <p className="text-xl text-primary-foreground/80">
                Join our growing directory and help others discover your AI solution
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Submit Your Tool
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground hover:text-primary-foreground">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
