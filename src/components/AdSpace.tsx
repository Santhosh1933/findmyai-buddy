import { Card } from "@/components/ui/card";

interface AdSpaceProps {
  size: "small" | "medium" | "large" | "sidebar";
  className?: string;
}

const AdSpace = ({ size, className = "" }: AdSpaceProps) => {
  const dimensions = {
    small: "h-24",
    medium: "h-48",
    large: "h-64",
    sidebar: "h-96"
  };

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
