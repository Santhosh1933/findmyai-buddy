import { HelmetProvider } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Sparkles, Target, Users, TrendingUp } from "lucide-react";

const About = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About AI News Today Tools",
    "description": "Learn about AI News Today Tools - your trusted source for discovering the best AI tools and services.",
    "url": "https://tools.ainewstoday.org/about"
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background">
        <SEOHead
          title="About Us"
          description="Learn about AI News Today Tools, your trusted source for discovering the best AI-powered tools and services."
          canonical="/about"
          schema={schema}
        />
        <Navigation />
        
        <div className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About AI News Today Tools</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Your trusted source for discovering the best AI-powered tools and services
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="h-8 w-8 text-accent" />
                Our Mission
              </h2>
              <Card className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At AI News Today Tools, we're on a mission to help individuals and businesses navigate the rapidly evolving world of artificial intelligence.
                </p>
              </Card>
            </section>
          </div>
        </div>

        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default About;
