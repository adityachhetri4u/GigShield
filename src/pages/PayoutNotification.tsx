import { useNavigate } from "react-router-dom";
import { CheckCircle2, MapPin, CreditCard, AlertTriangle, ArrowRight, Clock } from "lucide-react";

const timeline = [
  { icon: AlertTriangle, label: "Alert detected", desc: "Heavy rain detected in HSR Layout", time: "2:15 PM", done: true },
  { icon: MapPin, label: "Location verified", desc: "GPS confirmed you were in affected zone", time: "2:16 PM", done: true },
  { icon: CreditCard, label: "Payment sent", desc: "₹400 credited to your bank account", time: "2:18 PM", done: true },
];

const pastPayouts = [
  { amount: "₹400", reason: "Heavy Rain", date: "Today, 2:18 PM", status: "Credited" },
  { amount: "₹600", reason: "App Outage", date: "12 Mar, 4:45 PM", status: "Credited" },
  { amount: "₹350", reason: "Heatwave", date: "5 Mar, 1:20 PM", status: "Credited" },
];

const PayoutNotification = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 lg:p-8 animate-slide-up">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Payouts</h1>
        <p className="text-sm text-muted-foreground">Your claim history and latest payout</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left - latest payout */}
        <div className="lg:col-span-2 space-y-6">
          {/* Success Card */}
          <div className="card-elevated-lg">
            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--success)/.12)] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-8 h-8 text-success" />
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">₹400 Credited 🎉</p>
                <p className="text-muted-foreground text-sm mt-1">Due to Heavy Rain Disruption</p>
              </div>
            </div>

            <h3 className="section-title">Claim Timeline</h3>
            <div className="space-y-0">
              {timeline.map((step, i) => (
                <div key={step.label} className="flex items-start gap-4 relative">
                  {i < timeline.length - 1 && (
                    <div className="absolute left-[17px] top-[36px] w-px h-8 bg-border" />
                  )}
                  <div className="w-9 h-9 rounded-full bg-[hsl(var(--success)/.12)] flex items-center justify-center shrink-0">
                    <step.icon className="w-4 h-4 text-success" />
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-foreground">{step.label}</p>
                      <span className="text-xs text-muted-foreground">{step.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - history */}
        <div>
          <div className="card-elevated-lg">
            <h3 className="font-semibold text-foreground mb-4">Payout History</h3>
            <div className="space-y-4">
              {pastPayouts.map((p, i) => (
                <div key={i} className="flex items-center gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="w-10 h-10 rounded-xl bg-[hsl(var(--success)/.08)] flex items-center justify-center shrink-0">
                    <CreditCard className="w-4 h-4 text-success" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-foreground">{p.amount}</p>
                      <span className="badge-active text-[10px]">{p.status}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{p.reason} · {p.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-elevated mt-4 text-center py-6">
            <p className="text-2xl font-bold text-foreground">₹1,350</p>
            <p className="text-xs text-muted-foreground mt-1">Total Claims Received</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayoutNotification;
