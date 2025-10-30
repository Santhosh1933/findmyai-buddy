import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Users, Sparkles, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About AI Tools Finder</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Your trusted guide to discovering and comparing the best AI tools for every use case
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In the rapidly evolving world of artificial intelligence, finding the right tool for your needs can be overwhelming. 
              AI Tools Finder was created to solve this problem by providing a comprehensive, curated directory of AI-powered solutions 
              across all categories.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that everyone should have access to the tools they need to work smarter, create better, and achieve more. 
              Our platform is built on research, powered by community feedback, and designed to help you make informed decisions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 space-y-3">
                <div className="p-3 rounded-lg bg-accent/10 text-accent w-fit">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Curated Directory</h3>
                <p className="text-muted-foreground">
                  Every tool is carefully researched and reviewed to ensure quality and relevance.
                </p>
              </Card>

              <Card className="p-6 space-y-3">
                <div className="p-3 rounded-lg bg-accent/10 text-accent w-fit">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Community Reviews</h3>
                <p className="text-muted-foreground">
                  Real user experiences and ratings to help you make the right choice.
                </p>
              </Card>

              <Card className="p-6 space-y-3">
                <div className="p-3 rounded-lg bg-accent/10 text-accent w-fit">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Updated Daily</h3>
                <p className="text-muted-foreground">
                  New tools are added regularly to keep our directory fresh and comprehensive.
                </p>
              </Card>

              <Card className="p-6 space-y-3">
                <div className="p-3 rounded-lg bg-accent/10 text-accent w-fit">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">Expert Insights</h3>
                <p className="text-muted-foreground">
                  Detailed comparisons and use-case recommendations from our team of experts.
                </p>
              </Card>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">How It Works</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Discover</h3>
                  <p className="text-muted-foreground">Browse our directory or search for specific tools by category, use case, or feature.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Compare</h3>
                  <p className="text-muted-foreground">Read detailed descriptions, user reviews, and see real ratings to compare your options.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Choose</h3>
                  <p className="text-muted-foreground">Make an informed decision and start using the perfect AI tool for your needs.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
