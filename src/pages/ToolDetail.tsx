import { useParams, Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import AdSpace from "@/components/AdSpace";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, ExternalLink, ArrowLeft, Sparkles, Tag } from "lucide-react";
import { mockTools } from "@/data/mockData";

const ToolDetail = () => {
  const { slug } = useParams();
  const tool = mockTools.find(t => t.slug === slug);

  if (!tool) {
    return (
      <HelmetProvider>
        <div className="min-h-screen bg-background">
          <SEOHead
            title="Tool Not Found"
            description="The AI tool you're looking for could not be found."
            canonical={`/tools/${slug}`}
          />
          <Navigation />
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-2xl font-bold mb-4">Tool not found</h1>
            <Link to="/">
              <Button>Return Home</Button>
            </Link>
          </div>
          <Footer />
        </div>
      </HelmetProvider>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "description": tool.description,
    "url": tool.officialUrl,
    "image": tool.thumbnailUrl,
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": tool.pricing.includes("Free") ? "0" : "varies",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": tool.rating.toString(),
      "reviewCount": tool.reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background">
        <SEOHead
          title={`${tool.name} - ${tool.tagline}`}
          description={tool.description}
          canonical={`/tools/${tool.slug}`}
          ogType="article"
          schema={schema}
        />
        <Navigation />
        
        <div className="container mx-auto px-4 py-8">
          <Link to="/directory" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to directory
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <h1 className="text-4xl font-bold text-foreground">{tool.name}</h1>
                      {tool.toolOfTheWeek && (
                        <Badge className="bg-gradient-to-r from-accent to-primary text-white font-semibold">
                          <Sparkles className="h-3 w-3 mr-1" />
                          Tool of the Week
                        </Badge>
                      )}
                      {tool.featured && !tool.toolOfTheWeek && (
                        <Badge className="bg-accent text-accent-foreground">
                          <Sparkles className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <p className="text-xl text-muted-foreground">{tool.tagline}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(tool.rating)
                              ? "fill-accent text-accent"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-semibold">{tool.rating}</span>
                    <span className="text-muted-foreground">({tool.reviewCount} reviews)</span>
                  </div>
                  {tool.categories.map((category) => (
                    <Badge key={category} variant="secondary">{category}</Badge>
                  ))}
                </div>
              </div>

              <Card className="overflow-hidden">
                <img 
                  src={tool.thumbnailUrl} 
                  alt={`${tool.name} - AI Tool Screenshot`}
                  className="w-full h-96 object-cover"
                />
              </Card>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About {tool.name}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">{tool.description}</p>
                  <p className="text-muted-foreground leading-relaxed">{tool.about}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Tags</h2>
                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="gap-1">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <AdSpace size="medium" />

                <div>
                  <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
                  <div className="space-y-4">
                    {[1, 2, 3].map((review) => (
                      <Card key={review} className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="font-semibold">User {review}</p>
                            <p className="text-sm text-muted-foreground">2 days ago</p>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          This tool has completely transformed my workflow. Highly recommended for anyone in {tool.categories[0].toLowerCase()}.
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 space-y-4 sticky top-24">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Pricing</p>
                  <p className="font-semibold text-lg">{tool.pricing}</p>
                </div>

                <Button 
                  className="w-full bg-accent hover:bg-accent/90" 
                  size="lg"
                  asChild
                >
                  <a href={tool.officialUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Website
                  </a>
                </Button>

                <Button variant="outline" className="w-full" size="lg">
                  <Star className="h-4 w-4 mr-2" />
                  Save to Favorites
                </Button>

                <div className="pt-4 border-t space-y-3">
                  <h3 className="font-semibold">Share this tool</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">Twitter</Button>
                    <Button variant="outline" size="sm" className="flex-1">LinkedIn</Button>
                    <Button variant="outline" size="sm" className="flex-1">Copy</Button>
                  </div>
                </div>
              </Card>

              <AdSpace size="sidebar" />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default ToolDetail;
