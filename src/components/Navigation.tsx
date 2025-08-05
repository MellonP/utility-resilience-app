import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, AlertTriangle, MessageSquare, BarChart3, Settings, Home } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const navItems = [
    { icon: Home, label: "Home", tab: "overview" },
    { icon: MapPin, label: "Map", tab: "map" },
    { icon: AlertTriangle, label: "Report", tab: "reports" },
    { icon: MessageSquare, label: "Community", tab: "community" },
    { icon: BarChart3, label: "Dashboard", tab: "dashboard" },
    { icon: Settings, label: "Settings", tab: "settings" },
  ];

  return (
    <Card className="fixed bottom-4 left-4 right-4 p-2 shadow-utility z-50">
      <div className="flex justify-around items-center">
        {navItems.map((item) => (
          <Button
            key={item.tab}
            variant={activeTab === item.tab ? "default" : "ghost"}
            size="sm"
            className="flex-col h-auto py-2 px-3"
            onClick={() => onTabChange(item.tab)}
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