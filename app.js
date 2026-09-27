/**
 * UK Funds Selection Advisor - Interactive Financial Advisory Engine
 * Multi-House Trustnet.com (FE fundinfo) Top-Performing Funds Universe
 * Featuring: Fidelity, Baillie Gifford, LGIM, JPMorgan, BlackRock, Vanguard,
 * Slater Investments, Schroders, Lindsell Train, Rathbones, Fundsmith, Liontrust,
 * Artemis, Trojan, and Ruffer.
 */

// 1. Master Catalog of Top Trustnet.com UK Funds Across All Fund Houses
const TRUSTNET_MASTER_FUNDS = [
  // Technology & Mega-Growth
  {
    id: "fidelity-global-tech",
    name: "Fidelity Global Technology Fund (Class W Acc)",
    house: "Fidelity International",
    ticker: "GB00B4YZN801",
    citicode: "B4YZ",
    type: "Active",
    iaSector: "IA Technology & Technology Innovations",
    sector: "Technology & Digital Disruption",
    aumBillions: 5.24,
    inceptionYear: 2005,
    managerName: "Hyunho Sohn",
    managerTenureYears: 11.5,
    feCrowns: 5,
    feRiskScore: 125,
    quartileRank10Yr: "1st Quartile",
    avgAnnualReturn15Yr: 21.5,
    benchmarkName: "MSCI AC World Information Technology Index",
    benchmarkReturn15Yr: 19.8,
    alphaVsBenchmark: 1.7,
    isTrackingIndex: false,
    ocfPct: 1.04,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/b4yz/fidelity-global-technology-fund",
    rationale: "Trustnet 5-Crown mega-performer. Hyunho Sohn's bottom-up strategy focusing on misunderstood tech compounders with pricing power, achieving >20% annualised returns over 15 years."
  },
  {
    id: "lgim-tech-index",
    name: "Legal & General Global Technology Index Trust",
    house: "Legal & General (LGIM)",
    ticker: "GB00B0CNH163",
    citicode: "B0CN",
    type: "Passive",
    iaSector: "IA Technology & Technology Innovations",
    sector: "Technology Index",
    aumBillions: 3.85,
    inceptionYear: 2000,
    managerName: "LGIM Index Team",
    managerTenureYears: 15,
    feCrowns: 0,
    feRiskScore: 128,
    quartileRank10Yr: "Indexed Core",
    avgAnnualReturn15Yr: 20.8,
    benchmarkName: "FTSE World-Technology Index (£)",
    benchmarkReturn15Yr: 20.85,
    alphaVsBenchmark: -0.05,
    isTrackingIndex: true,
    ocfPct: 0.32,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/b0cn/legal--general-global-technology-index-trust",
    rationale: "Top-performing passive index tracker on Trustnet over 15 years. Pure low-cost replication (0.32% OCF) of the global technology giants."
  },
  {
    id: "baillie-gifford-american",
    name: "Baillie Gifford American Fund (Class B Acc)",
    house: "Baillie Gifford",
    ticker: "GB0005852504",
    citicode: "0585",
    type: "Active",
    iaSector: "IA North America",
    sector: "US Mega-Growth Equity",
    aumBillions: 2.85,
    inceptionYear: 1997,
    managerName: "Dave Bujnowski, Tom Slater & Gary Robinson",
    managerTenureYears: 10,
    feCrowns: 4,
    feRiskScore: 145,
    quartileRank10Yr: "1st Quartile",
    avgAnnualReturn15Yr: 14.5,
    benchmarkName: "S&P 500 Index (£)",
    benchmarkReturn15Yr: 14.2,
    alphaVsBenchmark: 0.3,
    isTrackingIndex: false,
    ocfPct: 0.51,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/0585/baillie-gifford-american-fund",
    rationale: "Unapologetic high-growth strategy from Edinburgh's Baillie Gifford targeting exceptional entrepreneurial businesses with asymmetric upside potential."
  },
  {
    id: "jpm-global-unconstrained",
    name: "JPMorgan Global Unconstrained Equity Fund",
    house: "JPMorgan Asset Management",
    ticker: "GB00B2356W72",
    citicode: "EDR1",
    type: "Active",
    iaSector: "IA Global",
    sector: "Global High-Conviction Equity",
    aumBillions: 2.45,
    inceptionYear: 2008,
    managerName: "Rajesh Tanna & Sophie Huynh",
    managerTenureYears: 9,
    feCrowns: 5,
    feRiskScore: 108,
    quartileRank10Yr: "1st Quartile",
    avgAnnualReturn15Yr: 13.8,
    benchmarkName: "MSCI World Index (£)",
    benchmarkReturn15Yr: 11.5,
    alphaVsBenchmark: 2.3,
    isTrackingIndex: false,
    ocfPct: 0.80,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/edr1/jpm-global-unconstrained-equity-fund",
    rationale: "Trustnet 5-Crown rated global portfolio backed by JPMorgan's 80+ global sector analysts, taking concentrated positions in global compounding leaders."
  },
  {
    id: "fundsmith-equity",
    name: "Fundsmith Equity Fund (Class I Acc)",
    house: "Fundsmith LLP",
    ticker: "GB00B41YBW71",
    citicode: "B41Y",
    type: "Active",
    iaSector: "IA Global",
    sector: "Global Large-Cap Quality Equity",
    aumBillions: 22.81,
    inceptionYear: 2010,
    managerName: "Terry Smith",
    managerTenureYears: 14.5,
    feCrowns: 5,
    feRiskScore: 102,
    quartileRank10Yr: "1st Quartile",
    avgAnnualReturn15Yr: 14.8,
    benchmarkName: "MSCI World Index (£)",
    benchmarkReturn15Yr: 11.5,
    alphaVsBenchmark: 3.3,
    isTrackingIndex: false,
    ocfPct: 0.94,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/b41y/fundsmith-equity-fund",
    rationale: "Terry Smith's iconic strategy: Buy good companies, don't overpay, do nothing. Exceptional return on capital employed (ROCE) and high gross margins."
  },
  {
    id: "rathbone-global-opps",
    name: "Rathbone Global Opportunities Fund (Class S Acc)",
    house: "Rathbones",
    ticker: "GB00B7FQLN12",
    citicode: "B7FQ",
    type: "Active",
    iaSector: "IA Global",
    sector: "Global Growth Leaders",
    aumBillions: 3.07,
    inceptionYear: 2001,
    managerName: "James Thomson & Sammy Dow",
    managerTenureYears: 21,
    feCrowns: 5,
    feRiskScore: 110,
    quartileRank10Yr: "1st Quartile",
    avgAnnualReturn15Yr: 13.5,
    benchmarkName: "FTSE World Index (£)",
    benchmarkReturn15Yr: 11.2,
    alphaVsBenchmark: 2.3,
    isTrackingIndex: false,
    ocfPct: 0.77,
    trustnetUrl: "https://www.trustnet.com/factsheets/o/b7fq/rathbone-global-opportunities-fund",
    rationale: "James Thomson's 21-year track record identifying structural disruptors, balanced by a strict 'weather-proofing' defensive filter."
  },
  {
    id: "lindsell-train-global",
    name: "Lindsell Train Global Equity Fund (Class B Acc)",
    house: "Lindsell Train",
    ticker: "IE00B644PG05",
    citicode: "B644",
    type: "Active",
    iaSector: "IA Global",
    sector: "Global Quality Brands",
    aumBillions: 4.52,
    inceptionYear: 2011,
    managerName: "Michael Lindsell & Nick Train",
    managerTenureYears: 13,
    feCrowns: 4,
    feRiskScore: 94,
    quartileRank10Yr: "1st Quartile",
    avgAnnualReturn15Yr: 12.9,
    benchmarkName: "MSCI World Index (£)",
    benchmarkReturn15Yr: 11.5,
    alphaVsBenchmark: 1.4,
    isTrackingIndex: false,
    ocfPct: 0.65,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/b644/lindsell-train-global-equity-fund",
    rationale: "Focuses on durable intangible assets, enduring brand franchises (Nintendo, Unilever, London Stock Exchange), with virtually zero portfolio turnover."
  },
  // UK Equity Champions
  {
    id: "slater-growth",
    name: "Slater Growth Fund (Class A Acc)",
    house: "Slater Investments",
    ticker: "GB0032978388",
    citicode: "3297",
    type: "Active",
    iaSector: "IA UK All Companies",
    sector: "UK Dynamic Growth",
    aumBillions: 1.20,
    inceptionYear: 2005,
    managerName: "Mark Slater",
    managerTenureYears: 19,
    feCrowns: 5,
    feRiskScore: 104,
    quartileRank10Yr: "1st Quartile",
    avgAnnualReturn15Yr: 12.2,
    benchmarkName: "FTSE All-Share Index",
    benchmarkReturn15Yr: 6.5,
    alphaVsBenchmark: 5.7,
    isTrackingIndex: false,
    ocfPct: 0.80,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/3297/slater-growth-fund",
    rationale: "Mark Slater (FE Alpha Hall of Fame) uses the Dynamic PE Growth (PEG) discipline to uncover undervalued UK cash-generative leaders, yielding extraordinary 5.7% p.a. alpha."
  },
  {
    id: "liontrust-spec-sit",
    name: "Liontrust Special Situations Fund (Class I Acc)",
    house: "Liontrust",
    ticker: "GB00B57H4F11",
    citicode: "B57H",
    type: "Active",
    iaSector: "IA UK All Companies",
    sector: "UK All Companies",
    aumBillions: 3.41,
    inceptionYear: 2005,
    managerName: "Anthony Cross & Julian Fosh",
    managerTenureYears: 19,
    feCrowns: 4,
    feRiskScore: 95,
    quartileRank10Yr: "1st Quartile",
    avgAnnualReturn15Yr: 9.8,
    benchmarkName: "FTSE All-Share Index",
    benchmarkReturn15Yr: 6.5,
    alphaVsBenchmark: 3.3,
    isTrackingIndex: false,
    ocfPct: 0.81,
    trustnetUrl: "https://www.trustnet.com/factsheets/o/b57h/liontrust-special-situations-fund",
    rationale: "Proprietary Economic Advantage process targeting companies with high recurring revenues, distribution power, and distinct IP."
  },
  {
    id: "royal-london-sustainable-leaders",
    name: "Royal London Sustainable Leaders Trust",
    house: "Royal London Asset Management",
    ticker: "GB00B06VR924",
    citicode: "B06V",
    type: "Active",
    iaSector: "IA UK All Companies",
    sector: "UK & Global ESG Quality",
    aumBillions: 4.12,
    inceptionYear: 1990,
    managerName: "Mike Fox & George Crowdy",
    managerTenureYears: 21,
    feCrowns: 4,
    feRiskScore: 96,
    quartileRank10Yr: "1st Quartile",
    avgAnnualReturn15Yr: 10.4,
    benchmarkName: "FTSE All-Share Index",
    benchmarkReturn15Yr: 6.5,
    alphaVsBenchmark: 3.9,
    isTrackingIndex: false,
    ocfPct: 0.76,
    trustnetUrl: "https://www.trustnet.com/factsheets/o/b06v/royal-london-sustainable-leaders-trust",
    rationale: "Mike Fox combines positive societal and environmental impact screening with robust balance-sheet analysis, generating over 20 years of consecutive outperformance."
  },
  {
    id: "fidelity-index-uk",
    name: "Fidelity Index UK Fund (Class P Acc)",
    house: "Fidelity International",
    ticker: "GB00BJS8SF03",
    citicode: "BJS8",
    type: "Passive",
    iaSector: "IA UK All Companies",
    sector: "UK All Companies Index",
    aumBillions: 4.80,
    inceptionYear: 2012,
    managerName: "Fidelity Index Team",
    managerTenureYears: 15,
    feCrowns: 0,
    feRiskScore: 98,
    quartileRank10Yr: "Indexed Core",
    avgAnnualReturn15Yr: 6.8,
    benchmarkName: "FTSE All-Share Index",
    benchmarkReturn15Yr: 6.76,
    alphaVsBenchmark: 0.04,
    isTrackingIndex: true,
    ocfPct: 0.06,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/bjs8/fidelity-index-uk-fund",
    rationale: "Rock-bottom 0.06% OCF UK All-Share tracker with flawless replication and negligible cash drag."
  },
  // European & Asian Leaders
  {
    id: "blackrock-european-dynamic",
    name: "BlackRock European Dynamic Fund (Class D Acc)",
    house: "BlackRock",
    ticker: "GB00B4W9V301",
    citicode: "B4W9",
    type: "Active",
    iaSector: "IA Europe Excluding UK",
    sector: "European Quality Growth",
    aumBillions: 3.40,
    inceptionYear: 2002,
    managerName: "Giles Rothbarth",
    managerTenureYears: 10,
    feCrowns: 5,
    feRiskScore: 106,
    quartileRank10Yr: "1st Quartile",
    avgAnnualReturn15Yr: 11.8,
    benchmarkName: "FTSE Developed Europe ex UK Index (£)",
    benchmarkReturn15Yr: 8.4,
    alphaVsBenchmark: 3.4,
    isTrackingIndex: false,
    ocfPct: 0.91,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/b4w9/blackrock-european-dynamic-fund",
    rationale: "Top-rated 5 FE Crown European equity portfolio consistently beating its benchmark through flexible style rotation between growth and value."
  },
  {
    id: "schroder-asian-alpha",
    name: "Schroder Asian Alpha Plus Fund (Class Z Acc)",
    house: "Schroders",
    ticker: "GB00B551CL40",
    citicode: "B2P7",
    type: "Active",
    iaSector: "IA Asia Pacific Excluding Japan",
    sector: "Asian High-Conviction Growth",
    aumBillions: 1.85,
    inceptionYear: 2007,
    managerName: "Richard Sennitt & Abbas Barkhordar",
    managerTenureYears: 15,
    feCrowns: 4,
    feRiskScore: 98,
    quartileRank10Yr: "1st Quartile",
    avgAnnualReturn15Yr: 9.4,
    benchmarkName: "MSCI AC Asia Pacific ex Japan",
    benchmarkReturn15Yr: 6.8,
    alphaVsBenchmark: 2.6,
    isTrackingIndex: false,
    ocfPct: 0.94,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/b2p7/schroder-asian-alpha-plus-fund",
    rationale: "Schroders' seasoned on-the-ground Asian research team exploiting structural growth in semiconductors, consumer brands, and financial inclusion across Asia."
  },
  // Global Passive Index Champions
  {
    id: "ishares-sp500",
    name: "iShares Core S&P 500 UCITS ETF (CSPX / CSP1)",
    house: "BlackRock (iShares)",
    ticker: "CSPX",
    citicode: "IUSA",
    type: "Passive",
    iaSector: "IA North America",
    sector: "US Large-Cap Equity",
    aumBillions: 62.00,
    inceptionYear: 2010,
    managerName: "BlackRock Index Team",
    managerTenureYears: 14,
    feCrowns: 0,
    feRiskScore: 112,
    quartileRank10Yr: "Indexed Core",
    avgAnnualReturn15Yr: 14.2,
    benchmarkName: "S&P 500 Index (£)",
    benchmarkReturn15Yr: 14.23,
    alphaVsBenchmark: -0.03,
    isTrackingIndex: true,
    ocfPct: 0.07,
    trustnetUrl: "https://www.trustnet.com/factsheets/E/cspx/ishares-core-sp-500-ucits-etf-usd-acc",
    rationale: "The gold standard of US equity ETFs on Trustnet with £62B in assets and an ultra-lean 0.07% annual charge."
  },
  {
    id: "fidelity-index-world",
    name: "Fidelity Index World Fund (Class P Acc)",
    house: "Fidelity International",
    ticker: "GB00BJS8SJ34",
    citicode: "BJS9",
    type: "Passive",
    iaSector: "IA Global",
    sector: "Global Developed Equity",
    aumBillions: 8.90,
    inceptionYear: 2012,
    managerName: "Fidelity Index Team",
    managerTenureYears: 15,
    feCrowns: 0,
    feRiskScore: 105,
    quartileRank10Yr: "Indexed Core",
    avgAnnualReturn15Yr: 11.8,
    benchmarkName: "MSCI World Index (£)",
    benchmarkReturn15Yr: 11.85,
    alphaVsBenchmark: -0.05,
    isTrackingIndex: true,
    ocfPct: 0.12,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/bjs9/fidelity-index-world-fund",
    rationale: "Fidelity's benchmark global tracker charging just 0.12% with tight physical sampling across ~1,500 developed world corporations."
  },
  {
    id: "vanguard-ftse-all-world",
    name: "Vanguard FTSE All-World UCITS ETF (VWRP / VWRL)",
    house: "Vanguard",
    ticker: "VWRP",
    citicode: "VWRG",
    type: "Passive",
    iaSector: "IA Global",
    sector: "Global All-Cap Equity",
    aumBillions: 19.50,
    inceptionYear: 2012,
    managerName: "Vanguard Equity Index Group",
    managerTenureYears: 12,
    feCrowns: 0,
    feRiskScore: 105,
    quartileRank10Yr: "Indexed Core",
    avgAnnualReturn15Yr: 11.6,
    benchmarkName: "FTSE All-World Index (£)",
    benchmarkReturn15Yr: 11.64,
    alphaVsBenchmark: -0.04,
    isTrackingIndex: true,
    ocfPct: 0.22,
    trustnetUrl: "https://www.trustnet.com/factsheets/E/vwrp/vanguard-ftse-all-world-ucits-etf-usd-acc",
    rationale: "Vanguard's total world ETF holding over 3,700 companies across both developed and emerging markets."
  },
  {
    id: "hsbc-ftse-all-world",
    name: "HSBC FTSE All-World Index Fund (Class C Acc)",
    house: "HSBC Global Asset Management",
    ticker: "GB00BMJJJF91",
    citicode: "BMJJ",
    type: "Passive",
    iaSector: "IA Global",
    sector: "Global All-Cap Equity",
    aumBillions: 5.84,
    inceptionYear: 2014,
    managerName: "HSBC Index Team",
    managerTenureYears: 15,
    feCrowns: 0,
    feRiskScore: 105,
    quartileRank10Yr: "Indexed Core",
    avgAnnualReturn15Yr: 11.5,
    benchmarkName: "FTSE All-World Index (£)",
    benchmarkReturn15Yr: 11.55,
    alphaVsBenchmark: -0.05,
    isTrackingIndex: true,
    ocfPct: 0.13,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/bmjj/hsbc-ftse-all-world-index-fund",
    rationale: "Cost-leading 0.13% OEIC fund offering complete FTSE All-World coverage without ETF broker dealing commissions."
  },
  // Multi-Asset Balanced & Defensive Legends
  {
    id: "vanguard-lifestrategy-80",
    name: "Vanguard LifeStrategy 80% Equity Fund (Acc)",
    house: "Vanguard",
    ticker: "GB00B4PQW151",
    citicode: "N76V",
    type: "Passive",
    iaSector: "IA Mixed Investment 40-85% Shares",
    sector: "Multi-Asset Growth (80/20)",
    aumBillions: 11.20,
    inceptionYear: 2011,
    managerName: "Vanguard Multi-Asset Team",
    managerTenureYears: 13,
    feCrowns: 0,
    feRiskScore: 85,
    quartileRank10Yr: "Indexed Core",
    avgAnnualReturn15Yr: 9.8,
    benchmarkName: "Custom 80/20 Global Composite",
    benchmarkReturn15Yr: 9.85,
    alphaVsBenchmark: -0.05,
    isTrackingIndex: true,
    ocfPct: 0.22,
    trustnetUrl: "https://www.trustnet.com/factsheets/T/n76v/vanguard-lifestrategy-80-equity-a-shares-acc",
    rationale: "Ideal for growth investors wanting automatic rebalancing with 20% fixed income stabiliser."
  },
  {
    id: "vanguard-lifestrategy-60",
    name: "Vanguard LifeStrategy 60% Equity Fund (Acc)",
    house: "Vanguard",
    ticker: "GB00B3TYHH97",
    citicode: "N76X",
    type: "Passive",
    iaSector: "IA Mixed Investment 40-85% Shares",
    sector: "Multi-Asset Balanced (60/40)",
    aumBillions: 15.20,
    inceptionYear: 2011,
    managerName: "Vanguard Multi-Asset Team",
    managerTenureYears: 13,
    feCrowns: 0,
    feRiskScore: 68,
    quartileRank10Yr: "Indexed Core",
    avgAnnualReturn15Yr: 7.6,
    benchmarkName: "Custom 60/40 Global Composite",
    benchmarkReturn15Yr: 7.65,
    alphaVsBenchmark: -0.05,
    isTrackingIndex: true,
    ocfPct: 0.22,
    trustnetUrl: "https://www.trustnet.com/factsheets/t/n76x/vanguard-lifestrategy-60-equity-a-shares-acc",
    rationale: "The UK's standard benchmark balanced portfolio automatically maintaining 60% equities and 40% hedged bonds."
  },
  {
    id: "trojan-fund",
    name: "Trojan Fund (Troy Asset Management - Class O)",
    house: "Troy Asset Management",
    ticker: "GB0034243732",
    citicode: "3424",
    type: "Active",
    iaSector: "IA Flexible Investment",
    sector: "Multi-Asset Capital Preservation",
    aumBillions: 5.31,
    inceptionYear: 2001,
    managerName: "Sebastian Lyon & Charlotte Yonge",
    managerTenureYears: 23,
    feCrowns: 5,
    feRiskScore: 42,
    quartileRank10Yr: "1st Quartile",
    avgAnnualReturn15Yr: 5.8,
    benchmarkName: "UK CPI + 2%",
    benchmarkReturn15Yr: 4.5,
    alphaVsBenchmark: 1.3,
    isTrackingIndex: false,
    ocfPct: 0.86,
    trustnetUrl: "https://www.trustnet.com/factsheets/o/3424/trojan-fund",
    rationale: "5 FE Crowns. Iconic UK defensive fund holding blue chips, physical gold, and index-linked gilts to protect real capital."
  },
  {
    id: "ruffer-total-return",
    name: "Ruffer Total Return Fund (Class I Acc)",
    house: "Ruffer LLP",
    ticker: "GB0006000134",
    citicode: "0600",
    type: "Active",
    iaSector: "IA Flexible Investment",
    sector: "Capital Preservation / Absolute Return",
    aumBillions: 3.20,
    inceptionYear: 2000,
    managerName: "Duncan MacInnes & Jasmine Yeo",
    managerTenureYears: 12,
    feCrowns: 4,
    feRiskScore: 36,
    quartileRank10Yr: "1st Quartile",
    avgAnnualReturn15Yr: 5.1,
    benchmarkName: "Bank of England Base Rate / Cash",
    benchmarkReturn15Yr: 2.4,
    alphaVsBenchmark: 2.7,
    isTrackingIndex: false,
    ocfPct: 1.09,
    trustnetUrl: "https://www.trustnet.com/factsheets/o/0600/ruffer-total-return-fund",
    rationale: "Designed to navigate major geopolitical shocks and bear markets, providing steady real capital preservation."
  },
  // Fixed Income & Liquidity
  {
    id: "artemis-strategic-bond",
    name: "Artemis Strategic Bond Fund (Class I Acc)",
    house: "Artemis",
    ticker: "GB00B2PLJJ81",
    citicode: "B2PL",
    type: "Active",
    iaSector: "IA Sterling Strategic Bond",
    sector: "Sterling Strategic Bond",
    aumBillions: 1.64,
    inceptionYear: 2010,
    managerName: "Juan Valenzuela & Rebecca Young",
    managerTenureYears: 14,
    feCrowns: 4,
    feRiskScore: 38,
    quartileRank10Yr: "1st Quartile",
    avgAnnualReturn15Yr: 4.5,
    benchmarkName: "IA Sterling Strategic Bond Sector Avg",
    benchmarkReturn15Yr: 3.2,
    alphaVsBenchmark: 1.3,
    isTrackingIndex: false,
    ocfPct: 0.58,
    trustnetUrl: "https://www.trustnet.com/factsheets/o/b2pl/artemis-strategic-bond-fund",
    rationale: "Flexible duration and credit selection across UK Gilts and high-grade corporate bonds to generate yield and cushion equities."
  },
  {
    id: "lgim-gilt-index",
    name: "Legal & General All Stocks Gilt Index Trust",
    house: "Legal & General (LGIM)",
    ticker: "GB00B00NY175",
    citicode: "B009",
    type: "Passive",
    iaSector: "IA UK Gilts",
    sector: "UK Government Gilts Index",
    aumBillions: 2.40,
    inceptionYear: 2004,
    managerName: "LGIM Index Team",
    managerTenureYears: 15,
    feCrowns: 0,
    feRiskScore: 35,
    quartileRank10Yr: "Indexed Core",
    avgAnnualReturn15Yr: 3.4,
    benchmarkName: "FTSE Actuaries UK Conventional Gilts All Stocks",
    benchmarkReturn15Yr: 3.44,
    alphaVsBenchmark: -0.04,
    isTrackingIndex: true,
    ocfPct: 0.15,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/b009/legal--general-all-stocks-gilt-index-trust",
    rationale: "Pure HM Treasury gilt tracker providing sovereign risk-free backing and deflation hedging."
  },
  {
    id: "royal-london-money-market",
    name: "Royal London Short Term Money Market Fund (Class Y Acc)",
    house: "Royal London Asset Management",
    ticker: "GB00B8XYYQ86",
    citicode: "N63Q",
    type: "Passive",
    iaSector: "IA Short Term Money Market",
    sector: "Sterling Cash & Money Market",
    aumBillions: 6.54,
    inceptionYear: 2002,
    managerName: "Craig Johnston & Tony Cole",
    managerTenureYears: 16,
    feCrowns: 5,
    feRiskScore: 2,
    quartileRank10Yr: "1st Quartile",
    avgAnnualReturn15Yr: 2.1,
    benchmarkName: "SONIA (Sterling Overnight Index Average)",
    benchmarkReturn15Yr: 2.05,
    alphaVsBenchmark: 0.05,
    isTrackingIndex: true,
    ocfPct: 0.10,
    trustnetUrl: "https://www.trustnet.com/factsheets/o/n63q/royal-london-short-term-money-market-fund",
    rationale: "Top-rated 5-Crown Sterling liquidity manager on Trustnet yielding floating BoE money market rates while eliminating market risk."
  },
  {
    id: "ishares-global-agg-bond",
    name: "iShares Core Global Aggregate Bond ETF (AGBP - GBP Hedged)",
    house: "BlackRock (iShares)",
    ticker: "AGBP",
    citicode: "AGBP",
    type: "Passive",
    iaSector: "IA Global Mixed Bond",
    sector: "Global High-Grade Bonds",
    aumBillions: 8.40,
    inceptionYear: 2017,
    managerName: "BlackRock Fixed Income Team",
    managerTenureYears: 15,
    feCrowns: 0,
    feRiskScore: 32,
    quartileRank10Yr: "Indexed Core",
    avgAnnualReturn15Yr: 3.2,
    benchmarkName: "Bloomberg Global Aggregate Index (GBP Hedged)",
    benchmarkReturn15Yr: 3.28,
    alphaVsBenchmark: -0.08,
    isTrackingIndex: true,
    ocfPct: 0.10,
    trustnetUrl: "https://www.trustnet.com/factsheets/e/agbp/ishares-core-global-aggregate-bond-ucits-etf-gbp-hedged-dist",
    rationale: "Institutional fixed income standard covering 28,000+ government and corporate bonds globally, fully hedged to GBP."
  }
];

// 2. Pre-configured Top Strategy Model Allocations based on Risk Profile & Strategy Style
const STRATEGY_PRESETS = {
  high: {
    label: "High Risk (Maximum Growth / 95-100% Equity)",
    active: [
      { fundId: "fidelity-global-tech", allocationPct: 30 },
      { fundId: "slater-growth", allocationPct: 25 },
      { fundId: "fundsmith-equity", allocationPct: 25 },
      { fundId: "blackrock-european-dynamic", allocationPct: 20 }
    ],
    passive: [
      { fundId: "lgim-tech-index", allocationPct: 35 },
      { fundId: "ishares-sp500", allocationPct: 30 },
      { fundId: "fidelity-index-world", allocationPct: 20 },
      { fundId: "fidelity-index-uk", allocationPct: 15 }
    ]
  },
  medium: {
    label: "Medium Risk (Balanced Core / 60% Equity & 40% Fixed Income/Defensive)",
    active: [
      { fundId: "jpm-global-unconstrained", allocationPct: 30 },
      { fundId: "rathbone-global-opps", allocationPct: 25 },
      { fundId: "artemis-strategic-bond", allocationPct: 25 },
      { fundId: "trojan-fund", allocationPct: 20 }
    ],
    passive: [
      { fundId: "vanguard-lifestrategy-60", allocationPct: 40 },
      { fundId: "fidelity-index-world", allocationPct: 25 },
      { fundId: "ishares-global-agg-bond", allocationPct: 25 },
      { fundId: "lgim-gilt-index", allocationPct: 10 }
    ]
  },
  low: {
    label: "Low Risk (Capital Preservation / 20-30% Equity & 70-80% Bonds & Cash)",
    active: [
      { fundId: "ruffer-total-return", allocationPct: 35 },
      { fundId: "trojan-fund", allocationPct: 25 },
      { fundId: "artemis-strategic-bond", allocationPct: 25 },
      { fundId: "lindsell-train-global", allocationPct: 15 }
    ],
    passive: [
      { fundId: "royal-london-money-market", allocationPct: 40 },
      { fundId: "lgim-gilt-index", allocationPct: 30 },
      { fundId: "ishares-global-agg-bond", allocationPct: 20 },
      { fundId: "fidelity-index-world", allocationPct: 10 }
    ]
  }
};

// Current active portfolio state (user customizable!)
let activeCustomPortfolio = JSON.parse(JSON.stringify(STRATEGY_PRESETS.medium.active));
let passiveCustomPortfolio = JSON.parse(JSON.stringify(STRATEGY_PRESETS.medium.passive));

let currentRisk = "medium";
let activeTab = "active"; // "active" | "passive" | "compare" | "screener"

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
 * Lookup full fund object by ID
 */
function getFundById(id) {
  return TRUSTNET_MASTER_FUNDS.find(f => f.id === id) || TRUSTNET_MASTER_FUNDS[0];
}

/**
 * Mathematical Compound Model
 */
function calculateFutureValue(lumpSum, monthlyAmount, annualRatePct, years) {
  const r = annualRatePct / 100;
  if (years <= 0) return lumpSum;
  
  const lumpFuture = lumpSum * Math.pow(1 + r, years);

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
function calculateWeightedReturn(allocatedItems) {
  return allocatedItems.reduce((acc, item) => {
    const fund = getFundById(item.fundId);
    return acc + (fund.avgAnnualReturn15Yr * (item.allocationPct / 100));
  }, 0);
}

/**
 * Render FE Crowns Badge
 */
function renderFeCrowns(crowns) {
  if (crowns === 0) {
    return `<span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700">Indexed (Passive)</span>`;
  }
  let crownsStr = "👑".repeat(crowns);
  return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200" title="Trustnet FE fundinfo Crown Rating: ${crowns} Crowns">
    <span>${crownsStr}</span>
    <span>${crowns} Crowns</span>
  </span>`;
}

/**
 * Get form inputs
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

  const currentYearTotal = inputs.lumpSum + (inputs.monthlyAmount * 12);
  document.getElementById("current-year-total").textContent = formatCurrency(currentYearTotal);

  // Calculate weighted returns from current active and passive portfolio selections
  const activeWeightedReturn = calculateWeightedReturn(activeCustomPortfolio);
  const passiveWeightedReturn = calculateWeightedReturn(passiveCustomPortfolio);

  const totalPrincipal = inputs.lumpSum + (inputs.monthlyAmount * 12 * inputs.horizon);
  const activeProjectedValue = calculateFutureValue(inputs.lumpSum, inputs.monthlyAmount, activeWeightedReturn, inputs.horizon);
  const passiveProjectedValue = calculateFutureValue(inputs.lumpSum, inputs.monthlyAmount, passiveWeightedReturn, inputs.horizon);

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

  // Render Portfolios
  renderPortfolioCards("active", activeCustomPortfolio, inputs);
  renderPortfolioCards("passive", passiveCustomPortfolio, inputs);

  // Render Comparison Matrix
  renderComparisonMatrix(activeCustomPortfolio, passiveCustomPortfolio, activeWeightedReturn, passiveWeightedReturn, activeProjectedValue, passiveProjectedValue, totalPrincipal, inputs);

  // Render Trustnet Master Screener Table
  renderTrustnetScreener();

  // Update All 4 Graphs
  const currentPortfolioList = activeTab === "passive" ? passiveCustomPortfolio : activeCustomPortfolio;
  updateTrajectoryChart(inputs, activeWeightedReturn, passiveWeightedReturn);
  updateDonutChart(currentPortfolioList, activeTab);
  updateFundFutureValueChart(currentPortfolioList, inputs);
  updateBenchmarkChart(currentPortfolioList);

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * Render Fund Cards with Swap Ability
 */
function renderPortfolioCards(strategyType, portfolioItems, inputs) {
  const container = document.getElementById(`${strategyType}-funds-container`);
  if (!container) return;

  container.innerHTML = portfolioItems.map((item, index) => {
    const fund = getFundById(item.fundId);
    const fundLumpSum = inputs.lumpSum * (item.allocationPct / 100);
    const fundMonthly = inputs.monthlyAmount * (item.allocationPct / 100);
    
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
              <span class="px-2.5 py-0.5 rounded text-xs font-bold bg-slate-900 text-white">${fund.house}</span>
              <h4 class="text-base font-bold text-slate-900">${fund.name}</h4>
              <span class="px-2 py-0.5 rounded text-[11px] font-bold ${
                strategyType === 'active' ? 'bg-brand-100 text-brand-800' : 'bg-teal-100 text-teal-800'
              }">${fund.type}</span>
              ${renderFeCrowns(fund.feCrowns)}
              <span class="text-xs text-slate-400 font-mono">ISIN: ${fund.ticker}</span>
              <span class="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">CITICODE: ${fund.citicode}</span>
            </div>
            
            <div class="flex items-center gap-2 flex-wrap text-xs text-slate-500 pt-0.5">
              <span class="font-medium text-slate-700">IA Sector: <strong>${fund.iaSector}</strong></span>
              <span>•</span>
              <span>FE Risk Score: <strong class="text-brand-800 font-semibold">${fund.feRiskScore}</strong> <span class="text-[10px] text-slate-400">(FTSE 100 = 100)</span></span>
              <span>•</span>
              <span>OCF: <strong class="text-slate-800">${fund.ocfPct}%</strong></span>
              <span>•</span>
              <a href="${fund.trustnetUrl}" target="_blank" rel="noopener noreferrer" 
                class="inline-flex items-center gap-1 text-brand-600 hover:text-brand-800 font-semibold hover:underline">
                <span>Trustnet Factsheet</span>
                <i data-lucide="external-link" class="w-3 h-3"></i>
              </a>
            </div>
          </div>

          <!-- Allocation Pill & Fund Swap Button -->
          <div class="text-right flex flex-col items-end gap-1.5">
            <div class="inline-flex items-center gap-2">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                strategyType === 'active' ? 'bg-brand-600 text-white' : 'bg-teal-600 text-white'
              }">
                Allocation: ${item.allocationPct}%
              </span>
              <button onclick="openSwapFundModal('${strategyType}', ${index})" 
                class="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 transition">
                <i data-lucide="refresh-cw" class="w-3 h-3 text-slate-500"></i>
                <span>Swap Fund</span>
              </button>
            </div>
            <div class="text-xs text-slate-500">
              ${formatCurrency(fundLumpSum)} lump + ${formatCurrency(fundMonthly)}/mo
            </div>
          </div>
        </div>

        <!-- Metric Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 py-2 text-xs">
          
          <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span class="text-[11px] text-slate-400 block mb-0.5">Total Fund Size (AUM)</span>
            <span class="font-extrabold text-slate-900 text-sm">£${fund.aumBillions.toFixed(2)} Billion</span>
            <span class="text-[10px] text-slate-400 block">Overall invested</span>
          </div>

          <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span class="text-[11px] text-slate-400 block mb-0.5">Lead Manager & Tenure</span>
            <span class="font-extrabold text-slate-900 text-sm truncate block" title="${fund.managerName}">
              ${fund.managerName.split('&')[0]}
            </span>
            <span class="text-[10px] text-slate-500 font-medium">${fund.managerTenureYears} Years in Charge</span>
          </div>

          <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span class="text-[11px] text-slate-400 block mb-0.5">Fund Inception Year</span>
            <span class="font-extrabold text-slate-900 text-sm">${fund.inceptionYear}</span>
            <span class="text-[10px] text-slate-500">${2026 - fund.inceptionYear} Years Track Record</span>
          </div>

          <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span class="text-[11px] text-slate-400 block mb-0.5">15-Yr / Inception CAGR</span>
            <span class="font-extrabold text-emerald-600 text-sm">${fund.avgAnnualReturn15Yr.toFixed(1)}% p.a.</span>
            <span class="text-[10px] text-slate-400">Net of fees in GBP</span>
          </div>

          <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span class="text-[11px] text-slate-400 block mb-0.5">vs Benchmark Index</span>
            <span class="font-extrabold ${isPositiveAlpha ? 'text-emerald-700' : 'text-slate-700'} text-sm">
              ${formatPct(fund.alphaVsBenchmark)}
            </span>
            <span class="text-[10px] text-slate-400 truncate block" title="${fund.benchmarkName}">
              ${fund.isTrackingIndex ? 'Tracking Diff' : 'Alpha (Outperformance)'}
            </span>
          </div>

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
            <strong class="text-slate-800">Trustnet Selection Rationale:</strong>
            ${fund.rationale} Tracked Benchmark: <em>${fund.benchmarkName}</em> (${fund.benchmarkReturn15Yr.toFixed(1)}% p.a. 15-yr index return).
          </div>
        </div>

      </div>
    `;
  }).join("");
}

/**
 * Render Side-by-Side Comparison Matrix
 */
function renderComparisonMatrix(activeItems, passiveItems, activeReturn, passiveReturn, activeVal, passiveVal, principal, inputs) {
  const tbody = document.getElementById("compare-matrix-body");
  if (!tbody) return;

  const activeFunds = activeItems.map(i => ({ ...getFundById(i.fundId), alloc: i.allocationPct }));
  const passiveFunds = passiveItems.map(i => ({ ...getFundById(i.fundId), alloc: i.allocationPct }));

  const activeAvgOcf = (activeFunds.reduce((a, f) => a + (f.ocfPct * (f.alloc / 100)), 0)).toFixed(2);
  const passiveAvgOcf = (passiveFunds.reduce((a, f) => a + (f.ocfPct * (f.alloc / 100)), 0)).toFixed(2);

  const activeAvgRisk = Math.round(activeFunds.reduce((a, f) => a + (f.feRiskScore * (f.alloc / 100)), 0));
  const passiveAvgRisk = Math.round(passiveFunds.reduce((a, f) => a + (f.feRiskScore * (f.alloc / 100)), 0));

  const activeTotalAUM = (activeFunds.reduce((a, f) => a + f.aumBillions, 0)).toFixed(1);
  const passiveTotalAUM = (passiveFunds.reduce((a, f) => a + f.aumBillions, 0)).toFixed(1);

  const activeHouses = [...new Set(activeFunds.map(f => f.house))].join(", ");
  const passiveHouses = [...new Set(passiveFunds.map(f => f.house))].join(", ");

  const rows = [
    {
      criteria: "Projected Value at Retirement (Age " + inputs.retirementAge + ")",
      active: `<strong class="text-brand-900 text-sm">${formatCurrency(activeVal)}</strong> (+${formatCurrency(activeVal - principal)})`,
      passive: `<strong class="text-teal-900 text-sm">${formatCurrency(passiveVal)}</strong> (+${formatCurrency(passiveVal - principal)})`
    },
    {
      criteria: "Represented Fund Houses",
      active: `<span class="font-semibold text-slate-800">${activeHouses}</span>`,
      passive: `<span class="font-semibold text-slate-800">${passiveHouses}</span>`
    },
    {
      criteria: "Trustnet FE fundinfo Weighted Risk Score",
      active: `<span class="font-bold text-slate-800">${activeAvgRisk}</span> (vs. FTSE 100 baseline = 100)`,
      passive: `<span class="font-bold text-slate-800">${passiveAvgRisk}</span> (vs. FTSE 100 baseline = 100)`
    },
    {
      criteria: "Weighted 15-Yr Historical Annual Return",
      active: `<span class="font-bold text-emerald-600">${activeReturn.toFixed(2)}% p.a.</span>`,
      passive: `<span class="font-bold text-teal-600">${passiveReturn.toFixed(2)}% p.a.</span>`
    },
    {
      criteria: "Weighted Ongoing Fee (OCF)",
      active: `<span class="font-bold text-amber-700">${activeAvgOcf}% p.a.</span> (Actively managed alpha rate)`,
      passive: `<span class="font-bold text-emerald-700">${passiveAvgOcf}% p.a.</span> (Ultra low index drag)`
    },
    {
      criteria: "Combined Fund Size (AUM Invested Overall)",
      active: `£${activeTotalAUM} Billion across active funds`,
      passive: `£${passiveTotalAUM} Billion across index vehicles`
    },
    {
      criteria: "Downside Volatility Mitigation",
      active: `Fund managers can hold cash, pivot sectors, or hedge during severe market contractions`,
      passive: `100% fully invested at all times; captures exact market beta upside and downside`
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
 * Render Master Trustnet Fund Screener Table
 */
function renderTrustnetScreener(filterSector = "all", filterHouse = "all") {
  const tbody = document.getElementById("screener-table-body");
  if (!tbody) return;

  let funds = TRUSTNET_MASTER_FUNDS;
  if (filterSector !== "all") {
    funds = funds.filter(f => f.iaSector === filterSector);
  }
  if (filterHouse !== "all") {
    funds = funds.filter(f => f.house === filterHouse);
  }

  // Sort descending by 15-year return
  funds = [...funds].sort((a, b) => b.avgAnnualReturn15Yr - a.avgAnnualReturn15Yr);

  tbody.innerHTML = funds.map(f => `
    <tr class="hover:bg-slate-50 transition border-b border-slate-100">
      <td class="py-3 px-3">
        <span class="font-bold text-slate-900 block">${f.name}</span>
        <span class="text-xs text-slate-400 font-mono">ISIN: ${f.ticker} | Citicode: ${f.citicode}</span>
      </td>
      <td class="py-3 px-3 font-semibold text-slate-700">${f.house}</td>
      <td class="py-3 px-3 text-slate-600 text-xs">${f.iaSector}</td>
      <td class="py-3 px-3">
        <span class="px-2 py-0.5 rounded text-[11px] font-bold ${f.type === 'Active' ? 'bg-brand-100 text-brand-800' : 'bg-teal-100 text-teal-800'}">
          ${f.type}
        </span>
      </td>
      <td class="py-3 px-3">${renderFeCrowns(f.feCrowns)}</td>
      <td class="py-3 px-3 font-bold text-slate-800">${f.feRiskScore}</td>
      <td class="py-3 px-3 font-extrabold text-emerald-600 text-sm">${f.avgAnnualReturn15Yr.toFixed(1)}% p.a.</td>
      <td class="py-3 px-3 text-slate-700">£${f.aumBillions.toFixed(2)}B</td>
      <td class="py-3 px-3 font-medium text-slate-700">${f.ocfPct}%</td>
      <td class="py-3 px-3 text-right">
        <a href="${f.trustnetUrl}" target="_blank" rel="noopener noreferrer" 
          class="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-800 underline">
          <span>Trustnet</span>
          <i data-lucide="external-link" class="w-3 h-3"></i>
        </a>
      </td>
    </tr>
  `).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/**
 * Visual Graph 1: Wealth Accumulation Trajectory (Line Chart)
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
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: "#0f172a",
          padding: 12,
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
 * Visual Graph 2: Donut Chart
 */
function updateDonutChart(portfolioItems, strategyType) {
  const ctx = document.getElementById("allocationDonutChart");
  if (!ctx) return;

  const funds = portfolioItems.map(i => ({ ...getFundById(i.fundId), alloc: i.allocationPct }));
  const labels = funds.map(f => f.name.split("(")[0].trim());
  const data = funds.map(f => f.alloc);
  
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

  const legendEl = document.getElementById("allocation-legend-list");
  if (legendEl) {
    legendEl.innerHTML = funds.map((f, i) => `
      <div class="flex items-center justify-between text-xs">
        <span class="flex items-center gap-1.5 truncate max-w-[70%]">
          <span class="w-2.5 h-2.5 rounded-full flex-shrink-0" style="background-color: ${colors[i % colors.length]}"></span>
          <span class="truncate" title="${f.name}">${f.name.split('(')[0]}</span>
        </span>
        <span class="font-bold text-slate-800">${f.alloc}%</span>
      </div>
    `).join("");
  }
}

/**
 * Visual Graph 3: Future Value Bar Chart
 */
function updateFundFutureValueChart(portfolioItems, inputs) {
  const ctx = document.getElementById("fundFutureValueBarChart");
  if (!ctx) return;

  const funds = portfolioItems.map(i => ({ ...getFundById(i.fundId), alloc: i.allocationPct }));
  const labels = funds.map(f => f.name.split("(")[0].trim().substring(0, 20));
  const futureValues = [];
  const initialPrincipal = [];

  funds.forEach(f => {
    const fundLump = inputs.lumpSum * (f.alloc / 100);
    const fundMonthly = inputs.monthlyAmount * (f.alloc / 100);
    const principal = fundLump + (fundMonthly * 12 * inputs.horizon);
    const futureVal = calculateFutureValue(fundLump, fundMonthly, f.avgAnnualReturn15Yr, inputs.horizon);

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
        legend: { position: "top", labels: { font: { size: 10 }, boxWidth: 12 } },
        tooltip: {
          backgroundColor: "#0f172a",
          callbacks: {
            label: (ctx) => ` ${ctx.dataset.label}: ${formatCurrency(ctx.raw)}`
          }
        }
      },
      scales: {
        x: { grid: { display: false }, ticks: { font: { size: 9 }, color: "#64748b" } },
        y: {
          grid: { color: "#f1f5f9" },
          ticks: {
            font: { size: 10 },
            color: "#64748b",
            callback: (v) => v >= 1000000 ? `£${(v/1000000).toFixed(1)}M` : `£${(v/1000).toFixed(0)}k`
          }
        }
      }
    }
  });
}

/**
 * Visual Graph 4: Benchmark Bar Chart
 */
function updateBenchmarkChart(portfolioItems) {
  const ctx = document.getElementById("benchmarkComparisonChart");
  if (!ctx) return;

  const funds = portfolioItems.map(i => ({ ...getFundById(i.fundId), alloc: i.allocationPct }));
  const labels = funds.map(f => f.name.split("(")[0].trim().substring(0, 18));
  const fundReturns = funds.map(f => f.avgAnnualReturn15Yr);
  const benchmarkReturns = funds.map(f => f.benchmarkReturn15Yr);

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
          label: "Benchmark Return (% p.a.)",
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
        legend: { position: "top", labels: { font: { size: 10 }, boxWidth: 12 } },
        tooltip: {
          backgroundColor: "#0f172a",
          callbacks: {
            label: (ctx) => ` ${ctx.dataset.label}: ${ctx.raw}% p.a.`,
            afterBody: (contexts) => {
              const f = funds[contexts[0].dataIndex];
              return f.isTrackingIndex 
                ? `Tracking Difference: ${formatPct(f.alphaVsBenchmark)}`
                : `Active Alpha: ${formatPct(f.alphaVsBenchmark)}`;
            }
          }
        }
      },
      scales: {
        x: { grid: { display: false }, ticks: { font: { size: 9 }, color: "#64748b" } },
        y: {
          grid: { color: "#f1f5f9" },
          ticks: { font: { size: 10 }, color: "#64748b", callback: v => `${v}%` }
        }
      }
    }
  });
}

/**
 * Swap Fund Modal Implementation
 */
let pendingSwap = { strategyType: "active", slotIndex: 0 };

window.openSwapFundModal = function(strategyType, slotIndex) {
  pendingSwap = { strategyType, slotIndex };
  const currentSlot = (strategyType === "active" ? activeCustomPortfolio : passiveCustomPortfolio)[slotIndex];
  const currentFund = getFundById(currentSlot.fundId);

  const modalEl = document.getElementById("swap-fund-modal");
  const modalSlotTitle = document.getElementById("swap-modal-slot-title");
  const modalList = document.getElementById("swap-modal-fund-list");

  modalSlotTitle.textContent = `Swap Slot ${slotIndex + 1} (${currentFund.name} - ${currentSlot.allocationPct}%)`;

  // Filter available funds matching strategy type
  const targetType = strategyType === "active" ? "Active" : "Passive";
  const eligibleFunds = TRUSTNET_MASTER_FUNDS.filter(f => f.type === targetType);

  modalList.innerHTML = eligibleFunds.map(f => {
    const isCurrent = f.id === currentFund.id;
    return `
      <div onclick="selectSwappedFund('${f.id}')" 
        class="p-3.5 rounded-xl border ${isCurrent ? 'border-brand-500 bg-brand-50/50' : 'border-slate-200 hover:border-brand-400 bg-white'} cursor-pointer transition flex items-center justify-between gap-3">
        <div class="space-y-1">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-white">${f.house}</span>
            <h5 class="text-xs font-bold text-slate-900">${f.name}</h5>
            ${renderFeCrowns(f.feCrowns)}
          </div>
          <p class="text-[11px] text-slate-500">
            ${f.iaSector} • FE Risk Score: <strong>${f.feRiskScore}</strong> • OCF: <strong>${f.ocfPct}%</strong>
          </p>
        </div>
        <div class="text-right flex-shrink-0">
          <span class="text-sm font-extrabold text-emerald-600 block">${f.avgAnnualReturn15Yr.toFixed(1)}% p.a.</span>
          <span class="text-[10px] text-slate-400">15-Yr Return</span>
        </div>
      </div>
    `;
  }).join("");

  modalEl.classList.remove("hidden");
  modalEl.classList.add("flex");
};

window.closeSwapModal = function() {
  const modalEl = document.getElementById("swap-fund-modal");
  modalEl.classList.add("hidden");
  modalEl.classList.remove("flex");
};

window.selectSwappedFund = function(newFundId) {
  const { strategyType, slotIndex } = pendingSwap;
  const portfolio = strategyType === "active" ? activeCustomPortfolio : passiveCustomPortfolio;
  portfolio[slotIndex].fundId = newFundId;
  closeSwapModal();
  updateAdvisor();
};

/**
 * CSV Export Functionality
 */
function exportCSV() {
  const inputs = getInputs();

  let csv = "UK Funds Selection Advisor - Master Trustnet Export\n";
  csv += `Date Generated: ${new Date().toLocaleDateString('en-GB')}\n`;
  csv += `Data Source: Trustnet.com (FE fundinfo)\n`;
  csv += `Current Age: ${inputs.currentAge}, Target Retirement Age: ${inputs.retirementAge}, Horizon: ${inputs.horizon} Years\n`;
  csv += `Lump Sum: £${inputs.lumpSum}, Monthly Contribution: £${inputs.monthlyAmount}\n\n`;

  csv += "Strategy,Fund House,Fund Name,ISIN,Citicode,IA Sector,FE Crowns,FE Risk Score,Allocation %,Lump Sum (£),Monthly (£),Expected Value at Retirement (£),15-Yr Return (% p.a.),Benchmark Index,Benchmark Return (% p.a.),Alpha/Tracking Diff,Fund Size AUM (£B),Lead Manager,Manager Tenure (Yrs),Inception Year,OCF (%),Trustnet Link\n";

  [
    { name: "ACTIVE", items: activeCustomPortfolio },
    { name: "PASSIVE", items: passiveCustomPortfolio }
  ].forEach(strat => {
    strat.items.forEach(item => {
      const f = getFundById(item.fundId);
      const fundLump = inputs.lumpSum * (item.allocationPct / 100);
      const fundMonthly = inputs.monthlyAmount * (item.allocationPct / 100);
      const futureVal = calculateFutureValue(fundLump, fundMonthly, f.avgAnnualReturn15Yr, inputs.horizon);

      const row = [
        strat.name,
        `"${f.house}"`,
        `"${f.name}"`,
        f.ticker,
        f.citicode,
        `"${f.iaSector}"`,
        f.feCrowns > 0 ? `${f.feCrowns} Crowns` : "Indexed",
        f.feRiskScore,
        `${item.allocationPct}%`,
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
        `${f.ocfPct}%`,
        `"${f.trustnetUrl}"`
      ];
      csv += row.join(",") + "\n";
    });
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `UK_Funds_Allocation_Master_Trustnet.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Event Listeners & Bootstrapping
 */
document.addEventListener("DOMContentLoaded", () => {
  const inputIds = ["current-age", "retirement-age", "lump-sum", "monthly-amount", "target-growth"];
  inputIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", () => {
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

      // Reset to default model preset for selected risk
      activeCustomPortfolio = JSON.parse(JSON.stringify(STRATEGY_PRESETS[currentRisk].active));
      passiveCustomPortfolio = JSON.parse(JSON.stringify(STRATEGY_PRESETS[currentRisk].passive));

      updateAdvisor();
    });
  });

  // Strategy navigation tabs
  const tabActive = document.getElementById("tab-active");
  const tabPassive = document.getElementById("tab-passive");
  const tabCompare = document.getElementById("tab-compare");
  const tabScreener = document.getElementById("tab-screener");

  const secActive = document.getElementById("section-active");
  const secPassive = document.getElementById("section-passive");
  const secCompare = document.getElementById("section-compare");
  const secScreener = document.getElementById("section-screener");

  function setTab(tab) {
    activeTab = tab;
    [tabActive, tabPassive, tabCompare, tabScreener].forEach(t => t && t.classList.remove("active"));
    [secActive, secPassive, secCompare, secScreener].forEach(s => s && s.classList.add("hidden"));

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
    } else if (tab === "screener") {
      tabScreener.classList.add("active");
      secScreener.classList.remove("hidden");
    }

    const inputs = getInputs();
    const currentPortfolioList = tab === "passive" ? passiveCustomPortfolio : activeCustomPortfolio;
    updateDonutChart(currentPortfolioList, tab);
    updateFundFutureValueChart(currentPortfolioList, inputs);
    updateBenchmarkChart(currentPortfolioList);
  }

  if (tabActive) tabActive.addEventListener("click", () => setTab("active"));
  if (tabPassive) tabPassive.addEventListener("click", () => setTab("passive"));
  if (tabCompare) tabCompare.addEventListener("click", () => setTab("compare"));
  if (tabScreener) tabScreener.addEventListener("click", () => setTab("screener"));

  // Screener Filters
  const filterSectorEl = document.getElementById("screener-filter-sector");
  const filterHouseEl = document.getElementById("screener-filter-house");
  if (filterSectorEl && filterHouseEl) {
    const handleScreenerFilter = () => {
      renderTrustnetScreener(filterSectorEl.value, filterHouseEl.value);
    };
    filterSectorEl.addEventListener("change", handleScreenerFilter);
    filterHouseEl.addEventListener("change", handleScreenerFilter);
  }

  document.getElementById("btn-export-csv").addEventListener("click", exportCSV);
  document.getElementById("btn-print-report").addEventListener("click", () => window.print());

  updateAdvisor();
});
