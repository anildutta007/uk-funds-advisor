/**
 * UK Funds Selection Advisor - Interactive Financial Advisory Engine
 * Multi-House Trustnet.com (FE fundinfo) Top-Performing Funds Universe
 * With 15-Year (+/-) Annual Calendar Return Graphs & Current Year (2026 YTD) Metrics
 */

// 1. Master Catalog of Top Trustnet.com UK Funds with 15-Year & 2026 YTD Returns
const TRUSTNET_MASTER_FUNDS = [
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
    ytdReturn2026: 18.4,
    benchmarkName: "MSCI AC World Information Technology Index",
    benchmarkReturn15Yr: 19.8,
    alphaVsBenchmark: 1.7,
    isTrackingIndex: false,
    ocfPct: 1.04,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/b4yz/fidelity-global-technology-fund",
    rationale: "Trustnet 5-Crown mega-performer. Hyunho Sohn's bottom-up strategy focusing on misunderstood tech compounders with pricing power, achieving >20% annualised returns over 15 years.",
    yearlyReturns: [
      { year: "2011", returnPct: 2.1 },
      { year: "2012", returnPct: 14.6 },
      { year: "2013", returnPct: 27.8 },
      { year: "2014", returnPct: 24.5 },
      { year: "2015", returnPct: 18.2 },
      { year: "2016", returnPct: 34.1 },
      { year: "2017", returnPct: 28.4 },
      { year: "2018", returnPct: 4.8 },
      { year: "2019", returnPct: 41.2 },
      { year: "2020", returnPct: 43.5 },
      { year: "2021", returnPct: 26.8 },
      { year: "2022", returnPct: -18.2 },
      { year: "2023", returnPct: 38.5 },
      { year: "2024", returnPct: 28.9 },
      { year: "2025", returnPct: 22.4 },
      { year: "2026 YTD", returnPct: 18.4, isYtd: true }
    ]
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
    ytdReturn2026: 17.8,
    benchmarkName: "FTSE World-Technology Index (£)",
    benchmarkReturn15Yr: 20.85,
    alphaVsBenchmark: -0.05,
    isTrackingIndex: true,
    ocfPct: 0.32,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/b0cn/legal--general-global-technology-index-trust",
    rationale: "Top-performing passive index tracker on Trustnet over 15 years. Pure low-cost replication (0.32% OCF) of the global technology giants.",
    yearlyReturns: [
      { year: "2011", returnPct: 2.8 },
      { year: "2012", returnPct: 13.9 },
      { year: "2013", returnPct: 26.4 },
      { year: "2014", returnPct: 23.8 },
      { year: "2015", returnPct: 17.5 },
      { year: "2016", returnPct: 33.2 },
      { year: "2017", returnPct: 27.1 },
      { year: "2018", returnPct: 3.9 },
      { year: "2019", returnPct: 39.8 },
      { year: "2020", returnPct: 41.9 },
      { year: "2021", returnPct: 25.4 },
      { year: "2022", returnPct: -19.5 },
      { year: "2023", returnPct: 37.2 },
      { year: "2024", returnPct: 27.8 },
      { year: "2025", returnPct: 21.6 },
      { year: "2026 YTD", returnPct: 17.8, isYtd: true }
    ]
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
    ytdReturn2026: 14.2,
    benchmarkName: "S&P 500 Index (£)",
    benchmarkReturn15Yr: 14.2,
    alphaVsBenchmark: 0.3,
    isTrackingIndex: false,
    ocfPct: 0.51,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/0585/baillie-gifford-american-fund",
    rationale: "Unapologetic high-growth strategy from Edinburgh's Baillie Gifford targeting exceptional entrepreneurial businesses with asymmetric upside potential.",
    yearlyReturns: [
      { year: "2011", returnPct: -1.2 },
      { year: "2012", returnPct: 16.2 },
      { year: "2013", returnPct: 34.8 },
      { year: "2014", returnPct: 18.4 },
      { year: "2015", returnPct: 9.2 },
      { year: "2016", returnPct: 21.4 },
      { year: "2017", returnPct: 41.8 },
      { year: "2018", returnPct: 6.8 },
      { year: "2019", returnPct: 31.5 },
      { year: "2020", returnPct: 121.8 },
      { year: "2021", returnPct: -2.8 },
      { year: "2022", returnPct: -52.4 },
      { year: "2023", returnPct: 39.8 },
      { year: "2024", returnPct: 26.2 },
      { year: "2025", returnPct: 18.4 },
      { year: "2026 YTD", returnPct: 14.2, isYtd: true }
    ]
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
    ytdReturn2026: 12.8,
    benchmarkName: "MSCI World Index (£)",
    benchmarkReturn15Yr: 11.5,
    alphaVsBenchmark: 2.3,
    isTrackingIndex: false,
    ocfPct: 0.80,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/edr1/jpm-global-unconstrained-equity-fund",
    rationale: "Trustnet 5-Crown rated global portfolio backed by JPMorgan's 80+ global sector analysts, taking concentrated positions in global compounding leaders.",
    yearlyReturns: [
      { year: "2011", returnPct: -4.8 },
      { year: "2012", returnPct: 16.2 },
      { year: "2013", returnPct: 24.6 },
      { year: "2014", returnPct: 12.8 },
      { year: "2015", returnPct: 8.4 },
      { year: "2016", returnPct: 25.2 },
      { year: "2017", returnPct: 21.8 },
      { year: "2018", returnPct: -4.2 },
      { year: "2019", returnPct: 27.4 },
      { year: "2020", returnPct: 23.8 },
      { year: "2021", returnPct: 20.4 },
      { year: "2022", returnPct: -16.2 },
      { year: "2023", returnPct: 18.4 },
      { year: "2024", returnPct: 19.6 },
      { year: "2025", returnPct: 15.2 },
      { year: "2026 YTD", returnPct: 12.8, isYtd: true }
    ]
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
    ytdReturn2026: 10.4,
    benchmarkName: "MSCI World Index (£)",
    benchmarkReturn15Yr: 11.5,
    alphaVsBenchmark: 3.3,
    isTrackingIndex: false,
    ocfPct: 0.94,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/b41y/fundsmith-equity-fund",
    rationale: "Terry Smith's iconic strategy: Buy good companies, don't overpay, do nothing. Exceptional return on capital employed (ROCE) and high gross margins.",
    yearlyReturns: [
      { year: "2011", returnPct: 8.4 },
      { year: "2012", returnPct: 12.5 },
      { year: "2013", returnPct: 25.3 },
      { year: "2014", returnPct: 23.3 },
      { year: "2015", returnPct: 15.7 },
      { year: "2016", returnPct: 28.2 },
      { year: "2017", returnPct: 22.0 },
      { year: "2018", returnPct: 2.2 },
      { year: "2019", returnPct: 25.6 },
      { year: "2020", returnPct: 18.3 },
      { year: "2021", returnPct: 22.1 },
      { year: "2022", returnPct: -13.8 },
      { year: "2023", returnPct: 12.4 },
      { year: "2024", returnPct: 15.1 },
      { year: "2025", returnPct: 13.8 },
      { year: "2026 YTD", returnPct: 10.4, isYtd: true }
    ]
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
    ytdReturn2026: 12.1,
    benchmarkName: "FTSE World Index (£)",
    benchmarkReturn15Yr: 11.2,
    alphaVsBenchmark: 2.3,
    isTrackingIndex: false,
    ocfPct: 0.77,
    trustnetUrl: "https://www.trustnet.com/factsheets/o/b7fq/rathbone-global-opportunities-fund",
    rationale: "James Thomson's 21-year track record identifying structural disruptors, balanced by a strict 'weather-proofing' defensive filter.",
    yearlyReturns: [
      { year: "2011", returnPct: -6.2 },
      { year: "2012", returnPct: 15.8 },
      { year: "2013", returnPct: 29.2 },
      { year: "2014", returnPct: 13.4 },
      { year: "2015", returnPct: 11.8 },
      { year: "2016", returnPct: 24.2 },
      { year: "2017", returnPct: 24.8 },
      { year: "2018", returnPct: 0.6 },
      { year: "2019", returnPct: 28.4 },
      { year: "2020", returnPct: 31.2 },
      { year: "2021", returnPct: 17.2 },
      { year: "2022", returnPct: -23.4 },
      { year: "2023", returnPct: 19.8 },
      { year: "2024", returnPct: 18.4 },
      { year: "2025", returnPct: 14.6 },
      { year: "2026 YTD", returnPct: 12.1, isYtd: true }
    ]
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
    ytdReturn2026: 8.9,
    benchmarkName: "MSCI World Index (£)",
    benchmarkReturn15Yr: 11.5,
    alphaVsBenchmark: 1.4,
    isTrackingIndex: false,
    ocfPct: 0.65,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/b644/lindsell-train-global-equity-fund",
    rationale: "Focuses on durable intangible assets, enduring brand franchises (Nintendo, Unilever, London Stock Exchange), with virtually zero portfolio turnover.",
    yearlyReturns: [
      { year: "2011", returnPct: 5.8 },
      { year: "2012", returnPct: 14.2 },
      { year: "2013", returnPct: 22.4 },
      { year: "2014", returnPct: 15.8 },
      { year: "2015", returnPct: 13.6 },
      { year: "2016", returnPct: 24.8 },
      { year: "2017", returnPct: 19.2 },
      { year: "2018", returnPct: 8.4 },
      { year: "2019", returnPct: 22.4 },
      { year: "2020", returnPct: 11.2 },
      { year: "2021", returnPct: 14.8 },
      { year: "2022", returnPct: -8.4 },
      { year: "2023", returnPct: 9.8 },
      { year: "2024", returnPct: 12.4 },
      { year: "2025", returnPct: 10.2 },
      { year: "2026 YTD", returnPct: 8.9, isYtd: true }
    ]
  },
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
    ytdReturn2026: 11.2,
    benchmarkName: "FTSE All-Share Index",
    benchmarkReturn15Yr: 6.5,
    alphaVsBenchmark: 5.7,
    isTrackingIndex: false,
    ocfPct: 0.80,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/3297/slater-growth-fund",
    rationale: "Mark Slater (FE Alpha Hall of Fame) uses the Dynamic PE Growth (PEG) discipline to uncover undervalued UK cash-generative leaders, yielding extraordinary 5.7% p.a. alpha.",
    yearlyReturns: [
      { year: "2011", returnPct: -4.2 },
      { year: "2012", returnPct: 23.8 },
      { year: "2013", returnPct: 39.2 },
      { year: "2014", returnPct: 2.1 },
      { year: "2015", returnPct: 14.5 },
      { year: "2016", returnPct: 18.4 },
      { year: "2017", returnPct: 26.1 },
      { year: "2018", returnPct: -7.4 },
      { year: "2019", returnPct: 28.7 },
      { year: "2020", returnPct: 7.8 },
      { year: "2021", returnPct: 21.6 },
      { year: "2022", returnPct: -16.4 },
      { year: "2023", returnPct: 14.1 },
      { year: "2024", returnPct: 17.5 },
      { year: "2025", returnPct: 12.8 },
      { year: "2026 YTD", returnPct: 11.2, isYtd: true }
    ]
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
    ytdReturn2026: 8.4,
    benchmarkName: "FTSE All-Share Index",
    benchmarkReturn15Yr: 6.5,
    alphaVsBenchmark: 3.3,
    isTrackingIndex: false,
    ocfPct: 0.81,
    trustnetUrl: "https://www.trustnet.com/factsheets/o/b57h/liontrust-special-situations-fund",
    rationale: "Proprietary Economic Advantage process targeting companies with high recurring revenues, distribution power, and distinct IP.",
    yearlyReturns: [
      { year: "2011", returnPct: -2.8 },
      { year: "2012", returnPct: 18.2 },
      { year: "2013", returnPct: 28.4 },
      { year: "2014", returnPct: 3.2 },
      { year: "2015", returnPct: 12.4 },
      { year: "2016", returnPct: 15.8 },
      { year: "2017", returnPct: 18.2 },
      { year: "2018", returnPct: -7.2 },
      { year: "2019", returnPct: 23.4 },
      { year: "2020", returnPct: -4.8 },
      { year: "2021", returnPct: 19.6 },
      { year: "2022", returnPct: -11.4 },
      { year: "2023", returnPct: 7.8 },
      { year: "2024", returnPct: 11.2 },
      { year: "2025", returnPct: 9.4 },
      { year: "2026 YTD", returnPct: 8.4, isYtd: true }
    ]
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
    ytdReturn2026: 9.1,
    benchmarkName: "FTSE All-Share Index",
    benchmarkReturn15Yr: 6.5,
    alphaVsBenchmark: 3.9,
    isTrackingIndex: false,
    ocfPct: 0.76,
    trustnetUrl: "https://www.trustnet.com/factsheets/o/b06v/royal-london-sustainable-leaders-trust",
    rationale: "Mike Fox combines positive societal and environmental impact screening with robust balance-sheet analysis, generating over 20 years of consecutive outperformance.",
    yearlyReturns: [
      { year: "2011", returnPct: -3.4 },
      { year: "2012", returnPct: 19.1 },
      { year: "2013", returnPct: 26.8 },
      { year: "2014", returnPct: 4.6 },
      { year: "2015", returnPct: 11.2 },
      { year: "2016", returnPct: 17.4 },
      { year: "2017", returnPct: 18.8 },
      { year: "2018", returnPct: -4.2 },
      { year: "2019", returnPct: 26.2 },
      { year: "2020", returnPct: 11.8 },
      { year: "2021", returnPct: 20.2 },
      { year: "2022", returnPct: -18.6 },
      { year: "2023", returnPct: 13.4 },
      { year: "2024", returnPct: 14.8 },
      { year: "2025", returnPct: 11.2 },
      { year: "2026 YTD", returnPct: 9.1, isYtd: true }
    ]
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
    ytdReturn2026: 8.1,
    benchmarkName: "FTSE All-Share Index",
    benchmarkReturn15Yr: 6.76,
    alphaVsBenchmark: 0.04,
    isTrackingIndex: true,
    ocfPct: 0.06,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/bjs8/fidelity-index-uk-fund",
    rationale: "Rock-bottom 0.06% OCF UK All-Share tracker with flawless replication and negligible cash drag.",
    yearlyReturns: [
      { year: "2012", returnPct: 12.3 },
      { year: "2013", returnPct: 20.8 },
      { year: "2014", returnPct: 1.2 },
      { year: "2015", returnPct: 1.0 },
      { year: "2016", returnPct: 16.8 },
      { year: "2017", returnPct: 13.1 },
      { year: "2018", returnPct: -9.5 },
      { year: "2019", returnPct: 19.2 },
      { year: "2020", returnPct: -9.8 },
      { year: "2021", returnPct: 18.3 },
      { year: "2022", returnPct: 0.3 },
      { year: "2023", returnPct: 7.9 },
      { year: "2024", returnPct: 9.8 },
      { year: "2025", returnPct: 8.4 },
      { year: "2026 YTD", returnPct: 8.1, isYtd: true }
    ]
  },
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
    ytdReturn2026: 9.8,
    benchmarkName: "FTSE Developed Europe ex UK Index (£)",
    benchmarkReturn15Yr: 8.4,
    alphaVsBenchmark: 3.4,
    isTrackingIndex: false,
    ocfPct: 0.91,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/b4w9/blackrock-european-dynamic-fund",
    rationale: "Top-rated 5 FE Crown European equity portfolio consistently beating its benchmark through flexible style rotation between growth and value.",
    yearlyReturns: [
      { year: "2011", returnPct: -11.2 },
      { year: "2012", returnPct: 19.4 },
      { year: "2013", returnPct: 25.8 },
      { year: "2014", returnPct: 2.8 },
      { year: "2015", returnPct: 14.2 },
      { year: "2016", returnPct: 18.2 },
      { year: "2017", returnPct: 19.4 },
      { year: "2018", returnPct: -8.6 },
      { year: "2019", returnPct: 26.8 },
      { year: "2020", returnPct: 14.2 },
      { year: "2021", returnPct: 24.8 },
      { year: "2022", returnPct: -12.4 },
      { year: "2023", returnPct: 17.2 },
      { year: "2024", returnPct: 16.4 },
      { year: "2025", returnPct: 12.8 },
      { year: "2026 YTD", returnPct: 9.8, isYtd: true }
    ]
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
    ytdReturn2026: 8.4,
    benchmarkName: "MSCI AC Asia Pacific ex Japan",
    benchmarkReturn15Yr: 6.8,
    alphaVsBenchmark: 2.6,
    isTrackingIndex: false,
    ocfPct: 0.94,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/b2p7/schroder-asian-alpha-plus-fund",
    rationale: "Schroders' seasoned on-the-ground Asian research team exploiting structural growth in semiconductors, consumer brands, and financial inclusion across Asia.",
    yearlyReturns: [
      { year: "2011", returnPct: -15.4 },
      { year: "2012", returnPct: 18.2 },
      { year: "2013", returnPct: 5.4 },
      { year: "2014", returnPct: 12.8 },
      { year: "2015", returnPct: -4.2 },
      { year: "2016", returnPct: 28.4 },
      { year: "2017", returnPct: 29.2 },
      { year: "2018", returnPct: -9.8 },
      { year: "2019", returnPct: 18.4 },
      { year: "2020", returnPct: 24.8 },
      { year: "2021", returnPct: -1.2 },
      { year: "2022", returnPct: -11.8 },
      { year: "2023", returnPct: 6.4 },
      { year: "2024", returnPct: 14.2 },
      { year: "2025", returnPct: 11.6 },
      { year: "2026 YTD", returnPct: 8.4, isYtd: true }
    ]
  },
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
    ytdReturn2026: 13.6,
    benchmarkName: "S&P 500 Index (£)",
    benchmarkReturn15Yr: 14.23,
    alphaVsBenchmark: -0.03,
    isTrackingIndex: true,
    ocfPct: 0.07,
    trustnetUrl: "https://www.trustnet.com/factsheets/E/cspx/ishares-core-sp-500-ucits-etf-usd-acc",
    rationale: "The gold standard of US equity ETFs on Trustnet with £62B in assets and an ultra-lean 0.07% annual charge.",
    yearlyReturns: [
      { year: "2011", returnPct: 4.9 },
      { year: "2012", returnPct: 10.5 },
      { year: "2013", returnPct: 29.5 },
      { year: "2014", returnPct: 20.2 },
      { year: "2015", returnPct: 6.8 },
      { year: "2016", returnPct: 33.1 },
      { year: "2017", returnPct: 11.3 },
      { year: "2018", returnPct: -1.5 },
      { year: "2019", returnPct: 26.4 },
      { year: "2020", returnPct: 14.7 },
      { year: "2021", returnPct: 29.3 },
      { year: "2022", returnPct: -7.8 },
      { year: "2023", returnPct: 19.2 },
      { year: "2024", returnPct: 21.4 },
      { year: "2025", returnPct: 16.2 },
      { year: "2026 YTD", returnPct: 13.6, isYtd: true }
    ]
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
    ytdReturn2026: 12.2,
    benchmarkName: "MSCI World Index (£)",
    benchmarkReturn15Yr: 11.85,
    alphaVsBenchmark: -0.05,
    isTrackingIndex: true,
    ocfPct: 0.12,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/bjs9/fidelity-index-world-fund",
    rationale: "Fidelity's benchmark global tracker charging just 0.12% with tight physical sampling across ~1,500 developed world corporations.",
    yearlyReturns: [
      { year: "2012", returnPct: 11.2 },
      { year: "2013", returnPct: 24.8 },
      { year: "2014", returnPct: 11.8 },
      { year: "2015", returnPct: 4.9 },
      { year: "2016", returnPct: 28.6 },
      { year: "2017", returnPct: 11.8 },
      { year: "2018", returnPct: -3.2 },
      { year: "2019", returnPct: 22.8 },
      { year: "2020", returnPct: 12.6 },
      { year: "2021", returnPct: 22.9 },
      { year: "2022", returnPct: -7.8 },
      { year: "2023", returnPct: 16.8 },
      { year: "2024", returnPct: 19.8 },
      { year: "2025", returnPct: 14.2 },
      { year: "2026 YTD", returnPct: 12.2, isYtd: true }
    ]
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
    ytdReturn2026: 11.8,
    benchmarkName: "FTSE All-World Index (£)",
    benchmarkReturn15Yr: 11.64,
    alphaVsBenchmark: -0.04,
    isTrackingIndex: true,
    ocfPct: 0.22,
    trustnetUrl: "https://www.trustnet.com/factsheets/E/vwrp/vanguard-ftse-all-world-ucits-etf-usd-acc",
    rationale: "Vanguard's total world ETF holding over 3,700 companies across both developed and emerging markets.",
    yearlyReturns: [
      { year: "2012", returnPct: 11.1 },
      { year: "2013", returnPct: 21.2 },
      { year: "2014", returnPct: 11.2 },
      { year: "2015", returnPct: 3.8 },
      { year: "2016", returnPct: 29.2 },
      { year: "2017", returnPct: 13.4 },
      { year: "2018", returnPct: -3.8 },
      { year: "2019", returnPct: 22.0 },
      { year: "2020", returnPct: 13.0 },
      { year: "2021", returnPct: 19.8 },
      { year: "2022", returnPct: -8.1 },
      { year: "2023", returnPct: 15.7 },
      { year: "2024", returnPct: 19.2 },
      { year: "2025", returnPct: 13.8 },
      { year: "2026 YTD", returnPct: 11.8, isYtd: true }
    ]
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
    ytdReturn2026: 11.7,
    benchmarkName: "FTSE All-World Index (£)",
    benchmarkReturn15Yr: 11.55,
    alphaVsBenchmark: -0.05,
    isTrackingIndex: true,
    ocfPct: 0.13,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/bmjj/hsbc-ftse-all-world-index-fund",
    rationale: "Cost-leading 0.13% OEIC fund offering complete FTSE All-World coverage without ETF broker dealing commissions.",
    yearlyReturns: [
      { year: "2014", returnPct: 11.2 },
      { year: "2015", returnPct: 3.7 },
      { year: "2016", returnPct: 29.1 },
      { year: "2017", returnPct: 13.3 },
      { year: "2018", returnPct: -3.8 },
      { year: "2019", returnPct: 21.9 },
      { year: "2020", returnPct: 12.9 },
      { year: "2021", returnPct: 19.7 },
      { year: "2022", returnPct: -8.1 },
      { year: "2023", returnPct: 15.6 },
      { year: "2024", returnPct: 19.1 },
      { year: "2025", returnPct: 13.7 },
      { year: "2026 YTD", returnPct: 11.7, isYtd: true }
    ]
  },
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
    ytdReturn2026: 10.2,
    benchmarkName: "Custom 80/20 Global Composite",
    benchmarkReturn15Yr: 9.85,
    alphaVsBenchmark: -0.05,
    isTrackingIndex: true,
    ocfPct: 0.22,
    trustnetUrl: "https://www.trustnet.com/factsheets/T/n76v/vanguard-lifestrategy-80-equity-a-shares-acc",
    rationale: "Ideal for growth investors wanting automatic rebalancing with 20% fixed income stabiliser.",
    yearlyReturns: [
      { year: "2011", returnPct: 2.8 },
      { year: "2012", returnPct: 11.8 },
      { year: "2013", returnPct: 19.4 },
      { year: "2014", returnPct: 9.8 },
      { year: "2015", returnPct: 3.2 },
      { year: "2016", returnPct: 24.8 },
      { year: "2017", returnPct: 11.6 },
      { year: "2018", returnPct: -4.8 },
      { year: "2019", returnPct: 18.4 },
      { year: "2020", returnPct: 10.2 },
      { year: "2021", returnPct: 16.8 },
      { year: "2022", returnPct: -11.2 },
      { year: "2023", returnPct: 13.4 },
      { year: "2024", returnPct: 15.8 },
      { year: "2025", returnPct: 12.1 },
      { year: "2026 YTD", returnPct: 10.2, isYtd: true }
    ]
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
    ytdReturn2026: 7.8,
    benchmarkName: "Custom 60/40 Global Composite",
    benchmarkReturn15Yr: 7.65,
    alphaVsBenchmark: -0.05,
    isTrackingIndex: true,
    ocfPct: 0.22,
    trustnetUrl: "https://www.trustnet.com/factsheets/t/n76x/vanguard-lifestrategy-60-equity-a-shares-acc",
    rationale: "The UK's standard benchmark balanced portfolio automatically maintaining 60% equities and 40% hedged bonds.",
    yearlyReturns: [
      { year: "2011", returnPct: 4.2 },
      { year: "2012", returnPct: 10.2 },
      { year: "2013", returnPct: 14.6 },
      { year: "2014", returnPct: 8.8 },
      { year: "2015", returnPct: 2.8 },
      { year: "2016", returnPct: 20.2 },
      { year: "2017", returnPct: 8.8 },
      { year: "2018", returnPct: -3.8 },
      { year: "2019", returnPct: 15.8 },
      { year: "2020", returnPct: 8.4 },
      { year: "2021", returnPct: 10.8 },
      { year: "2022", returnPct: -11.8 },
      { year: "2023", returnPct: 11.2 },
      { year: "2024", returnPct: 12.4 },
      { year: "2025", returnPct: 9.8 },
      { year: "2026 YTD", returnPct: 7.8, isYtd: true }
    ]
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
    ytdReturn2026: 4.8,
    benchmarkName: "UK CPI + 2%",
    benchmarkReturn15Yr: 4.5,
    alphaVsBenchmark: 1.3,
    isTrackingIndex: false,
    ocfPct: 0.86,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/3424/trojan-fund",
    rationale: "5 FE Crowns. Iconic UK defensive fund holding blue chips, physical gold, and index-linked gilts to protect real capital.",
    yearlyReturns: [
      { year: "2011", returnPct: 7.2 },
      { year: "2012", returnPct: 4.1 },
      { year: "2013", returnPct: -2.8 },
      { year: "2014", returnPct: 8.4 },
      { year: "2015", returnPct: 3.2 },
      { year: "2016", returnPct: 12.8 },
      { year: "2017", returnPct: 4.3 },
      { year: "2018", returnPct: -1.8 },
      { year: "2019", returnPct: 9.4 },
      { year: "2020", returnPct: 9.2 },
      { year: "2021", returnPct: 9.8 },
      { year: "2022", returnPct: -3.8 },
      { year: "2023", returnPct: 3.5 },
      { year: "2024", returnPct: 7.8 },
      { year: "2025", returnPct: 6.4 },
      { year: "2026 YTD", returnPct: 4.8, isYtd: true }
    ]
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
    ytdReturn2026: 3.9,
    benchmarkName: "Bank of England Base Rate / Cash",
    benchmarkReturn15Yr: 2.4,
    alphaVsBenchmark: 2.7,
    isTrackingIndex: false,
    ocfPct: 1.09,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/0600/ruffer-total-return-fund",
    rationale: "Designed to navigate major geopolitical shocks and bear markets, providing steady real capital preservation.",
    yearlyReturns: [
      { year: "2011", returnPct: 1.8 },
      { year: "2012", returnPct: 3.4 },
      { year: "2013", returnPct: 9.2 },
      { year: "2014", returnPct: 3.8 },
      { year: "2015", returnPct: -1.4 },
      { year: "2016", returnPct: 15.2 },
      { year: "2017", returnPct: 2.1 },
      { year: "2018", returnPct: -5.8 },
      { year: "2019", returnPct: 8.4 },
      { year: "2020", returnPct: 13.5 },
      { year: "2021", returnPct: 11.2 },
      { year: "2022", returnPct: 3.8 },
      { year: "2023", returnPct: -2.8 },
      { year: "2024", returnPct: 6.2 },
      { year: "2025", returnPct: 5.4 },
      { year: "2026 YTD", returnPct: 3.9, isYtd: true }
    ]
  },
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
    ytdReturn2026: 3.4,
    benchmarkName: "IA Sterling Strategic Bond Sector Avg",
    benchmarkReturn15Yr: 3.2,
    alphaVsBenchmark: 1.3,
    isTrackingIndex: false,
    ocfPct: 0.58,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/b2pl/artemis-strategic-bond-fund",
    rationale: "Flexible duration and credit selection across UK Gilts and high-grade corporate bonds to generate yield and cushion equities.",
    yearlyReturns: [
      { year: "2011", returnPct: 5.1 },
      { year: "2012", returnPct: 12.4 },
      { year: "2013", returnPct: 4.2 },
      { year: "2014", returnPct: 8.1 },
      { year: "2015", returnPct: 1.2 },
      { year: "2016", returnPct: 7.8 },
      { year: "2017", returnPct: 5.4 },
      { year: "2018", returnPct: -2.8 },
      { year: "2019", returnPct: 9.2 },
      { year: "2020", returnPct: 6.4 },
      { year: "2021", returnPct: -1.2 },
      { year: "2022", returnPct: -12.4 },
      { year: "2023", returnPct: 8.9 },
      { year: "2024", returnPct: 7.5 },
      { year: "2025", returnPct: 5.8 },
      { year: "2026 YTD", returnPct: 3.4, isYtd: true }
    ]
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
    ytdReturn2026: 2.1,
    benchmarkName: "FTSE Actuaries UK Conventional Gilts",
    benchmarkReturn15Yr: 3.44,
    alphaVsBenchmark: -0.04,
    isTrackingIndex: true,
    ocfPct: 0.15,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/b009/legal--general-all-stocks-gilt-index-trust",
    rationale: "Pure HM Treasury gilt tracker providing sovereign risk-free backing and deflation hedging.",
    yearlyReturns: [
      { year: "2011", returnPct: 16.2 },
      { year: "2012", returnPct: 2.7 },
      { year: "2013", returnPct: -5.4 },
      { year: "2014", returnPct: 13.8 },
      { year: "2015", returnPct: 0.6 },
      { year: "2016", returnPct: 10.1 },
      { year: "2017", returnPct: 1.8 },
      { year: "2018", returnPct: 0.6 },
      { year: "2019", returnPct: 6.9 },
      { year: "2020", returnPct: 8.3 },
      { year: "2021", returnPct: -5.2 },
      { year: "2022", returnPct: -23.8 },
      { year: "2023", returnPct: 3.6 },
      { year: "2024", returnPct: 4.8 },
      { year: "2025", returnPct: 4.2 },
      { year: "2026 YTD", returnPct: 2.1, isYtd: true }
    ]
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
    ytdReturn2026: 3.7,
    benchmarkName: "SONIA",
    benchmarkReturn15Yr: 2.05,
    alphaVsBenchmark: 0.05,
    isTrackingIndex: true,
    ocfPct: 0.10,
    trustnetUrl: "https://www.trustnet.com/factsheets/O/n63q/royal-london-short-term-money-market-fund",
    rationale: "Top-rated 5-Crown Sterling liquidity manager on Trustnet yielding floating BoE money market rates while eliminating market risk.",
    yearlyReturns: [
      { year: "2011", returnPct: 0.8 },
      { year: "2012", returnPct: 0.9 },
      { year: "2013", returnPct: 0.6 },
      { year: "2014", returnPct: 0.5 },
      { year: "2015", returnPct: 0.6 },
      { year: "2016", returnPct: 0.5 },
      { year: "2017", returnPct: 0.3 },
      { year: "2018", returnPct: 0.6 },
      { year: "2019", returnPct: 0.8 },
      { year: "2020", returnPct: 0.4 },
      { year: "2021", returnPct: 0.1 },
      { year: "2022", returnPct: 1.4 },
      { year: "2023", returnPct: 4.8 },
      { year: "2024", returnPct: 5.2 },
      { year: "2025", returnPct: 4.9 },
      { year: "2026 YTD", returnPct: 3.7, isYtd: true }
    ]
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
    ytdReturn2026: 2.8,
    benchmarkName: "Bloomberg Global Aggregate Index (GBP Hedged)",
    benchmarkReturn15Yr: 3.28,
    alphaVsBenchmark: -0.08,
    isTrackingIndex: true,
    ocfPct: 0.10,
    trustnetUrl: "https://www.trustnet.com/factsheets/E/agbp/ishares-core-global-aggregate-bond-ucits-etf-gbp-hedged-dist",
    rationale: "Institutional fixed income standard covering 28,000+ government and corporate bonds globally, fully hedged to GBP.",
    yearlyReturns: [
      { year: "2017", returnPct: 2.4 },
      { year: "2018", returnPct: -1.2 },
      { year: "2019", returnPct: 6.8 },
      { year: "2020", returnPct: 5.4 },
      { year: "2021", returnPct: -2.1 },
      { year: "2022", returnPct: -13.2 },
      { year: "2023", returnPct: 5.4 },
      { year: "2024", returnPct: 6.1 },
      { year: "2025", returnPct: 4.8 },
      { year: "2026 YTD", returnPct: 2.8, isYtd: true }
    ]
  }
];

// 2. Pre-configured Model Presets
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

let activeCustomPortfolio = JSON.parse(JSON.stringify(STRATEGY_PRESETS.medium.active));
let passiveCustomPortfolio = JSON.parse(JSON.stringify(STRATEGY_PRESETS.medium.passive));

let currentRisk = "medium";
let activeTab = "active";

let trajectoryChart = null;
let allocationDonutChart = null;
let fundFutureValueBarChart = null;
let benchmarkComparisonChart = null;

let fundYearlyCharts = {};

const formatCurrency = (val) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0
  }).format(val);
};

const formatPct = (val) => `${val >= 0 ? "+" : ""}${val.toFixed(2)}%`;

function getFundById(id) {
  return TRUSTNET_MASTER_FUNDS.find(f => f.id === id) || TRUSTNET_MASTER_FUNDS[0];
}

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

function calculateWeightedReturn(allocatedItems) {
  return allocatedItems.reduce((acc, item) => {
    const fund = getFundById(item.fundId);
    return acc + (fund.avgAnnualReturn15Yr * (item.allocationPct / 100));
  }, 0);
}

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
 * Google Analytics 4 (GA4) Custom Event Dispatcher
 */
function trackGAEvent(eventName, eventParams = {}) {
  if (typeof window.gtag === "function" && window.GA_MEASUREMENT_ID) {
    try {
      window.gtag("event", eventName, eventParams);
    } catch (e) {
      // Non-blocking
    }
  }
}

function updateAdvisor() {
  const inputs = getInputs();

  document.getElementById("horizon-years").textContent = `${inputs.horizon} Years`;
  document.getElementById("trajectory-end-age").textContent = inputs.retirementAge;
  document.getElementById("legend-target-rate").textContent = `${inputs.targetGrowth}%`;

  const currentYearTotal = inputs.lumpSum + (inputs.monthlyAmount * 12);
  document.getElementById("current-year-total").textContent = formatCurrency(currentYearTotal);

  const activeWeightedReturn = calculateWeightedReturn(activeCustomPortfolio);
  const passiveWeightedReturn = calculateWeightedReturn(passiveCustomPortfolio);

  const totalPrincipal = inputs.lumpSum + (inputs.monthlyAmount * 12 * inputs.horizon);
  const activeProjectedValue = calculateFutureValue(inputs.lumpSum, inputs.monthlyAmount, activeWeightedReturn, inputs.horizon);
  const passiveProjectedValue = calculateFutureValue(inputs.lumpSum, inputs.monthlyAmount, passiveWeightedReturn, inputs.horizon);

  // Inflation discounting at 3.0% compound annual inflation
  const inflationRate = 0.03;
  const inflationFactor = Math.pow(1 + inflationRate, inputs.horizon);
  const activeRealValue = Math.round(activeProjectedValue / inflationFactor);
  const passiveRealValue = Math.round(passiveProjectedValue / inflationFactor);
  const alphaRealDiff = activeRealValue - passiveRealValue;

  document.getElementById("stat-total-contributions").textContent = formatCurrency(totalPrincipal);
  document.getElementById("stat-contributions-breakdown").textContent = 
    `${formatCurrency(inputs.lumpSum)} lump sum + ${formatCurrency(inputs.monthlyAmount * 12 * inputs.horizon)} monthly`;

  document.getElementById("stat-active-value").textContent = formatCurrency(activeProjectedValue);
  const activeRealEl = document.getElementById("stat-active-real-value");
  if (activeRealEl) activeRealEl.textContent = formatCurrency(activeRealValue);

  const activeGain = activeProjectedValue - totalPrincipal;
  const activeGainPct = totalPrincipal > 0 ? ((activeGain / totalPrincipal) * 100).toFixed(0) : 0;
  document.getElementById("stat-active-gain").textContent = `+${formatCurrency(activeGain)} (+${activeGainPct}% growth)`;
  document.getElementById("stat-active-rate").textContent = `${activeWeightedReturn.toFixed(2)}% p.a.`;

  document.getElementById("stat-passive-value").textContent = formatCurrency(passiveProjectedValue);
  const passiveRealEl = document.getElementById("stat-passive-real-value");
  if (passiveRealEl) passiveRealEl.textContent = formatCurrency(passiveRealValue);

  const passiveGain = passiveProjectedValue - totalPrincipal;
  const passiveGainPct = totalPrincipal > 0 ? ((passiveGain / totalPrincipal) * 100).toFixed(0) : 0;
  document.getElementById("stat-passive-gain").textContent = `+${formatCurrency(passiveGain)} (+${passiveGainPct}% growth)`;
  document.getElementById("stat-passive-rate").textContent = `${passiveWeightedReturn.toFixed(2)}% p.a.`;

  const alphaDiff = activeProjectedValue - passiveProjectedValue;
  const alphaEl = document.getElementById("stat-alpha-difference");
  alphaEl.textContent = `${alphaDiff >= 0 ? "+" : ""}${formatCurrency(alphaDiff)}`;
  alphaEl.className = `text-2xl font-extrabold ${alphaDiff >= 0 ? "text-purple-900" : "text-rose-700"}`;

  const alphaRealEl = document.getElementById("stat-alpha-real-difference");
  if (alphaRealEl) {
    alphaRealEl.textContent = `${alphaRealDiff >= 0 ? "+" : ""}${formatCurrency(alphaRealDiff)}`;
    alphaRealEl.className = `font-black ${alphaRealDiff >= 0 ? "text-purple-700" : "text-rose-700"}`;
  }

  document.getElementById("stat-alpha-subtext").textContent = 
    alphaDiff >= 0 ? "Active historical premium over passive" : "Passive historical advantage over active";

  document.getElementById("active-total-future-header").textContent = formatCurrency(activeProjectedValue);
  const activeRealHeader = document.getElementById("active-total-real-header");
  if (activeRealHeader) activeRealHeader.innerHTML = `<i data-lucide="coins" class="w-3 h-3 text-emerald-600"></i><span>Today's World: ${formatCurrency(activeRealValue)} (@ 3% infl.)</span>`;

  document.getElementById("passive-total-future-header").textContent = formatCurrency(passiveProjectedValue);
  const passiveRealHeader = document.getElementById("passive-total-real-header");
  if (passiveRealHeader) passiveRealHeader.innerHTML = `<i data-lucide="coins" class="w-3 h-3 text-teal-600"></i><span>Today's World: ${formatCurrency(passiveRealValue)} (@ 3% infl.)</span>`;

  renderPortfolioCards("active", activeCustomPortfolio, inputs);
  renderPortfolioCards("passive", passiveCustomPortfolio, inputs);

  renderComparisonMatrix(activeCustomPortfolio, passiveCustomPortfolio, activeWeightedReturn, passiveWeightedReturn, activeProjectedValue, passiveProjectedValue, totalPrincipal, inputs);
  renderTrustnetScreener();

  const currentPortfolioList = activeTab === "passive" ? passiveCustomPortfolio : activeCustomPortfolio;
  updateTrajectoryChart(inputs, activeWeightedReturn, passiveWeightedReturn);
  updateDonutChart(currentPortfolioList, activeTab);
  updateFundFutureValueChart(currentPortfolioList, inputs);
  updateBenchmarkChart(currentPortfolioList);

  if (window.lucide) {
    window.lucide.createIcons();
  }

  trackGAEvent("portfolio_updated", {
    horizon_years: inputs.horizon,
    retirement_age: inputs.retirementAge,
    risk_profile: currentRisk,
    lump_sum: inputs.lumpSum,
    monthly_amount: inputs.monthlyAmount
  });
}

/**
 * Render Fund Cards With Individual Yearly Returns Chart & 2026 YTD Badge
 */
function renderPortfolioCards(strategyType, portfolioItems, inputs) {
  const container = document.getElementById(`${strategyType}-funds-container`);
  if (!container) return;

  Object.keys(fundYearlyCharts).forEach(key => {
    if (key.startsWith(strategyType)) {
      if (fundYearlyCharts[key]) {
        fundYearlyCharts[key].destroy();
        delete fundYearlyCharts[key];
      }
    }
  });

  container.innerHTML = portfolioItems.map((item, index) => {
    const fund = getFundById(item.fundId);
    const fundLumpSum = inputs.lumpSum * (item.allocationPct / 100);
    const fundMonthly = inputs.monthlyAmount * (item.allocationPct / 100);
    
    const fundFutureVal = calculateFutureValue(fundLumpSum, fundMonthly, fund.avgAnnualReturn15Yr, inputs.horizon);
    const fundRealVal = Math.round(fundFutureVal / Math.pow(1 + 0.03, inputs.horizon));
    const fundPrincipal = fundLumpSum + (fundMonthly * 12 * inputs.horizon);
    const fundProfit = fundFutureVal - fundPrincipal;
    const isPositiveAlpha = fund.alphaVsBenchmark >= 0;

    const startYear = fund.inceptionYear > 2011 ? fund.inceptionYear : 2011;

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

        <!-- Metric Grid (Now with 2026 YTD Return stat) -->
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 py-2 text-xs">
          
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

          <!-- NEW 2026 YTD Return Box -->
          <div class="bg-cyan-50/70 p-2.5 rounded-xl border border-cyan-200">
            <span class="text-[11px] text-cyan-800 font-bold block mb-0.5">2026 YTD Growth</span>
            <span class="font-black ${fund.ytdReturn2026 >= 0 ? 'text-cyan-900' : 'text-rose-700'} text-sm">
              ${formatPct(fund.ytdReturn2026)}
            </span>
            <span class="text-[10px] text-cyan-700 font-semibold block">Current Year to Date</span>
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

          <div class="bg-gradient-to-br from-brand-50 to-cyan-50/50 p-2.5 rounded-xl border border-brand-200 flex flex-col justify-between">
            <div>
              <span class="text-[11px] text-brand-700 font-semibold block mb-0.5">Expected at Age ${inputs.retirementAge}</span>
              <div class="flex items-baseline justify-between gap-1">
                <span class="font-black text-brand-900 text-sm">${formatCurrency(fundFutureVal)}</span>
                <span class="text-[9px] text-slate-400 uppercase font-semibold">Nominal</span>
              </div>
              <span class="text-[10px] text-emerald-600 font-semibold block">+${formatCurrency(fundProfit)} gain</span>
            </div>
            <div class="mt-1.5 pt-1 border-t border-brand-200/80">
              <div class="flex items-center justify-between text-[10px] font-bold text-emerald-800">
                <span>Today's World:</span>
                <span>${formatCurrency(fundRealVal)}</span>
              </div>
              <span class="text-[9px] text-slate-400 block text-right">(@ 3% infl.)</span>
            </div>
          </div>

        </div>

        <!-- Discrete Yearly Returns Graph (+ or - Growth Every Year for Last 15 Years + 2026 YTD) -->
        <div class="mt-3 pt-3 border-t border-slate-100 bg-slate-50/70 p-3.5 rounded-xl border">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div class="flex items-center gap-2">
              <i data-lucide="activity" class="w-4 h-4 text-brand-600"></i>
              <span class="text-xs font-bold text-slate-900">
                Annual Calendar Growth (+/- % per Year since ${startYear} & 2026 YTD)
              </span>
              <span class="text-[10px] px-2 py-0.5 rounded font-bold bg-slate-200 text-slate-700">Trustnet Discrete Track Record</span>
            </div>
            <div class="flex items-center gap-3 text-[11px]">
              <span class="flex items-center gap-1 font-semibold text-emerald-700">
                <span class="w-2.5 h-2.5 rounded bg-emerald-500 inline-block"></span> Calendar Gain
              </span>
              <span class="flex items-center gap-1 font-semibold text-rose-700">
                <span class="w-2.5 h-2.5 rounded bg-rose-500 inline-block"></span> Drawdown Year
              </span>
              <span class="flex items-center gap-1 font-semibold text-cyan-700">
                <span class="w-2.5 h-2.5 rounded bg-cyan-500 inline-block"></span> 2026 YTD
              </span>
            </div>
          </div>

          <div class="h-32 w-full relative">
            <canvas id="yearly-chart-${strategyType}-${index}"></canvas>
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

  portfolioItems.forEach((item, index) => {
    const fund = getFundById(item.fundId);
    const canvasId = `yearly-chart-${strategyType}-${index}`;
    const canvasEl = document.getElementById(canvasId);

    if (canvasEl && fund.yearlyReturns && fund.yearlyReturns.length > 0) {
      const labels = fund.yearlyReturns.map(r => r.year);
      const data = fund.yearlyReturns.map(r => r.returnPct);
      const bgColors = fund.yearlyReturns.map(r => {
        if (r.isYtd) {
          return r.returnPct >= 0 ? "rgba(6, 182, 212, 0.9)" : "rgba(244, 63, 94, 0.9)";
        }
        return r.returnPct >= 0 ? "rgba(16, 185, 129, 0.85)" : "rgba(244, 63, 94, 0.85)";
      });
      const borderColors = fund.yearlyReturns.map(r => {
        if (r.isYtd) {
          return r.returnPct >= 0 ? "#0891b2" : "#e11d48";
        }
        return r.returnPct >= 0 ? "#059669" : "#e11d48";
      });

      fundYearlyCharts[`${strategyType}-${index}`] = new Chart(canvasEl, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [{
            label: "Annual / YTD Growth (%)",
            data: data,
            backgroundColor: bgColors,
            borderColor: borderColors,
            borderWidth: 1.5,
            borderRadius: 3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: "#0f172a",
              padding: 9,
              titleFont: { size: 11, weight: "bold" },
              bodyFont: { size: 11 },
              callbacks: {
                label: (ctx) => ` Growth: ${ctx.raw >= 0 ? "+" : ""}${ctx.raw}% in ${ctx.label}`
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
                font: { size: 9 },
                color: "#64748b",
                callback: (v) => `${v >= 0 ? "+" : ""}${v}%`
              }
            }
          }
        }
      });
    }
  });
}

function renderComparisonMatrix(activeItems, passiveItems, activeReturn, passiveReturn, activeVal, passiveVal, principal, inputs) {
  const tbody = document.getElementById("compare-matrix-body");
  if (!tbody) return;

  const activeFunds = activeItems.map(i => ({ ...getFundById(i.fundId), alloc: i.allocationPct }));
  const passiveFunds = passiveItems.map(i => ({ ...getFundById(i.fundId), alloc: i.allocationPct }));

  const activeAvgOcf = (activeFunds.reduce((a, f) => a + (f.ocfPct * (f.alloc / 100)), 0)).toFixed(2);
  const passiveAvgOcf = (passiveFunds.reduce((a, f) => a + (f.ocfPct * (f.alloc / 100)), 0)).toFixed(2);

  const activeAvgRisk = Math.round(activeFunds.reduce((a, f) => a + (f.feRiskScore * (f.alloc / 100)), 0));
  const passiveAvgRisk = Math.round(passiveFunds.reduce((a, f) => a + (f.feRiskScore * (f.alloc / 100)), 0));

  const activeAvgYtd = (activeFunds.reduce((a, f) => a + (f.ytdReturn2026 * (f.alloc / 100)), 0)).toFixed(2);
  const passiveAvgYtd = (passiveFunds.reduce((a, f) => a + (f.ytdReturn2026 * (f.alloc / 100)), 0)).toFixed(2);

  const activeTotalAUM = (activeFunds.reduce((a, f) => a + f.aumBillions, 0)).toFixed(1);
  const passiveTotalAUM = (passiveFunds.reduce((a, f) => a + f.aumBillions, 0)).toFixed(1);

  const activeHouses = [...new Set(activeFunds.map(f => f.house))].join(", ");
  const passiveHouses = [...new Set(passiveFunds.map(f => f.house))].join(", ");

  const inflationFactor = Math.pow(1 + 0.03, inputs.horizon);
  const activeRealVal = Math.round(activeVal / inflationFactor);
  const passiveRealVal = Math.round(passiveVal / inflationFactor);

  const rows = [
    {
      criteria: "Nominal Projected Value at Retirement (Age " + inputs.retirementAge + ")",
      active: `<strong class="text-brand-900 text-sm">${formatCurrency(activeVal)}</strong> (+${formatCurrency(activeVal - principal)})`,
      passive: `<strong class="text-teal-900 text-sm">${formatCurrency(passiveVal)}</strong> (+${formatCurrency(passiveVal - principal)})`
    },
    {
      criteria: "Real Value in Today's World (3% Annual Inflation Adjusted)",
      active: `<div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-900"><i data-lucide="coins" class="w-3.5 h-3.5 text-emerald-600"></i><span class="text-sm font-black text-emerald-700">${formatCurrency(activeRealVal)}</span><span class="text-[10px] font-normal text-slate-500">(@ 3% infl.)</span></div>`,
      passive: `<div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-50 border border-teal-200 text-xs font-bold text-teal-900"><i data-lucide="coins" class="w-3.5 h-3.5 text-teal-600"></i><span class="text-sm font-black text-teal-700">${formatCurrency(passiveRealVal)}</span><span class="text-[10px] font-normal text-slate-500">(@ 3% infl.)</span></div>`
    },
    {
      criteria: "2026 Current Year YTD Return",
      active: `<span class="font-extrabold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">+${activeAvgYtd}% YTD</span>`,
      passive: `<span class="font-extrabold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">+${passiveAvgYtd}% YTD</span>`
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

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

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
      <td class="py-3 px-3 font-extrabold ${f.ytdReturn2026 >= 0 ? 'text-cyan-800' : 'text-rose-600'} text-xs bg-cyan-50/50">
        ${formatPct(f.ytdReturn2026)}
      </td>
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
              const val = context.raw;
              const ageMatch = context.label ? context.label.match(/\d+/) : null;
              if (ageMatch) {
                const pointAge = parseInt(ageMatch[0], 10);
                const yearsElapsed = pointAge - inputs.currentAge;
                if (yearsElapsed > 0) {
                  const realVal = Math.round(val / Math.pow(1 + 0.03, yearsElapsed));
                  return ` ${context.dataset.label}: ${formatCurrency(val)} (Today: ${formatCurrency(realVal)})`;
                }
              }
              return ` ${context.dataset.label}: ${formatCurrency(val)}`;
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
            label: (ctx) => {
              if (ctx.datasetIndex === 1) {
                const realVal = Math.round(ctx.raw / Math.pow(1 + 0.03, inputs.horizon));
                return ` ${ctx.dataset.label}: ${formatCurrency(ctx.raw)} (Today's World: ${formatCurrency(realVal)})`;
              }
              return ` ${ctx.dataset.label}: ${formatCurrency(ctx.raw)}`;
            }
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

let pendingSwap = { strategyType: "active", slotIndex: 0, currentFundId: "" };
let swapModalFilter = "similar"; // 'similar' | 'all'

/**
 * Computes profile similarity between candidate and currently selected fund
 * Based on 15-Year Annualised Compound Return (Growth) and FE Risk Score (Volatility/Risk Appetite)
 */
function computeFundSimilarity(candidateFund, currentFund) {
  const returnDiff = Math.abs(candidateFund.avgAnnualReturn15Yr - currentFund.avgAnnualReturn15Yr);
  const riskDiff = Math.abs(candidateFund.feRiskScore - currentFund.feRiskScore);

  // Normalize return difference (max expected range ~15% p.a.)
  const normReturn = Math.min(returnDiff / 15, 1);
  // Normalize risk difference (max expected range ~80 risk points)
  const normRisk = Math.min(riskDiff / 80, 1);

  // Balanced 50/50 weighting of growth and risk appetite
  const distance = (normReturn * 0.5) + (normRisk * 0.5);
  const similarityScore = Math.max(10, Math.round((1 - distance) * 100));

  return {
    similarityScore,
    returnDiff,
    riskDiff,
    returnDiffSigned: candidateFund.avgAnnualReturn15Yr - currentFund.avgAnnualReturn15Yr,
    riskDiffSigned: candidateFund.feRiskScore - currentFund.feRiskScore
  };
}

window.openSwapFundModal = function(strategyType, slotIndex) {
  const portfolio = strategyType === "active" ? activeCustomPortfolio : passiveCustomPortfolio;
  const currentSlot = portfolio[slotIndex];
  const currentFund = getFundById(currentSlot.fundId);

  pendingSwap = { strategyType, slotIndex, currentFundId: currentFund.id };
  swapModalFilter = "similar"; // Default to similar funds per user feedback

  const modalEl = document.getElementById("swap-fund-modal");
  const modalSlotTitle = document.getElementById("swap-modal-slot-title");
  const bannerEl = document.getElementById("swap-modal-current-banner");

  modalSlotTitle.textContent = `Swapping Slot ${slotIndex + 1}: ${currentFund.name} (${currentSlot.allocationPct}% Allocation)`;

  if (bannerEl) {
    bannerEl.innerHTML = `
      <div class="flex items-center justify-between gap-3 flex-wrap w-full">
        <div class="space-y-0.5">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Current Holding:</span>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900 text-white">${currentFund.house}</span>
            <h5 class="text-xs font-bold text-slate-900">${currentFund.name}</h5>
          </div>
          <div class="text-[11px] text-slate-500">
            Sector: <strong class="text-slate-700">${currentFund.iaSector}</strong> • OCF: <strong>${currentFund.ocfPct}%</strong> • CITICODE: <strong class="font-mono text-slate-700">${currentFund.citicode}</strong>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200 text-right">
            <span class="text-[10px] text-slate-400 block">Growth (15y)</span>
            <span class="text-xs font-black text-emerald-600">${currentFund.avgAnnualReturn15Yr.toFixed(1)}% p.a.</span>
          </div>
          <div class="bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-200 text-right">
            <span class="text-[10px] text-slate-400 block">FE Risk</span>
            <span class="text-xs font-black text-brand-900">${currentFund.feRiskScore}</span>
          </div>
        </div>
      </div>
    `;
  }

  updateSwapModalTabs();
  renderSwapModalList();

  modalEl.classList.remove("hidden");
  modalEl.classList.add("flex");

  if (window.lucide) {
    window.lucide.createIcons();
  }
};

window.setSwapModalFilter = function(filterType) {
  swapModalFilter = filterType;
  updateSwapModalTabs();
  renderSwapModalList();
};

function updateSwapModalTabs() {
  const tabSimilar = document.getElementById("swap-tab-similar");
  const tabAll = document.getElementById("swap-tab-all");
  if (!tabSimilar || !tabAll) return;

  if (swapModalFilter === "similar") {
    tabSimilar.className = "px-3 py-1.5 rounded-lg bg-white text-slate-900 shadow-xs transition flex items-center gap-1.5 font-bold";
    tabAll.className = "px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 transition flex items-center gap-1.5 font-semibold";
  } else {
    tabSimilar.className = "px-3 py-1.5 rounded-lg text-slate-600 hover:text-slate-900 transition flex items-center gap-1.5 font-semibold";
    tabAll.className = "px-3 py-1.5 rounded-lg bg-white text-slate-900 shadow-xs transition flex items-center gap-1.5 font-bold";
  }
}

function renderSwapModalList() {
  const { strategyType, currentFundId } = pendingSwap;
  const currentFund = getFundById(currentFundId);
  const targetType = strategyType === "active" ? "Active" : "Passive";
  const modalList = document.getElementById("swap-modal-fund-list");
  const countEl = document.getElementById("swap-results-count");
  const allLabelEl = document.getElementById("swap-tab-all-label");

  if (!modalList) return;

  // Get eligible funds of the same type (Active or Passive)
  const allEligible = TRUSTNET_MASTER_FUNDS.filter(f => f.type === targetType);
  if (allLabelEl) {
    allLabelEl.textContent = `All ${targetType} Funds (${allEligible.length})`;
  }

  // Calculate similarity for all candidates
  const scoredFunds = allEligible.map(f => {
    const isCurrent = f.id === currentFund.id;
    const similarity = computeFundSimilarity(f, currentFund);
    return {
      fund: f,
      isCurrent,
      ...similarity
    };
  });

  let displayList = [];

  if (swapModalFilter === "similar") {
    // Show funds similar in growth and risk appetite (excluding the currently selected one)
    const candidates = scoredFunds.filter(item => !item.isCurrent);
    candidates.sort((a, b) => b.similarityScore - a.similarityScore);
    
    // Take close peers (similarity >= 65%, or top 4 if fewer)
    displayList = candidates.filter(item => item.similarityScore >= 65);
    if (displayList.length < 4) {
      displayList = candidates.slice(0, 4);
    }

    if (countEl) {
      countEl.innerHTML = `<span class="inline-flex items-center gap-1 text-emerald-700 font-semibold"><i data-lucide="check" class="w-3.5 h-3.5"></i> Showing ${displayList.length} closest peers in growth & risk</span>`;
    }
  } else {
    // Show all funds of this type, sorted with current holding first then by similarity
    displayList = scoredFunds.slice().sort((a, b) => {
      if (a.isCurrent) return -1;
      if (b.isCurrent) return 1;
      return b.similarityScore - a.similarityScore;
    });

    if (countEl) {
      countEl.textContent = `Showing all ${displayList.length} funds`;
    }
  }

  if (displayList.length === 0) {
    modalList.innerHTML = `
      <div class="text-center py-8 text-slate-500">
        <p class="font-bold">No similar funds found with this exact risk/return profile.</p>
        <button onclick="setSwapModalFilter('all')" class="mt-2 text-xs font-semibold text-brand-600 underline">
          View all available ${targetType} funds instead
        </button>
      </div>
    `;
    return;
  }

  modalList.innerHTML = displayList.map(item => {
    const f = item.fund;
    const isCurrent = item.isCurrent;
    const score = item.similarityScore;
    const retDiffStr = `${item.returnDiffSigned >= 0 ? '+' : ''}${item.returnDiffSigned.toFixed(1)}%`;
    const riskDiffStr = `${item.riskDiffSigned >= 0 ? '+' : ''}${item.riskDiffSigned}`;

    let matchBadgeClass = "bg-slate-100 text-slate-700 border-slate-200";
    let matchLabel = `${score}% Match`;
    if (isCurrent) {
      matchBadgeClass = "bg-brand-600 text-white border-brand-700";
      matchLabel = "Current Holding";
    } else if (score >= 88) {
      matchBadgeClass = "bg-emerald-100 text-emerald-800 border-emerald-300";
      matchLabel = `🎯 ${score}% Match (High Fit)`;
    } else if (score >= 72) {
      matchBadgeClass = "bg-teal-100 text-teal-800 border-teal-300";
      matchLabel = `🎯 ${score}% Match (Good Fit)`;
    } else {
      matchBadgeClass = "bg-amber-100 text-amber-800 border-amber-300";
      matchLabel = `🎯 ${score}% Match (Different Profile)`;
    }

    return `
      <div onclick="${isCurrent ? '' : `selectSwappedFund('${f.id}')`}" 
        class="p-4 rounded-xl border transition ${
          isCurrent 
            ? 'border-brand-500 bg-brand-50/60 ring-2 ring-brand-500/20 cursor-default' 
            : 'border-slate-200 hover:border-brand-500 hover:bg-slate-50/90 hover:shadow-md cursor-pointer bg-white'
        } flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        
        <div class="space-y-1.5 flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-white">${f.house}</span>
            <h5 class="text-xs font-bold text-slate-900 truncate">${f.name}</h5>
            ${renderFeCrowns(f.feCrowns)}
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold border ${matchBadgeClass}">
              ${matchLabel}
            </span>
          </div>

          <div class="flex items-center gap-2 flex-wrap text-[11px] text-slate-500">
            <span>Sector: <strong>${f.iaSector}</strong></span>
            <span>•</span>
            <span>OCF: <strong>${f.ocfPct}%</strong></span>
            <span>•</span>
            <span>CITICODE: <strong class="font-mono text-slate-600">${f.citicode}</strong></span>
            ${f.managerName ? `<span>•</span><span>Mgr: <strong class="text-slate-700">${f.managerName.split('&')[0]}</strong></span>` : ''}
          </div>

          <!-- Comparison Pill vs Current Fund -->
          ${!isCurrent ? `
            <div class="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/80 text-[10px] text-slate-700 flex-wrap">
              <span class="font-semibold text-slate-500">Comparison vs Current:</span>
              <span>Growth: <strong class="text-slate-900">${f.avgAnnualReturn15Yr.toFixed(1)}%</strong> <span class="${item.returnDiffSigned >= 0 ? 'text-emerald-600' : 'text-slate-500'} font-semibold">(${retDiffStr})</span></span>
              <span>•</span>
              <span>Risk: <strong class="text-slate-900">${f.feRiskScore}</strong> <span class="text-slate-500 font-semibold">(${riskDiffStr})</span></span>
              <span>•</span>
              <span>2026 YTD: <strong class="${f.ytdReturn2026 >= 0 ? 'text-cyan-700' : 'text-rose-600'}">${formatPct(f.ytdReturn2026)}</strong></span>
            </div>
          ` : `
            <span class="text-[10px] font-semibold text-brand-700">Currently in your portfolio slot</span>
          `}
        </div>

        <div class="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center flex-shrink-0 gap-1.5 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
          <div class="text-right">
            <span class="text-base font-black text-emerald-600 block">${f.avgAnnualReturn15Yr.toFixed(1)}%</span>
            <span class="text-[10px] text-slate-400">15-Yr Annual Return</span>
          </div>

          ${!isCurrent ? `
            <span class="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-brand-600 text-white text-xs font-bold hover:bg-brand-700 transition shadow-xs">
              <span>Select & Swap</span>
              <i data-lucide="arrow-right" class="w-3 h-3"></i>
            </span>
          ` : `
            <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-bold bg-brand-100 text-brand-800">
              Active Selection
            </span>
          `}
        </div>

      </div>
    `;
  }).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

window.closeSwapModal = function() {
  const modalEl = document.getElementById("swap-fund-modal");
  if (modalEl) {
    modalEl.classList.add("hidden");
    modalEl.classList.remove("flex");
  }
};

window.openUserGuideModal = function() {
  const modalEl = document.getElementById("user-guide-modal");
  if (modalEl) {
    modalEl.classList.remove("hidden");
    modalEl.classList.add("flex");
    trackGAEvent("user_guide_opened");
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }
};

window.closeUserGuideModal = function() {
  const modalEl = document.getElementById("user-guide-modal");
  if (modalEl) {
    modalEl.classList.add("hidden");
    modalEl.classList.remove("flex");
  }
};

window.selectSwappedFund = function(newFundId) {
  const { strategyType, slotIndex } = pendingSwap;
  const portfolio = strategyType === "active" ? activeCustomPortfolio : passiveCustomPortfolio;
  portfolio[slotIndex].fundId = newFundId;
  closeSwapModal();
  updateAdvisor();

  trackGAEvent("fund_swapped", {
    strategy_type: strategyType,
    slot_index: slotIndex,
    new_fund_id: newFundId
  });
};

function exportCSV() {
  trackGAEvent("csv_exported");
  const inputs = getInputs();

  let csv = "Dutta UK Funds Selection Advisor - Master Trustnet Export (With 2026 YTD)\n";
  csv += `Date Generated: ${new Date().toLocaleDateString('en-GB')}\n`;
  csv += `Data Source: Trustnet.com (FE fundinfo)\n`;
  csv += `Current Age: ${inputs.currentAge}, Target Retirement Age: ${inputs.retirementAge}, Horizon: ${inputs.horizon} Years\n`;
  csv += `Lump Sum: £${inputs.lumpSum}, Monthly Contribution: £${inputs.monthlyAmount}\n\n`;

  csv += "Strategy,Fund House,Fund Name,ISIN,Citicode,IA Sector,FE Crowns,FE Risk Score,Allocation %,Lump Sum (£),Monthly (£),Expected Value at Retirement (£),15-Yr Return (% p.a.),2026 YTD Return (%),Benchmark Index,Benchmark Return (% p.a.),Alpha/Tracking Diff,Fund Size AUM (£B),Lead Manager,Manager Tenure (Yrs),Inception Year,OCF (%),Trustnet Link\n";

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
        `${f.ytdReturn2026}%`,
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
  link.setAttribute("download", `Dutta_UK_Funds_Allocation_Master_Trustnet_With_YTD.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ==========================================
// RETIREMENT FUND LONGEVITY & DRAWDOWN LOGIC
// ==========================================

let drawdownLongevityChart = null;
let cachedDrawdownSchedule = [];

const formatCompactNumber = (val) => {
  if (val >= 1000000) return (val / 1000000).toFixed(2) + "M";
  if (val >= 1000) return (val / 1000).toFixed(0) + "k";
  return Math.round(val).toString();
};

/**
 * Computes UK income tax on gross pension income according to current HMRC tax bands (2026/27).
 * Accounts for 25% tax-free UFPLS lump sum, standard Personal Allowance (£12,570), 
 * basic rate (20%), higher rate (40%), and additional rate (45%) with tapering over £100,000.
 */
function calculateUkTaxOnGross(grossPensionIncome, otherTaxableIncome = 0, taxWrapper = "pension_ufpls") {
  if (taxWrapper === "isa_tax_free" || grossPensionIncome <= 0) {
    return {
      taxFreeLumpPortion: grossPensionIncome,
      taxablePensionPortion: 0,
      totalTaxableIncome: otherTaxableIncome,
      incomeTax: 0,
      netIncome: grossPensionIncome,
      effectiveTaxRate: 0
    };
  }

  let taxFreeLumpPortion = 0;
  let taxablePensionPortion = grossPensionIncome;

  if (taxWrapper === "pension_ufpls") {
    taxFreeLumpPortion = grossPensionIncome * 0.25;
    taxablePensionPortion = grossPensionIncome * 0.75;
  }

  const totalTaxable = taxablePensionPortion + otherTaxableIncome;

  function computeStandardTax(income) {
    if (income <= 0) return 0;
    let pa = 12570;
    if (income > 100000) {
      pa = Math.max(0, 12570 - (income - 100000) / 2);
    }
    const taxableAfterPa = Math.max(0, income - pa);
    if (taxableAfterPa <= 0) return 0;

    const basicBandMax = 37700; // £50,270 - £12,570
    const basicTaxable = Math.min(taxableAfterPa, basicBandMax);
    const basicTax = basicTaxable * 0.20;

    let higherTax = 0;
    let addTax = 0;

    if (taxableAfterPa > basicBandMax) {
      const higherBandMax = Math.max(0, 125140 - pa - basicBandMax);
      const higherTaxable = Math.min(taxableAfterPa - basicBandMax, higherBandMax);
      higherTax = higherTaxable * 0.40;

      if (taxableAfterPa > basicBandMax + higherBandMax) {
        const addTaxable = taxableAfterPa - basicBandMax - higherBandMax;
        addTax = addTaxable * 0.45;
      }
    }

    return basicTax + higherTax + addTax;
  }

  const taxOnOtherOnly = computeStandardTax(otherTaxableIncome);
  const totalTaxWithPension = computeStandardTax(totalTaxable);
  const marginalTaxOnPension = Math.max(0, totalTaxWithPension - taxOnOtherOnly);

  const netIncome = grossPensionIncome - marginalTaxOnPension;
  const effectiveTaxRate = grossPensionIncome > 0 ? (marginalTaxOnPension / grossPensionIncome) * 100 : 0;

  return {
    taxFreeLumpPortion,
    taxablePensionPortion,
    totalTaxableIncome: totalTaxable,
    incomeTax: marginalTaxOnPension,
    netIncome,
    effectiveTaxRate
  };
}

/**
 * Finds the exact gross annual withdrawal required to yield a target net take-home cash amount.
 * Solves Net(G) = TargetNet using bisection to penny precision.
 */
function findGrossWithdrawalForNet(targetNetAnnual, otherTaxableIncome = 0, taxWrapper = "pension_ufpls") {
  if (targetNetAnnual <= 0) return 0;
  if (taxWrapper === "isa_tax_free") return targetNetAnnual;

  let low = targetNetAnnual;
  let high = targetNetAnnual * 2.5;

  while (calculateUkTaxOnGross(high, otherTaxableIncome, taxWrapper).netIncome < targetNetAnnual) {
    high *= 1.5;
  }

  for (let i = 0; i < 35; i++) {
    const mid = (low + high) / 2;
    const taxRes = calculateUkTaxOnGross(mid, otherTaxableIncome, taxWrapper);
    if (Math.abs(taxRes.netIncome - targetNetAnnual) < 0.01) {
      return mid;
    }
    if (taxRes.netIncome < targetNetAnnual) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return (low + high) / 2;
}

/**
 * Runs the full retirement fund longevity simulation, calculates nominal & real balances,
 * updates KPI statistics, updates the Chart.js graph, and populates the schedule table.
 */
function updateDrawdownCalculator() {
  const fundValueEl = document.getElementById("drawdown-fund-value");
  const retireAgeEl = document.getElementById("drawdown-retire-age");
  const netMonthlyEl = document.getElementById("drawdown-net-monthly");
  const fundGrowthEl = document.getElementById("drawdown-fund-growth");
  const taxWrapperEl = document.getElementById("drawdown-tax-wrapper");
  const inflationRateEl = document.getElementById("drawdown-inflation-rate");
  const otherIncomeEl = document.getElementById("drawdown-other-income");
  const inflationAdjustEl = document.getElementById("drawdown-inflation-adjust");

  if (!fundValueEl || !retireAgeEl || !netMonthlyEl || !fundGrowthEl) return;

  const initialFund = Math.max(0, parseFloat(fundValueEl.value) || 0);
  const retireAge = Math.max(40, parseInt(retireAgeEl.value, 10) || 65);
  const netMonthly = Math.max(0, parseFloat(netMonthlyEl.value) || 0);
  const annualGrowthPct = parseFloat(fundGrowthEl.value) || 0;
  const taxWrapper = taxWrapperEl ? taxWrapperEl.value : "pension_ufpls";
  const inflationPct = parseFloat(inflationRateEl ? inflationRateEl.value : 3.0) || 3.0;
  const otherIncome = parseFloat(otherIncomeEl ? otherIncomeEl.value : 0) || 0;
  const adjustForInflation = inflationAdjustEl ? inflationAdjustEl.checked : true;

  const annualGrowthRate = annualGrowthPct / 100;
  const annualInflationRate = inflationPct / 100;
  const monthlyGrowthRate = Math.pow(1 + annualGrowthRate, 1 / 12) - 1;

  // Compute Year 1 Gross & Tax metrics for top cards
  const year1TargetNetAnnual = netMonthly * 12;
  const year1GrossAnnual = findGrossWithdrawalForNet(year1TargetNetAnnual, otherIncome, taxWrapper);
  const year1TaxRes = calculateUkTaxOnGross(year1GrossAnnual, otherIncome, taxWrapper);
  const year1GrossMonthly = year1GrossAnnual / 12;
  const year1TaxMonthly = year1TaxRes.incomeTax / 12;

  // Run Simulation
  let balance = initialFund;
  let currentYear = new Date().getFullYear();
  let schedule = [];
  let isDepleted = false;
  let depletionAge = null;
  let totalNetWithdrawn = 0;
  let totalGrossWithdrawn = 0;
  let totalTaxPaid = 0;

  const maxSimYears = 45;

  // Initial milestone at Age retireAge (Year 0)
  schedule.push({
    age: retireAge,
    year: currentYear,
    startBalance: initialFund,
    growthEarned: 0,
    grossWithdrawal: 0,
    ukTaxPaid: 0,
    netWithdrawal: 0,
    endBalanceNominal: initialFund,
    endBalanceReal: initialFund,
    isInitial: true
  });

  for (let yr = 0; yr < maxSimYears; yr++) {
    const ageAtStart = retireAge + yr;
    const calendarYear = currentYear + yr;
    const startBalance = balance;

    if (balance <= 0) {
      if (!isDepleted) {
        isDepleted = true;
        depletionAge = ageAtStart;
      }
      break;
    }

    const inflationFactor = Math.pow(1 + annualInflationRate, yr);
    const targetNetThisYear = adjustForInflation ? (year1TargetNetAnnual * inflationFactor) : year1TargetNetAnnual;
    const otherIncomeThisYear = adjustForInflation ? (otherIncome * inflationFactor) : otherIncome;

    const grossThisYear = findGrossWithdrawalForNet(targetNetThisYear, otherIncomeThisYear, taxWrapper);
    const taxResThisYear = calculateUkTaxOnGross(grossThisYear, otherIncomeThisYear, taxWrapper);
    const monthlyGrossThisYear = grossThisYear / 12;

    let yearGrowth = 0;
    let actualGrossDrawn = 0;

    for (let m = 0; m < 12; m++) {
      if (balance <= 0) break;

      const monthInterest = balance * monthlyGrowthRate;
      yearGrowth += monthInterest;
      balance += monthInterest;

      if (balance >= monthlyGrossThisYear) {
        balance -= monthlyGrossThisYear;
        actualGrossDrawn += monthlyGrossThisYear;
      } else {
        actualGrossDrawn += balance;
        balance = 0;
        isDepleted = true;
        depletionAge = ageAtStart + ((m + 1) / 12);
        break;
      }
    }

    const drawRatio = grossThisYear > 0 ? (actualGrossDrawn / grossThisYear) : 1;
    const actualTaxDeducted = taxResThisYear.incomeTax * drawRatio;
    const actualNetReceived = actualGrossDrawn - actualTaxDeducted;

    totalGrossWithdrawn += actualGrossDrawn;
    totalNetWithdrawn += actualNetReceived;
    totalTaxPaid += actualTaxDeducted;

    const endOfYrInflationFactor = Math.pow(1 + annualInflationRate, yr + 1);
    const endBalanceReal = balance / endOfYrInflationFactor;

    schedule.push({
      age: ageAtStart + 1,
      year: calendarYear + 1,
      startBalance: startBalance,
      growthEarned: yearGrowth,
      grossWithdrawal: actualGrossDrawn,
      ukTaxPaid: actualTaxDeducted,
      netWithdrawal: actualNetReceived,
      endBalanceNominal: balance,
      endBalanceReal: endBalanceReal,
      isInitial: false
    });

    if (balance <= 0) {
      isDepleted = true;
      if (!depletionAge) depletionAge = ageAtStart + 1;
      break;
    }
  }

  cachedDrawdownSchedule = schedule;

  // Update KPI Cards
  const statLongevityAge = document.getElementById("stat-longevity-age");
  const statLongevitySubtext = document.getElementById("stat-longevity-subtext");
  const statLongevityStatus = document.getElementById("stat-longevity-status");

  if (statLongevityAge && statLongevitySubtext && statLongevityStatus) {
    if (isDepleted && depletionAge) {
      const wholeYears = Math.floor(depletionAge - retireAge);
      const wholeMonths = Math.round(((depletionAge - retireAge) - wholeYears) * 12);
      statLongevityAge.textContent = `Until Age ${depletionAge.toFixed(1)}`;
      statLongevityAge.className = depletionAge < 80 ? "text-2xl font-black text-rose-600" : (depletionAge < 90 ? "text-2xl font-black text-amber-600" : "text-2xl font-black text-slate-900");
      statLongevitySubtext.textContent = `${wholeYears} Years and ${wholeMonths} Months`;
      statLongevitySubtext.className = depletionAge < 80 ? "text-xs text-rose-700 font-semibold mt-1" : "text-xs text-amber-700 font-semibold mt-1";
      statLongevityStatus.textContent = depletionAge < 85 ? `Fund exhausted around year ${Math.round(currentYear + depletionAge - retireAge)}` : `Sufficient longevity past UK average life expectancy`;
    } else {
      statLongevityAge.textContent = "Sustainable Indefinitely";
      statLongevityAge.className = "text-2xl font-black text-emerald-600";
      statLongevitySubtext.textContent = "Portfolio growth covers withdrawals";
      statLongevitySubtext.className = "text-xs text-emerald-700 font-semibold mt-1";
      const finalRow = schedule[schedule.length - 1];
      statLongevityStatus.textContent = `At Age ${finalRow.age}, remaining balance is £${formatCompactNumber(finalRow.endBalanceNominal)}`;
    }
  }

  const statGrossMonthly = document.getElementById("stat-gross-monthly");
  const statGrossAnnual = document.getElementById("stat-gross-annual");
  const statTaxDeducted = document.getElementById("stat-tax-deducted");
  if (statGrossMonthly && statGrossAnnual && statTaxDeducted) {
    statGrossMonthly.textContent = `£${Math.round(year1GrossMonthly).toLocaleString()} / mo`;
    statGrossAnnual.textContent = `£${Math.round(year1GrossAnnual).toLocaleString()} Gross / Year`;
    const effTaxRate = year1GrossAnnual > 0 ? (year1TaxRes.incomeTax / year1GrossAnnual * 100).toFixed(1) : "0.0";
    statTaxDeducted.textContent = `UK Tax: £${Math.round(year1TaxMonthly).toLocaleString()}/mo (£${Math.round(year1TaxRes.incomeTax).toLocaleString()}/yr) | ${effTaxRate}% Effective Rate`;
  }

  // 10-Year Purchasing Power Card
  const statReal10Yr = document.getElementById("stat-real-value-10yr");
  const statNominal10Yr = document.getElementById("stat-nominal-value-10yr");
  if (statReal10Yr && statNominal10Yr) {
    const idx10 = Math.min(10, schedule.length - 1);
    const row10 = schedule[idx10];
    if (row10) {
      statReal10Yr.textContent = `£${Math.round(row10.endBalanceReal).toLocaleString()}`;
      statNominal10Yr.textContent = `Nominal: £${Math.round(row10.endBalanceNominal).toLocaleString()} (At Age ${row10.age})`;
    } else {
      statReal10Yr.textContent = "£0";
      statNominal10Yr.textContent = "Depleted before 10 years";
    }
  }

  // Total Lifetime Tax Paid Card
  const statTotalTax = document.getElementById("stat-total-tax-paid");
  const statTotalWithdrawn = document.getElementById("stat-total-withdrawn");
  if (statTotalTax && statTotalWithdrawn) {
    statTotalTax.textContent = `£${Math.round(totalTaxPaid).toLocaleString()}`;
    statTotalWithdrawn.textContent = `Total Net Withdrawn: £${Math.round(totalNetWithdrawn).toLocaleString()}`;
  }

  // Render Schedule Table Body
  const tbody = document.getElementById("drawdown-schedule-body");
  if (tbody) {
    tbody.innerHTML = schedule.filter(r => !r.isInitial).map(r => {
      const isDepletedRow = r.endBalanceNominal <= 0;
      return `
        <tr class="hover:bg-slate-50 transition ${isDepletedRow ? 'bg-rose-50/40 text-rose-900' : ''}">
          <td class="py-2 px-3 font-bold text-slate-900">${r.age}</td>
          <td class="py-2 px-3 text-slate-500 font-mono text-[11px]">${r.year}</td>
          <td class="py-2 px-3 text-slate-700">£${Math.round(r.startBalance).toLocaleString()}</td>
          <td class="py-2 px-3 font-semibold text-emerald-600">+£${Math.round(r.growthEarned).toLocaleString()}</td>
          <td class="py-2 px-3 font-semibold text-amber-800">£${Math.round(r.grossWithdrawal).toLocaleString()}</td>
          <td class="py-2 px-3 font-semibold text-rose-600">£${Math.round(r.ukTaxPaid).toLocaleString()}</td>
          <td class="py-2 px-3 font-bold text-brand-700">£${Math.round(r.netWithdrawal).toLocaleString()}</td>
          <td class="py-2 px-3 font-extrabold ${isDepletedRow ? 'text-rose-600' : 'text-indigo-900'}">£${Math.round(r.endBalanceNominal).toLocaleString()}</td>
          <td class="py-2 px-3 font-extrabold text-emerald-900 bg-emerald-50/50">£${Math.round(r.endBalanceReal).toLocaleString()}</td>
        </tr>
      `;
    }).join("");
  }

  // Render Drawdown Chart
  renderDrawdownChart(schedule, inflationPct);

  if (window.lucide) {
    lucide.createIcons();
  }
}

function renderDrawdownChart(schedule, inflationPct) {
  const ctx = document.getElementById("drawdownLongevityChart");
  if (!ctx) return;

  if (drawdownLongevityChart) {
    drawdownLongevityChart.destroy();
  }

  const labels = schedule.map(r => `Age ${r.age}`);
  const nominalData = schedule.map(r => Math.round(r.endBalanceNominal));
  const realData = schedule.map(r => Math.round(r.endBalanceReal));

  drawdownLongevityChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Nominal Fund Balance (£)",
          data: nominalData,
          borderColor: "#6366f1",
          backgroundColor: "rgba(99, 102, 241, 0.08)",
          fill: true,
          tension: 0.3,
          borderWidth: 3,
          pointRadius: 3,
          pointHoverRadius: 6
        },
        {
          label: `Real Money (Today's Value @ ${inflationPct}% Inflation)`,
          data: realData,
          borderColor: "#059669",
          backgroundColor: "rgba(5, 150, 105, 0.08)",
          fill: true,
          tension: 0.3,
          borderWidth: 3,
          pointRadius: 3,
          pointHoverRadius: 6
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
            title: (items) => `${items[0].label} (${schedule[items[0].dataIndex].year})`,
            label: (ctx) => ` ${ctx.dataset.label}: ${formatCurrency(ctx.raw)}`,
            afterBody: (items) => {
              const row = schedule[items[0].dataIndex];
              if (!row || row.isInitial) return [];
              return [
                `Gross Withdrawal: ${formatCurrency(row.grossWithdrawal)}/yr`,
                `Net Cash in Hand: ${formatCurrency(row.netWithdrawal)}/yr`,
                `UK Income Tax: ${formatCurrency(row.ukTaxPaid)}/yr`
              ];
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
            callback: (v) => v >= 1000000 ? `£${(v/1000000).toFixed(1)}M` : (v >= 1000 ? `£${(v/1000).toFixed(0)}k` : `£${v}`)
          }
        }
      }
    }
  });

  trackGAEvent("drawdown_calculated", {
    fund_value: pot,
    retire_age: retireAge,
    net_monthly: netMonthly,
    fund_growth: fundGrowth,
    is_depleted: isDepleted,
    depletion_age: depletionAge
  });
}

function exportDrawdownCSV() {
  trackGAEvent("drawdown_csv_exported");
  if (!cachedDrawdownSchedule || cachedDrawdownSchedule.length === 0) return;

  const fundValueEl = document.getElementById("drawdown-fund-value");
  const retireAgeEl = document.getElementById("drawdown-retire-age");
  const netMonthlyEl = document.getElementById("drawdown-net-monthly");
  const fundGrowthEl = document.getElementById("drawdown-fund-growth");

  let csv = "Dutta UK Funds Selection Advisor - Retirement Drawdown & Longevity Schedule\n";
  csv += `Date Generated: ${new Date().toLocaleDateString('en-GB')}\n`;
  csv += `Starting Fund Value: £${fundValueEl ? fundValueEl.value : ''}\n`;
  csv += `Retirement Age: ${retireAgeEl ? retireAgeEl.value : ''}\n`;
  csv += `Net Monthly Withdrawal: £${netMonthlyEl ? netMonthlyEl.value : ''}\n`;
  csv += `Expected Fund Growth: ${fundGrowthEl ? fundGrowthEl.value : ''}%\n`;
  csv += `Inflation Assumption: 3.0% per annum\n\n`;

  csv += "Age,Calendar Year,Start Balance (£),Growth Earned (£),Gross Withdrawal (£),UK Income Tax Paid (£),Net in Hand (£),End Balance Nominal (£),End Balance Real (Today's Money £)\n";

  cachedDrawdownSchedule.forEach(r => {
    csv += [
      r.age,
      r.year,
      Math.round(r.startBalance),
      Math.round(r.growthEarned),
      Math.round(r.grossWithdrawal),
      Math.round(r.ukTaxPaid),
      Math.round(r.netWithdrawal),
      Math.round(r.endBalanceNominal),
      Math.round(r.endBalanceReal)
    ].join(",") + "\n";
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `Dutta_UK_Retirement_Drawdown_Longevity_Schedule.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function syncAdvisorToDrawdown() {
  const inputs = getInputs();
  const activeRate = STRATEGY_PRESETS[currentRisk].active.reduce((acc, item) => {
    return acc + (getFundById(item.fundId).avgAnnualReturn15Yr * (item.allocationPct / 100));
  }, 0);
  const activeVal = calculateFutureValue(inputs.lumpSum, inputs.monthlyAmount, activeRate, inputs.horizon);

  const fundValInput = document.getElementById("drawdown-fund-value");
  const retireAgeInput = document.getElementById("drawdown-retire-age");
  const growthInput = document.getElementById("drawdown-fund-growth");

  if (fundValInput) fundValInput.value = activeVal;
  if (retireAgeInput) retireAgeInput.value = inputs.retirementAge;
  if (growthInput) growthInput.value = Math.max(4.0, Math.min(8.0, (activeRate * 0.65).toFixed(1)));

  updateDrawdownCalculator();
}

// ==========================================
// TARGET RETIREMENT & SAVINGS PLANNER MODULE
// ==========================================

let targetLifetimeChart = null;
let selectedTargetRisk = "medium"; // 'low' (5.2%), 'medium' (8.8%), 'high' (12.5%)
let targetIncomeMode = "annual";   // 'annual' or 'monthly'
let cachedTargetSchedule = [];

const TARGET_RISK_SPECS = {
  low: {
    label: "Low Risk",
    fullLabel: "Low Risk (5.2% Annual Return / Conservative)",
    rate: 0.052,
    ratePct: "5.2"
  },
  medium: {
    label: "Medium Risk",
    fullLabel: "Medium Risk (8.8% Annual Return / Balanced)",
    rate: 0.088,
    ratePct: "8.8"
  },
  high: {
    label: "High Risk",
    fullLabel: "High Risk (12.5% Annual Return / Growth)",
    rate: 0.125,
    ratePct: "12.5"
  }
};

/**
 * Toggles the income input between Annual (£/year) and Monthly (£/month).
 */
function setTargetIncomeMode(mode) {
  if (targetIncomeMode === mode) return;
  targetIncomeMode = mode;

  const incomeInput = document.getElementById("target-net-income");
  const unitLabel = document.getElementById("target-income-unit");
  const btnAnnual = document.getElementById("target-income-mode-annual");
  const btnMonthly = document.getElementById("target-income-mode-monthly");

  if (!incomeInput) return;

  const currentVal = parseFloat(incomeInput.value) || 0;

  if (mode === "monthly") {
    incomeInput.value = Math.max(500, Math.round(currentVal / 12));
    if (unitLabel) unitLabel.textContent = "/ month";
    if (btnAnnual) {
      btnAnnual.className = "px-2 py-0.5 rounded text-slate-500 hover:text-slate-800";
    }
    if (btnMonthly) {
      btnMonthly.className = "px-2 py-0.5 rounded bg-white text-slate-900 shadow-xs font-bold";
    }
  } else {
    incomeInput.value = Math.max(5000, Math.round(currentVal * 12));
    if (unitLabel) unitLabel.textContent = "/ year";
    if (btnAnnual) {
      btnAnnual.className = "px-2 py-0.5 rounded bg-white text-slate-900 shadow-xs font-bold";
    }
    if (btnMonthly) {
      btnMonthly.className = "px-2 py-0.5 rounded text-slate-500 hover:text-slate-800";
    }
  }

  updateTargetRetirementPlanner();
}

/**
 * Selects an accumulation risk profile (low, medium, high) and refreshes visuals.
 */
function selectTargetRiskProfile(riskKey) {
  if (!TARGET_RISK_SPECS[riskKey]) return;
  selectedTargetRisk = riskKey;
  trackGAEvent("target_risk_selected", { risk_tier: riskKey });

  // Update card border & active state classes
  const cards = {
    low: document.getElementById("target-card-low"),
    medium: document.getElementById("target-card-medium"),
    high: document.getElementById("target-card-high")
  };

  Object.entries(cards).forEach(([k, card]) => {
    if (!card) return;
    if (k === riskKey) {
      card.className = "target-risk-card p-3 rounded-xl border-2 border-brand-500 bg-brand-50/60 cursor-pointer transition space-y-1 text-center relative shadow-xs";
    } else {
      card.className = "target-risk-card p-3 rounded-xl border border-slate-200 hover:border-slate-400 cursor-pointer transition bg-white space-y-1 text-center";
    }
  });

  const selectedStrategyEl = document.getElementById("target-selected-strategy-name");
  if (selectedStrategyEl) {
    selectedStrategyEl.textContent = TARGET_RISK_SPECS[riskKey].fullLabel;
  }

  updateTargetRetirementPlanner();
}

/**
 * Solves UK gross withdrawal from net income considering UFPLS / ISA wrapper.
 */
function solveUKGrossForTarget(netAnnual, taxWrapper) {
  const wrapperKey = taxWrapper === "isa" ? "isa_tax_free" : "pension_ufpls";
  const gross = findGrossWithdrawalForNet(netAnnual, 0, wrapperKey);
  const taxRes = calculateUkTaxOnGross(gross, 0, wrapperKey);
  return {
    gross,
    tax: taxRes.incomeTax,
    net: taxRes.netIncome
  };
}

/**
 * Calculates target retirement pot, required monthly savings, lifetime schedule,
 * and updates chart and DOM KPI cards.
 */
function updateTargetRetirementPlanner() {
  const incomeInput = document.getElementById("target-net-income");
  const retireAgeInput = document.getElementById("target-retire-age");
  const lifeExpInput = document.getElementById("target-life-expectancy");
  const postGrowthInput = document.getElementById("target-post-growth");
  const taxWrapperInput = document.getElementById("target-tax-wrapper");
  const curAgeInput = document.getElementById("target-current-age");
  const lumpInput = document.getElementById("target-current-lump");

  if (!incomeInput || !retireAgeInput || !lifeExpInput) return;

  const currentAge = Math.max(18, Math.min(80, parseInt(curAgeInput ? curAgeInput.value : 45, 10) || 45));
  let retireAge = Math.max(currentAge + 1, Math.min(85, parseInt(retireAgeInput.value, 10) || 65));
  let lifeExpectancy = Math.max(retireAge + 1, Math.min(105, parseInt(lifeExpInput.value, 10) || 90));

  if (retireAgeInput.value != retireAge) retireAgeInput.value = retireAge;
  if (lifeExpInput.value != lifeExpectancy) lifeExpInput.value = lifeExpectancy;

  const rawIncome = Math.max(1000, parseFloat(incomeInput.value) || 30000);
  const desiredNetAnnualToday = targetIncomeMode === "monthly" ? rawIncome * 12 : rawIncome;
  const currentLumpSum = Math.max(0, parseFloat(lumpInput ? lumpInput.value : 50000) || 0);
  const postGrowthRate = Math.max(0.01, (parseFloat(postGrowthInput ? postGrowthInput.value : 5.5) || 5.5) / 100);
  const taxWrapper = taxWrapperInput ? taxWrapperInput.value : "sipp";
  const inflationRate = 0.03; // 3% per annum compound

  const yearsToRetire = Math.max(1, retireAge - currentAge);
  const yearsInRetire = Math.max(1, lifeExpectancy - retireAge);

  // Update dynamic timeline labels in inputs
  const horizonLabel = document.getElementById("target-horizon-label");
  if (horizonLabel) horizonLabel.textContent = `${yearsToRetire} years to retirement`;

  const durationLabel = document.getElementById("target-retire-duration-label");
  if (durationLabel) durationLabel.textContent = `${yearsInRetire} years of retirement`;

  document.querySelectorAll(".schedule-current-age-text").forEach(el => el.textContent = currentAge);
  document.querySelectorAll(".schedule-life-age-text").forEach(el => el.textContent = lifeExpectancy);
  document.querySelectorAll(".kpi-retire-age-text").forEach(el => el.textContent = retireAge);
  const chartRetireAge = document.getElementById("chart-retire-age-text");
  if (chartRetireAge) chartRetireAge.textContent = retireAge;
  const chartLifeAge = document.getElementById("chart-life-age-text");
  if (chartLifeAge) chartLifeAge.textContent = lifeExpectancy;
  const displayRetireAge = document.getElementById("target-display-retire-age");
  if (displayRetireAge) displayRetireAge.textContent = retireAge;
  const kpiHorizonText = document.getElementById("kpi-horizon-text");
  if (kpiHorizonText) kpiHorizonText.textContent = yearsToRetire;

  // ----------------------------------------------------
  // Phase 1: Post-Retirement Target Pot Solver
  // ----------------------------------------------------
  // Year 1 Net Income in nominal terms (inflated at 3% for yearsToRetire)
  const netYear1Nominal = desiredNetAnnualToday * Math.pow(1 + inflationRate, yearsToRetire);

  const decumulationWithdrawals = [];
  let totalNetPayout = 0;
  for (let y = 0; y < yearsInRetire; y++) {
    const net_y = netYear1Nominal * Math.pow(1 + inflationRate, y);
    const taxRes = solveUKGrossForTarget(net_y, taxWrapper);
    totalNetPayout += net_y;
    decumulationWithdrawals.push({
      yearIndex: y,
      age: retireAge + y,
      net: net_y,
      gross: taxRes.gross,
      tax: taxRes.tax
    });
  }

  // Backward recurrence solver:
  // Balance_{y-1} = Gross_y + (Balance_y / (1 + postGrowthRate))
  let targetPotNeeded = 0;
  for (let y = yearsInRetire - 1; y >= 0; y--) {
    const gross_y = decumulationWithdrawals[y].gross;
    targetPotNeeded = gross_y + (targetPotNeeded / (1 + postGrowthRate));
  }
  targetPotNeeded = Math.round(targetPotNeeded);

  // Target pot in Today's World (deflated at 3% for yearsToRetire)
  const targetPotToday = Math.round(targetPotNeeded / Math.pow(1 + inflationRate, yearsToRetire));

  // ----------------------------------------------------
  // Phase 2: Pre-Retirement Accumulation Solver
  // ----------------------------------------------------
  const riskCalculations = {};
  const totalMonths = yearsToRetire * 12;

  Object.entries(TARGET_RISK_SPECS).forEach(([k, spec]) => {
    const mr = spec.rate / 12;
    const fvLump = Math.round(currentLumpSum * Math.pow(1 + mr, totalMonths));
    const gap = Math.max(0, targetPotNeeded - fvLump);
    let monthlyNeeded = 0;
    if (gap > 0 && mr > 0) {
      monthlyNeeded = Math.round(gap * (mr / (Math.pow(1 + mr, totalMonths) - 1)));
    }
    const totalDeposited = currentLumpSum + (monthlyNeeded * totalMonths);

    riskCalculations[k] = {
      spec,
      fvLump,
      gap,
      monthlyNeeded,
      totalDeposited
    };
  });

  // Update Low, Medium, High cards in DOM
  const lowCalc = riskCalculations.low;
  const medCalc = riskCalculations.medium;
  const highCalc = riskCalculations.high;

  const monthlyLowEl = document.getElementById("target-monthly-low");
  const monthlyMedEl = document.getElementById("target-monthly-medium");
  const monthlyHighEl = document.getElementById("target-monthly-high");
  if (monthlyLowEl) monthlyLowEl.textContent = `£${lowCalc.monthlyNeeded.toLocaleString()}`;
  if (monthlyMedEl) monthlyMedEl.textContent = `£${medCalc.monthlyNeeded.toLocaleString()}`;
  if (monthlyHighEl) monthlyHighEl.textContent = `£${highCalc.monthlyNeeded.toLocaleString()}`;

  const lumpLowEl = document.getElementById("target-lump-grow-low");
  const lumpMedEl = document.getElementById("target-lump-grow-medium");
  const lumpHighEl = document.getElementById("target-lump-grow-high");
  if (lumpLowEl) lumpLowEl.textContent = `Lump sum grows to £${formatCompactNumber(lowCalc.fvLump)}`;
  if (lumpMedEl) lumpMedEl.textContent = `Lump sum grows to £${formatCompactNumber(medCalc.fvLump)}`;
  if (lumpHighEl) lumpHighEl.textContent = `Lump sum grows to £${formatCompactNumber(highCalc.fvLump)}`;

  const activePlan = riskCalculations[selectedTargetRisk] || medCalc;

  // Update Strategy & Out-of-pocket callout
  const totalOutOfPocketEl = document.getElementById("target-total-out-of-pocket");
  if (totalOutOfPocketEl) {
    totalOutOfPocketEl.textContent = `£${Math.round(activePlan.totalDeposited).toLocaleString()}`;
  }

  // Update Callout Box in Phase 1
  const potNominalEl = document.getElementById("target-pot-nominal-display");
  const potRealEl = document.getElementById("target-pot-real-display");
  const year1NetEl = document.getElementById("target-year1-net-display");
  if (potNominalEl) potNominalEl.textContent = `£${targetPotNeeded.toLocaleString()}`;
  if (potRealEl) potRealEl.textContent = `£${targetPotToday.toLocaleString()}`;
  if (year1NetEl) year1NetEl.textContent = `£${Math.round(netYear1Nominal).toLocaleString()} / yr`;

  // ----------------------------------------------------
  // Update 4 Executive KPI Cards
  // ----------------------------------------------------
  const kpiTargetFund = document.getElementById("kpi-target-fund");
  const kpiTargetToday = document.getElementById("kpi-target-today");
  if (kpiTargetFund) kpiTargetFund.textContent = `£${targetPotNeeded.toLocaleString()}`;
  if (kpiTargetToday) kpiTargetToday.textContent = `£${targetPotToday.toLocaleString()}`;

  const kpiMonthlySavings = document.getElementById("kpi-monthly-savings");
  const kpiRiskLabel = document.getElementById("kpi-risk-label");
  if (kpiMonthlySavings) kpiMonthlySavings.textContent = `£${activePlan.monthlyNeeded.toLocaleString()}`;
  if (kpiRiskLabel) kpiRiskLabel.textContent = `${activePlan.spec.label}`;

  const kpiLumpFuture = document.getElementById("kpi-lump-future");
  const kpiLumpSubtext = document.getElementById("kpi-lump-subtext");
  const kpiLumpPct = document.getElementById("kpi-lump-pct");
  if (kpiLumpFuture) kpiLumpFuture.textContent = `£${activePlan.fvLump.toLocaleString()}`;
  if (kpiLumpSubtext) kpiLumpSubtext.textContent = `Starting from £${Math.round(currentLumpSum).toLocaleString()} today`;
  if (kpiLumpPct) {
    const pct = targetPotNeeded > 0 ? (activePlan.fvLump / targetPotNeeded * 100).toFixed(1) : "0.0";
    kpiLumpPct.textContent = `${pct}%`;
  }

  const kpiLifetimePayout = document.getElementById("kpi-lifetime-payout");
  if (kpiLifetimePayout) kpiLifetimePayout.textContent = `£${Math.round(totalNetPayout).toLocaleString()}`;

  // ----------------------------------------------------
  // Build Lifetime Schedule (Accumulation + Decumulation)
  // ----------------------------------------------------
  const calendarStartYear = new Date().getFullYear();
  const schedule = [];

  // Milestone Row at Current Age (Year 0)
  schedule.push({
    age: currentAge,
    year: calendarStartYear,
    phase: "Starting Point",
    startBalance: currentLumpSum,
    growthEarned: 0,
    annualDeposit: 0,
    grossWithdrawal: 0,
    ukTaxPaid: 0,
    netWithdrawal: 0,
    endBalanceNominal: currentLumpSum,
    endBalanceReal: currentLumpSum,
    isInitial: true
  });

  // Accumulation Phase: Current Age -> Retirement Age
  const accumMr = activePlan.spec.rate / 12;
  let accumBal = currentLumpSum;

  for (let y = 0; y < yearsToRetire; y++) {
    const age = currentAge + y + 1;
    const year = calendarStartYear + y + 1;
    const startBal = accumBal;
    let yearGrowth = 0;

    for (let m = 0; m < 12; m++) {
      const interest = accumBal * accumMr;
      yearGrowth += interest;
      accumBal += interest + activePlan.monthlyNeeded;
    }

    // Anchor the retirement year exact end balance to targetPotNeeded
    const endBalNominal = (y === yearsToRetire - 1) ? targetPotNeeded : accumBal;
    const endBalReal = endBalNominal / Math.pow(1 + inflationRate, y + 1);

    schedule.push({
      age,
      year,
      phase: "Accumulation",
      startBalance: startBal,
      growthEarned: yearGrowth,
      annualDeposit: activePlan.monthlyNeeded * 12,
      grossWithdrawal: 0,
      ukTaxPaid: 0,
      netWithdrawal: 0,
      endBalanceNominal: endBalNominal,
      endBalanceReal: endBalReal,
      isInitial: false
    });
  }

  // Decumulation Phase: Retirement Age -> Life Expectancy Age
  let decumBal = targetPotNeeded;

  for (let y = 0; y < yearsInRetire; y++) {
    const age = retireAge + y + 1;
    const year = calendarStartYear + yearsToRetire + y + 1;
    const startBal = decumBal;
    const w = decumulationWithdrawals[y];

    // Withdrawal taken at start of year, remaining pot compounds
    const remaining = Math.max(0, startBal - w.gross);
    const yrGrowth = remaining * postGrowthRate;
    let endBalNominal = remaining + yrGrowth;

    if (y === yearsInRetire - 1) {
      endBalNominal = 0; // Final target horizon reached
    }

    decumBal = endBalNominal;
    const totalElapsedYears = yearsToRetire + y + 1;
    const endBalReal = endBalNominal / Math.pow(1 + inflationRate, totalElapsedYears);

    schedule.push({
      age,
      year,
      phase: "Retirement",
      startBalance: startBal,
      growthEarned: yrGrowth,
      annualDeposit: 0,
      grossWithdrawal: w.gross,
      ukTaxPaid: w.tax,
      netWithdrawal: w.net,
      endBalanceNominal: endBalNominal,
      endBalanceReal: endBalReal,
      isInitial: false
    });
  }

  cachedTargetSchedule = schedule;

  // ----------------------------------------------------
  // Render Lifetime Schedule Table Body
  // ----------------------------------------------------
  const tbody = document.getElementById("target-schedule-body");
  if (tbody) {
    tbody.innerHTML = schedule.filter(r => !r.isInitial).map(r => {
      const isRetire = r.phase === "Retirement";
      const isRetirePeak = r.age === retireAge;
      return `
        <tr class="hover:bg-slate-50 transition ${isRetirePeak ? 'bg-brand-50/70 font-bold border-y-2 border-brand-300' : (isRetire ? 'bg-emerald-50/20' : '')}">
          <td class="py-2.5 px-3 font-bold text-slate-900">${r.age} ${isRetirePeak ? '<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded bg-brand-600 text-white font-extrabold">Retire</span>' : ''}</td>
          <td class="py-2.5 px-3 text-slate-500 font-mono text-[11px]">${r.year}</td>
          <td class="py-2.5 px-3">
            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${isRetire ? 'bg-emerald-100 text-emerald-800' : 'bg-brand-100 text-brand-800'}">
              ${isRetire ? 'Drawdown' : 'Accumulation'}
            </span>
          </td>
          <td class="py-2.5 px-3 text-slate-700">£${Math.round(r.startBalance).toLocaleString()}</td>
          <td class="py-2.5 px-3 font-semibold text-emerald-600">+£${Math.round(r.growthEarned).toLocaleString()}</td>
          <td class="py-2.5 px-3 font-semibold ${r.annualDeposit > 0 ? 'text-brand-700 font-bold' : 'text-slate-400'}">${r.annualDeposit > 0 ? '£' + Math.round(r.annualDeposit).toLocaleString() : '-'}</td>
          <td class="py-2.5 px-3 font-semibold ${r.grossWithdrawal > 0 ? 'text-amber-700' : 'text-slate-400'}">${r.grossWithdrawal > 0 ? '£' + Math.round(r.grossWithdrawal).toLocaleString() : '-'}</td>
          <td class="py-2.5 px-3 font-bold ${r.netWithdrawal > 0 ? 'text-emerald-800 font-extrabold' : 'text-slate-400'}">${r.netWithdrawal > 0 ? '£' + Math.round(r.netWithdrawal).toLocaleString() : '-'}</td>
          <td class="py-2.5 px-3 font-extrabold ${isRetirePeak ? 'text-brand-900 text-sm' : 'text-slate-900'}">£${Math.round(r.endBalanceNominal).toLocaleString()}</td>
          <td class="py-2.5 px-3 font-extrabold text-emerald-900 bg-emerald-50/60">£${Math.round(r.endBalanceReal).toLocaleString()}</td>
        </tr>
      `;
    }).join("");
  }

  // ----------------------------------------------------
  // Render Lifetime Wealth Arc Chart
  // ----------------------------------------------------
  renderTargetLifetimeChart(schedule, retireAge);

  if (window.lucide) {
    lucide.createIcons();
  }
}

/**
 * Renders the Lifetime Wealth Arc Chart spanning Accumulation through Decumulation.
 */
function renderTargetLifetimeChart(schedule, retireAge) {
  const ctx = document.getElementById("targetLifetimeChart");
  if (!ctx) return;

  if (targetLifetimeChart) {
    targetLifetimeChart.destroy();
  }

  const labels = schedule.map(r => `Age ${r.age}`);

  // Split into Accumulation and Decumulation datasets for distinctive colors
  const accumData = schedule.map(r => {
    if (r.age <= retireAge) {
      return Math.round(r.endBalanceNominal);
    }
    return null;
  });

  const decumData = schedule.map(r => {
    if (r.age >= retireAge) {
      return Math.round(r.endBalanceNominal);
    }
    return null;
  });

  const realData = schedule.map(r => Math.round(r.endBalanceReal));

  targetLifetimeChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Accumulation Pot (Saving £)",
          data: accumData,
          borderColor: "#4f46e5",
          backgroundColor: "rgba(79, 70, 229, 0.10)",
          fill: "origin",
          tension: 0.25,
          borderWidth: 3,
          pointRadius: (ctx) => {
            const index = ctx.dataIndex;
            return schedule[index] && schedule[index].age === retireAge ? 6 : 2;
          },
          pointBackgroundColor: "#4f46e5",
          pointHoverRadius: 6
        },
        {
          label: "Retirement Pot (Spending £)",
          data: decumData,
          borderColor: "#059669",
          backgroundColor: "rgba(5, 150, 105, 0.10)",
          fill: "origin",
          tension: 0.25,
          borderWidth: 3,
          pointRadius: (ctx) => {
            const index = ctx.dataIndex;
            return schedule[index] && schedule[index].age === retireAge ? 6 : 2;
          },
          pointBackgroundColor: "#059669",
          pointHoverRadius: 6
        },
        {
          label: "Real Value in Today's World (£)",
          data: realData,
          borderColor: "#d97706",
          borderDash: [5, 4],
          borderWidth: 2,
          pointRadius: 1,
          pointHoverRadius: 4,
          fill: false,
          tension: 0.2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: {
          display: true,
          position: "top",
          labels: {
            font: { size: 11, weight: "bold" },
            color: "#334155",
            boxWidth: 14,
            usePointStyle: true
          }
        },
        tooltip: {
          backgroundColor: "#0f172a",
          padding: 12,
          callbacks: {
            title: (items) => {
              const r = schedule[items[0].dataIndex];
              return `Age ${r.age} (Year ${r.year}) - ${r.phase}`;
            },
            label: (ctx) => {
              if (ctx.raw === null || ctx.raw === undefined) return "";
              return ` ${ctx.dataset.label}: ${formatCurrency(ctx.raw)}`;
            },
            afterBody: (items) => {
              const r = schedule[items[0].dataIndex];
              if (!r || r.isInitial) return [];
              if (r.phase === "Accumulation") {
                return [
                  `Annual Savings: £${Math.round(r.annualDeposit).toLocaleString()} (£${Math.round(r.annualDeposit / 12).toLocaleString()}/mo)`,
                  `Yearly Growth: +£${Math.round(r.growthEarned).toLocaleString()}`
                ];
              } else {
                return [
                  `Net in Hand: £${Math.round(r.netWithdrawal).toLocaleString()}/yr`,
                  `Gross Withdrawal: £${Math.round(r.grossWithdrawal).toLocaleString()}/yr`,
                  `UK Tax Deducted: £${Math.round(r.ukTaxPaid).toLocaleString()}/yr`
                ];
              }
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { font: { size: 10 }, color: "#64748b", maxRotation: 45 }
        },
        y: {
          grid: { color: "#f1f5f9" },
          ticks: {
            font: { size: 10 },
            color: "#64748b",
            callback: (v) => v >= 1000000 ? `£${(v/1000000).toFixed(1)}M` : (v >= 1000 ? `£${(v/1000).toFixed(0)}k` : `£${v}`)
          }
        }
      }
    }
  });
}

/**
 * Exports the Target Retirement Accumulation & Decumulation Schedule as a CSV.
 */
function exportTargetScheduleCSV() {
  trackGAEvent("target_csv_exported");
  if (!cachedTargetSchedule || cachedTargetSchedule.length === 0) return;

  const incomeInput = document.getElementById("target-net-income");
  const retireAgeInput = document.getElementById("target-retire-age");
  const lifeExpInput = document.getElementById("target-life-expectancy");
  const curAgeInput = document.getElementById("target-current-age");
  const lumpInput = document.getElementById("target-current-lump");
  const postGrowthInput = document.getElementById("target-post-growth");

  let csv = "Dutta UK Funds Selection Advisor - How Much Money Do I Need to Retire? Schedule\n";
  csv += `Date Generated: ${new Date().toLocaleDateString('en-GB')}\n`;
  csv += `Desired Net Income: £${incomeInput ? incomeInput.value : ''} (${targetIncomeMode})\n`;
  csv += `Current Age: ${curAgeInput ? curAgeInput.value : ''}\n`;
  csv += `Target Retirement Age: ${retireAgeInput ? retireAgeInput.value : ''}\n`;
  csv += `Life Expectancy Age: ${lifeExpInput ? lifeExpInput.value : ''}\n`;
  csv += `Current Lump Sum Invested: £${lumpInput ? lumpInput.value : ''}\n`;
  csv += `Selected Accumulation Strategy: ${TARGET_RISK_SPECS[selectedTargetRisk].fullLabel}\n`;
  csv += `Post-Retirement Growth Rate: ${postGrowthInput ? postGrowthInput.value : ''}%\n`;
  csv += `Inflation Assumption: 3.0% per annum compound\n\n`;

  csv += "Age,Calendar Year,Phase,Start Balance (£),Growth Earned (£),Annual Deposit (£),Gross Withdrawal (£),UK Tax Paid (£),Net in Hand (£),End Balance Nominal (£),End Balance Real (Today's Money £)\n";

  cachedTargetSchedule.forEach(r => {
    csv += [
      r.age,
      r.year,
      r.phase,
      Math.round(r.startBalance),
      Math.round(r.growthEarned),
      Math.round(r.annualDeposit),
      Math.round(r.grossWithdrawal),
      Math.round(r.ukTaxPaid),
      Math.round(r.netWithdrawal),
      Math.round(r.endBalanceNominal),
      Math.round(r.endBalanceReal)
    ].join(",") + "\n";
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `Dutta_UK_Target_Retirement_Accumulation_Schedule.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Synchronizes inputs from the main advisor tab into the Target Retirement Planner.
 */
function syncAdvisorToTarget() {
  const inputs = getInputs();
  const curAgeInput = document.getElementById("target-current-age");
  const retireAgeInput = document.getElementById("target-retire-age");
  const lumpInput = document.getElementById("target-current-lump");

  if (curAgeInput) curAgeInput.value = inputs.currentAge;
  if (retireAgeInput) retireAgeInput.value = inputs.retirementAge;
  if (lumpInput) lumpInput.value = inputs.lumpSum;

  updateTargetRetirementPlanner();
}

// Expose globals for inline event handlers in HTML
window.setTargetIncomeMode = setTargetIncomeMode;
window.selectTargetRiskProfile = selectTargetRiskProfile;
window.exportTargetScheduleCSV = exportTargetScheduleCSV;
window.syncAdvisorToTarget = syncAdvisorToTarget;
window.updateTargetRetirementPlanner = updateTargetRetirementPlanner;

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
        if (activeTab === "drawdown") {
          updateDrawdownCalculator();
        } else if (activeTab === "target") {
          updateTargetRetirementPlanner();
        }
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

      activeCustomPortfolio = JSON.parse(JSON.stringify(STRATEGY_PRESETS[currentRisk].active));
      passiveCustomPortfolio = JSON.parse(JSON.stringify(STRATEGY_PRESETS[currentRisk].passive));

      updateAdvisor();
      if (activeTab === "drawdown") {
        updateDrawdownCalculator();
      } else if (activeTab === "target") {
        updateTargetRetirementPlanner();
      }
    });
  });

  const tabActive = document.getElementById("tab-active");
  const tabPassive = document.getElementById("tab-passive");
  const tabCompare = document.getElementById("tab-compare");
  const tabScreener = document.getElementById("tab-screener");
  const tabDrawdown = document.getElementById("tab-drawdown");
  const tabTarget = document.getElementById("tab-target");

  const secActive = document.getElementById("section-active");
  const secPassive = document.getElementById("section-passive");
  const secCompare = document.getElementById("section-compare");
  const secScreener = document.getElementById("section-screener");
  const secDrawdown = document.getElementById("section-drawdown");
  const secTarget = document.getElementById("section-target");
  const secChartsOverview = document.getElementById("section-charts-overview");
  const secInvestorProfile = document.getElementById("section-investor-profile");
  const secMetricsSummary = document.getElementById("section-metrics-summary");

  function saveAdvisorState() {
    try {
      const inputs = getInputs();
      localStorage.setItem("dutta_advisor_state", JSON.stringify({
        inputs,
        risk: currentRisk,
        activePortfolio: activeCustomPortfolio,
        passivePortfolio: passiveCustomPortfolio,
        timestamp: Date.now()
      }));
    } catch (e) {
      // localStorage may be unavailable in private browsing
    }
  }

  window.openOptionInNewTab = function(tab) {
    saveAdvisorState();
    const url = new URL(window.location.href);
    url.searchParams.set("tab", tab);
    window.open(url.toString(), "_blank");
  };

  function setTab(tab, forceSameWindow = false) {
    const toggleNewTab = document.getElementById("toggle-new-tab-mode");
    if (toggleNewTab && toggleNewTab.checked && !forceSameWindow && !window._isPopoutInstance) {
      openOptionInNewTab(tab);
      return;
    }

    activeTab = tab;
    trackGAEvent("tab_view", { tab_name: tab });

    // Update browser URL query without page reload
    try {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set("tab", tab);
      window.history.replaceState({ tab }, "", newUrl.toString());
    } catch (e) {}

    // Reset all tabs to inactive styling
    [tabActive, tabPassive, tabCompare, tabScreener, tabDrawdown, tabTarget].forEach(t => {
      if (t) {
        t.classList.remove("active");
        t.classList.remove("bg-white", "text-slate-900", "shadow-sm");
        t.classList.add("text-slate-600");
      }
    });

    // Hide all sections initially
    [secActive, secPassive, secCompare, secScreener, secDrawdown, secTarget].forEach(s => s && s.classList.add("hidden"));

    const activeBtn = {
      active: tabActive,
      passive: tabPassive,
      compare: tabCompare,
      screener: tabScreener,
      drawdown: tabDrawdown,
      target: tabTarget
    }[tab];

    if (activeBtn) {
      activeBtn.classList.add("active");
      activeBtn.classList.remove("text-slate-600");
    }

    // Isolate views cleanly so each option has its own clear presentation
    if (tab === "active") {
      secActive.classList.remove("hidden");
      if (secChartsOverview) secChartsOverview.classList.remove("hidden");
      if (secInvestorProfile) secInvestorProfile.classList.remove("hidden");
      if (secMetricsSummary) secMetricsSummary.classList.remove("hidden");
    } else if (tab === "passive") {
      secPassive.classList.remove("hidden");
      if (secChartsOverview) secChartsOverview.classList.remove("hidden");
      if (secInvestorProfile) secInvestorProfile.classList.remove("hidden");
      if (secMetricsSummary) secMetricsSummary.classList.remove("hidden");
    } else if (tab === "compare") {
      secCompare.classList.remove("hidden");
      if (secChartsOverview) secChartsOverview.classList.remove("hidden");
      if (secInvestorProfile) secInvestorProfile.classList.remove("hidden");
      if (secMetricsSummary) secMetricsSummary.classList.remove("hidden");
    } else if (tab === "screener") {
      secScreener.classList.remove("hidden");
      if (secChartsOverview) secChartsOverview.classList.add("hidden"); // Dedicated full-width screener
      if (secInvestorProfile) secInvestorProfile.classList.add("hidden");
      if (secMetricsSummary) secMetricsSummary.classList.add("hidden");
    } else if (tab === "drawdown") {
      secDrawdown.classList.remove("hidden");
      if (secChartsOverview) secChartsOverview.classList.add("hidden"); // Dedicated longevity simulator
      if (secInvestorProfile) secInvestorProfile.classList.add("hidden");
      if (secMetricsSummary) secMetricsSummary.classList.add("hidden");
      updateDrawdownCalculator();
    } else if (tab === "target") {
      if (secTarget) secTarget.classList.remove("hidden");
      if (secChartsOverview) secChartsOverview.classList.add("hidden"); // Dedicated target planner
      if (secInvestorProfile) secInvestorProfile.classList.add("hidden");
      if (secMetricsSummary) secMetricsSummary.classList.add("hidden");
      updateTargetRetirementPlanner();
    }

    const inputs = getInputs();
    const currentPortfolioList = tab === "passive" ? passiveCustomPortfolio : activeCustomPortfolio;
    updateDonutChart(currentPortfolioList, tab);
    updateFundFutureValueChart(currentPortfolioList, inputs);
    updateBenchmarkChart(currentPortfolioList);

    if (window.lucide) {
      lucide.createIcons();
    }
  }

  if (tabActive) tabActive.addEventListener("click", () => setTab("active"));
  if (tabPassive) tabPassive.addEventListener("click", () => setTab("passive"));
  if (tabCompare) tabCompare.addEventListener("click", () => setTab("compare"));
  if (tabScreener) tabScreener.addEventListener("click", () => setTab("screener"));
  if (tabDrawdown) tabDrawdown.addEventListener("click", () => setTab("drawdown"));
  if (tabTarget) tabTarget.addEventListener("click", () => setTab("target"));

  // Restore saved state from localStorage if available (e.g. when opened in a new tab)
  try {
    const savedStateStr = localStorage.getItem("dutta_advisor_state");
    if (savedStateStr) {
      const saved = JSON.parse(savedStateStr);
      if (saved.inputs) {
        if (saved.inputs.currentAge && document.getElementById("current-age")) document.getElementById("current-age").value = saved.inputs.currentAge;
        if (saved.inputs.retirementAge && document.getElementById("retirement-age")) document.getElementById("retirement-age").value = saved.inputs.retirementAge;
        if (saved.inputs.lumpSum && document.getElementById("lump-sum")) document.getElementById("lump-sum").value = saved.inputs.lumpSum;
        if (saved.inputs.monthlyAmount && document.getElementById("monthly-amount")) document.getElementById("monthly-amount").value = saved.inputs.monthlyAmount;
        if (saved.inputs.targetGrowth && document.getElementById("target-growth")) document.getElementById("target-growth").value = saved.inputs.targetGrowth;
      }
      if (saved.risk) {
        currentRisk = saved.risk;
        const targetRadio = document.querySelector(`input[name="risk-profile"][value="${currentRisk}"]`);
        if (targetRadio) {
          document.querySelectorAll('input[name="risk-profile"]').forEach(r => {
            r.checked = false;
            r.parentElement.classList.remove("active", "border-brand-600", "border-2", "bg-brand-50/50");
            r.parentElement.classList.add("border-slate-200", "bg-white");
          });
          targetRadio.checked = true;
          targetRadio.parentElement.classList.add("active", "border-brand-600", "border-2", "bg-brand-50/50");
          targetRadio.parentElement.classList.remove("border-slate-200", "bg-white");
        }
      }
      if (saved.activePortfolio) activeCustomPortfolio = saved.activePortfolio;
      if (saved.passivePortfolio) passiveCustomPortfolio = saved.passivePortfolio;
    }
  } catch (e) {}

  // Handle "Open in new browser tab" preference toggle
  const toggleNewTabMode = document.getElementById("toggle-new-tab-mode");
  if (toggleNewTabMode) {
    try {
      const savedPref = localStorage.getItem("dutta_new_tab_pref");
      if (savedPref === "true") {
        toggleNewTabMode.checked = true;
      }
      toggleNewTabMode.addEventListener("change", () => {
        localStorage.setItem("dutta_new_tab_pref", toggleNewTabMode.checked ? "true" : "false");
      });
    } catch (e) {}
  }

  const filterSectorEl = document.getElementById("screener-filter-sector");
  const filterHouseEl = document.getElementById("screener-filter-house");
  if (filterSectorEl && filterHouseEl) {
    const handleScreenerFilter = () => {
      renderTrustnetScreener(filterSectorEl.value, filterHouseEl.value);
    };
    filterSectorEl.addEventListener("change", handleScreenerFilter);
    filterHouseEl.addEventListener("change", handleScreenerFilter);
  }

  const drawdownInputIds = [
    "drawdown-fund-value",
    "drawdown-retire-age",
    "drawdown-net-monthly",
    "drawdown-fund-growth",
    "drawdown-tax-wrapper",
    "drawdown-inflation-rate",
    "drawdown-other-income"
  ];
  drawdownInputIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", () => {
        updateDrawdownCalculator();
        saveAdvisorState();
      });
      el.addEventListener("change", () => {
        updateDrawdownCalculator();
        saveAdvisorState();
      });
    }
  });

  const inflationAdjustEl = document.getElementById("drawdown-inflation-adjust");
  if (inflationAdjustEl) {
    inflationAdjustEl.addEventListener("change", updateDrawdownCalculator);
  }

  const btnSyncAdvisor = document.getElementById("btn-sync-advisor-portfolio");
  if (btnSyncAdvisor) {
    btnSyncAdvisor.addEventListener("click", syncAdvisorToDrawdown);
  }

  const btnExportDrawdown = document.getElementById("btn-export-drawdown-csv");
  if (btnExportDrawdown) {
    btnExportDrawdown.addEventListener("click", exportDrawdownCSV);
  }

  // Target Retirement & Savings Planner Event Listeners
  const targetInputIds = [
    "target-net-income",
    "target-retire-age",
    "target-life-expectancy",
    "target-post-growth",
    "target-tax-wrapper",
    "target-current-age",
    "target-current-lump"
  ];
  targetInputIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("input", () => {
        updateTargetRetirementPlanner();
      });
      el.addEventListener("change", () => {
        updateTargetRetirementPlanner();
      });
    }
  });

  const btnSyncTarget = document.getElementById("btn-sync-advisor-to-target");
  if (btnSyncTarget) {
    btnSyncTarget.addEventListener("click", syncAdvisorToTarget);
  }

  const btnExportTargetCsv = document.getElementById("btn-export-target-csv");
  if (btnExportTargetCsv) {
    btnExportTargetCsv.addEventListener("click", exportTargetScheduleCSV);
  }

  document.getElementById("btn-export-csv").addEventListener("click", exportCSV);
  document.getElementById("btn-print-report").addEventListener("click", () => window.print());

  updateAdvisor();
  updateDrawdownCalculator();
  updateTargetRetirementPlanner();

  // Check URL query parameters for deep-linking (e.g. ?tab=drawdown or ?tab=screener or ?tab=target)
  const urlParams = new URLSearchParams(window.location.search);
  const requestedTab = urlParams.get("tab") || window.location.hash.replace("#", "");
  if (requestedTab && ["active", "passive", "compare", "screener", "drawdown", "target"].includes(requestedTab)) {
    window._isPopoutInstance = true;
    setTab(requestedTab, true);
  } else {
    setTab("active", true);
  }
});
