import { Shield, CloudRain, Sun, Smartphone, Wifi, ThermometerSnowflake, MapPin } from "lucide-react";

const triggers = [
  {
    emoji: "🌧️",
    label: "Heavy Rain",
    status: "Active" as const,
    description: "Payout triggered when rainfall exceeds 30mm/hr in your zone",
    threshold: ">30mm/hr",
    lastChecked: "2 min ago",
  },
  {
    emoji: "☀️",
    label: "Heatwave",
    status: "Monitoring" as const,
    description: "Payout triggered when temperature exceeds 42°C",
    threshold: ">42°C",
    lastChecked: "5 min ago",
  },
  {
    emoji: "📱",
    label: "App Outage",
    status: "Active" as const,
    description: "Payout triggered during platform-wide outages over 2 hours",
    threshold: ">2 hours",
    lastChecked: "1 min ago",
  },
];

const zones = [
  { name: "Koramangala", status: "Clear", color: "text-success" },
  { name: "HSR Layout", status: "Rain Alert", color: "text-warning" },
  { name: "Indiranagar", status: "Clear", color: "text-success" },
];

const ActiveProtection = () => {
  return (
    <div className="p-6 lg:p-8 animate-slide-up">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Active Protection</h1>
          <p className="text-sm text-muted-foreground">Real-time trigger monitoring</p>
        </div>
        <div className="flex items-center gap-2 bg-primary/8 text-primary px-4 py-2 rounded-xl">
          <Shield className="w-4 h-4" />
          <span className="text-sm font-medium">All systems operational</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main triggers */}
        <div className="lg:col-span-2 space-y-4">
          {triggers.map((t) => (
            <div key={t.label} className="card-elevated-lg">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-3xl shrink-0">
                  {t.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-semibold text-foreground text-lg">{t.label}</h3>
                    <span className={t.status === "Active" ? "badge-active" : "badge-monitoring"}>
                      {t.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{t.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="bg-secondary px-2.5 py-1 rounded-lg font-medium">Threshold: {t.threshold}</span>
                    <span>Last checked: {t.lastChecked}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Side panel - zone status */}
        <div className="space-y-4">
          <div className="card-elevated-lg">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-primary" />
              <h3 className="font-semibold text-foreground">Your Zones</h3>
            </div>
            <div className="space-y-3">
              {zones.map((z) => (
                <div key={z.name} className="flex items-center justify-between py-2.5 border-b border-border last:border-0">
                  <span className="text-sm text-foreground">{z.name}</span>
                  <span className={`text-xs font-semibold ${z.color}`}>{z.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-elevated-lg">
            <h3 className="font-semibold text-foreground mb-3">Coverage Window</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Active hours</span>
                <span className="font-medium text-foreground">8 AM – 11 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Next renewal</span>
                <span className="font-medium text-foreground">Mon, 24 Mar</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Plan type</span>
                <span className="font-medium text-primary">Standard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveProtection;
