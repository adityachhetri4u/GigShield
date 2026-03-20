import { ArrowRight, CloudRain, PauseCircle, TrendingUp, Calendar, Info } from "lucide-react";

const weeklyHistory = [
  { week: "Mar 10–16", premium: "₹55", change: null },
  { week: "Mar 17–23", premium: "₹62", change: "+₹7" },
  { week: "Mar 24–30", premium: "₹58", change: "-₹4" },
];

const WeeklyUpdate = () => {
  return (
    <div className="p-6 lg:p-8 animate-slide-up">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Weekly Update</h1>
        <p className="text-sm text-muted-foreground">Premium adjustments and coverage changes</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Update Card */}
          <div className="card-elevated-lg animate-slide-up-delay-1">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <CloudRain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-bold text-foreground text-lg">Premium updated for next week</h2>
                <p className="text-sm text-muted-foreground mt-1">Adjusted based on weather forecast in your area</p>
              </div>
            </div>

            <div className="flex items-center gap-6 bg-secondary rounded-xl p-5">
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">Old Premium</p>
                <p className="text-2xl font-bold text-muted-foreground line-through">₹55</p>
              </div>
              <ArrowRight className="w-6 h-6 text-primary shrink-0" />
              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-1">New Premium</p>
                <p className="text-2xl font-bold text-foreground">₹62</p>
              </div>
              <div className="ml-auto bg-[hsl(var(--warning)/.12)] text-warning text-sm font-semibold px-4 py-2 rounded-xl">
                +₹7
              </div>
            </div>
          </div>

          {/* Reason */}
          <div className="card-elevated animate-slide-up-delay-2">
            <h3 className="section-title">Why the change?</h3>
            <div className="flex items-start gap-3">
              <span className="text-3xl">🌧️</span>
              <div>
                <p className="text-sm text-foreground font-medium">Heavy rain forecast expected</p>
                <p className="text-sm text-muted-foreground mt-1">Your delivery zones (HSR Layout, Koramangala) show 80% chance of heavy rainfall this week, increasing your protection coverage.</p>
              </div>
            </div>
          </div>

          {/* Pause */}
          <button className="w-full flex items-center gap-4 card-elevated active:scale-[0.98] transition-transform animate-slide-up-delay-3">
            <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
              <PauseCircle className="w-5 h-5 text-destructive" />
            </div>
            <div className="text-left">
              <p className="font-medium text-foreground">Pause Coverage</p>
              <p className="text-sm text-muted-foreground">Skip protection for next week and save your premium</p>
            </div>
          </button>
        </div>

        {/* Right - premium history */}
        <div>
          <div className="card-elevated-lg">
            <h3 className="font-semibold text-foreground mb-4">Premium History</h3>
            <div className="space-y-3">
              {weeklyHistory.map((w) => (
                <div key={w.week} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div>
                    <p className="text-sm font-medium text-foreground">{w.week}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">{w.premium}</span>
                    {w.change && (
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-lg ${
                        w.change.startsWith("+")
                          ? "bg-[hsl(var(--warning)/.12)] text-warning"
                          : "bg-[hsl(var(--success)/.12)] text-success"
                      }`}>
                        {w.change}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-elevated mt-4">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-4 h-4 text-accent" />
              <h4 className="font-medium text-foreground text-sm">How pricing works</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your premium is adjusted weekly based on weather forecasts, historical data, and your coverage zone. You always pay fair rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyUpdate;
