import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import StatusCard from "@/components/StatusCard";
import QuickReport from "@/components/QuickReport";
import AlertsPanel from "@/components/AlertsPanel";
import CommunityFeed from "@/components/CommunityFeed";
import StatsDashboard from "@/components/StatsDashboard";
import MapView from "@/components/MapView";
import heroImage from "@/assets/hero-utility.jpg";
import communityImage from "@/assets/community-report.jpg";
import { Droplets, Zap, Users, BarChart3, MapPin, MessageSquare } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "map":
        return <MapView />;
      case "reports":
        return (
          <div className="space-y-6">
            <QuickReport />
            <AlertsPanel />
          </div>
        );
      case "community":
        return <CommunityFeed />;
      case "dashboard":
        return <StatsDashboard />;
      default:
        return (
          <div className="space-y-6">
            {/* Hero Section */}
            <Card className="relative overflow-hidden shadow-utility">
              <div className="absolute inset-0">
                <img 
                  src={heroImage} 
                  alt="Piet Retief Community" 
                  className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-hero" />
              </div>
              <CardContent className="relative p-8 text-center">
                <h1 className="text-4xl font-bold text-primary-foreground mb-4">
                  Piet Retief Resilience Hub
                </h1>
                <p className="text-xl text-primary-foreground/90 mb-6">
                  Community-powered utility tracking for water and electricity
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="hero" size="lg">
                    <MapPin className="h-5 w-5 mr-2" />
                    View Map
                  </Button>
                  <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    Report Issue
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Current Status Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StatusCard
                type="water"
                status="operational"
                location="Piet Retief Central"
                lastUpdate="5 minutes ago"
                affectedAreas={[]}
              />
              <StatusCard
                type="electricity"
                status="outage"
                location="Ward 7, Fairview"
                lastUpdate="15 minutes ago"
                affectedAreas={["Themba Street", "Nelson Mandela Drive", "Church Street"]}
              />
            </div>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button 
                    variant="water" 
                    className="h-20 flex-col"
                    onClick={() => setActiveTab("reports")}
                  >
                    <Droplets className="h-6 w-6 mb-2" />
                    <span className="text-sm">Report Water Issue</span>
                  </Button>
                  <Button 
                    variant="electricity" 
                    className="h-20 flex-col"
                    onClick={() => setActiveTab("reports")}
                  >
                    <Zap className="h-6 w-6 mb-2" />
                    <span className="text-sm">Report Power Issue</span>
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="h-20 flex-col"
                    onClick={() => setActiveTab("map")}
                  >
                    <MapPin className="h-6 w-6 mb-2" />
                    <span className="text-sm">View Map</span>
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="h-20 flex-col"
                    onClick={() => setActiveTab("community")}
                  >
                    <MessageSquare className="h-6 w-6 mb-2" />
                    <span className="text-sm">Community</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Alerts */}
            <AlertsPanel />

            {/* Community Spotlight */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-secondary" />
                  Community Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-6">
                  <img 
                    src={communityImage} 
                    alt="Community Reporting" 
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">Empowering Our Community</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Join thousands of Piet Retief residents who actively report and track utility issues. 
                      Together, we're building a more resilient community.
                    </p>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">1,247</div>
                        <div className="text-xs text-muted-foreground">Active Users</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-secondary">856</div>
                        <div className="text-xs text-muted-foreground">Reports Filed</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">92%</div>
                        <div className="text-xs text-muted-foreground">Issues Resolved</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Droplets className="h-4 w-4 text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold">Resilience Hub</h1>
            </div>
            <div className="flex gap-2">
              {[
                { id: "overview", label: "Home", icon: Users },
                { id: "map", label: "Map", icon: MapPin },
                { id: "reports", label: "Report", icon: Zap },
                { id: "community", label: "Community", icon: MessageSquare },
                { id: "dashboard", label: "Stats", icon: BarChart3 }
              ].map(({ id, label, icon: Icon }) => (
                <Button
                  key={id}
                  variant={activeTab === id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveTab(id)}
                  className="hidden sm:flex"
                >
                  <Icon className="h-4 w-4 mr-1" />
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        {renderContent()}
      </div>

      {/* Navigation */}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
