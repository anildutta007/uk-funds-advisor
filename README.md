# UK Funds Selection Advisor 🇬🇧

An intelligent, interactive asset allocation and fund advisory web application tailored specifically for the **UK retail investment market** (ISAs, SIPPs, and General Investment Accounts).

---

## 🌟 Overview & Purpose

The **UK Funds Selection Advisor** enables self-directed UK investors to model, evaluate, and compare tailored **Active** and **Passive** fund portfolios aligned with their age, retirement timeline, capital, and risk appetite.

### Key Capabilities:
- **Demographic & Goal Modeling**: Collects Current Age, Retirement Age (dynamic Horizon calculation), Initial Lump Sum (£), Monthly Regular Contribution (£), Risk Profile (Low, Medium, High), and Target Annual Growth (%).
- **Dual Strategy Portfolios**: Generates dedicated **Active Fund Strategy** and **Passive Index Strategy** models, each calibrated to exactly 100% portfolio allocation.
- **UK Market Fund Database**: Features authentic UK-domiciled and UK-registered OEICs, Unit Trusts, and UCITS ETFs across Vanguard, BlackRock iShares, Fundsmith, Liontrust, Royal London, Artemis, and Trojan.
- **Deep Fund Intelligence**: Displays for every fund:
  - Overall money invested (Fund AUM in £ Billions)
  - Current Lead Manager and tenure length (years)
  - Fund Inception Year & operational track record
  - Investment sector & asset class
  - Benchmark Index and performance tracking indicator (Alpha or Tracking Difference)
  - Expected future value at retirement based on 15-year historical average compound growth.
- **Interactive Visual Graphs (Chart.js)**:
  1. **Compound Wealth Trajectory**: Multi-curve time series tracking Active vs. Passive vs. Target vs. Principal from current age to retirement.
  2. **Asset Allocation Donut Chart**: Visual fund split percentages.
  3. **Expected Value at Retirement by Fund**: Future terminal capital breakdown.
  4. **Benchmark Tracking / Alpha Indicator**: Historical 15-year return vs. benchmark index comparison.
- **Side-by-Side Strategy Matrix**: Evaluates terminal capital, fee impact (OCF), manager tenure, downside volatility cushion, and tracking accuracy.
- **UK Tax Wrapper Tracking**: Displays annual ISA (£20,000) and SIPP (£60,000) allowances.
- **Data Export & Print**: 1-click CSV export and print-ready PDF stylesheet for client presentations or personal records.

---

## 🚀 How to Run

### Option 1: 1-Click Launch (Windows)
Double-click `run_funds_advisor.bat` in the root workspace folder, or `uk-funds-advisor/run_advisor.bat`. It will start the server and open your default web browser at:
```
http://localhost:8080
```

### Option 2: Run via Python Server
From a terminal:
```bash
cd "uk-funds-advisor"
python server.py
```

### Option 3: Direct Browser Launch (Zero Installation)
Because the application is built with modern vanilla JavaScript, Tailwind CSS, and Chart.js via CDN, you can also simply double-click `index.html` to run it offline in Chrome, Edge, Firefox, or Safari!

---

## 🧮 Mathematical Model

### 1. Lump Sum Compounding
$$V_{\text{lump}} = P_0 \times (1 + r)^t$$
Where:
- $P_0$ = Initial allocated lump sum (£)
- $r$ = Fund 15-year average annualised return rate
- $t$ = Investment horizon (Retirement Age - Current Age)

### 2. Monthly Annuity Compounding
$$V_{\text{monthly}} = PMT \times \frac{(1 + r/12)^{12t} - 1}{r/12}$$
Where:
- $PMT$ = Monthly allocated contribution (£)
- $12t$ = Total contribution months

### 3. Total Future Expected Value
$$V_{\text{total}} = V_{\text{lump}} + V_{\text{monthly}}$$

---

## 📊 Included UK Funds

| Strategy | Fund Name | Sector | Manager Tenure | Inception | 15-Yr Return | Benchmark Index |
|---|---|---|---|---|---|---|
| **Active** | Fundsmith Equity Fund (Class I) | Global Large-Cap | Terry Smith (14 yrs) | 2010 | 14.8% p.a. | MSCI World Index (+3.3% Alpha) |
| **Active** | Rathbone Global Opportunities | Global Growth | James Thomson (21 yrs) | 2001 | 13.5% p.a. | FTSE World Index (+2.3% Alpha) |
| **Active** | Royal London Sustainable Leaders | UK/Global ESG | Mike Fox (21 yrs) | 1990 | 10.4% p.a. | FTSE All-Share (+3.9% Alpha) |
| **Active** | Liontrust Special Situations | UK All Companies | Cross & Fosh (19 yrs) | 2005 | 9.8% p.a. | FTSE All-Share (+3.3% Alpha) |
| **Active** | Artemis Strategic Bond Fund | Sterling Bond | Valenzuela & Young (14 yrs) | 2010 | 4.5% p.a. | IA Strategic Bond (+1.3% Alpha) |
| **Active** | Trojan Fund (Troy Asset Mgmt) | Capital Preservation | Sebastian Lyon (23 yrs) | 2001 | 5.8% p.a. | UK CPI + 2% (+1.3% Alpha) |
| **Passive** | Vanguard FTSE All-World ETF (VWRP) | Global All-Cap | Vanguard Index Team (12 yrs) | 2012 | 11.6% p.a. | FTSE All-World (-0.04% diff) |
| **Passive** | iShares Core S&P 500 ETF (CSPX) | US Large-Cap | BlackRock Index Team (14 yrs) | 2010 | 14.2% p.a. | S&P 500 (-0.03% diff) |
| **Passive** | Vanguard LifeStrategy 60% Equity | Multi-Asset Balanced | Vanguard Multi-Asset Team (13 yrs) | 2011 | 7.6% p.a. | Custom 60/40 (-0.05% diff) |
| **Passive** | Vanguard LifeStrategy 20% Equity | Multi-Asset Defensive | Vanguard Multi-Asset Team (13 yrs) | 2011 | 4.2% p.a. | Custom 20/80 (-0.05% diff) |
| **Passive** | iShares Core Global Agg Bond (AGBP) | Global Bonds (Hedged) | BlackRock Index Team (15 yrs) | 2017 | 3.2% p.a. | Bloomberg Global Agg (-0.08% diff) |
| **Passive** | Vanguard FTSE UK All-Share Index | UK All Companies | Vanguard Index Team (15 yrs) | 2009 | 6.7% p.a. | FTSE All-Share (-0.06% diff) |

---

## ⚖️ UK Compliance & FCA Educational Disclaimer
This software is provided for educational and analytical comparison purposes only. It does not constitute personal financial, tax, or investment advice under the Financial Conduct Authority (FCA). Capital is at risk; investment values and yields fluctuate.
