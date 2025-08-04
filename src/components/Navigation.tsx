import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, AlertTriangle, MessageSquare, BarChart3, Settings, Home } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: MapPin, label: "Map", path: "/map" },
    { icon: AlertTriangle, label: "Report", path: "/report" },
    { icon: MessageSquare, label: "Community", path: "/community" },
    { icon: BarChart3, label: "Dashboard", path: "/dashboard" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <Card className="fixed bottom-4 left-4 right-4 p-2 shadow-utility z-50">
      <div className="flex justify-around items-center">
        {navItems.map((item) => (
          <Button
            key={item.path}
            variant="ghost"
            size="sm"
            className="flex-col h-auto py-2 px-3"
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span className="text-xs">{item.label}</span>
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default Navigation;