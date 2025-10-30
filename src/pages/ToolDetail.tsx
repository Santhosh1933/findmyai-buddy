import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Star, ExternalLink, ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";
import { mockTools } from "@/data/mockData";

const ToolDetail = () => {
  const { id } = useParams();
  const tool = mockTools.find(t => t.id === id);

  if (!tool) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Tool not found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to directory
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h1 className="text-4xl font-bold text-foreground">{tool.name}</h1>
                    {tool.featured && (
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
                <Badge variant="secondary">{tool.category}</Badge>
              </div>
            </div>

            <Card className="overflow-hidden">
              <img 
                src={tool.image} 
                alt={tool.name}
                className="w-full h-96 object-cover"
              />
            </Card>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">About {tool.name}</h2>
                <p className="text-muted-foreground leading-relaxed">{tool.description}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
                <div className="grid grid-cols-2 gap-3">
                  {tool.useCases.map((useCase) => (
                    <div key={useCase} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-sm font-medium">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>

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
                        This tool has completely transformed my workflow. Highly recommended for anyone in {tool.category.toLowerCase()}.
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

              <Button className="w-full bg-accent hover:bg-accent/90" size="lg">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Website
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ToolDetail;
