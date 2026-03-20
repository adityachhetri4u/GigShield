import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Check, Shield, Info } from "lucide-react";

const plans = [
  { id: "flex", name: "Flex", max: "₹800", multiplier: "1x", price: "₹35", period: "/week", recommended: false, features: ["Rain coverage", "Basic support", "Manual claims"] },
  { id: "standard", name: "Standard", max: "₹1,500", multiplier: "1.5x", price: "₹55", period: "/week", recommended: true, features: ["Rain + Heat coverage", "Auto claims", "Priority support", "Weekly reports"] },
  { id: "pro", name: "Pro", max: "₹2,500", multiplier: "2.5x", price: "₹95", period: "/week", recommended: false, features: ["All triggers covered", "Instant auto claims", "24/7 support", "Earnings optimizer", "Multi-zone coverage"] },
];

const PlanSelection = () => {
  const [selected, setSelected] = useState("standard");
  const navigate = useNavigate();

  return (
    <div className="p-6 lg:p-8 animate-slide-up">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Choose Your Plan</h1>
        <p className="text-sm text-muted-foreground">Select the coverage that fits your needs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8 animate-slide-up-delay-1">
        {plans.map((plan) => (
          <button
            key={plan.id}
            onClick={() => setSelected(plan.id)}
            className={`relative w-full text-left rounded-2xl p-6 transition-all duration-200 active:scale-[0.98] ${
              selected === plan.id
                ? "bg-primary/5 border-2 border-primary shadow-[0_4px_24px_rgba(46,139,139,0.15)]"
                : "bg-card border-2 border-transparent shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            }`}
          >
            {plan.recommended && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  <Star className="w-3 h-3" fill="currentColor" />
                  Recommended
                </span>
              </div>
            )}

            <div className="flex items-center justify-between mb-4 mt-1">
              <h3 className="font-bold text-foreground text-xl">{plan.name}</h3>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                selected === plan.id ? "border-primary bg-primary" : "border-border"
              }`}>
                {selected === plan.id && <Check className="w-3.5 h-3.5 text-primary-foreground" />}
              </div>
            </div>

            <div className="mb-5">
              <span className="text-3xl font-bold text-foreground">{plan.price}</span>
              <span className="text-muted-foreground text-sm">{plan.period}</span>
            </div>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs bg-secondary px-2.5 py-1 rounded-lg font-medium text-muted-foreground">{plan.multiplier} multiplier</span>
              <span className="text-sm font-semibold text-primary">Max {plan.max}</span>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-border">
              {plan.features.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-success shrink-0" />
                  <span className="text-sm text-foreground">{f}</span>
                </div>
              ))}
            </div>
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between max-w-md animate-slide-up-delay-2">
        <button onClick={() => navigate("/dashboard")} className="btn-primary max-w-xs">
          Confirm Plan
        </button>
      </div>
    </div>
  );
};

export default PlanSelection;
