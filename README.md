# UK Funds Selection Advisor 🇬🇧 (Trustnet Data Edition)

An intelligent, interactive asset allocation and fund advisory web application tailored specifically for the **UK retail investment market** (ISAs, SIPPs, and General Investment Accounts), integrated with authentic data from **Trustnet.com (FE fundinfo)**.

---

## 🌟 Overview & Purpose

The **UK Funds Selection Advisor** enables self-directed UK investors to model, evaluate, and compare tailored **Active** and **Passive** fund portfolios aligned with their age, retirement timeline, capital, and risk appetite.

### Key Capabilities:
- **Demographic & Goal Modeling**: Collects Current Age, Retirement Age (dynamic Horizon calculation), Initial Lump Sum (£), Monthly Regular Contribution (£), Risk Profile (Low, Medium, High), and Target Annual Growth (%).
- **Dual Strategy Portfolios**: Generates dedicated **Active Fund Strategy** and **Passive Index Strategy** models, each calibrated to exactly 100% portfolio allocation.
- **Trustnet.com (FE fundinfo) Authentic Data**:
  - Official **Investment Association (IA) Sector** classifications.
  - **FE fundinfo Crown Ratings** (1 to 5 Crowns based on alpha, volatility, and consistency).
  - **FE fundinfo Risk Scores** (calibrated against FTSE 100 benchmark = 100).
  - **Trustnet Citicodes** and ISIN identifiers.
  - Direct click-through links to official **Trustnet factsheets**.
  - Total fund size (AUM in £ Billions/Millions), lead manager tenure, and inception years.
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
- **Side-by-Side Strategy Matrix**: Evaluates terminal capital, fee impact (OCF), FE Risk Scores, manager tenure, downside volatility cushion, and tracking accuracy.
- **UK Tax Wrapper Tracking**: Displays annual ISA (£20,000) and SIPP (£60,000) allowances.
- **Data Export & Print**: 1-click CSV export and print-ready PDF stylesheet for client presentations or personal records.

---

## 📊 Authentic Trustnet Fund Catalog

| Strategy | Fund Name | Citicode | IA Sector | FE Crowns | FE Risk Score | Manager & Tenure | 15-Yr Return | Benchmark Index | Trustnet Link |
|---|---|---|---|---|---|---|---|---|---|
| **Active** | Fundsmith Equity Fund (Class I) | `B41Y` | IA Global | 👑👑👑👑👑 | 102 | Terry Smith (14.5 yrs) | 14.8% p.a. | MSCI World (+3.3% Alpha) | [Factsheet](https://www.trustnet.com/factsheets/O/b41y/fundsmith-equity-fund) |
| **Active** | Rathbone Global Opportunities | `B7FQ` | IA Global | 👑👑👑👑👑 | 110 | James Thomson (21 yrs) | 13.5% p.a. | FTSE World (+2.3% Alpha) | [Factsheet](https://www.trustnet.com/factsheets/o/b7fq/rathbone-global-opportunities-fund) |
| **Active** | Royal London Sustainable Leaders | `B06V` | IA UK All Companies | 👑👑👑👑 | 96 | Mike Fox (21 yrs) | 10.4% p.a. | FTSE All-Share (+3.9% Alpha) | [Factsheet](https://www.trustnet.com/factsheets/o/b06v/royal-london-sustainable-leaders-trust) |
| **Active** | Liontrust Special Situations | `B57H` | IA UK All Companies | 👑👑👑👑 | 95 | Cross & Fosh (19 yrs) | 9.8% p.a. | FTSE All-Share (+3.3% Alpha) | [Factsheet](https://www.trustnet.com/factsheets/o/b57h/liontrust-special-situations-fund) |
| **Active** | Artemis Strategic Bond Fund | `B2PL` | IA Sterling Strategic Bond | 👑👑👑👑 | 38 | Valenzuela & Young (14 yrs) | 4.5% p.a. | IA Strategic Bond (+1.3% Alpha) | [Factsheet](https://www.trustnet.com/factsheets/o/b2pl/artemis-strategic-bond-fund) |
| **Active** | Trojan Fund (Troy Asset Mgmt) | `3424` | IA Flexible Investment | 👑👑👑👑👑 | 42 | Sebastian Lyon (23 yrs) | 5.8% p.a. | UK CPI + 2% (+1.3% Alpha) | [Factsheet](https://www.trustnet.com/factsheets/o/3424/trojan-fund) |
| **Passive** | Vanguard FTSE All-World ETF (VWRP) | `VWRG` | IA Global | Indexed | 105 | Vanguard Index Team (12 yrs) | 11.6% p.a. | FTSE All-World (-0.04% diff) | [Factsheet](https://www.trustnet.com/factsheets/e/vwrp/vanguard-ftse-all-world-ucits-etf-usd-acc) |
| **Passive** | iShares Core S&P 500 ETF (CSPX) | `IUSA` | IA North America | Indexed | 112 | BlackRock Index Team (14 yrs) | 14.2% p.a. | S&P 500 (-0.03% diff) | [Factsheet](https://www.trustnet.com/factsheets/e/cspx/ishares-core-sp-500-ucits-etf-usd-acc) |
| **Passive** | Vanguard LifeStrategy 60% Equity | `N76X` | IA Mixed Investment 40-85% | Indexed | 68 | Vanguard Multi-Asset Team (13 yrs) | 7.6% p.a. | Custom 60/40 (-0.05% diff) | [Factsheet](https://www.trustnet.com/factsheets/t/n76x/vanguard-lifestrategy-60-equity-a-shares-acc) |
| **Passive** | Vanguard LifeStrategy 20% Equity | `N76T` | IA Mixed Investment 0-35% | Indexed | 26 | Vanguard Multi-Asset Team (13 yrs) | 4.2% p.a. | Custom 20/80 (-0.05% diff) | [Factsheet](https://www.trustnet.com/factsheets/t/n76t/vanguard-lifestrategy-20-equity-a-shares-acc) |
| **Passive** | iShares Core Global Agg Bond (AGBP)| `AGBP` | IA Global Mixed Bond | Indexed | 32 | BlackRock Index Team (15 yrs) | 3.2% p.a. | Bloomberg Global Agg (-0.08% diff) | [Factsheet](https://www.trustnet.com/factsheets/e/agbp/ishares-core-global-aggregate-bond-ucits-etf-gbp-hedged-dist) |
| **Passive** | Royal London Short Term Money Market| `N63Q` | IA Short Term Money Market | 👑👑👑👑👑 | 2 | Johnston & Cole (16 yrs) | 2.1% p.a. | SONIA (+0.05% diff) | [Factsheet](https://www.trustnet.com/factsheets/o/n63q/royal-london-short-term-money-market-fund) |

---

## 🚀 How to Run

### Option 1: 1-Click Launch (Windows)
Double-click `run_funds_advisor.bat` in the workspace root, or `uk-funds-advisor/run_advisor.bat`. It will start the server and open your default browser at:
```
http://localhost:8080
```

### Option 2: Run via Python Server
```bash
cd "uk-funds-advisor"
python server.py
```

### Option 3: Direct Browser Launch (Zero Installation)
Simply double-click `index.html` to run offline in any browser.

---

## ⚖️ UK Compliance & FCA Educational Disclaimer
This software is provided for educational and analytical comparison purposes only. It does not constitute personal financial, tax, or investment advice under the Financial Conduct Authority (FCA). Capital is at risk; investment values and yields fluctuate.
