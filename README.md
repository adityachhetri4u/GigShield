# RakshaPay
**AI-Powered Parametric Income Protection for Food Delivery Partners**

Guidewire DEVTrails 2026 | University Hackathon  

---

##  Overview  
RakshaPay is an AI-driven **parametric insurance platform** designed for food delivery gig workers (e.g., Zomato, Swiggy partners) who lack financial safety nets.

Unlike traditional insurance,RakshaPay provides **instant, automatic payouts** based on real-world triggers like weather disruptions, platform outages, or civic restrictions — **no claims process required**.

> Built for the gig workers who keep our cities fed.

---

##  Problem Statement  
Food delivery workers depend entirely on daily orders for income. External disruptions like heavy rain, heatwaves, or app outages can instantly reduce their earnings to zero.

- No financial protection  
- No income stability  
- No fast claim-based insurance solutions  

---

##  Solution  
RakshaPay introduces **parametric income insurance**:

- Trigger-based payouts (no claim filing)
- Instant UPI credit (within ~2 hours)
- AI-powered dynamic pricing
- Fraud-resistant verification system

---

##  How It Works  

###  Onboarding (Under 3 Minutes)
1. Mobile OTP login  
2. Link delivery partner ID (Zomato/Swiggy)  
3. Aadhaar eKYC via DigiLocker  
4. Register UPI  
5. Select plan → policy activated instantly  

---

### Example Use Case (Heavy Rain)
- IMD issues Red Alert  
- Worker location verified via GPS  
- Orders stop → system detects disruption  
- ₹350 payout credited automatically  

---

##  Parametric Triggers  

| Category | Event | Threshold | Income Loss |
|----------|------|----------|------------|
| Environmental | Heavy Rain/Flood | >64.5mm or IMD Alert | 50–80% |
| Environmental | Heatwave | >45°C | 40–60% |
| Environmental | Cyclone | Within 200 km | 100% + 1.5× |
| Platform | App Outage | >30 min | 50–70% |
| Platform | Zone Suspension | Confirmed | 100% |
| Civic | Curfew/Bandh | Verified | 100% |
| Civic | Power Outage | >2 hrs | 50–70% |

---

##  Pricing Model  

###  AI-Based Dynamic Premium  

    Weekly Premium = ₹40 × Risk Score × Earnings Factor

- Adjusted every Sunday using:
  - Weather forecasts  
  - Seasonal patterns  
  - Zone risk  

### Example  
- ₹800/day worker → ₹40/week  
- Rain forecast → ₹55/week  

---

##  Coverage Plans  

| Plan | Multiplier | Max Payout | Ideal For |
|------|-----------|-----------|----------|
| Flex | 0.8× | ₹800/week | Part-time |
| Standard | 1.0× | ₹1500/week | Full-time |
| Pro | 1.2× | ₹2500/week | High earners |

---

###  Payout Formula  

    Payout = Avg Daily Income × Disruption % × Coverage Multiplier

---

##  AI & Fraud Detection  

###  Risk Scoring Engine  
- Model: XGBoost / LightGBM  
- Inputs:
  - Location risk  
  - Historical disruptions  
  - Weather forecasts  

---

###  Fraud Prevention  
Uses **multi-signal validation (5 layers):**
- GPS  
- Cell tower data  
- IP geolocation  
- Motion sensors  
- Platform activity  

#### Fraud Score Actions:
| Score | Action |
|------|--------|
| 0–30 | Instant approval |
| 31–60 | 4-hour delay |
| 61–80 | GPS recheck |
| 81–100 | Manual review |

---

###  Anti-Fraud Intelligence  
- Detects claim clusters using DBSCAN  
- Flags syndicates (>20 claims in 15 mins)  
- Device fingerprint tracking  

---

##  Tech Stack  

### Frontend  
- React (Vite)  
- Tailwind CSS  
- PWA with offline support  

###  Backend  
- Node.js + Express  
- PostgreSQL  
- Redis + Bull Queue  

###  AI/ML  
- Python FastAPI  
- XGBoost / scikit-learn  

###  APIs  
- OpenWeatherMap  
- IMD  
- Google Maps  
- Razorpay  
- DigiLocker  

###  Admin Dashboard  
- React + Recharts  
- Real-time WebSockets  

###  Deployment  
- Docker  
- Render / Railway  
- GitHub Actions CI/CD  

---

##  Out of Scope  
RakshaPay focuses only on **income protection**, not expenses:

-  Health insurance  
-  Vehicle repair  
-  Accident coverage  
-  Theft or fuel costs  

---

## Impact  

- Provides **financial stability** to gig workers  
- Reduces income volatility  
- Encourages safe work behavior during hazards  
- Supports inclusive insurance innovation  

---

##  Future Scope  

- Integration with more gig platforms  
- Personalized risk models  
- Expansion to other gig sectors (ride-sharing, logistics)  
- Partnerships with insurers & government bodies  

---

##  Vision  
To build a **frictionless, intelligent safety net** for India’s gig economy using AI and real-time data.
