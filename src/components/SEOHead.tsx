import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  schema?: object;
}

const SEOHead = ({ 
  title, 
  description, 
  canonical, 
  ogType = "website",
  ogImage = "https://tools.ainewstoday.org/og-image.jpg",
  schema 
}: SEOHeadProps) => {
  const fullTitle = `${title} | AI News Today Tools`;
  const siteUrl = "https://tools.ainewstoday.org";
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  
  // Ensure description is trimmed to 2 lines (roughly 160 chars for social sharing)
  const socialDescription = description.length > 160 
    ? description.substring(0, 157) + '...' 
    : description;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph - Optimized for WhatsApp, Facebook, LinkedIn */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={socialDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="AI News Today Tools" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card - Optimized for Twitter/X sharing */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={socialDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* WhatsApp specific - uses OG tags above */}
      <meta property="og:image:type" content="image/jpeg" />
      
      {/* Schema.org markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
