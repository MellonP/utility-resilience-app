import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Droplets, Zap, Users, Clock } from "lucide-react";

const StatsDashboard = () => {
  const stats = [
    {
      title: "Water Reliability",
      value: "85%",
      change: "+5%",
      trend: "up",
      icon: Droplets,
      description: "Average uptime this month"
    },
    {
      title: "Electricity Reliability", 
      value: "72%",
      change: "-8%",
      trend: "down",
      icon: Zap,
      description: "Average uptime this month"
    },
    {
      title: "Active Reports",
      value: "23",
      change: "+12",
      trend: "up",
      icon: Users,
      description: "Community reports today"
    },
    {
      title: "Avg Response Time",
      value: "4.2h",
      change: "-1.3h",
      trend: "up",
      icon: Clock,
      description: "Municipal response time"
    }
  ];

  const outageHistory = [
    { area: "Ward 7", water: 15, electricity: 28 },
    { area: "Ward 5", water: 8, electricity: 35 },
    { area: "CBD", water: 12, electricity: 22 },
    { area: "Fairview", water: 6, electricity: 18 },
    { area: "Industrial", water: 20, electricity: 45 }
  ];

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <stat.icon className={`h-5 w-5 ${
                  stat.icon === Droplets ? 'text-water' : 
                  stat.icon === Zap ? 'text-electricity' : 
                  'text-primary'
                }`} />
                <div className={`flex items-center gap-1 text-sm ${
                  stat.trend === 'up' ? 'text-operational' : 'text-outage'
                }`}>
                  {stat.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {stat.change}
                </div>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Outage History by Area */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Outage Hours by Area (This Month)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {outageHistory.map((area, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{area.area}</span>
                  <span className="text-muted-foreground">
                    Water: {area.water}h | Electricity: {area.electricity}h
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-water">Water</span>
                      <span>{area.water}h</span>
                    </div>
                    <Progress value={(area.water / 50) * 100} className="h-2 bg-water/20">
                      <div className="bg-water h-full rounded-full transition-all" 
                           style={{ width: `${(area.water / 50) * 100}%` }} />
                    </Progress>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-electricity">Electricity</span>
                      <span>{area.electricity}h</span>
                    </div>
                    <Progress value={(area.electricity / 50) * 100} className="h-2 bg-electricity/20">
                      <div className="bg-electricity h-full rounded-full transition-all" 
                           style={{ width: `${(area.electricity / 50) * 100}%` }} />
                    </Progress>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsDashboard;