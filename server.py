"""
UK Funds Selection Advisor - Web Server & REST API
Zero external dependencies required (runs on Python 3.8+ standard library).
"""

import http.server
import socketserver
import webbrowser
import json
import os
import sys
import urllib.parse

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

# UK Funds Reference Database
FUNDS_DATA = {
    "high": {
        "label": "High Risk (Growth / Aggressive)",
        "equity_split": "95% Equity / 5% Cash",
        "active": [
            {
                "name": "Fundsmith Equity Fund (Class I Acc)",
                "ticker": "GB00B41YBW71",
                "type": "Active",
                "sector": "Global Large-Cap Quality Equity",
                "allocation_pct": 40,
                "aum_billions": 22.8,
                "inception_year": 2010,
                "manager": "Terry Smith",
                "manager_tenure_years": 14,
                "cagr_15yr": 14.8,
                "benchmark": "MSCI World Index (£)",
                "benchmark_cagr_15yr": 11.5,
                "alpha": 3.3,
                "ocf_pct": 0.94
            },
            {
                "name": "Rathbone Global Opportunities Fund (Class S Acc)",
                "ticker": "GB00B7FQLN12",
                "type": "Active",
                "sector": "Global Large-Cap Growth Equity",
                "allocation_pct": 25,
                "aum_billions": 3.92,
                "inception_year": 2001,
                "manager": "James Thomson",
                "manager_tenure_years": 21,
                "cagr_15yr": 13.5,
                "benchmark": "FTSE World Index (£)",
                "benchmark_cagr_15yr": 11.2,
                "alpha": 2.3,
                "ocf_pct": 0.77
            },
            {
                "name": "Liontrust Special Situations Fund (Class I Acc)",
                "ticker": "GB00B57H4F11",
                "type": "Active",
                "sector": "UK All Companies",
                "allocation_pct": 20,
                "aum_billions": 3.41,
                "inception_year": 2005,
                "manager": "Anthony Cross & Julian Fosh",
                "manager_tenure_years": 19,
                "cagr_15yr": 9.8,
                "benchmark": "FTSE All-Share Index",
                "benchmark_cagr_15yr": 6.5,
                "alpha": 3.3,
                "ocf_pct": 0.81
            },
            {
                "name": "Stewart Investors Asia Pacific Leaders Fund",
                "ticker": "GB0033874768",
                "type": "Active",
                "sector": "Asia Pacific & Emerging Markets",
                "allocation_pct": 15,
                "aum_billions": 5.10,
                "inception_year": 2003,
                "manager": "David Gait & Sashi Reddy",
                "manager_tenure_years": 16,
                "cagr_15yr": 8.9,
                "benchmark": "MSCI AC Asia Pacific ex Japan",
                "benchmark_cagr_15yr": 6.8,
                "alpha": 2.1,
                "ocf_pct": 0.84
            }
        ],
        "passive": [
            {
                "name": "Vanguard FTSE All-World UCITS ETF (VWRP / VWRL)",
                "ticker": "VWRP",
                "type": "Passive",
                "sector": "Global Large/Mid-Cap Blend Equity",
                "allocation_pct": 45,
                "aum_billions": 19.5,
                "inception_year": 2012,
                "manager": "Vanguard Equity Index Group",
                "manager_tenure_years": 12,
                "cagr_15yr": 11.6,
                "benchmark": "FTSE All-World Index (£)",
                "benchmark_cagr_15yr": 11.64,
                "alpha": -0.04,
                "ocf_pct": 0.22
            },
            {
                "name": "iShares Core S&P 500 UCITS ETF (CSPX / CSP1)",
                "ticker": "CSPX",
                "type": "Passive",
                "sector": "US Large-Cap Equity",
                "allocation_pct": 30,
                "aum_billions": 62.0,
                "inception_year": 2010,
                "manager": "BlackRock Index Investment Team",
                "manager_tenure_years": 14,
                "cagr_15yr": 14.2,
                "benchmark": "S&P 500 Index (£)",
                "benchmark_cagr_15yr": 14.23,
                "alpha": -0.03,
                "ocf_pct": 0.07
            },
            {
                "name": "Vanguard FTSE UK All-Share Index Unit Trust",
                "ticker": "GB00B3X7QG63",
                "type": "Passive",
                "sector": "UK All Companies",
                "allocation_pct": 15,
                "aum_billions": 14.2,
                "inception_year": 2009,
                "manager": "Vanguard Equity Index Group",
                "manager_tenure_years": 15,
                "cagr_15yr": 6.7,
                "benchmark": "FTSE All-Share Index",
                "benchmark_cagr_15yr": 6.76,
                "alpha": -0.06,
                "ocf_pct": 0.06
            },
            {
                "name": "iShares Core MSCI Emerging Markets IMI ETF (EMIM)",
                "ticker": "EMIM",
                "type": "Passive",
                "sector": "Global Emerging Markets",
                "allocation_pct": 10,
                "aum_billions": 16.8,
                "inception_year": 2014,
                "manager": "BlackRock Index Investment Team",
                "manager_tenure_years": 10,
                "cagr_15yr": 6.2,
                "benchmark": "MSCI Emerging Markets IMI Index",
                "benchmark_cagr_15yr": 6.32,
                "alpha": -0.12,
                "ocf_pct": 0.18
            }
        ]
    },
    "medium": {
        "label": "Medium Risk (Balanced Core)",
        "equity_split": "60% Equity / 40% Bonds & Multi-Asset",
        "active": [
            {
                "name": "Fundsmith Equity Fund (Class I Acc)",
                "ticker": "GB00B41YBW71",
                "type": "Active",
                "sector": "Global Large-Cap Equity",
                "allocation_pct": 35,
                "aum_billions": 22.8,
                "inception_year": 2010,
                "manager": "Terry Smith",
                "manager_tenure_years": 14,
                "cagr_15yr": 14.8,
                "benchmark": "MSCI World Index (£)",
                "benchmark_cagr_15yr": 11.5,
                "alpha": 3.3,
                "ocf_pct": 0.94
            },
            {
                "name": "Royal London Sustainable Leaders Trust",
                "ticker": "GB00B06VR924",
                "type": "Active",
                "sector": "UK & Global Blend Equity",
                "allocation_pct": 25,
                "aum_billions": 4.12,
                "inception_year": 1990,
                "manager": "Mike Fox",
                "manager_tenure_years": 21,
                "cagr_15yr": 10.4,
                "benchmark": "FTSE All-Share Index",
                "benchmark_cagr_15yr": 6.5,
                "alpha": 3.9,
                "ocf_pct": 0.76
            },
            {
                "name": "Artemis Strategic Bond Fund (Class I Acc)",
                "ticker": "GB00B2PLJJ81",
                "type": "Active",
                "sector": "Sterling Strategic Bond",
                "allocation_pct": 25,
                "aum_billions": 1.64,
                "inception_year": 2010,
                "manager": "Juan Valenzuela & Rebecca Young",
                "manager_tenure_years": 14,
                "cagr_15yr": 4.5,
                "benchmark": "IA Sterling Strategic Bond Sector Avg",
                "benchmark_cagr_15yr": 3.2,
                "alpha": 1.3,
                "ocf_pct": 0.58
            },
            {
                "name": "Trojan Fund (Troy Asset Management - Class O)",
                "ticker": "GB0034243732",
                "type": "Active",
                "sector": "Multi-Asset Capital Preservation",
                "allocation_pct": 15,
                "aum_billions": 5.31,
                "inception_year": 2001,
                "manager": "Sebastian Lyon & Charlotte Yonge",
                "manager_tenure_years": 23,
                "cagr_15yr": 5.8,
                "benchmark": "UK CPI + 2%",
                "benchmark_cagr_15yr": 4.5,
                "alpha": 1.3,
                "ocf_pct": 0.86
            }
        ],
        "passive": [
            {
                "name": "Vanguard LifeStrategy 60% Equity Fund (Acc)",
                "ticker": "GB00B3TYHH97",
                "type": "Passive",
                "sector": "Multi-Asset Balanced (60% Equity / 40% Bonds)",
                "allocation_pct": 40,
                "aum_billions": 15.2,
                "inception_year": 2011,
                "manager": "Vanguard Multi-Asset Investment Team",
                "manager_tenure_years": 13,
                "cagr_15yr": 7.6,
                "benchmark": "Custom 60/40 Global Composite Benchmark",
                "benchmark_cagr_15yr": 7.65,
                "alpha": -0.05,
                "ocf_pct": 0.22
            },
            {
                "name": "HSBC FTSE All-World Index Fund (Class C Acc)",
                "ticker": "GB00BMJJJF91",
                "type": "Passive",
                "sector": "Global Large/Mid-Cap Equity",
                "allocation_pct": 30,
                "aum_billions": 5.84,
                "inception_year": 2014,
                "manager": "HSBC Global Asset Management Index Team",
                "manager_tenure_years": 15,
                "cagr_15yr": 11.5,
                "benchmark": "FTSE All-World Index (£)",
                "benchmark_cagr_15yr": 11.55,
                "alpha": -0.05,
                "ocf_pct": 0.13
            },
            {
                "name": "iShares Core Global Aggregate Bond ETF (AGBP - GBP Hedged)",
                "ticker": "AGBP",
                "type": "Passive",
                "sector": "Global Fixed Income (Multi-Sector)",
                "allocation_pct": 20,
                "aum_billions": 8.40,
                "inception_year": 2017,
                "manager": "BlackRock Fixed Income Index Team",
                "manager_tenure_years": 15,
                "cagr_15yr": 3.2,
                "benchmark": "Bloomberg Global Aggregate Index (GBP Hedged)",
                "benchmark_cagr_15yr": 3.28,
                "alpha": -0.08,
                "ocf_pct": 0.10
            },
            {
                "name": "Vanguard Global Short-Term Corporate Bond Index (GBP Hedged)",
                "ticker": "IE00BDFB7198",
                "type": "Passive",
                "sector": "Short-Duration Corporate Bonds",
                "allocation_pct": 10,
                "aum_billions": 4.10,
                "inception_year": 2014,
                "manager": "Vanguard Fixed Income Group",
                "manager_tenure_years": 15,
                "cagr_15yr": 2.8,
                "benchmark": "Bloomberg Global Corp 1-5Yr (GBP Hedged)",
                "benchmark_cagr_15yr": 2.86,
                "alpha": -0.06,
                "ocf_pct": 0.15
            }
        ]
    },
    "low": {
        "label": "Low Risk (Conservative Capital Preservation)",
        "equity_split": "20% Equity / 80% Bonds & Money Market",
        "active": [
            {
                "name": "Ruffer Total Return Fund (Class I Acc)",
                "ticker": "GB0006000134",
                "type": "Active",
                "sector": "Multi-Asset Capital Preservation",
                "allocation_pct": 30,
                "aum_billions": 3.20,
                "inception_year": 2000,
                "manager": "Duncan MacInnes & Jasmine Yeo",
                "manager_tenure_years": 12,
                "cagr_15yr": 5.1,
                "benchmark": "Bank of England Base Rate / Cash",
                "benchmark_cagr_15yr": 2.4,
                "alpha": 2.7,
                "ocf_pct": 1.09
            },
            {
                "name": "Royal London Short Duration High Yield Bond Fund",
                "ticker": "GB00B7V0B566",
                "type": "Active",
                "sector": "Short Duration Credit / Income",
                "allocation_pct": 30,
                "aum_billions": 1.85,
                "inception_year": 2013,
                "manager": "Azhar Hussain",
                "manager_tenure_years": 11,
                "cagr_15yr": 4.6,
                "benchmark": "SONIA + 1.5%",
                "benchmark_cagr_15yr": 3.8,
                "alpha": 0.8,
                "ocf_pct": 0.55
            },
            {
                "name": "Lindsell Train UK Equity Fund (Class D Acc)",
                "ticker": "GB00B18B9W76",
                "type": "Active",
                "sector": "UK All Companies (Defensive Quality)",
                "allocation_pct": 20,
                "aum_billions": 3.72,
                "inception_year": 2006,
                "manager": "Nick Train & Michael Lindsell",
                "manager_tenure_years": 18,
                "cagr_15yr": 8.4,
                "benchmark": "FTSE All-Share Index",
                "benchmark_cagr_15yr": 6.5,
                "alpha": 1.9,
                "ocf_pct": 0.65
            },
            {
                "name": "Legal & General Short Dated Sterling Corporate Bond Fund",
                "ticker": "GB00B440Q353",
                "type": "Active",
                "sector": "Sterling Corporate Bond",
                "allocation_pct": 20,
                "aum_billions": 2.15,
                "inception_year": 2011,
                "manager": "Matthew Rees",
                "manager_tenure_years": 10,
                "cagr_15yr": 3.1,
                "benchmark": "Markit iBoxx Sterling Corp 1-5 Year",
                "benchmark_cagr_15yr": 2.7,
                "alpha": 0.4,
                "ocf_pct": 0.45
            }
        ],
        "passive": [
            {
                "name": "Vanguard LifeStrategy 20% Equity Fund (Acc)",
                "ticker": "GB00B4R2F342",
                "type": "Passive",
                "sector": "Multi-Asset Conservative (20% Equity / 80% Bonds)",
                "allocation_pct": 40,
                "aum_billions": 3.85,
                "inception_year": 2011,
                "manager": "Vanguard Multi-Asset Investment Team",
                "manager_tenure_years": 13,
                "cagr_15yr": 4.2,
                "benchmark": "Custom 20/80 Global Composite Benchmark",
                "benchmark_cagr_15yr": 4.25,
                "alpha": -0.05,
                "ocf_pct": 0.22
            },
            {
                "name": "iShares UK Gilts 0-5yr UCITS ETF (IGLS)",
                "ticker": "IGLS",
                "type": "Passive",
                "sector": "UK Government Bonds (Gilts)",
                "allocation_pct": 25,
                "aum_billions": 2.34,
                "inception_year": 2009,
                "manager": "BlackRock Fixed Income Index Team",
                "manager_tenure_years": 15,
                "cagr_15yr": 2.4,
                "benchmark": "FTSE Actuaries UK Gilts 0-5 Years Index",
                "benchmark_cagr_15yr": 2.44,
                "alpha": -0.04,
                "ocf_pct": 0.07
            },
            {
                "name": "Royal London Short Term Money Market Fund (Class Y Acc)",
                "ticker": "GB00B8XYYQ86",
                "type": "Passive",
                "sector": "Sterling Money Market / Cash",
                "allocation_pct": 20,
                "aum_billions": 6.54,
                "inception_year": 2002,
                "manager": "Craig Johnston & Tony Cole",
                "manager_tenure_years": 16,
                "cagr_15yr": 2.1,
                "benchmark": "SONIA (Sterling Overnight Index Average)",
                "benchmark_cagr_15yr": 2.05,
                "alpha": 0.05,
                "ocf_pct": 0.10
            },
            {
                "name": "Vanguard Global Aggregate Bond ETF (VAGP - GBP Hedged)",
                "ticker": "VAGP",
                "type": "Passive",
                "sector": "Global High-Grade Sovereign & Corporate Bonds",
                "allocation_pct": 15,
                "aum_billions": 5.42,
                "inception_year": 2019,
                "manager": "Vanguard Fixed Income Index Team",
                "manager_tenure_years": 15,
                "cagr_15yr": 3.1,
                "benchmark": "Bloomberg Global Aggregate Float (GBP Hedged)",
                "benchmark_cagr_15yr": 3.16,
                "alpha": -0.06,
                "ocf_pct": 0.10
            }
        ]
    }
}

class AdvisorRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/api/funds":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps(FUNDS_DATA, indent=2).encode("utf-8"))
            return
        
        # Standard static file serving
        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/api/calculate":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length)
            try:
                data = json.loads(body.decode("utf-8"))
                current_age = int(data.get("current_age", 35))
                retirement_age = int(data.get("retirement_age", 65))
                lump_sum = float(data.get("lump_sum", 20000))
                monthly_amount = float(data.get("monthly_amount", 500))
                risk = data.get("risk", "medium").lower()
                target_growth = float(data.get("target_growth", 7.5))

                horizon = max(1, retirement_age - current_age)
                risk_data = FUNDS_DATA.get(risk, FUNDS_DATA["medium"])

                def future_val(p, pmt, rate, years):
                    r = rate / 100.0
                    lump_res = p * ((1.0 + r) ** years)
                    if pmt > 0 and r > 0:
                        mr = r / 12.0
                        monthly_res = pmt * (((1.0 + mr) ** (years * 12) - 1.0) / mr)
                    else:
                        monthly_res = pmt * 12 * years
                    return round(lump_res + monthly_res)

                def weighted_return(funds):
                    return sum(f["cagr_15yr"] * (f["allocation_pct"] / 100.0) for f in funds)

                active_rate = weighted_return(risk_data["active"])
                passive_rate = weighted_return(risk_data["passive"])

                total_principal = lump_sum + (monthly_amount * 12 * horizon)
                active_val = future_val(lump_sum, monthly_amount, active_rate, horizon)
                passive_val = future_val(lump_sum, monthly_amount, passive_rate, horizon)
                target_val = future_val(lump_sum, monthly_amount, target_growth, horizon)

                response = {
                    "horizon_years": horizon,
                    "total_principal": total_principal,
                    "active_projected_value": active_val,
                    "passive_projected_value": passive_val,
                    "target_projected_value": target_val,
                    "active_weighted_cagr": round(active_rate, 2),
                    "passive_weighted_cagr": round(passive_rate, 2),
                    "net_difference": active_val - passive_val
                }

                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps(response).encode("utf-8"))
                return
            except Exception as e:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode("utf-8"))
                return

        return super().do_GET()

def start_server():
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), AdvisorRequestHandler) as httpd:
        url = f"http://localhost:{PORT}"
        print(f"============================================================")
        print(f" UK Funds Selection Advisor Server Running")
        print(f" Local URL: {url}")
        print(f" Press Ctrl+C to stop the server.")
        print(f"============================================================")
        try:
            webbrowser.open(url)
        except Exception:
            pass
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server gracefully...")

if __name__ == "__main__":
    start_server()
