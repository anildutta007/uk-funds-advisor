/**
 * UK Funds Selection Advisor - Interactive Financial Advisory Engine
 * Specialised for the UK Retail Investment Market (ISAs, SIPPs, GIAs)
 */

// 1. Comprehensive UK Funds Knowledgebase
const FUNDS_DATA = {
  high: {
    label: "High Risk (Growth / Aggressive)",
    equityAllocation: "95% Equity / 5% Cash",
    active: [
      {
        id: "fundsmith-equity",
        name: "Fundsmith Equity Fund (Class I Acc)",
        ticker: "GB00B41YBW71",
        type: "Active",
        sector: "Global Large-Cap Quality Equity",
        allocationPct: 40,
        aumBillions: 22.8,
        inceptionYear: 2010,
        managerName: "Terry Smith",
        managerTenureYears: 14,
        avgAnnualReturn15Yr: 14.8,
        benchmarkName: "MSCI World Index (£)",
        benchmarkReturn15Yr: 11.5,
        alphaVsBenchmark: 3.3,
        isTrackingIndex: false,
        ocfPct: 0.94,
        rationale: "High-conviction portfolio of ~30 resilient global compounders with high ROCE and strong pricing power. Exceptional multi-cycle alpha."
      },
      {
        id: "rathbone-global-opps",
        name: "Rathbone Global Opportunities Fund (Class S Acc)",
        ticker: "GB00B7FQLN12",
        type: "Active",
        sector: "Global Large-Cap Growth Equity",
        allocationPct: 25,
        aumBillions: 3.92,
        inceptionYear: 2001,
        managerName: "James Thomson",
        managerTenureYears: 21,
        avgAnnualReturn15Yr: 13.5,
        benchmarkName: "FTSE World Index (£)",
        benchmarkReturn15Yr: 11.2,
        alphaVsBenchmark: 2.3,
        isTrackingIndex: false,
        ocfPct: 0.77,
        rationale: "Aggressive growth strategy focusing on unloved market leaders and structural disruptors with a strict multi-stage risk framework."
      },
      {
        id: "liontrust-spec-sit",
        name: "Liontrust Special Situations Fund (Class I Acc)",
        ticker: "GB00B57H4F11",
        type: "Active",
        sector: "UK All Companies",
        allocationPct: 20,
        aumBillions: 3.41,
        inceptionYear: 2005,
        managerName: "Anthony Cross & Julian Fosh",
        managerTenureYears: 19,
        avgAnnualReturn15Yr: 9.8,
        benchmarkName: "FTSE All-Share Index",
        benchmarkReturn15Yr: 6.5,
        alphaVsBenchmark: 3.3,
        isTrackingIndex: false,
        ocfPct: 0.81,
        rationale: "Proprietary Economic Advantage process identifying UK companies with distinctive IP, recurring revenue, and superior distribution networks."
      },
      {
        id: "stewart-asia-pac",
        name: "Stewart Investors Asia Pacific Leaders Fund",
        ticker: "GB0033874768",
        type: "Active",
        sector: "Asia Pacific & Emerging Markets",
        allocationPct: 15,
        aumBillions: 5.10,
        inceptionYear: 2003,
        managerName: "David Gait & Sashi Reddy",
        managerTenureYears: 16,
        avgAnnualReturn15Yr: 8.9,
        benchmarkName: "MSCI AC Asia Pacific ex Japan",
        benchmarkReturn15Yr: 6.8,
        alphaVsBenchmark: 2.1,
        isTrackingIndex: false,
        ocfPct: 0.84,
        rationale: "Provides exposure to developing Asian consumer trends with a strict capital preservation mindset and quality governance filter."
      }
    ],
    passive: [
      {
        id: "vanguard-ftse-all-world",
        name: "Vanguard FTSE All-World UCITS ETF (VWRP / VWRL)",
        ticker: "VWRP",
        type: "Passive",
        sector: "Global Large/Mid-Cap Blend Equity",
        allocationPct: 45,
        aumBillions: 19.5,
        inceptionYear: 2012,
        managerName: "Vanguard Equity Index Group",
        managerTenureYears: 12,
        avgAnnualReturn15Yr: 11.6,
        benchmarkName: "FTSE All-World Index (£)",
        benchmarkReturn15Yr: 11.64,
        alphaVsBenchmark: -0.04,
        isTrackingIndex: true,
        ocfPct: 0.22,
        rationale: "Instant diversification across 3,700+ companies in 50 countries. Ultra-tight tracking error and deep secondary liquidity on LSE."
      },
      {
        id: "ishares-core-sp500",
        name: "iShares Core S&P 500 UCITS ETF (CSPX / CSP1)",
        ticker: "CSPX",
        type: "Passive",
        sector: "US Large-Cap Equity",
        allocationPct: 30,
        aumBillions: 62.0,
        inceptionYear: 2010,
        managerName: "BlackRock Index Investment Team",
        managerTenureYears: 14,
        avgAnnualReturn15Yr: 14.2,
        benchmarkName: "S&P 500 Index (£)",
        benchmarkReturn15Yr: 14.23,
        alphaVsBenchmark: -0.03,
        isTrackingIndex: true,
        ocfPct: 0.07,
        rationale: "Rock-bottom 0.07% OCF tracking the premier US corporate titans. Physical replication with institutional efficiency."
      },
      {
        id: "vanguard-ftse-uk-allshare",
        name: "Vanguard FTSE UK All-Share Index Unit Trust",
        ticker: "GB00B3X7QG63",
        type: "Passive",
        sector: "UK All Companies",
        allocationPct: 15,
        aumBillions: 14.2,
        inceptionYear: 2009,
        managerName: "Vanguard Equity Index Group",
        managerTenureYears: 15,
        avgAnnualReturn15Yr: 6.7,
        benchmarkName: "FTSE All-Share Index",
        benchmarkReturn15Yr: 6.76,
        alphaVsBenchmark: -0.06,
        isTrackingIndex: true,
        ocfPct: 0.06,
        rationale: "Comprehensive exposure to the entire UK investable market (large, mid, and small cap) at an industry-leading 0.06% charge."
      },
      {
        id: "ishares-msci-em-imi",
        name: "iShares Core MSCI Emerging Markets IMI ETF (EMIM)",
        ticker: "EMIM",
        type: "Passive",
        sector: "Global Emerging Markets",
        allocationPct: 10,
        aumBillions: 16.8,
        inceptionYear: 2014,
        managerName: "BlackRock Index Investment Team",
        managerTenureYears: 10,
        avgAnnualReturn15Yr: 6.2,
        benchmarkName: "MSCI Emerging Markets IMI Index",
        benchmarkReturn15Yr: 6.32,
        alphaVsBenchmark: -0.12,
        isTrackingIndex: true,
        ocfPct: 0.18,
        rationale: "Targeted emerging market economic growth across India, Taiwan, Korea, and Brazil, capturing smaller high-growth enterprises."
      }
    ]
  },
  medium: {
    label: "Medium Risk (Balanced Core)",
    equityAllocation: "60% Equity / 40% Bonds & Multi-Asset",
    active: [
      {
        id: "fundsmith-equity-med",
        name: "Fundsmith Equity Fund (Class I Acc)",
        ticker: "GB00B41YBW71",
        type: "Active",
        sector: "Global Large-Cap Equity",
        allocationPct: 35,
        aumBillions: 22.8,
        inceptionYear: 2010,
        managerName: "Terry Smith",
        managerTenureYears: 14,
        avgAnnualReturn15Yr: 14.8,
        benchmarkName: "MSCI World Index (£)",
        benchmarkReturn15Yr: 11.5,
        alphaVsBenchmark: 3.3,
        isTrackingIndex: false,
        ocfPct: 0.94,
        rationale: "Core global equity engine offering proven compounding power and robust defensive moats during inflationary periods."
      },
      {
        id: "royal-london-sustainable-leaders",
        name: "Royal London Sustainable Leaders Trust",
        ticker: "GB00B06VR924",
        type: "Active",
        sector: "UK & Global Blend Equity",
        allocationPct: 25,
        aumBillions: 4.12,
        inceptionYear: 1990,
        managerName: "Mike Fox",
        managerTenureYears: 21,
        avgAnnualReturn15Yr: 10.4,
        benchmarkName: "FTSE All-Share Index",
        benchmarkReturn15Yr: 6.5,
        alphaVsBenchmark: 3.9,
        isTrackingIndex: false,
        ocfPct: 0.76,
        rationale: "Over 20 years of consecutive leadership by Mike Fox combining ESG sustainability screening with rigorous financial strength analysis."
      },
      {
        id: "artemis-strategic-bond",
        name: "Artemis Strategic Bond Fund (Class I Acc)",
        ticker: "GB00B2PLJJ81",
        type: "Active",
        sector: "Sterling Strategic Bond",
        allocationPct: 25,
        aumBillions: 1.64,
        inceptionYear: 2010,
        managerName: "Juan Valenzuela & Rebecca Young",
        managerTenureYears: 14,
        avgAnnualReturn15Yr: 4.5,
        benchmarkName: "IA Sterling Strategic Bond Sector Avg",
        benchmarkReturn15Yr: 3.2,
        alphaVsBenchmark: 1.3,
        isTrackingIndex: false,
        ocfPct: 0.58,
        rationale: "Flexible duration and credit positioning across sovereign gilts and investment-grade corporate bonds to generate yield and cushion equities."
      },
      {
        id: "trojan-fund",
        name: "Trojan Fund (Troy Asset Management - Class O)",
        ticker: "GB0034243732",
        type: "Active",
        sector: "Multi-Asset Capital Preservation",
        allocationPct: 15,
        aumBillions: 5.31,
        inceptionYear: 2001,
        managerName: "Sebastian Lyon & Charlotte Yonge",
        managerTenureYears: 23,
        avgAnnualReturn15Yr: 5.8,
        benchmarkName: "UK CPI + 2%",
        benchmarkReturn15Yr: 4.5,
        alphaVsBenchmark: 1.3,
        isTrackingIndex: false,
        ocfPct: 0.86,
        rationale: "Iconic multi-asset defensive vehicle holding quality equities, gold bullion, and short-dated index-linked gilts to protect capital."
      }
    ],
    passive: [
      {
        id: "vanguard-lifestrategy-60",
        name: "Vanguard LifeStrategy 60% Equity Fund (Acc)",
        ticker: "GB00B3TYHH97",
        type: "Passive",
        sector: "Multi-Asset Balanced (60% Equity / 40% Bonds)",
        allocationPct: 40,
        aumBillions: 15.2,
        inceptionYear: 2011,
        managerName: "Vanguard Multi-Asset Investment Team",
        managerTenureYears: 13,
        avgAnnualReturn15Yr: 7.6,
        benchmarkName: "Custom 60/40 Global Composite Benchmark",
        benchmarkReturn15Yr: 7.65,
        alphaVsBenchmark: -0.05,
        isTrackingIndex: true,
        ocfPct: 0.22,
        rationale: "The UK's benchmark balanced fund. Automatically rebalances back to 60/40 target daily across global equities and hedged bonds."
      },
      {
        id: "hsbc-ftse-all-world",
        name: "HSBC FTSE All-World Index Fund (Class C Acc)",
        ticker: "GB00BMJJJF91",
        type: "Passive",
        sector: "Global Large/Mid-Cap Equity",
        allocationPct: 30,
        aumBillions: 5.84,
        inceptionYear: 2014,
        managerName: "HSBC Global Asset Management Index Team",
        managerTenureYears: 15,
        avgAnnualReturn15Yr: 11.5,
        benchmarkName: "FTSE All-World Index (£)",
        benchmarkReturn15Yr: 11.55,
        alphaVsBenchmark: -0.05,
        isTrackingIndex: true,
        ocfPct: 0.13,
        rationale: "Ultra low-cost access (0.13%) to global developed and emerging equities for core equity expansion."
      },
      {
        id: "ishares-global-agg-bond",
        name: "iShares Core Global Aggregate Bond ETF (AGBP - GBP Hedged)",
        ticker: "AGBP",
        type: "Passive",
        sector: "Global Fixed Income (Multi-Sector)",
        allocationPct: 20,
        aumBillions: 8.40,
        inceptionYear: 2017,
        managerName: "BlackRock Fixed Income Index Team",
        managerTenureYears: 15,
        avgAnnualReturn15Yr: 3.2,
        benchmarkName: "Bloomberg Global Aggregate Index (GBP Hedged)",
        benchmarkReturn15Yr: 3.28,
        alphaVsBenchmark: -0.08,
        isTrackingIndex: true,
        ocfPct: 0.10,
        rationale: "Currency-hedged exposure to over 28,000 investment grade government and corporate bonds globally, mitigating foreign currency swings."
      },
      {
        id: "vanguard-short-corp-bond",
        name: "Vanguard Global Short-Term Corporate Bond Index (GBP Hedged)",
        ticker: "IE00BDFB7198",
        type: "Passive",
        sector: "Short-Duration Corporate Bonds",
        allocationPct: 10,
        aumBillions: 4.10,
        inceptionYear: 2014,
        managerName: "Vanguard Fixed Income Group",
        managerTenureYears: 15,
        avgAnnualReturn15Yr: 2.8,
        benchmarkName: "Bloomberg Global Corp 1-5Yr (GBP Hedged)",
        benchmarkReturn15Yr: 2.86,
        alphaVsBenchmark: -0.06,
        isTrackingIndex: true,
        ocfPct: 0.15,
        rationale: "Limits interest rate duration risk by holding high quality corporate notes maturing within 1 to 5 years."
      }
    ]
  },
  low: {
    label: "Low Risk (Conservative Capital Preservation)",
    equityAllocation: "20% Equity / 80% Bonds & Money Market",
    active: [
      {
        id: "ruffer-total-return",
        name: "Ruffer Total Return Fund (Class I Acc)",
        ticker: "GB0006000134",
        type: "Active",
        sector: "Multi-Asset Capital Preservation",
        allocationPct: 30,
        aumBillions: 3.20,
        inceptionYear: 2000,
        managerName: "Duncan MacInnes & Jasmine Yeo",
        managerTenureYears: 12,
        avgAnnualReturn15Yr: 5.1,
        benchmarkName: "Bank of England Base Rate / Cash",
        benchmarkReturn15Yr: 2.4,
        alphaVsBenchmark: 2.7,
        isTrackingIndex: false,
        ocfPct: 1.09,
        rationale: "Unconventional capital preservation mandate designed not to lose money over any 12-month period while capturing steady compounding."
      },
      {
        id: "royal-london-short-duration-bond",
        name: "Royal London Short Duration High Yield Bond Fund",
        ticker: "GB00B7V0B566",
        type: "Active",
        sector: "Short Duration Credit / Income",
        allocationPct: 30,
        aumBillions: 1.85,
        inceptionYear: 2013,
        managerName: "Azhar Hussain",
        managerTenureYears: 11,
        avgAnnualReturn15Yr: 4.6,
        benchmarkName: "SONIA + 1.5%",
        benchmarkReturn15Yr: 3.8,
        alphaVsBenchmark: 0.8,
        isTrackingIndex: false,
        ocfPct: 0.55,
        rationale: "High cashflow yield with minimal sensitivity to interest rate moves due to low duration, managed with strict default avoidance."
      },
      {
        id: "lindsell-train-uk",
        name: "Lindsell Train UK Equity Fund (Class D Acc)",
        ticker: "GB00B18B9W76",
        type: "Active",
        sector: "UK All Companies (Defensive Quality)",
        allocationPct: 20,
        aumBillions: 3.72,
        inceptionYear: 2006,
        managerName: "Nick Train & Michael Lindsell",
        managerTenureYears: 18,
        avgAnnualReturn15Yr: 8.4,
        benchmarkName: "FTSE All-Share Index",
        benchmarkReturn15Yr: 6.5,
        alphaVsBenchmark: 1.9,
        isTrackingIndex: false,
        ocfPct: 0.65,
        rationale: "Ultra low turnover, brand-dominant businesses (Unilever, Relx, Diageo) offering defensive dividend yields and capital resilience."
      },
      {
        id: "lgim-short-dated-corp",
        name: "Legal & General Short Dated Sterling Corporate Bond Fund",
        ticker: "GB00B440Q353",
        type: "Active",
        sector: "Sterling Corporate Bond",
        allocationPct: 20,
        aumBillions: 2.15,
        inceptionYear: 2011,
        managerName: "Matthew Rees",
        managerTenureYears: 10,
        avgAnnualReturn15Yr: 3.1,
        benchmarkName: "Markit iBoxx Sterling Corp 1-5 Year",
        benchmarkReturn15Yr: 2.7,
        alphaVsBenchmark: 0.4,
        isTrackingIndex: false,
        ocfPct: 0.45,
        rationale: "Stable sterling credit yield from solid UK corporate institutions with maturity laddering to insulate against rate shocks."
      }
    ],
    passive: [
      {
        id: "vanguard-lifestrategy-20",
        name: "Vanguard LifeStrategy 20% Equity Fund (Acc)",
        ticker: "GB00B4R2F342",
        type: "Passive",
        sector: "Multi-Asset Conservative (20% Equity / 80% Bonds)",
        allocationPct: 40,
        aumBillions: 3.85,
        inceptionYear: 2011,
        managerName: "Vanguard Multi-Asset Investment Team",
        managerTenureYears: 13,
        avgAnnualReturn15Yr: 4.2,
        benchmarkName: "Custom 20/80 Global Composite Benchmark",
        benchmarkReturn15Yr: 4.25,
        alphaVsBenchmark: -0.05,
        isTrackingIndex: true,
        ocfPct: 0.22,
        rationale: "Core conservative passive engine. Automated 20/80 balance providing equity inflation hedge with high sovereign bond stability."
      },
      {
        id: "ishares-uk-gilts-0-5",
        name: "iShares UK Gilts 0-5yr UCITS ETF (IGLS)",
        ticker: "IGLS",
        type: "Passive",
        sector: "UK Government Bonds (Gilts)",
        allocationPct: 25,
        aumBillions: 2.34,
        inceptionYear: 2009,
        managerName: "BlackRock Fixed Income Index Team",
        managerTenureYears: 15,
        avgAnnualReturn15Yr: 2.4,
        benchmarkName: "FTSE Actuaries UK Gilts 0-5 Years Index",
        benchmarkReturn15Yr: 2.44,
        alphaVsBenchmark: -0.04,
        isTrackingIndex: true,
        ocfPct: 0.07,
        rationale: "Direct HM Treasury credit backing with minimal interest rate sensitivity, ideal for near-term drawdown certainty."
      },
      {
        id: "royal-london-money-market",
        name: "Royal London Short Term Money Market Fund (Class Y Acc)",
        ticker: "GB00B8XYYQ86",
        type: "Passive",
        sector: "Sterling Money Market / Cash",
        allocationPct: 20,
        aumBillions: 6.54,
        inceptionYear: 2002,
        managerName: "Craig Johnston & Tony Cole",
        managerTenureYears: 16,
        avgAnnualReturn15Yr: 2.1,
        benchmarkName: "SONIA (Sterling Overnight Index Average)",
        benchmarkReturn15Yr: 2.05,
        alphaVsBenchmark: 0.05,
        isTrackingIndex: true,
        ocfPct: 0.10,
        rationale: "Prime liquidity preserver yielding floating BoE money market rates while eliminating market principal risk."
      },
      {
        id: "vanguard-global-agg-bond",
        name: "Vanguard Global Aggregate Bond ETF (VAGP - GBP Hedged)",
        ticker: "VAGP",
        type: "Passive",
        sector: "Global High-Grade Sovereign & Corporate Bonds",
        allocationPct: 15,
        aumBillions: 5.42,
        inceptionYear: 2019,
        managerName: "Vanguard Fixed Income Index Team",
        managerTenureYears: 15,
        avgAnnualReturn15Yr: 3.1,
        benchmarkName: "Bloomberg Global Aggregate Float (GBP Hedged)",
        benchmarkReturn15Yr: 3.16,
        alphaVsBenchmark: -0.06,
        isTrackingIndex: true,
        ocfPct: 0.10,
        rationale: "Broadest fixed income index in existence covering 29,000+ bonds globally, fully currency-hedged to GBP."
      }
    ]
  }
};

// 2. State Management
let currentRisk = "medium";
let activeTab = "active"; // "active" | "passive" | "compare"

// Chart Instances
let trajectoryChart = null;
let allocationDonutChart = null;
let fundFutureValueBarChart = null;
let benchmarkComparisonChart = null;

// Currency & Number Formatter
const formatCurrency = (val) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0
  }).format(val);
};

const formatPct = (val) => `${val >= 0 ? "+" : ""}${val.toFixed(2)}%`;

/**
 * 3. Compound Interest & Annuity Mathematical Model
 * Lump Sum: P * (1 + r)^t
 * Monthly Annuity: PMT * [((1 + r/12)^(12*t) - 1) / (r/12)]
 */
function calculateFutureValue(lumpSum, monthlyAmount, annualRatePct, years) {
  const r = annualRatePct / 100;
  if (years <= 0) return lumpSum;
  
  // Lump sum compounded annually
  const lumpFuture = lumpSum * Math.pow(1 + r, years);

  // Monthly annuity compounded monthly
  let monthlyFuture = 0;
  if (monthlyAmount > 0) {
    if (r === 0) {
      monthlyFuture = monthlyAmount * 12 * years;
    } else {
      const monthlyRate = r / 12;
      const numMonths = years * 12;
      monthlyFuture = monthlyAmount * ((Math.pow(1 + monthlyRate, numMonths) - 1) / monthlyRate);
    }
  }

  return Math.round(lumpFuture + monthlyFuture);
}

/**
 * Compute portfolio-weighted annualised historical return
 */
function calculateWeightedReturn(fundList) {
  return fundList.reduce((acc, fund) => {
    return acc + (fund.avgAnnualReturn15Yr * (fund.allocationPct / 100));
  }, 0);
}

/**
 * Get current form inputs
 */
function getInputs() {
  const currentAge = parseInt(document.getElementById("current-age").value, 10) || 35;
  const retirementAge = parseInt(document.getElementById("retirement-age").value, 10) || 65;
  const lumpSum = parseFloat(document.getElementById("lump-sum").value) || 0;
  const monthlyAmount = parseFloat(document.getElementById("monthly-amount").value) || 0;
  const targetGrowth = parseFloat(document.getElementById("target-growth").value) || 7.5;
  
  const horizon = Math.max(1, retirementAge - currentAge);

  return {
    currentAge,
    retirementAge,
    lumpSum,
    monthlyAmount,
    targetGrowth,
    horizon,
    risk: currentRisk
  };
}

/**
 * Main update routine
 */
function updateAdvisor() {
  const inputs = getInputs();

  // Update horizon badges
  document.getElementById("horizon-years").textContent = `${inputs.horizon} Years`;
  document.getElementById("trajectory-end-age").textContent = inputs.retirementAge;
  document.getElementById("legend-target-rate").textContent = `${inputs.targetGrowth}%`;

  // Update total current year contributions
  const currentYearTotal = inputs.lumpSum + (inputs.monthlyAmount * 12);
  document.getElementById("current-year-total").textContent = formatCurrency(currentYearTotal);

  // Get active and passive fund lists for current risk profile
  const riskProfileData = FUNDS_DATA[inputs.risk];
  const activeFunds = riskProfileData.active;
  const passiveFunds = riskProfileData.passive;

  // Calculate weighted returns
  const activeWeightedReturn = calculateWeightedReturn(activeFunds);
  const passiveWeightedReturn = calculateWeightedReturn(passiveFunds);

  // Calculate projected terminal values
  const totalPrincipal = inputs.lumpSum + (inputs.monthlyAmount * 12 * inputs.horizon);
  const activeProjectedValue = calculateFutureValue(inputs.lumpSum, inputs.monthlyAmount, activeWeightedReturn, inputs.horizon);
  const passiveProjectedValue = calculateFutureValue(inputs.lumpSum, inputs.monthlyAmount, passiveWeightedReturn, inputs.horizon);
  const targetProjectedValue = calculateFutureValue(inputs.lumpSum, inputs.monthlyAmount, inputs.targetGrowth, inputs.horizon);

  // Update Top Metric Cards
  document.getElementById("stat-total-contributions").textContent = formatCurrency(totalPrincipal);
  document.getElementById("stat-contributions-breakdown").textContent = 
    `${formatCurrency(inputs.lumpSum)} lump sum + ${formatCurrency(inputs.monthlyAmount * 12 * inputs.horizon)} monthly`;

  document.getElementById("stat-active-value").textContent = formatCurrency(activeProjectedValue);
  const activeGain = activeProjectedValue - totalPrincipal;
  const activeGainPct = totalPrincipal > 0 ? ((activeGain / totalPrincipal) * 100).toFixed(0) : 0;
  document.getElementById("stat-active-gain").textContent = `+${formatCurrency(activeGain)} (+${activeGainPct}% growth)`;
  document.getElementById("stat-active-rate").textContent = `${activeWeightedReturn.toFixed(2)}% p.a.`;

  document.getElementById("stat-passive-value").textContent = formatCurrency(passiveProjectedValue);
  const passiveGain = passiveProjectedValue - totalPrincipal;
  const passiveGainPct = totalPrincipal > 0 ? ((passiveGain / totalPrincipal) * 100).toFixed(0) : 0;
  document.getElementById("stat-passive-gain").textContent = `+${formatCurrency(passiveGain)} (+${passiveGainPct}% growth)`;
  document.getElementById("stat-passive-rate").textContent = `${passiveWeightedReturn.toFixed(2)}% p.a.`;

  const alphaDiff = activeProjectedValue - passiveProjectedValue;
  const alphaEl = document.getElementById("stat-alpha-difference");
  alphaEl.textContent = `${alphaDiff >= 0 ? "+" : ""}${formatCurrency(alphaDiff)}`;
  alphaEl.className = `text-2xl font-extrabold ${alphaDiff >= 0 ? "text-purple-900" : "text-rose-700"}`;
  document.getElementById("stat-alpha-subtext").textContent = 
    alphaDiff >= 0 ? "Active historical premium over passive" : "Passive historical advantage over active";

  document.getElementById("active-total-future-header").textContent = formatCurrency(activeProjectedValue);
  document.getElementById("passive-total-future-header").textContent = formatCurrency(passiveProjectedValue);

  // Render Fund Tables/Cards
  renderFundCards("active", activeFunds, inputs);
  renderFundCards("passive", passiveFunds, inputs);

  // Render Side-by-Side Matrix
  renderComparisonMatrix(activeFunds, passiveFunds, activeWeightedReturn, passiveWeightedReturn, activeProjectedValue, passiveProjectedValue, totalPrincipal, inputs);

  // Update All 4 Graphs
  updateTrajectoryChart(inputs, activeWeightedReturn, passiveWeightedReturn);
  updateDonutChart(activeTab === "passive" ? passiveFunds : activeFunds, activeTab);
  updateFundFutureValueChart(activeTab === "passive" ? passiveFunds : activeFunds, inputs);
  updateBenchmarkChart(activeTab === "passive" ? passiveFunds : activeFunds);

  // Re-initialise Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * 4. Render Fund Cards with all required metrics
 */
function renderFundCards(type, fundList, inputs) {
  const container = document.getElementById(`${type}-funds-container`);
  if (!container) return;

  container.innerHTML = fundList.map(fund => {
    // Initial amount invested in this fund
    const fundLumpSum = inputs.lumpSum * (fund.allocationPct / 100);
    const fundMonthly = inputs.monthlyAmount * (fund.allocationPct / 100);
    
    // Future expected value at retirement
    const fundFutureVal = calculateFutureValue(fundLumpSum, fundMonthly, fund.avgAnnualReturn15Yr, inputs.horizon);
    const fundPrincipal = fundLumpSum + (fundMonthly * 12 * inputs.horizon);
    const fundProfit = fundFutureVal - fundPrincipal;

    const isPositiveAlpha = fund.alphaVsBenchmark >= 0;

    return `
      <div class="fund-card bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-4">
        
        <!-- Header row -->
        <div class="flex flex-wrap items-start justify-between gap-3 pb-3 border-b border-slate-100">
          <div class="space-y-1">
            <div class="flex items-center gap-2 flex-wrap">
              <h4 class="text-base font-bold text-slate-900">${fund.name}</h4>
              <span class="px-2 py-0.5 rounded text-[11px] font-bold ${
                type === 'active' ? 'bg-brand-100 text-brand-800' : 'bg-teal-100 text-teal-800'
              }">${fund.type}</span>
              <span class="text-xs text-slate-400 font-mono">${fund.ticker}</span>
            </div>
            <p class="text-xs text-slate-500 flex items-center gap-1.5">
              <i data-lucide="tag" class="w-3.5 h-3.5 text-slate-400"></i>
              Sector: <strong class="text-slate-700">${fund.sector}</strong>
              <span class="mx-1">•</span>
              <span>OCF: <strong class="text-slate-700">${fund.ocfPct}%</strong></span>
            </p>
          </div>

          <!-- Allocation Pill -->
          <div class="text-right">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
              type === 'active' ? 'bg-brand-600 text-white' : 'bg-teal-600 text-white'
            }">
              Portfolio Allocation: ${fund.allocationPct}%
            </span>
            <div class="text-xs text-slate-500 mt-1">
              ${formatCurrency(fundLumpSum)} lump + ${formatCurrency(fundMonthly)}/mo
            </div>
          </div>
        </div>

        <!-- Metric Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 py-2 text-xs">
          
          <!-- Overall AUM Invested in Fund -->
          <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span class="text-[11px] text-slate-400 block mb-0.5">Total Fund Size (AUM)</span>
            <span class="font-extrabold text-slate-900 text-sm">£${fund.aumBillions.toFixed(2)} Billion</span>
            <span class="text-[10px] text-slate-400 block">Overall invested</span>
          </div>

          <!-- Manager Tenure -->
          <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span class="text-[11px] text-slate-400 block mb-0.5">Lead Manager & Tenure</span>
            <span class="font-extrabold text-slate-900 text-sm truncate block" title="${fund.managerName}">
              ${fund.managerName.split('&')[0]}
            </span>
            <span class="text-[10px] text-slate-500 font-medium">${fund.managerTenureYears} Years in Charge</span>
          </div>

          <!-- Fund Inception Year -->
          <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span class="text-[11px] text-slate-400 block mb-0.5">Fund Inception Year</span>
            <span class="font-extrabold text-slate-900 text-sm">${fund.inceptionYear}</span>
            <span class="text-[10px] text-slate-500">${2026 - fund.inceptionYear} Years Track Record</span>
          </div>

          <!-- 15-Yr Avg Annual Growth -->
          <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span class="text-[11px] text-slate-400 block mb-0.5">15-Yr / Inception CAGR</span>
            <span class="font-extrabold text-emerald-600 text-sm">${fund.avgAnnualReturn15Yr.toFixed(1)}% p.a.</span>
            <span class="text-[10px] text-slate-400">Net of fees in GBP</span>
          </div>

          <!-- Benchmark Tracking / Alpha Indicator -->
          <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span class="text-[11px] text-slate-400 block mb-0.5">vs Benchmark Index</span>
            <span class="font-extrabold ${isPositiveAlpha ? 'text-emerald-700' : 'text-slate-700'} text-sm">
              ${formatPct(fund.alphaVsBenchmark)}
            </span>
            <span class="text-[10px] text-slate-400 truncate block" title="${fund.benchmarkName}">
              ${fund.isTrackingIndex ? 'Tracking Diff' : 'Alpha (Outperformance)'}
            </span>
          </div>

          <!-- Expected Future Value at Retirement -->
          <div class="bg-gradient-to-br from-brand-50 to-cyan-50/50 p-2.5 rounded-xl border border-brand-200">
            <span class="text-[11px] text-brand-700 font-semibold block mb-0.5">Expected Value at ${inputs.retirementAge}</span>
            <span class="font-black text-brand-900 text-sm">${formatCurrency(fundFutureVal)}</span>
            <span class="text-[10px] text-emerald-600 font-semibold">+${formatCurrency(fundProfit)} gain</span>
          </div>

        </div>

        <!-- Rationale & Suitability -->
        <div class="pt-2 text-xs text-slate-600 bg-slate-50/60 p-3 rounded-xl border border-slate-100 flex items-start gap-2">
          <i data-lucide="info" class="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5"></i>
          <div>
            <strong class="text-slate-800">Portfolio Role & Selection Rationale:</strong>
            ${fund.rationale} Tracking Benchmark: <em>${fund.benchmarkName}</em> (${fund.benchmarkReturn15Yr.toFixed(1)}% p.a. 15-yr index return).
          </div>
        </div>

      </div>
    `;
  }).join("");
}

/**
 * 5. Render Comprehensive Comparison Matrix
 */
function renderComparisonMatrix(activeFunds, passiveFunds, activeReturn, passiveReturn, activeVal, passiveVal, principal, inputs) {
  const tbody = document.getElementById("compare-matrix-body");
  if (!tbody) return;

  const activeAvgOcf = (activeFunds.reduce((a, f) => a + (f.ocfPct * (f.allocationPct / 100)), 0)).toFixed(2);
  const passiveAvgOcf = (passiveFunds.reduce((a, f) => a + (f.ocfPct * (f.allocationPct / 100)), 0)).toFixed(2);

  const activeTotalAUM = (activeFunds.reduce((a, f) => a + f.aumBillions, 0)).toFixed(1);
  const passiveTotalAUM = (passiveFunds.reduce((a, f) => a + f.aumBillions, 0)).toFixed(1);

  const diffVal = activeVal - passiveVal;

  const rows = [
    {
      criteria: "Projected Value at Retirement (Age " + inputs.retirementAge + ")",
      active: `<strong class="text-brand-900 text-sm">${formatCurrency(activeVal)}</strong> (+${formatCurrency(activeVal - principal)})`,
      passive: `<strong class="text-teal-900 text-sm">${formatCurrency(passiveVal)}</strong> (+${formatCurrency(passiveVal - principal)})`
    },
    {
      criteria: "Weighted 15-Yr Historical Annual Return",
      active: `<span class="font-bold text-emerald-600">${activeReturn.toFixed(2)}% p.a.</span>`,
      passive: `<span class="font-bold text-teal-600">${passiveReturn.toFixed(2)}% p.a.</span>`
    },
    {
      criteria: "Weighted Ongoing Fee (OCF)",
      active: `<span class="font-bold text-amber-700">${activeAvgOcf}% p.a.</span> (Typical UK actively managed rate)`,
      passive: `<span class="font-bold text-emerald-700">${passiveAvgOcf}% p.a.</span> (Ultra low passive compounding drag)`
    },
    {
      criteria: "Combined Fund Size (AUM Invested Overall)",
      active: `£${activeTotalAUM} Billion across active vehicles`,
      passive: `£${passiveTotalAUM} Billion across index trackers`
    },
    {
      criteria: "Manager Tenure & Stock Selection",
      active: `Lead managers with average 16+ years tenure with discretionary stock/bond picking authority`,
      passive: `Algorithmic institutional index tracking groups with zero key-man dependency`
    },
    {
      criteria: "Tracking vs. Alpha Characteristics",
      active: `Aims to generate positive Alpha (+1.5% to +3.5%) by avoiding benchmark underperformers`,
      passive: `Aims for minimal tracking difference (-0.03% to -0.06%) and exact market parity`
    },
    {
      criteria: "Downside Volatility Mitigation",
      active: `Fund managers can hold cash, pivot sectors, or hedge during severe market contractions`,
      passive: `100% fully invested at all times; reflects full market drawdowns and upside recoveries`
    },
    {
      criteria: "Best Suited For",
      active: `Investors seeking alpha outperformance willing to pay an active premium for proven veteran managers`,
      passive: `Cost-conscious investors seeking maximum fee efficiency, total transparency, and index reliability`
    }
  ];

  tbody.innerHTML = rows.map(r => `
    <tr class="hover:bg-slate-50/80 transition">
      <td class="py-3 px-4 font-semibold text-slate-800">${r.criteria}</td>
      <td class="py-3 px-4 text-slate-700 bg-brand-50/30">${r.active}</td>
      <td class="py-3 px-4 text-slate-700 bg-teal-50/30">${r.passive}</td>
    </tr>
  `).join("");
}

/**
 * 6. Visual Graph 1: Wealth Accumulation Trajectory (Line Chart)
 */
function updateTrajectoryChart(inputs, activeReturn, passiveReturn) {
  const ctx = document.getElementById("trajectoryChart");
  if (!ctx) return;

  const years = inputs.horizon;
  const labels = [];
  const principalData = [];
  const activeData = [];
  const passiveData = [];
  const targetData = [];

  // Generate step intervals (e.g., every 1 year if <= 20 years, or every 2-3 years if long horizon)
  const step = years > 30 ? 2 : 1;

  for (let t = 0; t <= years; t += step) {
    const age = inputs.currentAge + t;
    labels.push(`Age ${age}`);

    const principal = inputs.lumpSum + (inputs.monthlyAmount * 12 * t);
    principalData.push(principal);

    activeData.push(calculateFutureValue(inputs.lumpSum, inputs.monthlyAmount, activeReturn, t));
    passiveData.push(calculateFutureValue(inputs.lumpSum, inputs.monthlyAmount, passiveReturn, t));
    targetData.push(calculateFutureValue(inputs.lumpSum, inputs.monthlyAmount, inputs.targetGrowth, t));
  }

  // Ensure last retirement year is included
  if (labels[labels.length - 1] !== `Age ${inputs.retirementAge}`) {
    labels.push(`Age ${inputs.retirementAge}`);
    const principal = inputs.lumpSum + (inputs.monthlyAmount * 12 * years);
    principalData.push(principal);
    activeData.push(calculateFutureValue(inputs.lumpSum, inputs.monthlyAmount, activeReturn, years));
    passiveData.push(calculateFutureValue(inputs.lumpSum, inputs.monthlyAmount, passiveReturn, years));
    targetData.push(calculateFutureValue(inputs.lumpSum, inputs.monthlyAmount, inputs.targetGrowth, years));
  }

  if (trajectoryChart) {
    trajectoryChart.destroy();
  }

  trajectoryChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Active Strategy",
          data: activeData,
          borderColor: "#0284c7",
          backgroundColor: "rgba(2, 132, 199, 0.08)",
          fill: true,
          tension: 0.35,
          borderWidth: 2.5,
          pointRadius: 2,
          pointHoverRadius: 6
        },
        {
          label: "Passive Strategy",
          data: passiveData,
          borderColor: "#0d9488",
          backgroundColor: "transparent",
          tension: 0.35,
          borderWidth: 2.5,
          pointRadius: 2,
          pointHoverRadius: 6
        },
        {
          label: `Target Return (${inputs.targetGrowth}%)`,
          data: targetData,
          borderColor: "#f59e0b",
          backgroundColor: "transparent",
          borderDash: [5, 5],
          tension: 0.35,
          borderWidth: 2,
          pointRadius: 0
        },
        {
          label: "Total Contributions (Principal)",
          data: principalData,
          borderColor: "#94a3b8",
          backgroundColor: "transparent",
          borderDash: [3, 3],
          tension: 0,
          borderWidth: 1.5,
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: "index",
        intersect: false
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: "#0f172a",
          padding: 12,
          titleFont: { size: 12, weight: "bold" },
          bodyFont: { size: 11 },
          callbacks: {
            label: function(context) {
              return ` ${context.dataset.label}: ${formatCurrency(context.raw)}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 10 }, color: "#64748b" }
        },
        y: {
          grid: { color: "#f1f5f9" },
          ticks: {
            font: { size: 10 },
            color: "#64748b",
            callback: function(value) {
              if (value >= 1000000) return `£${(value / 1000000).toFixed(1)}M`;
              if (value >= 1000) return `£${(value / 1000).toFixed(0)}k`;
              return `£${value}`;
            }
          }
        }
      }
    }
  });
}

/**
 * 7. Visual Graph 2: Portfolio Asset Allocation (Donut Chart)
 */
function updateDonutChart(fundList, strategyType) {
  const ctx = document.getElementById("allocationDonutChart");
  if (!ctx) return;

  const labels = fundList.map(f => f.name.split("(")[0].trim());
  const data = fundList.map(f => f.allocationPct);
  
  const colors = strategyType === "passive"
    ? ["#0d9488", "#14b8a6", "#2dd4bf", "#5eead4"]
    : ["#0284c7", "#38bdf8", "#60a5fa", "#818cf8"];

  document.getElementById("donut-strategy-label").textContent = 
    strategyType === "passive" ? "Passive Strategy" : "Active Strategy";
  document.getElementById("donut-strategy-label").className = 
    `text-xs font-semibold px-2 py-0.5 rounded ${strategyType === "passive" ? "bg-teal-100 text-teal-800" : "bg-brand-100 text-brand-800"}`;

  if (allocationDonutChart) {
    allocationDonutChart.destroy();
  }

  allocationDonutChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colors,
        borderWidth: 2,
        borderColor: "#ffffff"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "68%",
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#0f172a",
          callbacks: {
            label: function(context) {
              return ` Allocation: ${context.raw}%`;
            }
          }
        }
      }
    }
  });

  // Render legend list underneath
  const legendEl = document.getElementById("allocation-legend-list");
  if (legendEl) {
    legendEl.innerHTML = fundList.map((f, i) => `
      <div class="flex items-center justify-between text-xs">
        <span class="flex items-center gap-1.5 truncate max-w-[70%]">
          <span class="w-2.5 h-2.5 rounded-full flex-shrink-0" style="background-color: ${colors[i]}"></span>
          <span class="truncate" title="${f.name}">${f.name.split('(')[0]}</span>
        </span>
        <span class="font-bold text-slate-800">${f.allocationPct}%</span>
      </div>
    `).join("");
  }
}

/**
 * 8. Visual Graph 3: Fund Expected Value at Retirement (Bar Chart)
 */
function updateFundFutureValueChart(fundList, inputs) {
  const ctx = document.getElementById("fundFutureValueBarChart");
  if (!ctx) return;

  const labels = fundList.map(f => f.name.split("(")[0].trim().substring(0, 22));
  const futureValues = [];
  const initialPrincipal = [];

  fundList.forEach(fund => {
    const fundLump = inputs.lumpSum * (fund.allocationPct / 100);
    const fundMonthly = inputs.monthlyAmount * (fund.allocationPct / 100);
    const principal = fundLump + (fundMonthly * 12 * inputs.horizon);
    const futureVal = calculateFutureValue(fundLump, fundMonthly, fund.avgAnnualReturn15Yr, inputs.horizon);

    initialPrincipal.push(principal);
    futureValues.push(futureVal);
  });

  if (fundFutureValueBarChart) {
    fundFutureValueBarChart.destroy();
  }

  fundFutureValueBarChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Total Contributions",
          data: initialPrincipal,
          backgroundColor: "#cbd5e1",
          borderRadius: 4
        },
        {
          label: "Projected Value at Retirement",
          data: futureValues,
          backgroundColor: "#0284c7",
          borderRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: { font: { size: 10 }, boxWidth: 12 }
        },
        tooltip: {
          backgroundColor: "#0f172a",
          callbacks: {
            label: function(context) {
              return ` ${context.dataset.label}: ${formatCurrency(context.raw)}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 9 }, color: "#64748b" }
        },
        y: {
          grid: { color: "#f1f5f9" },
          ticks: {
            font: { size: 10 },
            color: "#64748b",
            callback: function(v) {
              if (v >= 1000000) return `£${(v/1000000).toFixed(1)}M`;
              if (v >= 1000) return `£${(v/1000).toFixed(0)}k`;
              return `£${v}`;
            }
          }
        }
      }
    }
  });
}

/**
 * 9. Visual Graph 4: Benchmark Tracking & Alpha Comparison Chart
 */
function updateBenchmarkChart(fundList) {
  const ctx = document.getElementById("benchmarkComparisonChart");
  if (!ctx) return;

  const labels = fundList.map(f => f.name.split("(")[0].trim().substring(0, 20));
  const fundReturns = fundList.map(f => f.avgAnnualReturn15Yr);
  const benchmarkReturns = fundList.map(f => f.benchmarkReturn15Yr);

  if (benchmarkComparisonChart) {
    benchmarkComparisonChart.destroy();
  }

  benchmarkComparisonChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Fund 15-Yr Return (% p.a.)",
          data: fundReturns,
          backgroundColor: "#0d9488",
          borderRadius: 4
        },
        {
          label: "Benchmark Index Return (% p.a.)",
          data: benchmarkReturns,
          backgroundColor: "#94a3b8",
          borderRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: { font: { size: 10 }, boxWidth: 12 }
        },
        tooltip: {
          backgroundColor: "#0f172a",
          callbacks: {
            label: function(context) {
              return ` ${context.dataset.label}: ${context.raw}% p.a.`;
            },
            afterBody: function(contexts) {
              const idx = contexts[0].dataIndex;
              const f = fundList[idx];
              return f.isTrackingIndex 
                ? `Tracking Difference: ${formatPct(f.alphaVsBenchmark)}`
                : `Active Alpha Generated: ${formatPct(f.alphaVsBenchmark)}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 9 }, color: "#64748b" }
        },
        y: {
          grid: { color: "#f1f5f9" },
          ticks: {
            font: { size: 10 },
            color: "#64748b",
            callback: v => `${v}%`
          }
        }
      }
    }
  });
}

/**
 * 10. CSV Export Functionality
 */
function exportCSV() {
  const inputs = getInputs();
  const riskData = FUNDS_DATA[inputs.risk];

  let csv = "UK Funds Selection Advisor - Portfolio Export\n";
  csv += `Date Generated: ${new Date().toLocaleDateString('en-GB')}\n`;
  csv += `Current Age: ${inputs.currentAge}, Target Retirement Age: ${inputs.retirementAge}, Horizon: ${inputs.horizon} Years\n`;
  csv += `Lump Sum: £${inputs.lumpSum}, Monthly Contribution: £${inputs.monthlyAmount}\n`;
  csv += `Risk Profile: ${riskData.label}, Target Growth: ${inputs.targetGrowth}%\n\n`;

  // Headers
  csv += "Strategy,Fund Name,Ticker,Sector,Allocation %,Lump Sum (£),Monthly (£),Expected Value at Retirement (£),15-Yr Return (% p.a.),Benchmark Index,Benchmark Return (% p.a.),Alpha/Tracking Diff,Fund Size AUM (£B),Lead Manager,Manager Tenure (Yrs),Inception Year,OCF (%)\n";

  ["active", "passive"].forEach(strat => {
    riskData[strat].forEach(f => {
      const fundLump = inputs.lumpSum * (f.allocationPct / 100);
      const fundMonthly = inputs.monthlyAmount * (f.allocationPct / 100);
      const futureVal = calculateFutureValue(fundLump, fundMonthly, f.avgAnnualReturn15Yr, inputs.horizon);

      const row = [
        strat.toUpperCase(),
        `"${f.name}"`,
        f.ticker,
        `"${f.sector}"`,
        `${f.allocationPct}%`,
        fundLump.toFixed(2),
        fundMonthly.toFixed(2),
        futureVal,
        `${f.avgAnnualReturn15Yr}%`,
        `"${f.benchmarkName}"`,
        `${f.benchmarkReturn15Yr}%`,
        `${f.alphaVsBenchmark}%`,
        `£${f.aumBillions}B`,
        `"${f.managerName}"`,
        f.managerTenureYears,
        f.inceptionYear,
        `${f.ocfPct}%`
      ];
      csv += row.join(",") + "\n";
    });
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `UK_Funds_Allocation_Portfolio_${inputs.risk}_risk.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * 11. Event Listeners & Bootstrapping
 */
document.addEventListener("DOMContentLoaded", () => {
  // Input changes
  const inputIds = ["current-age", "retirement-age", "lump-sum", "monthly-amount", "target-growth"];
  inputIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", () => {
        // Enforce basic validation
        const curAge = parseInt(document.getElementById("current-age").value, 10);
        const retAgeEl = document.getElementById("retirement-age");
        if (parseInt(retAgeEl.value, 10) <= curAge) {
          retAgeEl.value = curAge + 1;
        }
        updateAdvisor();
      });
    }
  });

  // Risk profile selection
  const riskRadios = document.querySelectorAll('input[name="risk-profile"]');
  riskRadios.forEach(radio => {
    radio.parentElement.addEventListener("click", () => {
      riskRadios.forEach(r => {
        r.checked = false;
        r.parentElement.classList.remove("active", "border-brand-600", "border-2", "bg-brand-50/50");
        r.parentElement.classList.add("border-slate-200", "bg-white");
      });
      radio.checked = true;
      radio.parentElement.classList.add("active", "border-brand-600", "border-2", "bg-brand-50/50");
      radio.parentElement.classList.remove("border-slate-200", "bg-white");
      currentRisk = radio.value;
      updateAdvisor();
    });
  });

  // Strategy navigation tabs
  const tabActive = document.getElementById("tab-active");
  const tabPassive = document.getElementById("tab-passive");
  const tabCompare = document.getElementById("tab-compare");

  const secActive = document.getElementById("section-active");
  const secPassive = document.getElementById("section-passive");
  const secCompare = document.getElementById("section-compare");

  function setTab(tab) {
    activeTab = tab;
    [tabActive, tabPassive, tabCompare].forEach(t => t.classList.remove("active"));
    [secActive, secPassive, secCompare].forEach(s => s.classList.add("hidden"));

    if (tab === "active") {
      tabActive.classList.add("active");
      secActive.classList.remove("hidden");
    } else if (tab === "passive") {
      tabPassive.classList.add("active");
      secPassive.classList.remove("hidden");
    } else if (tab === "compare") {
      tabCompare.classList.add("active");
      secCompare.classList.remove("hidden");
      secActive.classList.remove("hidden");
      secPassive.classList.remove("hidden");
    }

    // Refresh charts for current tab
    const inputs = getInputs();
    const riskData = FUNDS_DATA[inputs.risk];
    const fundsToShow = tab === "passive" ? riskData.passive : riskData.active;
    updateDonutChart(fundsToShow, tab);
    updateFundFutureValueChart(fundsToShow, inputs);
    updateBenchmarkChart(fundsToShow);
  }

  tabActive.addEventListener("click", () => setTab("active"));
  tabPassive.addEventListener("click", () => setTab("passive"));
  tabCompare.addEventListener("click", () => setTab("compare"));

  // CSV Export & Print Buttons
  document.getElementById("btn-export-csv").addEventListener("click", exportCSV);
  document.getElementById("btn-print-report").addEventListener("click", () => window.print());

  // Initial calculation run
  updateAdvisor();
});
