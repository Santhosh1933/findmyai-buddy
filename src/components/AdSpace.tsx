import { Card } from "@/components/ui/card";
import { useAdByPosition } from "@/hooks/useAds";

interface AdSpaceProps {
  position: string;
  className?: string;
  fallbackSize?: "small" | "medium" | "large" | "sidebar";
}

const AdSpace = ({ position, className = "", fallbackSize = "medium" }: AdSpaceProps) => {
  const { data: ad, isLoading } = useAdByPosition(position);

  const dimensions = {
    small: "h-24",
    medium: "h-48",
    large: "h-64",
    sidebar: "h-96"
  };

  // Don't render if ad is disabled or not found (after loading)
  if (!isLoading && !ad) {
    return null;
  }

  const size = ad?.size ?? fallbackSize;

  if (ad?.banner && ad.banner !== "/placeholder.svg") {
    return (
      <a 
        href={ad.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`block ${className}`}
      >
        <Card className={`${dimensions[size]} overflow-hidden bg-ad-bg border-ad-border`}>
          <img 
            src={ad.banner} 
            alt={ad.alt} 
            className="w-full h-full object-cover"
          />
        </Card>
      </a>
    );
  }

  return (
    <Card className={`${dimensions[size]} ${className} bg-ad-bg border-ad-border flex items-center justify-center`}>
      <div className="text-center space-y-2">
        <p className="text-sm text-muted-foreground font-medium">Advertisement</p>
        <p className="text-xs text-muted-foreground">Space available</p>
      </div>
    </Card>
  );
};

export default AdSpace;
