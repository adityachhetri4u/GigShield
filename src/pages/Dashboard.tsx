import { useNavigate } from "react-router-dom";
import {
  Shield, CloudRain, Sun, Smartphone, ChevronRight, TrendingUp,
  ArrowUpRight, Clock, CheckCircle2, AlertTriangle, Calendar, Zap,
} from "lucide-react";

const recentActivity = [
  { icon: CheckCircle2, label: "Payout credited — ₹400", time: "2 hours ago", color: "text-success" },
  { icon: AlertTriangle, label: "Heavy rain alert in your zone", time: "3 hours ago", color: "text-warning" },
  { icon: Clock, label: "Weekly premium updated to ₹62", time: "1 day ago", color: "text-accent" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 lg:p-8 animate-slide-up">
      {/* Greeting row */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-sm text-muted-foreground">Good morning</p>
          <h1 className="text-2xl font-bold text-foreground">Hi Ravi 👋</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="badge-active text-sm">
            <span className="w-2 h-2 rounded-full bg-success" />
            Coverage Active
          </span>
        </div>
      </div>

      {/* Top stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 animate-slide-up-delay-1">
        {[
          { label: "Current Plan", value: "Standard", sub: "₹55/week", icon: Shield, accent: "bg-primary/10 text-primary" },
          { label: "Max Coverage", value: "₹1,500", sub: "per event", icon: Zap, accent: "bg-accent/15 text-accent" },
          { label: "Avg Daily Income", value: "₹800", sub: "+12% this week", icon: TrendingUp, accent: "bg-[hsl(var(--success)/.12)] text-success" },
          { label: "Total Claims", value: "₹2,400", sub: "3 payouts", icon: Calendar, accent: "bg-[hsl(var(--warning)/.12)] text-warning" },
        ].map((stat) => (
          <div key={stat.label} className="card-elevated flex items-start gap-4">
            <div className={`w-11 h-11 rounded-xl ${stat.accent} flex items-center justify-center shrink-0`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className="text-xl font-bold text-foreground mt-0.5">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slide-up-delay-2">
        {/* Left column — protection + quick actions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Protected Against */}
          <div className="card-elevated-lg">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <h2 className="font-semibold text-foreground">You're Protected Against</h2>
              </div>
              <button
                onClick={() => navigate("/protection")}
                className="text-xs font-medium text-primary flex items-center gap-1 hover:underline"
              >
                View All <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: CloudRain, label: "Heavy Rain", status: "Active", emoji: "🌧️", bg: "bg-accent/10" },
                { icon: Sun, label: "Heatwave", status: "Monitoring", emoji: "☀️", bg: "bg-[hsl(var(--warning)/.08)]" },
                { icon: Smartphone, label: "App Outage", status: "Active", emoji: "📱", bg: "bg-primary/8" },
              ].map((item) => (
                <div key={item.label} className={`flex flex-col items-center gap-2.5 py-5 rounded-xl ${item.bg} transition-colors`}>
                  <span className="text-3xl">{item.emoji}</span>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                  <span className={item.status === "Active" ? "badge-active" : "badge-monitoring"}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { label: "Change Plan", path: "/plans", icon: LayoutGridIcon },
              { label: "View Payouts", path: "/payout", icon: CreditCardIcon },
              { label: "Weekly Update", path: "/updates", icon: FileTextIcon },
            ].map((action) => (
              <button
                key={action.label}
                onClick={() => navigate(action.path)}
                className="card-elevated flex items-center gap-3 py-4 px-4 hover:shadow-md transition-shadow active:scale-[0.98]"
              >
                <action.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{action.label}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto" />
              </button>
            ))}
          </div>
        </div>

        {/* Right column — activity feed + earnings chart placeholder */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <div className="card-elevated-lg">
            <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0`}>
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Earnings Snapshot */}
          <div className="card-elevated-lg">
            <h3 className="font-semibold text-foreground mb-4">This Week</h3>
            <div className="space-y-3">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => {
                const vals = [720, 850, 640, 920, 780, 1100, 0];
                const max = 1100;
                const pct = (vals[i] / max) * 100;
                const isToday = i === 5;
                return (
                  <div key={day} className="flex items-center gap-3">
                    <span className={`text-xs w-7 ${isToday ? "font-bold text-primary" : "text-muted-foreground"}`}>{day}</span>
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${isToday ? "bg-primary" : "bg-primary/40"}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className={`text-xs tabular-nums w-10 text-right ${isToday ? "font-bold text-foreground" : "text-muted-foreground"}`}>
                      {vals[i] > 0 ? `₹${vals[i]}` : "—"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple icon re-exports to avoid import clutter
import { LayoutGrid as LayoutGridIcon, CreditCard as CreditCardIcon, FileText as FileTextIcon } from "lucide-react";

export default Dashboard;
