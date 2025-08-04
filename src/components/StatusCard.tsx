import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusCardProps {
  type: "water" | "electricity";
  status: "operational" | "outage" | "scheduled";
  location: string;
  lastUpdate: string;
  affectedAreas?: string[];
}

const StatusCard = ({ type, status, location, lastUpdate, affectedAreas }: StatusCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "operational";
      case "outage":
        return "outage";
      case "scheduled":
        return "electricity";
      default:
        return "muted";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "operational":
        return "Operational";
      case "outage":
        return "Outage";
      case "scheduled":
        return "Scheduled";
      default:
        return "Unknown";
    }
  };

  const Icon = type === "water" ? Droplets : Zap;

  return (
    <Card className="shadow-card hover:shadow-utility transition-shadow duration-200">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon className={cn(
              "h-5 w-5",
              type === "water" ? "text-water" : "text-electricity"
            )} />
            <CardTitle className="text-lg capitalize">{type}</CardTitle>
          </div>
          <Badge 
            variant="secondary" 
            className={cn(
              "text-xs",
              status === "operational" && "bg-operational text-operational-foreground",
              status === "outage" && "bg-outage text-outage-foreground",
              status === "scheduled" && "bg-electricity text-electricity-foreground"
            )}
          >
            {getStatusText(status)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            <strong>Location:</strong> {location}
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Last Update:</strong> {lastUpdate}
          </p>
          {affectedAreas && affectedAreas.length > 0 && (
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                <strong>Affected Areas:</strong>
              </p>
              <div className="flex flex-wrap gap-1">
                {affectedAreas.map((area, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusCard;