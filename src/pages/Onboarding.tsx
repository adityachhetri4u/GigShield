import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Phone } from "lucide-react";
import deliveryRider from "@/assets/delivery-rider.png";

const Onboarding = () => {
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left panel - branding */}
      <div className="hidden lg:flex flex-1 bg-primary/5 flex-col items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/.08),transparent_70%)]" />
        <div className="relative z-10 text-center max-w-md">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 mx-auto animate-fade-in-slow">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <img
            src={deliveryRider}
            alt="Delivery rider protected in rain"
            className="w-80 h-auto mx-auto mb-8 animate-slide-up"
          />
          <h1 className="text-3xl font-bold text-foreground leading-tight animate-slide-up-delay-1" style={{ lineHeight: 1.15 }}>
            Protect Your Daily Income
          </h1>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed animate-slide-up-delay-2">
            AI-powered income protection for delivery workers. Stay covered against rain, heat & outages.
          </p>

          <div className="flex items-center justify-center gap-6 mt-10 animate-slide-up-delay-3">
            {[
              { val: "50K+", label: "Workers Protected" },
              { val: "₹2.1Cr", label: "Claims Paid" },
              { val: "<3min", label: "Avg Payout Time" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-xl font-bold text-primary">{s.val}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel - form */}
      <div className="flex-1 lg:max-w-lg flex flex-col items-center justify-center px-6 lg:px-16">
        <div className="w-full max-w-sm">
          <div className="lg:hidden mb-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 mx-auto animate-fade-in-slow">
              <Shield className="w-7 h-7 text-primary" />
            </div>
            <img src={deliveryRider} alt="Delivery rider" className="w-48 h-auto mx-auto mb-6 animate-slide-up" />
          </div>

          <div className="animate-slide-up-delay-1">
            <h2 className="text-2xl font-bold text-foreground lg:text-left text-center">Get Started</h2>
            <p className="text-muted-foreground mt-2 lg:text-left text-center text-sm">
              Enter your phone number to protect your income
            </p>
          </div>

          <div className="mt-8 animate-slide-up-delay-2">
            <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
            <div className="flex items-center gap-3 bg-card rounded-2xl border border-border px-4 py-3.5 focus-within:ring-2 focus-within:ring-primary/20 transition-shadow">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground font-medium text-sm">+91</span>
              <div className="w-px h-5 bg-border" />
              <input
                type="tel"
                placeholder="Enter your number"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground/60 text-base"
              />
            </div>
          </div>

          <button onClick={() => navigate("/dashboard")} className="btn-primary mt-6 animate-slide-up-delay-3">
            Get Started
          </button>

          <p className="text-xs text-muted-foreground text-center mt-4 animate-slide-up-delay-3">
            By continuing, you agree to our Terms & Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
