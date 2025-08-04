import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Layers, Search, Filter } from "lucide-react";
import mapImage from "@/assets/map-view.jpg";

const MapView = () => {
  const outageZones = [
    { id: "1", type: "water", area: "Ward 7", severity: "high", affected: 1200 },
    { id: "2", type: "electricity", area: "Fairview", severity: "medium", affected: 800 },
    { id: "3", type: "water", area: "CBD", severity: "low", affected: 300 }
  ];

  const resources = [
    { id: "1", type: "water-truck", location: "Community Hall", available: true },
    { id: "2", type: "generator", location: "Shopping Center", available: false },
    { id: "3", type: "charging-station", location: "Library", available: true }
  ];

  return (
    <div className="space-y-4">
      {/* Map Controls */}
      <Card className="shadow-card">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Utility Status Map
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Layers className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pb-3">
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="text-water border-water">
              💧 Water Issues
            </Badge>
            <Badge variant="outline" className="text-electricity border-electricity">
              ⚡ Electricity Issues
            </Badge>
            <Badge variant="outline" className="text-operational border-operational">
              🚛 Resources Available
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Map */}
      <Card className="shadow-card">
        <CardContent className="p-0">
          <div className="relative">
            <img 
              src={mapImage} 
              alt="Piet Retief Utility Map" 
              className="w-full h-64 sm:h-96 object-cover rounded-lg"
            />
            
            {/* Overlay with outage indicators */}
            <div className="absolute inset-0 p-4">
              {/* Water outage indicator */}
              <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-water text-water-foreground rounded-full p-2 shadow-lg animate-pulse">
                  <span className="text-xs font-bold">💧 W7</span>
                </div>
              </div>
              
              {/* Electricity outage indicator */}
              <div className="absolute top-1/2 right-1/3 transform translate-x-1/2 -translate-y-1/2">
                <div className="bg-electricity text-electricity-foreground rounded-full p-2 shadow-lg animate-pulse">
                  <span className="text-xs font-bold">⚡ FV</span>
                </div>
              </div>
              
              {/* Resource indicators */}
              <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="bg-operational text-operational-foreground rounded-full p-2 shadow-lg">
                  <span className="text-xs font-bold">🚛</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Active Outages */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Active Outages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {outageZones.map((zone) => (
              <div key={zone.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    zone.type === 'water' ? 'bg-water' : 'bg-electricity'
                  }`} />
                  <div>
                    <div className="font-medium">{zone.area}</div>
                    <div className="text-sm text-muted-foreground">
                      {zone.affected} people affected
                    </div>
                  </div>
                </div>
                <Badge 
                  variant="secondary"
                  className={
                    zone.severity === 'high' ? 'bg-outage text-outage-foreground' :
                    zone.severity === 'medium' ? 'bg-electricity text-electricity-foreground' :
                    'bg-operational text-operational-foreground'
                  }
                >
                  {zone.severity}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Available Resources */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Available Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {resources.map((resource) => (
              <div key={resource.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    resource.available ? 'bg-operational' : 'bg-outage'
                  }`} />
                  <div>
                    <div className="font-medium capitalize">
                      {resource.type.replace('-', ' ')}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {resource.location}
                    </div>
                  </div>
                </div>
                <Badge 
                  variant={resource.available ? "secondary" : "outline"}
                  className={resource.available ? 
                    'bg-operational text-operational-foreground' : 
                    'bg-outage text-outage-foreground'
                  }
                >
                  {resource.available ? 'Available' : 'In Use'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MapView;