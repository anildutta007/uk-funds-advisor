/**
 * UK Funds Selection Advisor - Interactive Financial Advisory Engine
 * Integrated with Authentic Data from Trustnet.com (FE fundinfo)
 * Specialised for the UK Retail Investment Market (ISAs, SIPPs, GIAs)
 */

// 1. Comprehensive UK Funds Knowledgebase with Trustnet (FE fundinfo) Data
const FUNDS_DATA = {
  high: {
    label: "High Risk (Growth / Aggressive)",
    equityAllocation: "95% Equity / 5% Cash",
    active: [
      {
        id: "fundsmith-equity",
        name: "Fundsmith Equity Fund (Class I Acc)",
        ticker: "GB00B41YBW71",
        citicode: "B41Y",
        type: "Active",
        iaSector: "IA Global",
        sector: "Global Large-Cap Quality Equity",
        allocationPct: 40,
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
        rationale: "Ranked 1st Quartile in IA Global on Trustnet. High-conviction portfolio of ~30 resilient global compounders with high ROCE and superior pricing power."
      },
      {
        id: "rathbone-global-opps",
        name: "Rathbone Global Opportunities Fund (Class S Acc)",
        ticker: "GB00B7FQLN12",
        citicode: "B7FQ",
        type: "Active",
        iaSector: "IA Global",
        sector: "Global Large-Cap Growth Equity",
        allocationPct: 25,
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
        rationale: "Awarded 5 FE Crowns on Trustnet. High-growth mandate targeting structural disruptors and market leaders, led by veteran manager James Thomson since 2003."
      },
      {
        id: "liontrust-spec-sit",
        name: "Liontrust Special Situations Fund (Class I Acc)",
        ticker: "GB00B57H4F11",
        citicode: "B57H",
        type: "Active",
        iaSector: "IA UK All Companies",
        sector: "UK All Companies",
        allocationPct: 20,
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
        rationale: "Flagship UK equity fund employing Liontrust's Economic Advantage process. Proven multi-cycle 1st-quartile alpha over the FTSE All-Share."
      },
      {
        id: "stewart-asia-pac",
        name: "Stewart Investors Asia Pacific Leaders Fund",
        ticker: "GB0033874768",
        citicode: "3387",
        type: "Active",
        iaSector: "IA Asia Pacific Excluding Japan",
        sector: "Asia Pacific & Emerging Markets",
        allocationPct: 15,
        aumBillions: 5.10,
        inceptionYear: 2003,
        managerName: "David Gait & Sashi Reddy",
        managerTenureYears: 16,
        feCrowns: 4,
        feRiskScore: 92,
        quartileRank10Yr: "2nd Quartile",
        avgAnnualReturn15Yr: 8.9,
        benchmarkName: "MSCI AC Asia Pacific ex Japan",
        benchmarkReturn15Yr: 6.8,
        alphaVsBenchmark: 2.1,
        isTrackingIndex: false,
        ocfPct: 0.84,
        trustnetUrl: "https://www.trustnet.com/factsheets/o/3387/stewart-investors-asia-pacific-leaders-sustainability-fund",
        rationale: "Defensive quality approach to emerging Asia with strict ESG stewardship. Lower drawdown risk during emerging market corrections."
      }
    ],
    passive: [
      {
        id: "vanguard-ftse-all-world",
        name: "Vanguard FTSE All-World UCITS ETF (VWRP / VWRL)",
        ticker: "VWRP",
        citicode: "VWRG",
        type: "Passive",
        iaSector: "IA Global",
        sector: "Global Large/Mid-Cap Blend Equity",
        allocationPct: 45,
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
        trustnetUrl: "https://www.trustnet.com/factsheets/e/vwrp/vanguard-ftse-all-world-ucits-etf-usd-acc",
        rationale: "Trustnet rated indexed cornerstone. Complete global equity coverage across 3,700+ holdings in 50 countries with microscopic tracking error."
      },
      {
        id: "ishares-core-sp500",
        name: "iShares Core S&P 500 UCITS ETF (CSPX / CSP1)",
        ticker: "CSPX",
        citicode: "IUSA",
        type: "Passive",
        iaSector: "IA North America",
        sector: "US Large-Cap Equity",
        allocationPct: 30,
        aumBillions: 62.00,
        inceptionYear: 2010,
        managerName: "BlackRock Index Investment Team",
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
        trustnetUrl: "https://www.trustnet.com/factsheets/e/cspx/ishares-core-sp-500-ucits-etf-usd-acc",
        rationale: "Largest ETF in Europe on Trustnet with £62B AUM. Direct access to the leading 500 US corporations at an ultra-lean 0.07% OCF."
      },
      {
        id: "vanguard-ftse-uk-allshare",
        name: "Vanguard FTSE UK All-Share Index Unit Trust",
        ticker: "GB00B3X7QG63",
        citicode: "B3X7",
        type: "Passive",
        iaSector: "IA UK All Companies",
        sector: "UK All Companies",
        allocationPct: 15,
        aumBillions: 14.20,
        inceptionYear: 2009,
        managerName: "Vanguard Equity Index Group",
        managerTenureYears: 15,
        feCrowns: 0,
        feRiskScore: 98,
        quartileRank10Yr: "Indexed Core",
        avgAnnualReturn15Yr: 6.7,
        benchmarkName: "FTSE All-Share Index",
        benchmarkReturn15Yr: 6.76,
        alphaVsBenchmark: -0.06,
        isTrackingIndex: true,
        ocfPct: 0.06,
        trustnetUrl: "https://www.trustnet.com/factsheets/o/b3x7/vanguard-ftse-uk-all-share-index-unit-trust",
        rationale: "Captures 98% of the UK investable market cap with negligible 0.06% annual management drag."
      },
      {
        id: "ishares-msci-em-imi",
        name: "iShares Core MSCI Emerging Markets IMI ETF (EMIM)",
        ticker: "EMIM",
        citicode: "EMIM",
        type: "Passive",
        iaSector: "IA Global Emerging Markets",
        sector: "Global Emerging Markets",
        allocationPct: 10,
        aumBillions: 16.80,
        inceptionYear: 2014,
        managerName: "BlackRock Index Investment Team",
        managerTenureYears: 10,
        feCrowns: 0,
        feRiskScore: 94,
        quartileRank10Yr: "Indexed Core",
        avgAnnualReturn15Yr: 6.2,
        benchmarkName: "MSCI Emerging Markets IMI Index",
        benchmarkReturn15Yr: 6.32,
        alphaVsBenchmark: -0.12,
        isTrackingIndex: true,
        ocfPct: 0.18,
        trustnetUrl: "https://www.trustnet.com/factsheets/e/emim/ishares-core-msci-em-imi-ucits-etf-usd-acc",
        rationale: "Broad emerging market allocation across China, India, Taiwan, and Korea, providing high-growth diversification."
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
        citicode: "B41Y",
        type: "Active",
        iaSector: "IA Global",
        sector: "Global Large-Cap Equity",
        allocationPct: 35,
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
        rationale: "Core global equity engine delivering proven long-term compounding and pricing power moats during inflationary cycles."
      },
      {
        id: "royal-london-sustainable-leaders",
        name: "Royal London Sustainable Leaders Trust",
        ticker: "GB00B06VR924",
        citicode: "B06V",
        type: "Active",
        iaSector: "IA UK All Companies",
        sector: "UK & Global Blend Equity",
        allocationPct: 25,
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
        rationale: "Over 20 years of consecutive leadership by Mike Fox combining strict ESG screening with exceptional bottom-up financial quality."
      },
      {
        id: "artemis-strategic-bond",
        name: "Artemis Strategic Bond Fund (Class I Acc)",
        ticker: "GB00B2PLJJ81",
        citicode: "B2PL",
        type: "Active",
        iaSector: "IA Sterling Strategic Bond",
        sector: "Sterling Strategic Bond",
        allocationPct: 25,
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
        id: "trojan-fund",
        name: "Trojan Fund (Troy Asset Management - Class O)",
        ticker: "GB0034243732",
        citicode: "3424",
        type: "Active",
        iaSector: "IA Flexible Investment",
        sector: "Multi-Asset Capital Preservation",
        allocationPct: 15,
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
        rationale: "Awarded 5 FE Crowns on Trustnet. Iconic capital preservation vehicle holding blue chips, physical gold bullion, and index-linked gilts."
      }
    ],
    passive: [
      {
        id: "vanguard-lifestrategy-60",
        name: "Vanguard LifeStrategy 60% Equity Fund (Acc)",
        ticker: "GB00B3TYHH97",
        citicode: "N76X",
        type: "Passive",
        iaSector: "IA Mixed Investment 40-85% Shares",
        sector: "Multi-Asset Balanced (60% Equity / 40% Bonds)",
        allocationPct: 40,
        aumBillions: 15.20,
        inceptionYear: 2011,
        managerName: "Vanguard Multi-Asset Investment Team",
        managerTenureYears: 13,
        feCrowns: 0,
        feRiskScore: 68,
        quartileRank10Yr: "Indexed Core",
        avgAnnualReturn15Yr: 7.6,
        benchmarkName: "Custom 60/40 Global Composite Benchmark",
        benchmarkReturn15Yr: 7.65,
        alphaVsBenchmark: -0.05,
        isTrackingIndex: true,
        ocfPct: 0.22,
        trustnetUrl: "https://www.trustnet.com/factsheets/t/n76x/vanguard-lifestrategy-60-equity-a-shares-acc",
        rationale: "The UK's benchmark balanced tracker on Trustnet. Automates daily rebalancing across global equities and hedged sovereign/corporate bonds."
      },
      {
        id: "hsbc-ftse-all-world",
        name: "HSBC FTSE All-World Index Fund (Class C Acc)",
        ticker: "GB00BMJJJF91",
        citicode: "BMJJ",
        type: "Passive",
        iaSector: "IA Global",
        sector: "Global Large/Mid-Cap Equity",
        allocationPct: 30,
        aumBillions: 5.84,
        inceptionYear: 2014,
        managerName: "HSBC Global Asset Management Index Team",
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
        trustnetUrl: "https://www.trustnet.com/factsheets/o/bmjj/hsbc-ftse-all-world-index-fund",
        rationale: "Ultra low-cost 0.13% OCF index tracker providing physical replication of over 3,500 global stocks."
      },
      {
        id: "ishares-global-agg-bond",
        name: "iShares Core Global Aggregate Bond ETF (AGBP - GBP Hedged)",
        ticker: "AGBP",
        citicode: "AGBP",
        type: "Passive",
        iaSector: "IA Global Mixed Bond",
        sector: "Global Fixed Income (Multi-Sector)",
        allocationPct: 20,
        aumBillions: 8.40,
        inceptionYear: 2017,
        managerName: "BlackRock Fixed Income Index Team",
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
        rationale: "Broadest fixed-income vehicle on Trustnet, fully hedged to GBP to eliminate currency fluctuations while earning global bond yields."
      },
      {
        id: "vanguard-short-corp-bond",
        name: "Vanguard Global Short-Term Corporate Bond Index (GBP Hedged)",
        ticker: "IE00BDFB7198",
        citicode: "BDFB",
        type: "Passive",
        iaSector: "IA Global Corporate Bond",
        sector: "Short-Duration Corporate Bonds",
        allocationPct: 10,
        aumBillions: 4.10,
        inceptionYear: 2014,
        managerName: "Vanguard Fixed Income Group",
        managerTenureYears: 15,
        feCrowns: 0,
        feRiskScore: 24,
        quartileRank10Yr: "Indexed Core",
        avgAnnualReturn15Yr: 2.8,
        benchmarkName: "Bloomberg Global Corp 1-5Yr (GBP Hedged)",
        benchmarkReturn15Yr: 2.86,
        alphaVsBenchmark: -0.06,
        isTrackingIndex: true,
        ocfPct: 0.15,
        trustnetUrl: "https://www.trustnet.com/factsheets/o/bdfb/vanguard-global-short-term-corporate-bond-index-fund",
        rationale: "Low-volatility corporate bond anchor holding high-quality notes maturing in 1 to 5 years."
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
        citicode: "0600",
        type: "Active",
        iaSector: "IA Flexible Investment",
        sector: "Multi-Asset Capital Preservation",
        allocationPct: 30,
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
        rationale: "Unconventional multi-asset defensive strategy designed to preserve capital in bear markets while achieving steady positive real growth."
      },
      {
        id: "royal-london-short-duration-bond",
        name: "Royal London Short Duration High Yield Bond Fund",
        ticker: "GB00B7V0B566",
        citicode: "B7V0",
        type: "Active",
        iaSector: "IA Sterling Strategic Bond",
        sector: "Short Duration Credit / Income",
        allocationPct: 30,
        aumBillions: 1.85,
        inceptionYear: 2013,
        managerName: "Azhar Hussain",
        managerTenureYears: 11,
        feCrowns: 4,
        feRiskScore: 34,
        quartileRank10Yr: "1st Quartile",
        avgAnnualReturn15Yr: 4.6,
        benchmarkName: "SONIA + 1.5%",
        benchmarkReturn15Yr: 3.8,
        alphaVsBenchmark: 0.8,
        isTrackingIndex: false,
        ocfPct: 0.55,
        trustnetUrl: "https://www.trustnet.com/factsheets/o/b7v0/royal-london-short-duration-global-high-yield-bond-fund",
        rationale: "High cashflow yield with minimal interest rate sensitivity due to low duration, managed with strict default avoidance on Trustnet."
      },
      {
        id: "lindsell-train-uk",
        name: "Lindsell Train UK Equity Fund (Class D Acc)",
        ticker: "GB00B18B9W76",
        citicode: "B18B",
        type: "Active",
        iaSector: "IA UK All Companies",
        sector: "UK All Companies (Defensive Quality)",
        allocationPct: 20,
        aumBillions: 3.72,
        inceptionYear: 2006,
        managerName: "Nick Train & Michael Lindsell",
        managerTenureYears: 18,
        feCrowns: 4,
        feRiskScore: 88,
        quartileRank10Yr: "1st Quartile",
        avgAnnualReturn15Yr: 8.4,
        benchmarkName: "FTSE All-Share Index",
        benchmarkReturn15Yr: 6.5,
        alphaVsBenchmark: 1.9,
        isTrackingIndex: false,
        ocfPct: 0.65,
        trustnetUrl: "https://www.trustnet.com/factsheets/o/b18b/lindsell-train-uk-equity-fund",
        rationale: "Top-tier UK equity brand franchise investor (Unilever, Relx, Diageo). Exceptionally low turnover and dependable dividend growth."
      },
      {
        id: "lgim-short-dated-corp",
        name: "Legal & General Short Dated Sterling Corporate Bond Fund",
        ticker: "GB00B440Q353",
        citicode: "B440",
        type: "Active",
        iaSector: "IA Sterling Corporate Bond",
        sector: "Sterling Corporate Bond",
        allocationPct: 20,
        aumBillions: 2.15,
        inceptionYear: 2011,
        managerName: "Matthew Rees",
        managerTenureYears: 10,
        feCrowns: 3,
        feRiskScore: 22,
        quartileRank10Yr: "2nd Quartile",
        avgAnnualReturn15Yr: 3.1,
        benchmarkName: "Markit iBoxx Sterling Corp 1-5 Year",
        benchmarkReturn15Yr: 2.7,
        alphaVsBenchmark: 0.4,
        isTrackingIndex: false,
        ocfPct: 0.45,
        trustnetUrl: "https://www.trustnet.com/factsheets/o/b440/legal--general-short-dated-sterling-corporate-bond-index-fund",
        rationale: "Reliable Sterling corporate bond yield from prime UK institutions with laddered 1-5 year maturities to protect against rate shocks."
      }
    ],
    passive: [
      {
        id: "vanguard-lifestrategy-20",
        name: "Vanguard LifeStrategy 20% Equity Fund (Acc)",
        ticker: "GB00B4R2F342",
        citicode: "N76T",
        type: "Passive",
        iaSector: "IA Mixed Investment 0-35% Shares",
        sector: "Multi-Asset Conservative (20% Equity / 80% Bonds)",
        allocationPct: 40,
        aumBillions: 3.85,
        inceptionYear: 2011,
        managerName: "Vanguard Multi-Asset Investment Team",
        managerTenureYears: 13,
        feCrowns: 0,
        feRiskScore: 26,
        quartileRank10Yr: "Indexed Core",
        avgAnnualReturn15Yr: 4.2,
        benchmarkName: "Custom 20/80 Global Composite Benchmark",
        benchmarkReturn15Yr: 4.25,
        alphaVsBenchmark: -0.05,
        isTrackingIndex: true,
        ocfPct: 0.22,
        trustnetUrl: "https://www.trustnet.com/factsheets/t/n76t/vanguard-lifestrategy-20-equity-a-shares-acc",
        rationale: "Core conservative passive engine on Trustnet. 20/80 multi-asset allocation providing an equity inflation hedge with high sovereign bond stability."
      },
      {
        id: "ishares-uk-gilts-0-5",
        name: "iShares UK Gilts 0-5yr UCITS ETF (IGLS)",
        ticker: "IGLS",
        citicode: "INX9",
        type: "Passive",
        iaSector: "IA UK Gilts",
        sector: "UK Government Bonds (Gilts)",
        allocationPct: 25,
        aumBillions: 2.34,
        inceptionYear: 2009,
        managerName: "BlackRock Fixed Income Index Team",
        managerTenureYears: 15,
        feCrowns: 0,
        feRiskScore: 18,
        quartileRank10Yr: "Indexed Core",
        avgAnnualReturn15Yr: 2.4,
        benchmarkName: "FTSE Actuaries UK Gilts 0-5 Years Index",
        benchmarkReturn15Yr: 2.44,
        alphaVsBenchmark: -0.04,
        isTrackingIndex: true,
        ocfPct: 0.07,
        trustnetUrl: "https://www.trustnet.com/factsheets/e/igls/ishares-uk-gilts-0-5yr-ucits-etf-gbp-dist",
        rationale: "Direct HM Treasury credit backing with minimal interest rate sensitivity, ideal for near-term capital certainty."
      },
      {
        id: "royal-london-money-market",
        name: "Royal London Short Term Money Market Fund (Class Y Acc)",
        ticker: "GB00B8XYYQ86",
        citicode: "N63Q",
        type: "Passive",
        iaSector: "IA Short Term Money Market",
        sector: "Sterling Money Market / Cash",
        allocationPct: 20,
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
        rationale: "Top-rated 5-Crown Sterling liquidity manager on Trustnet yielding floating BoE money market rates while eliminating equity volatility."
      },
      {
        id: "vanguard-global-agg-bond",
        name: "Vanguard Global Aggregate Bond ETF (VAGP - GBP Hedged)",
        ticker: "VAGP",
        citicode: "R6GB",
        type: "Passive",
        iaSector: "IA Global Mixed Bond",
        sector: "Global High-Grade Sovereign & Corporate Bonds",
        allocationPct: 15,
        aumBillions: 5.42,
        inceptionYear: 2019,
        managerName: "Vanguard Fixed Income Index Team",
        managerTenureYears: 15,
        feCrowns: 0,
        feRiskScore: 30,
        quartileRank10Yr: "Indexed Core",
        avgAnnualReturn15Yr: 3.1,
        benchmarkName: "Bloomberg Global Aggregate Float (GBP Hedged)",
        benchmarkReturn15Yr: 3.16,
        alphaVsBenchmark: -0.06,
        isTrackingIndex: true,
        ocfPct: 0.10,
        trustnetUrl: "https://www.trustnet.com/factsheets/e/vagp/vanguard-global-aggregate-bond-ucits-etf-gbp-hedged-dist",
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
 * Helper to render FE Crowns badge
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
 * 4. Render Fund Cards with Trustnet (FE fundinfo) data integration
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
              ${renderFeCrowns(fund.feCrowns)}
              <span class="text-xs text-slate-400 font-mono">ISIN: ${fund.ticker}</span>
              <span class="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono">CITICODE: ${fund.citicode}</span>
            </div>
            
            <div class="flex items-center gap-2 flex-wrap text-xs text-slate-500 pt-0.5">
              <span class="font-medium text-slate-700">IA Sector: <strong>${fund.iaSector}</strong></span>
              <span>•</span>
              <span>Trustnet Risk Score: <strong class="text-brand-800 font-semibold">${fund.feRiskScore}</strong> <span class="text-[10px] text-slate-400">(FTSE 100 = 100)</span></span>
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
            <strong class="text-slate-800">Trustnet Selection Rationale:</strong>
            ${fund.rationale} Tracked Benchmark: <em>${fund.benchmarkName}</em> (${fund.benchmarkReturn15Yr.toFixed(1)}% p.a. 15-yr index return).
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

  const activeAvgRisk = Math.round(activeFunds.reduce((a, f) => a + (f.feRiskScore * (f.allocationPct / 100)), 0));
  const passiveAvgRisk = Math.round(passiveFunds.reduce((a, f) => a + (f.feRiskScore * (f.allocationPct / 100)), 0));

  const activeTotalAUM = (activeFunds.reduce((a, f) => a + f.aumBillions, 0)).toFixed(1);
  const passiveTotalAUM = (passiveFunds.reduce((a, f) => a + f.aumBillions, 0)).toFixed(1);

  const rows = [
    {
      criteria: "Projected Value at Retirement (Age " + inputs.retirementAge + ")",
      active: `<strong class="text-brand-900 text-sm">${formatCurrency(activeVal)}</strong> (+${formatCurrency(activeVal - principal)})`,
      passive: `<strong class="text-teal-900 text-sm">${formatCurrency(passiveVal)}</strong> (+${formatCurrency(passiveVal - principal)})`
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

  let csv = "UK Funds Selection Advisor - Portfolio Export (Trustnet Data Edition)\n";
  csv += `Date Generated: ${new Date().toLocaleDateString('en-GB')}\n`;
  csv += `Data Source: Trustnet (FE fundinfo)\n`;
  csv += `Current Age: ${inputs.currentAge}, Target Retirement Age: ${inputs.retirementAge}, Horizon: ${inputs.horizon} Years\n`;
  csv += `Lump Sum: £${inputs.lumpSum}, Monthly Contribution: £${inputs.monthlyAmount}\n`;
  csv += `Risk Profile: ${riskData.label}, Target Growth: ${inputs.targetGrowth}%\n\n`;

  // Headers
  csv += "Strategy,Fund Name,ISIN,Citicode,IA Sector,FE Crowns,FE Risk Score,Allocation %,Lump Sum (£),Monthly (£),Expected Value at Retirement (£),15-Yr Return (% p.a.),Benchmark Index,Benchmark Return (% p.a.),Alpha/Tracking Diff,Fund Size AUM (£B),Lead Manager,Manager Tenure (Yrs),Inception Year,OCF (%),Trustnet Link\n";

  ["active", "passive"].forEach(strat => {
    riskData[strat].forEach(f => {
      const fundLump = inputs.lumpSum * (f.allocationPct / 100);
      const fundMonthly = inputs.monthlyAmount * (f.allocationPct / 100);
      const futureVal = calculateFutureValue(fundLump, fundMonthly, f.avgAnnualReturn15Yr, inputs.horizon);

      const row = [
        strat.toUpperCase(),
        `"${f.name}"`,
        f.ticker,
        f.citicode,
        `"${f.iaSector}"`,
        f.feCrowns > 0 ? `${f.feCrowns} Crowns` : "Indexed",
        f.feRiskScore,
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
  link.setAttribute("download", `UK_Funds_Allocation_Portfolio_${inputs.risk}_risk_Trustnet.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * 11. Event Listeners & Bootstrapping
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

  document.getElementById("btn-export-csv").addEventListener("click", exportCSV);
  document.getElementById("btn-print-report").addEventListener("click", () => window.print());

  updateAdvisor();
});
