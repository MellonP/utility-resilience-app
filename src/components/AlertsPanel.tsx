import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, BellOff, Clock, AlertTriangle } from "lucide-react";
import { useState } from "react";

interface Alert {
  id: string;
  type: "water" | "electricity";
  severity: "high" | "medium" | "low";
  title: string;
  message: string;
  time: string;
  area: string;
}

const AlertsPanel = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const alerts: Alert[] = [
    {
      id: "1",
      type: "electricity",
      severity: "high",
      title: "Load Shedding Alert",
      message: "Stage 2 load shedding scheduled for 18:00 - 22:00",
      time: "15 min ago",
      area: "Ward 7, Piet Retief"
    },
    {
      id: "2",
      type: "water",
      severity: "medium",
      title: "Water Maintenance",
      message: "Planned maintenance on main water line. Expected completion: 16:00",
      time: "1 hour ago",
      area: "CBD Area"
    },
    {
      id: "3",
      type: "electricity",
      severity: "low",
      title: "Restored Service",
      message: "Power has been restored to affected areas",
      time: "2 hours ago",
      area: "Fairview"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-outage text-outage-foreground";
      case "medium":
        return "bg-electricity text-electricity-foreground";
      case "low":
        return "bg-operational text-operational-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-accent" />
            Active Alerts
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setNotificationsEnabled(!notificationsEnabled)}
          >
            {notificationsEnabled ? (
              <Bell className="h-4 w-4 text-primary" />
            ) : (
              <BellOff className="h-4 w-4 text-muted-foreground" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div key={alert.id} className="border-l-4 border-l-primary pl-4 py-2">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-sm">{alert.title}</h4>
                    <Badge className={getSeverityColor(alert.severity)} variant="secondary">
                      {alert.severity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{alert.message}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {alert.time}
                    </span>
                    <span>{alert.area}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {alerts.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <Bell className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p>No active alerts</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;