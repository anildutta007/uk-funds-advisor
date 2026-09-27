"""
Dutta UK Funds Selection Advisor - Web Server & REST API
Multi-House Trustnet.com (FE fundinfo) Top-Performing Funds Universe
Featuring 15-Year (+/-) Annual Calendar Return Track Records
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

TRUSTNET_MASTER_FUNDS = [   {   'alpha': 1.7,
        'aum_billions': 5.24,
        'benchmark': 'MSCI AC World Information Technology Index',
        'cagr_15yr': 21.5,
        'citicode': 'B4YZ',
        'fe_crowns': 5,
        'fe_risk_score': 125,
        'house': 'Fidelity International',
        'ia_sector': 'IA Technology & Technology Innovations',
        'id': 'fidelity-global-tech',
        'inception_year': 2005,
        'manager': 'Hyunho Sohn',
        'manager_tenure_years': 11.5,
        'name': 'Fidelity Global Technology Fund (Class W Acc)',
        'ocf_pct': 1.04,
        'ticker': 'GB00B4YZN801',
        'trustnet_url': 'https://www.trustnet.com/factsheets/O/b4yz/fidelity-global-technology-fund',
        'type': 'Active',
        'yearly_returns': [   {'return_pct': 2.1, 'year': '2011'},
                              {'return_pct': 14.6, 'year': '2012'},
                              {'return_pct': 27.8, 'year': '2013'},
                              {'return_pct': 24.5, 'year': '2014'},
                              {'return_pct': 18.2, 'year': '2015'},
                              {'return_pct': 34.1, 'year': '2016'},
                              {'return_pct': 28.4, 'year': '2017'},
                              {'return_pct': 4.8, 'year': '2018'},
                              {'return_pct': 41.2, 'year': '2019'},
                              {'return_pct': 43.5, 'year': '2020'},
                              {'return_pct': 26.8, 'year': '2021'},
                              {'return_pct': -18.2, 'year': '2022'},
                              {'return_pct': 38.5, 'year': '2023'},
                              {'return_pct': 28.9, 'year': '2024'},
                              {'return_pct': 22.4, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 18.4, 'year': '2026 YTD'}],
        'ytd_return_2026': 18.4},
    {   'alpha': -0.05,
        'aum_billions': 3.85,
        'benchmark': 'FTSE World-Technology Index (£)',
        'cagr_15yr': 20.8,
        'citicode': 'B0CN',
        'fe_crowns': 0,
        'fe_risk_score': 128,
        'house': 'Legal & General (LGIM)',
        'ia_sector': 'IA Technology & Technology Innovations',
        'id': 'lgim-tech-index',
        'inception_year': 2000,
        'manager': 'LGIM Index Team',
        'manager_tenure_years': 15,
        'name': 'Legal & General Global Technology Index Trust',
        'ocf_pct': 0.32,
        'ticker': 'GB00B0CNH163',
        'trustnet_url': 'https://www.trustnet.com/factsheets/O/b0cn/legal--general-global-technology-index-trust',
        'type': 'Passive',
        'yearly_returns': [   {'return_pct': 2.8, 'year': '2011'},
                              {'return_pct': 13.9, 'year': '2012'},
                              {'return_pct': 26.4, 'year': '2013'},
                              {'return_pct': 23.8, 'year': '2014'},
                              {'return_pct': 17.5, 'year': '2015'},
                              {'return_pct': 33.2, 'year': '2016'},
                              {'return_pct': 27.1, 'year': '2017'},
                              {'return_pct': 3.9, 'year': '2018'},
                              {'return_pct': 39.8, 'year': '2019'},
                              {'return_pct': 41.9, 'year': '2020'},
                              {'return_pct': 25.4, 'year': '2021'},
                              {'return_pct': -19.5, 'year': '2022'},
                              {'return_pct': 37.2, 'year': '2023'},
                              {'return_pct': 27.8, 'year': '2024'},
                              {'return_pct': 21.6, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 17.8, 'year': '2026 YTD'}],
        'ytd_return_2026': 17.8},
    {   'alpha': 0.3,
        'aum_billions': 2.85,
        'benchmark': 'S&P 500 Index (£)',
        'cagr_15yr': 14.5,
        'citicode': '0585',
        'fe_crowns': 4,
        'fe_risk_score': 145,
        'house': 'Baillie Gifford',
        'ia_sector': 'IA North America',
        'id': 'baillie-gifford-american',
        'inception_year': 1997,
        'manager': 'Dave Bujnowski, Tom Slater & Gary Robinson',
        'manager_tenure_years': 10,
        'name': 'Baillie Gifford American Fund (Class B Acc)',
        'ocf_pct': 0.51,
        'ticker': 'GB0005852504',
        'trustnet_url': 'https://www.trustnet.com/factsheets/O/0585/baillie-gifford-american-fund',
        'type': 'Active',
        'yearly_returns': [   {'return_pct': -1.2, 'year': '2011'},
                              {'return_pct': 16.2, 'year': '2012'},
                              {'return_pct': 34.8, 'year': '2013'},
                              {'return_pct': 18.4, 'year': '2014'},
                              {'return_pct': 9.2, 'year': '2015'},
                              {'return_pct': 21.4, 'year': '2016'},
                              {'return_pct': 41.8, 'year': '2017'},
                              {'return_pct': 6.8, 'year': '2018'},
                              {'return_pct': 31.5, 'year': '2019'},
                              {'return_pct': 121.8, 'year': '2020'},
                              {'return_pct': -2.8, 'year': '2021'},
                              {'return_pct': -52.4, 'year': '2022'},
                              {'return_pct': 39.8, 'year': '2023'},
                              {'return_pct': 26.2, 'year': '2024'},
                              {'return_pct': 18.4, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 14.2, 'year': '2026 YTD'}],
        'ytd_return_2026': 14.2},
    {   'alpha': 2.3,
        'aum_billions': 2.45,
        'benchmark': 'MSCI World Index (£)',
        'cagr_15yr': 13.8,
        'citicode': 'EDR1',
        'fe_crowns': 5,
        'fe_risk_score': 108,
        'house': 'JPMorgan Asset Management',
        'ia_sector': 'IA Global',
        'id': 'jpm-global-unconstrained',
        'inception_year': 2008,
        'manager': 'Rajesh Tanna & Sophie Huynh',
        'manager_tenure_years': 9,
        'name': 'JPMorgan Global Unconstrained Equity Fund',
        'ocf_pct': 0.8,
        'ticker': 'GB00B2356W72',
        'trustnet_url': 'https://www.trustnet.com/factsheets/O/edr1/jpm-global-unconstrained-equity-fund',
        'type': 'Active',
        'yearly_returns': [   {'return_pct': -4.8, 'year': '2011'},
                              {'return_pct': 16.2, 'year': '2012'},
                              {'return_pct': 24.6, 'year': '2013'},
                              {'return_pct': 12.8, 'year': '2014'},
                              {'return_pct': 8.4, 'year': '2015'},
                              {'return_pct': 25.2, 'year': '2016'},
                              {'return_pct': 21.8, 'year': '2017'},
                              {'return_pct': -4.2, 'year': '2018'},
                              {'return_pct': 27.4, 'year': '2019'},
                              {'return_pct': 23.8, 'year': '2020'},
                              {'return_pct': 20.4, 'year': '2021'},
                              {'return_pct': -16.2, 'year': '2022'},
                              {'return_pct': 18.4, 'year': '2023'},
                              {'return_pct': 19.6, 'year': '2024'},
                              {'return_pct': 15.2, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 12.8, 'year': '2026 YTD'}],
        'ytd_return_2026': 12.8},
    {   'alpha': 3.3,
        'aum_billions': 22.81,
        'benchmark': 'MSCI World Index (£)',
        'cagr_15yr': 14.8,
        'citicode': 'B41Y',
        'fe_crowns': 5,
        'fe_risk_score': 102,
        'house': 'Fundsmith LLP',
        'ia_sector': 'IA Global',
        'id': 'fundsmith-equity',
        'inception_year': 2010,
        'manager': 'Terry Smith',
        'manager_tenure_years': 14.5,
        'name': 'Fundsmith Equity Fund (Class I Acc)',
        'ocf_pct': 0.94,
        'ticker': 'GB00B41YBW71',
        'trustnet_url': 'https://www.trustnet.com/factsheets/O/b41y/fundsmith-equity-fund',
        'type': 'Active',
        'yearly_returns': [   {'return_pct': 8.4, 'year': '2011'},
                              {'return_pct': 12.5, 'year': '2012'},
                              {'return_pct': 25.3, 'year': '2013'},
                              {'return_pct': 23.3, 'year': '2014'},
                              {'return_pct': 15.7, 'year': '2015'},
                              {'return_pct': 28.2, 'year': '2016'},
                              {'return_pct': 22, 'year': '2017'},
                              {'return_pct': 2.2, 'year': '2018'},
                              {'return_pct': 25.6, 'year': '2019'},
                              {'return_pct': 18.3, 'year': '2020'},
                              {'return_pct': 22.1, 'year': '2021'},
                              {'return_pct': -13.8, 'year': '2022'},
                              {'return_pct': 12.4, 'year': '2023'},
                              {'return_pct': 15.1, 'year': '2024'},
                              {'return_pct': 13.8, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 10.4, 'year': '2026 YTD'}],
        'ytd_return_2026': 10.4},
    {   'alpha': 2.3,
        'aum_billions': 3.07,
        'benchmark': 'FTSE World Index (£)',
        'cagr_15yr': 13.5,
        'citicode': 'B7FQ',
        'fe_crowns': 5,
        'fe_risk_score': 110,
        'house': 'Rathbones',
        'ia_sector': 'IA Global',
        'id': 'rathbone-global-opps',
        'inception_year': 2001,
        'manager': 'James Thomson & Sammy Dow',
        'manager_tenure_years': 21,
        'name': 'Rathbone Global Opportunities Fund (Class S Acc)',
        'ocf_pct': 0.77,
        'ticker': 'GB00B7FQLN12',
        'trustnet_url': 'https://www.trustnet.com/factsheets/o/b7fq/rathbone-global-opportunities-fund',
        'type': 'Active',
        'yearly_returns': [   {'return_pct': -6.2, 'year': '2011'},
                              {'return_pct': 15.8, 'year': '2012'},
                              {'return_pct': 29.2, 'year': '2013'},
                              {'return_pct': 13.4, 'year': '2014'},
                              {'return_pct': 11.8, 'year': '2015'},
                              {'return_pct': 24.2, 'year': '2016'},
                              {'return_pct': 24.8, 'year': '2017'},
                              {'return_pct': 0.6, 'year': '2018'},
                              {'return_pct': 28.4, 'year': '2019'},
                              {'return_pct': 31.2, 'year': '2020'},
                              {'return_pct': 17.2, 'year': '2021'},
                              {'return_pct': -23.4, 'year': '2022'},
                              {'return_pct': 19.8, 'year': '2023'},
                              {'return_pct': 18.4, 'year': '2024'},
                              {'return_pct': 14.6, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 12.1, 'year': '2026 YTD'}],
        'ytd_return_2026': 12.1},
    {   'alpha': 1.4,
        'aum_billions': 4.52,
        'benchmark': 'MSCI World Index (£)',
        'cagr_15yr': 12.9,
        'citicode': 'B644',
        'fe_crowns': 4,
        'fe_risk_score': 94,
        'house': 'Lindsell Train',
        'ia_sector': 'IA Global',
        'id': 'lindsell-train-global',
        'inception_year': 2011,
        'manager': 'Michael Lindsell & Nick Train',
        'manager_tenure_years': 13,
        'name': 'Lindsell Train Global Equity Fund (Class B Acc)',
        'ocf_pct': 0.65,
        'ticker': 'IE00B644PG05',
        'trustnet_url': 'https://www.trustnet.com/factsheets/O/b644/lindsell-train-global-equity-fund',
        'type': 'Active',
        'yearly_returns': [   {'return_pct': 5.8, 'year': '2011'},
                              {'return_pct': 14.2, 'year': '2012'},
                              {'return_pct': 22.4, 'year': '2013'},
                              {'return_pct': 15.8, 'year': '2014'},
                              {'return_pct': 13.6, 'year': '2015'},
                              {'return_pct': 24.8, 'year': '2016'},
                              {'return_pct': 19.2, 'year': '2017'},
                              {'return_pct': 8.4, 'year': '2018'},
                              {'return_pct': 22.4, 'year': '2019'},
                              {'return_pct': 11.2, 'year': '2020'},
                              {'return_pct': 14.8, 'year': '2021'},
                              {'return_pct': -8.4, 'year': '2022'},
                              {'return_pct': 9.8, 'year': '2023'},
                              {'return_pct': 12.4, 'year': '2024'},
                              {'return_pct': 10.2, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 8.9, 'year': '2026 YTD'}],
        'ytd_return_2026': 8.9},
    {   'alpha': 5.7,
        'aum_billions': 1.2,
        'benchmark': 'FTSE All-Share Index',
        'cagr_15yr': 12.2,
        'citicode': '3297',
        'fe_crowns': 5,
        'fe_risk_score': 104,
        'house': 'Slater Investments',
        'ia_sector': 'IA UK All Companies',
        'id': 'slater-growth',
        'inception_year': 2005,
        'manager': 'Mark Slater',
        'manager_tenure_years': 19,
        'name': 'Slater Growth Fund (Class A Acc)',
        'ocf_pct': 0.8,
        'ticker': 'GB0032978388',
        'trustnet_url': 'https://www.trustnet.com/factsheets/O/3297/slater-growth-fund',
        'type': 'Active',
        'yearly_returns': [   {'return_pct': -4.2, 'year': '2011'},
                              {'return_pct': 23.8, 'year': '2012'},
                              {'return_pct': 39.2, 'year': '2013'},
                              {'return_pct': 2.1, 'year': '2014'},
                              {'return_pct': 14.5, 'year': '2015'},
                              {'return_pct': 18.4, 'year': '2016'},
                              {'return_pct': 26.1, 'year': '2017'},
                              {'return_pct': -7.4, 'year': '2018'},
                              {'return_pct': 28.7, 'year': '2019'},
                              {'return_pct': 7.8, 'year': '2020'},
                              {'return_pct': 21.6, 'year': '2021'},
                              {'return_pct': -16.4, 'year': '2022'},
                              {'return_pct': 14.1, 'year': '2023'},
                              {'return_pct': 17.5, 'year': '2024'},
                              {'return_pct': 12.8, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 11.2, 'year': '2026 YTD'}],
        'ytd_return_2026': 11.2},
    {   'alpha': 3.3,
        'aum_billions': 3.41,
        'benchmark': 'FTSE All-Share Index',
        'cagr_15yr': 9.8,
        'citicode': 'B57H',
        'fe_crowns': 4,
        'fe_risk_score': 95,
        'house': 'Liontrust',
        'ia_sector': 'IA UK All Companies',
        'id': 'liontrust-spec-sit',
        'inception_year': 2005,
        'manager': 'Anthony Cross & Julian Fosh',
        'manager_tenure_years': 19,
        'name': 'Liontrust Special Situations Fund (Class I Acc)',
        'ocf_pct': 0.81,
        'ticker': 'GB00B57H4F11',
        'trustnet_url': 'https://www.trustnet.com/factsheets/o/b57h/liontrust-special-situations-fund',
        'type': 'Active',
        'yearly_returns': [   {'return_pct': -2.8, 'year': '2011'},
                              {'return_pct': 18.2, 'year': '2012'},
                              {'return_pct': 28.4, 'year': '2013'},
                              {'return_pct': 3.2, 'year': '2014'},
                              {'return_pct': 12.4, 'year': '2015'},
                              {'return_pct': 15.8, 'year': '2016'},
                              {'return_pct': 18.2, 'year': '2017'},
                              {'return_pct': -7.2, 'year': '2018'},
                              {'return_pct': 23.4, 'year': '2019'},
                              {'return_pct': -4.8, 'year': '2020'},
                              {'return_pct': 19.6, 'year': '2021'},
                              {'return_pct': -11.4, 'year': '2022'},
                              {'return_pct': 7.8, 'year': '2023'},
                              {'return_pct': 11.2, 'year': '2024'},
                              {'return_pct': 9.4, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 8.4, 'year': '2026 YTD'}],
        'ytd_return_2026': 8.4},
    {   'alpha': 3.9,
        'aum_billions': 4.12,
        'benchmark': 'FTSE All-Share Index',
        'cagr_15yr': 10.4,
        'citicode': 'B06V',
        'fe_crowns': 4,
        'fe_risk_score': 96,
        'house': 'Royal London Asset Management',
        'ia_sector': 'IA UK All Companies',
        'id': 'royal-london-sustainable-leaders',
        'inception_year': 1990,
        'manager': 'Mike Fox & George Crowdy',
        'manager_tenure_years': 21,
        'name': 'Royal London Sustainable Leaders Trust',
        'ocf_pct': 0.76,
        'ticker': 'GB00B06VR924',
        'trustnet_url': 'https://www.trustnet.com/factsheets/o/b06v/royal-london-sustainable-leaders-trust',
        'type': 'Active',
        'yearly_returns': [   {'return_pct': -3.4, 'year': '2011'},
                              {'return_pct': 19.1, 'year': '2012'},
                              {'return_pct': 26.8, 'year': '2013'},
                              {'return_pct': 4.6, 'year': '2014'},
                              {'return_pct': 11.2, 'year': '2015'},
                              {'return_pct': 17.4, 'year': '2016'},
                              {'return_pct': 18.8, 'year': '2017'},
                              {'return_pct': -4.2, 'year': '2018'},
                              {'return_pct': 26.2, 'year': '2019'},
                              {'return_pct': 11.8, 'year': '2020'},
                              {'return_pct': 20.2, 'year': '2021'},
                              {'return_pct': -18.6, 'year': '2022'},
                              {'return_pct': 13.4, 'year': '2023'},
                              {'return_pct': 14.8, 'year': '2024'},
                              {'return_pct': 11.2, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 9.1, 'year': '2026 YTD'}],
        'ytd_return_2026': 9.1},
    {   'alpha': 0.04,
        'aum_billions': 4.8,
        'benchmark': 'FTSE All-Share Index',
        'cagr_15yr': 6.8,
        'citicode': 'BJS8',
        'fe_crowns': 0,
        'fe_risk_score': 98,
        'house': 'Fidelity International',
        'ia_sector': 'IA UK All Companies',
        'id': 'fidelity-index-uk',
        'inception_year': 2012,
        'manager': 'Fidelity Index Team',
        'manager_tenure_years': 15,
        'name': 'Fidelity Index UK Fund (Class P Acc)',
        'ocf_pct': 0.06,
        'ticker': 'GB00BJS8SF03',
        'trustnet_url': 'https://www.trustnet.com/factsheets/O/bjs8/fidelity-index-uk-fund',
        'type': 'Passive',
        'yearly_returns': [   {'return_pct': 12.3, 'year': '2012'},
                              {'return_pct': 20.8, 'year': '2013'},
                              {'return_pct': 1.2, 'year': '2014'},
                              {'return_pct': 1, 'year': '2015'},
                              {'return_pct': 16.8, 'year': '2016'},
                              {'return_pct': 13.1, 'year': '2017'},
                              {'return_pct': -9.5, 'year': '2018'},
                              {'return_pct': 19.2, 'year': '2019'},
                              {'return_pct': -9.8, 'year': '2020'},
                              {'return_pct': 18.3, 'year': '2021'},
                              {'return_pct': 0.3, 'year': '2022'},
                              {'return_pct': 7.9, 'year': '2023'},
                              {'return_pct': 9.8, 'year': '2024'},
                              {'return_pct': 8.4, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 8.1, 'year': '2026 YTD'}],
        'ytd_return_2026': 8.1},
    {   'alpha': 3.4,
        'aum_billions': 3.4,
        'benchmark': 'FTSE Developed Europe ex UK Index (£)',
        'cagr_15yr': 11.8,
        'citicode': 'B4W9',
        'fe_crowns': 5,
        'fe_risk_score': 106,
        'house': 'BlackRock',
        'ia_sector': 'IA Europe Excluding UK',
        'id': 'blackrock-european-dynamic',
        'inception_year': 2002,
        'manager': 'Giles Rothbarth',
        'manager_tenure_years': 10,
        'name': 'BlackRock European Dynamic Fund (Class D Acc)',
        'ocf_pct': 0.91,
        'ticker': 'GB00B4W9V301',
        'trustnet_url': 'https://www.trustnet.com/factsheets/O/b4w9/blackrock-european-dynamic-fund',
        'type': 'Active',
        'yearly_returns': [   {'return_pct': -11.2, 'year': '2011'},
                              {'return_pct': 19.4, 'year': '2012'},
                              {'return_pct': 25.8, 'year': '2013'},
                              {'return_pct': 2.8, 'year': '2014'},
                              {'return_pct': 14.2, 'year': '2015'},
                              {'return_pct': 18.2, 'year': '2016'},
                              {'return_pct': 19.4, 'year': '2017'},
                              {'return_pct': -8.6, 'year': '2018'},
                              {'return_pct': 26.8, 'year': '2019'},
                              {'return_pct': 14.2, 'year': '2020'},
                              {'return_pct': 24.8, 'year': '2021'},
                              {'return_pct': -12.4, 'year': '2022'},
                              {'return_pct': 17.2, 'year': '2023'},
                              {'return_pct': 16.4, 'year': '2024'},
                              {'return_pct': 12.8, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 9.8, 'year': '2026 YTD'}],
        'ytd_return_2026': 9.8},
    {   'alpha': 2.6,
        'aum_billions': 1.85,
        'benchmark': 'MSCI AC Asia Pacific ex Japan',
        'cagr_15yr': 9.4,
        'citicode': 'B2P7',
        'fe_crowns': 4,
        'fe_risk_score': 98,
        'house': 'Schroders',
        'ia_sector': 'IA Asia Pacific Excluding Japan',
        'id': 'schroder-asian-alpha',
        'inception_year': 2007,
        'manager': 'Richard Sennitt & Abbas Barkhordar',
        'manager_tenure_years': 15,
        'name': 'Schroder Asian Alpha Plus Fund (Class Z Acc)',
        'ocf_pct': 0.94,
        'ticker': 'GB00B551CL40',
        'trustnet_url': 'https://www.trustnet.com/factsheets/O/b2p7/schroder-asian-alpha-plus-fund',
        'type': 'Active',
        'yearly_returns': [   {'return_pct': -15.4, 'year': '2011'},
                              {'return_pct': 18.2, 'year': '2012'},
                              {'return_pct': 5.4, 'year': '2013'},
                              {'return_pct': 12.8, 'year': '2014'},
                              {'return_pct': -4.2, 'year': '2015'},
                              {'return_pct': 28.4, 'year': '2016'},
                              {'return_pct': 29.2, 'year': '2017'},
                              {'return_pct': -9.8, 'year': '2018'},
                              {'return_pct': 18.4, 'year': '2019'},
                              {'return_pct': 24.8, 'year': '2020'},
                              {'return_pct': -1.2, 'year': '2021'},
                              {'return_pct': -11.8, 'year': '2022'},
                              {'return_pct': 6.4, 'year': '2023'},
                              {'return_pct': 14.2, 'year': '2024'},
                              {'return_pct': 11.6, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 8.4, 'year': '2026 YTD'}],
        'ytd_return_2026': 8.4},
    {   'alpha': -0.03,
        'aum_billions': 62,
        'benchmark': 'S&P 500 Index (£)',
        'cagr_15yr': 14.2,
        'citicode': 'IUSA',
        'fe_crowns': 0,
        'fe_risk_score': 112,
        'house': 'BlackRock (iShares)',
        'ia_sector': 'IA North America',
        'id': 'ishares-sp500',
        'inception_year': 2010,
        'manager': 'BlackRock Index Team',
        'manager_tenure_years': 14,
        'name': 'iShares Core S&P 500 UCITS ETF (CSPX / CSP1)',
        'ocf_pct': 0.07,
        'ticker': 'CSPX',
        'trustnet_url': 'https://www.trustnet.com/factsheets/E/cspx/ishares-core-sp-500-ucits-etf-usd-acc',
        'type': 'Passive',
        'yearly_returns': [   {'return_pct': 4.9, 'year': '2011'},
                              {'return_pct': 10.5, 'year': '2012'},
                              {'return_pct': 29.5, 'year': '2013'},
                              {'return_pct': 20.2, 'year': '2014'},
                              {'return_pct': 6.8, 'year': '2015'},
                              {'return_pct': 33.1, 'year': '2016'},
                              {'return_pct': 11.3, 'year': '2017'},
                              {'return_pct': -1.5, 'year': '2018'},
                              {'return_pct': 26.4, 'year': '2019'},
                              {'return_pct': 14.7, 'year': '2020'},
                              {'return_pct': 29.3, 'year': '2021'},
                              {'return_pct': -7.8, 'year': '2022'},
                              {'return_pct': 19.2, 'year': '2023'},
                              {'return_pct': 21.4, 'year': '2024'},
                              {'return_pct': 16.2, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 13.6, 'year': '2026 YTD'}],
        'ytd_return_2026': 13.6},
    {   'alpha': -0.05,
        'aum_billions': 8.9,
        'benchmark': 'MSCI World Index (£)',
        'cagr_15yr': 11.8,
        'citicode': 'BJS9',
        'fe_crowns': 0,
        'fe_risk_score': 105,
        'house': 'Fidelity International',
        'ia_sector': 'IA Global',
        'id': 'fidelity-index-world',
        'inception_year': 2012,
        'manager': 'Fidelity Index Team',
        'manager_tenure_years': 15,
        'name': 'Fidelity Index World Fund (Class P Acc)',
        'ocf_pct': 0.12,
        'ticker': 'GB00BJS8SJ34',
        'trustnet_url': 'https://www.trustnet.com/factsheets/O/bjs9/fidelity-index-world-fund',
        'type': 'Passive',
        'yearly_returns': [   {'return_pct': 11.2, 'year': '2012'},
                              {'return_pct': 24.8, 'year': '2013'},
                              {'return_pct': 11.8, 'year': '2014'},
                              {'return_pct': 4.9, 'year': '2015'},
                              {'return_pct': 28.6, 'year': '2016'},
                              {'return_pct': 11.8, 'year': '2017'},
                              {'return_pct': -3.2, 'year': '2018'},
                              {'return_pct': 22.8, 'year': '2019'},
                              {'return_pct': 12.6, 'year': '2020'},
                              {'return_pct': 22.9, 'year': '2021'},
                              {'return_pct': -7.8, 'year': '2022'},
                              {'return_pct': 16.8, 'year': '2023'},
                              {'return_pct': 19.8, 'year': '2024'},
                              {'return_pct': 14.2, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 12.2, 'year': '2026 YTD'}],
        'ytd_return_2026': 12.2},
    {   'alpha': -0.04,
        'aum_billions': 19.5,
        'benchmark': 'FTSE All-World Index (£)',
        'cagr_15yr': 11.6,
        'citicode': 'VWRG',
        'fe_crowns': 0,
        'fe_risk_score': 105,
        'house': 'Vanguard',
        'ia_sector': 'IA Global',
        'id': 'vanguard-ftse-all-world',
        'inception_year': 2012,
        'manager': 'Vanguard Equity Index Group',
        'manager_tenure_years': 12,
        'name': 'Vanguard FTSE All-World UCITS ETF (VWRP / VWRL)',
        'ocf_pct': 0.22,
        'ticker': 'VWRP',
        'trustnet_url': 'https://www.trustnet.com/factsheets/E/vwrp/vanguard-ftse-all-world-ucits-etf-usd-acc',
        'type': 'Passive',
        'yearly_returns': [   {'return_pct': 11.1, 'year': '2012'},
                              {'return_pct': 21.2, 'year': '2013'},
                              {'return_pct': 11.2, 'year': '2014'},
                              {'return_pct': 3.8, 'year': '2015'},
                              {'return_pct': 29.2, 'year': '2016'},
                              {'return_pct': 13.4, 'year': '2017'},
                              {'return_pct': -3.8, 'year': '2018'},
                              {'return_pct': 22, 'year': '2019'},
                              {'return_pct': 13, 'year': '2020'},
                              {'return_pct': 19.8, 'year': '2021'},
                              {'return_pct': -8.1, 'year': '2022'},
                              {'return_pct': 15.7, 'year': '2023'},
                              {'return_pct': 19.2, 'year': '2024'},
                              {'return_pct': 13.8, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 11.8, 'year': '2026 YTD'}],
        'ytd_return_2026': 11.8},
    {   'alpha': -0.05,
        'aum_billions': 5.84,
        'benchmark': 'FTSE All-World Index (£)',
        'cagr_15yr': 11.5,
        'citicode': 'BMJJ',
        'fe_crowns': 0,
        'fe_risk_score': 105,
        'house': 'HSBC Global Asset Management',
        'ia_sector': 'IA Global',
        'id': 'hsbc-ftse-all-world',
        'inception_year': 2014,
        'manager': 'HSBC Index Team',
        'manager_tenure_years': 15,
        'name': 'HSBC FTSE All-World Index Fund (Class C Acc)',
        'ocf_pct': 0.13,
        'ticker': 'GB00BMJJJF91',
        'trustnet_url': 'https://www.trustnet.com/factsheets/O/bmjj/hsbc-ftse-all-world-index-fund',
        'type': 'Passive',
        'yearly_returns': [   {'return_pct': 11.2, 'year': '2014'},
                              {'return_pct': 3.7, 'year': '2015'},
                              {'return_pct': 29.1, 'year': '2016'},
                              {'return_pct': 13.3, 'year': '2017'},
                              {'return_pct': -3.8, 'year': '2018'},
                              {'return_pct': 21.9, 'year': '2019'},
                              {'return_pct': 12.9, 'year': '2020'},
                              {'return_pct': 19.7, 'year': '2021'},
                              {'return_pct': -8.1, 'year': '2022'},
                              {'return_pct': 15.6, 'year': '2023'},
                              {'return_pct': 19.1, 'year': '2024'},
                              {'return_pct': 13.7, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 11.7, 'year': '2026 YTD'}],
        'ytd_return_2026': 11.7},
    {   'alpha': -0.05,
        'aum_billions': 11.2,
        'benchmark': 'Custom 80/20 Global Composite',
        'cagr_15yr': 9.8,
        'citicode': 'N76V',
        'fe_crowns': 0,
        'fe_risk_score': 85,
        'house': 'Vanguard',
        'ia_sector': 'IA Mixed Investment 40-85% Shares',
        'id': 'vanguard-lifestrategy-80',
        'inception_year': 2011,
        'manager': 'Vanguard Multi-Asset Team',
        'manager_tenure_years': 13,
        'name': 'Vanguard LifeStrategy 80% Equity Fund (Acc)',
        'ocf_pct': 0.22,
        'ticker': 'GB00B4PQW151',
        'trustnet_url': 'https://www.trustnet.com/factsheets/T/n76v/vanguard-lifestrategy-80-equity-a-shares-acc',
        'type': 'Passive',
        'yearly_returns': [   {'return_pct': 2.8, 'year': '2011'},
                              {'return_pct': 11.8, 'year': '2012'},
                              {'return_pct': 19.4, 'year': '2013'},
                              {'return_pct': 9.8, 'year': '2014'},
                              {'return_pct': 3.2, 'year': '2015'},
                              {'return_pct': 24.8, 'year': '2016'},
                              {'return_pct': 11.6, 'year': '2017'},
                              {'return_pct': -4.8, 'year': '2018'},
                              {'return_pct': 18.4, 'year': '2019'},
                              {'return_pct': 10.2, 'year': '2020'},
                              {'return_pct': 16.8, 'year': '2021'},
                              {'return_pct': -11.2, 'year': '2022'},
                              {'return_pct': 13.4, 'year': '2023'},
                              {'return_pct': 15.8, 'year': '2024'},
                              {'return_pct': 12.1, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 10.2, 'year': '2026 YTD'}],
        'ytd_return_2026': 10.2},
    {   'alpha': -0.05,
        'aum_billions': 15.2,
        'benchmark': 'Custom 60/40 Global Composite',
        'cagr_15yr': 7.6,
        'citicode': 'N76X',
        'fe_crowns': 0,
        'fe_risk_score': 68,
        'house': 'Vanguard',
        'ia_sector': 'IA Mixed Investment 40-85% Shares',
        'id': 'vanguard-lifestrategy-60',
        'inception_year': 2011,
        'manager': 'Vanguard Multi-Asset Team',
        'manager_tenure_years': 13,
        'name': 'Vanguard LifeStrategy 60% Equity Fund (Acc)',
        'ocf_pct': 0.22,
        'ticker': 'GB00B3TYHH97',
        'trustnet_url': 'https://www.trustnet.com/factsheets/t/n76x/vanguard-lifestrategy-60-equity-a-shares-acc',
        'type': 'Passive',
        'yearly_returns': [   {'return_pct': 4.2, 'year': '2011'},
                              {'return_pct': 10.2, 'year': '2012'},
                              {'return_pct': 14.6, 'year': '2013'},
                              {'return_pct': 8.8, 'year': '2014'},
                              {'return_pct': 2.8, 'year': '2015'},
                              {'return_pct': 20.2, 'year': '2016'},
                              {'return_pct': 8.8, 'year': '2017'},
                              {'return_pct': -3.8, 'year': '2018'},
                              {'return_pct': 15.8, 'year': '2019'},
                              {'return_pct': 8.4, 'year': '2020'},
                              {'return_pct': 10.8, 'year': '2021'},
                              {'return_pct': -11.8, 'year': '2022'},
                              {'return_pct': 11.2, 'year': '2023'},
                              {'return_pct': 12.4, 'year': '2024'},
                              {'return_pct': 9.8, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 7.8, 'year': '2026 YTD'}],
        'ytd_return_2026': 7.8},
    {   'alpha': 1.3,
        'aum_billions': 5.31,
        'benchmark': 'UK CPI + 2%',
        'cagr_15yr': 5.8,
        'citicode': '3424',
        'fe_crowns': 5,
        'fe_risk_score': 42,
        'house': 'Troy Asset Management',
        'ia_sector': 'IA Flexible Investment',
        'id': 'trojan-fund',
        'inception_year': 2001,
        'manager': 'Sebastian Lyon & Charlotte Yonge',
        'manager_tenure_years': 23,
        'name': 'Trojan Fund (Troy Asset Management - Class O)',
        'ocf_pct': 0.86,
        'ticker': 'GB0034243732',
        'trustnet_url': 'https://www.trustnet.com/factsheets/O/3424/trojan-fund',
        'type': 'Active',
        'yearly_returns': [   {'return_pct': 7.2, 'year': '2011'},
                              {'return_pct': 4.1, 'year': '2012'},
                              {'return_pct': -2.8, 'year': '2013'},
                              {'return_pct': 8.4, 'year': '2014'},
                              {'return_pct': 3.2, 'year': '2015'},
                              {'return_pct': 12.8, 'year': '2016'},
                              {'return_pct': 4.3, 'year': '2017'},
                              {'return_pct': -1.8, 'year': '2018'},
                              {'return_pct': 9.4, 'year': '2019'},
                              {'return_pct': 9.2, 'year': '2020'},
                              {'return_pct': 9.8, 'year': '2021'},
                              {'return_pct': -3.8, 'year': '2022'},
                              {'return_pct': 3.5, 'year': '2023'},
                              {'return_pct': 7.8, 'year': '2024'},
                              {'return_pct': 6.4, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 4.8, 'year': '2026 YTD'}],
        'ytd_return_2026': 4.8},
    {   'alpha': 2.7,
        'aum_billions': 3.2,
        'benchmark': 'Bank of England Base Rate / Cash',
        'cagr_15yr': 5.1,
        'citicode': '0600',
        'fe_crowns': 4,
        'fe_risk_score': 36,
        'house': 'Ruffer LLP',
        'ia_sector': 'IA Flexible Investment',
        'id': 'ruffer-total-return',
        'inception_year': 2000,
        'manager': 'Duncan MacInnes & Jasmine Yeo',
        'manager_tenure_years': 12,
        'name': 'Ruffer Total Return Fund (Class I Acc)',
        'ocf_pct': 1.09,
        'ticker': 'GB0006000134',
        'trustnet_url': 'https://www.trustnet.com/factsheets/O/0600/ruffer-total-return-fund',
        'type': 'Active',
        'yearly_returns': [   {'return_pct': 1.8, 'year': '2011'},
                              {'return_pct': 3.4, 'year': '2012'},
                              {'return_pct': 9.2, 'year': '2013'},
                              {'return_pct': 3.8, 'year': '2014'},
                              {'return_pct': -1.4, 'year': '2015'},
                              {'return_pct': 15.2, 'year': '2016'},
                              {'return_pct': 2.1, 'year': '2017'},
                              {'return_pct': -5.8, 'year': '2018'},
                              {'return_pct': 8.4, 'year': '2019'},
                              {'return_pct': 13.5, 'year': '2020'},
                              {'return_pct': 11.2, 'year': '2021'},
                              {'return_pct': 3.8, 'year': '2022'},
                              {'return_pct': -2.8, 'year': '2023'},
                              {'return_pct': 6.2, 'year': '2024'},
                              {'return_pct': 5.4, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 3.9, 'year': '2026 YTD'}],
        'ytd_return_2026': 3.9},
    {   'alpha': 1.3,
        'aum_billions': 1.64,
        'benchmark': 'IA Sterling Strategic Bond Sector Avg',
        'cagr_15yr': 4.5,
        'citicode': 'B2PL',
        'fe_crowns': 4,
        'fe_risk_score': 38,
        'house': 'Artemis',
        'ia_sector': 'IA Sterling Strategic Bond',
        'id': 'artemis-strategic-bond',
        'inception_year': 2010,
        'manager': 'Juan Valenzuela & Rebecca Young',
        'manager_tenure_years': 14,
        'name': 'Artemis Strategic Bond Fund (Class I Acc)',
        'ocf_pct': 0.58,
        'ticker': 'GB00B2PLJJ81',
        'trustnet_url': 'https://www.trustnet.com/factsheets/O/b2pl/artemis-strategic-bond-fund',
        'type': 'Active',
        'yearly_returns': [   {'return_pct': 5.1, 'year': '2011'},
                              {'return_pct': 12.4, 'year': '2012'},
                              {'return_pct': 4.2, 'year': '2013'},
                              {'return_pct': 8.1, 'year': '2014'},
                              {'return_pct': 1.2, 'year': '2015'},
                              {'return_pct': 7.8, 'year': '2016'},
                              {'return_pct': 5.4, 'year': '2017'},
                              {'return_pct': -2.8, 'year': '2018'},
                              {'return_pct': 9.2, 'year': '2019'},
                              {'return_pct': 6.4, 'year': '2020'},
                              {'return_pct': -1.2, 'year': '2021'},
                              {'return_pct': -12.4, 'year': '2022'},
                              {'return_pct': 8.9, 'year': '2023'},
                              {'return_pct': 7.5, 'year': '2024'},
                              {'return_pct': 5.8, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 3.4, 'year': '2026 YTD'}],
        'ytd_return_2026': 3.4},
    {   'alpha': -0.04,
        'aum_billions': 2.4,
        'benchmark': 'FTSE Actuaries UK Conventional Gilts',
        'cagr_15yr': 3.4,
        'citicode': 'B009',
        'fe_crowns': 0,
        'fe_risk_score': 35,
        'house': 'Legal & General (LGIM)',
        'ia_sector': 'IA UK Gilts',
        'id': 'lgim-gilt-index',
        'inception_year': 2004,
        'manager': 'LGIM Index Team',
        'manager_tenure_years': 15,
        'name': 'Legal & General All Stocks Gilt Index Trust',
        'ocf_pct': 0.15,
        'ticker': 'GB00B00NY175',
        'trustnet_url': 'https://www.trustnet.com/factsheets/O/b009/legal--general-all-stocks-gilt-index-trust',
        'type': 'Passive',
        'yearly_returns': [   {'return_pct': 16.2, 'year': '2011'},
                              {'return_pct': 2.7, 'year': '2012'},
                              {'return_pct': -5.4, 'year': '2013'},
                              {'return_pct': 13.8, 'year': '2014'},
                              {'return_pct': 0.6, 'year': '2015'},
                              {'return_pct': 10.1, 'year': '2016'},
                              {'return_pct': 1.8, 'year': '2017'},
                              {'return_pct': 0.6, 'year': '2018'},
                              {'return_pct': 6.9, 'year': '2019'},
                              {'return_pct': 8.3, 'year': '2020'},
                              {'return_pct': -5.2, 'year': '2021'},
                              {'return_pct': -23.8, 'year': '2022'},
                              {'return_pct': 3.6, 'year': '2023'},
                              {'return_pct': 4.8, 'year': '2024'},
                              {'return_pct': 4.2, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 2.1, 'year': '2026 YTD'}],
        'ytd_return_2026': 2.1},
    {   'alpha': 0.05,
        'aum_billions': 6.54,
        'benchmark': 'SONIA',
        'cagr_15yr': 2.1,
        'citicode': 'N63Q',
        'fe_crowns': 5,
        'fe_risk_score': 2,
        'house': 'Royal London Asset Management',
        'ia_sector': 'IA Short Term Money Market',
        'id': 'royal-london-money-market',
        'inception_year': 2002,
        'manager': 'Craig Johnston & Tony Cole',
        'manager_tenure_years': 16,
        'name': 'Royal London Short Term Money Market Fund (Class Y Acc)',
        'ocf_pct': 0.1,
        'ticker': 'GB00B8XYYQ86',
        'trustnet_url': 'https://www.trustnet.com/factsheets/O/n63q/royal-london-short-term-money-market-fund',
        'type': 'Passive',
        'yearly_returns': [   {'return_pct': 0.8, 'year': '2011'},
                              {'return_pct': 0.9, 'year': '2012'},
                              {'return_pct': 0.6, 'year': '2013'},
                              {'return_pct': 0.5, 'year': '2014'},
                              {'return_pct': 0.6, 'year': '2015'},
                              {'return_pct': 0.5, 'year': '2016'},
                              {'return_pct': 0.3, 'year': '2017'},
                              {'return_pct': 0.6, 'year': '2018'},
                              {'return_pct': 0.8, 'year': '2019'},
                              {'return_pct': 0.4, 'year': '2020'},
                              {'return_pct': 0.1, 'year': '2021'},
                              {'return_pct': 1.4, 'year': '2022'},
                              {'return_pct': 4.8, 'year': '2023'},
                              {'return_pct': 5.2, 'year': '2024'},
                              {'return_pct': 4.9, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 3.7, 'year': '2026 YTD'}],
        'ytd_return_2026': 3.7},
    {   'alpha': -0.08,
        'aum_billions': 8.4,
        'benchmark': 'Bloomberg Global Aggregate Index (GBP Hedged)',
        'cagr_15yr': 3.2,
        'citicode': 'AGBP',
        'fe_crowns': 0,
        'fe_risk_score': 32,
        'house': 'BlackRock (iShares)',
        'ia_sector': 'IA Global Mixed Bond',
        'id': 'ishares-global-agg-bond',
        'inception_year': 2017,
        'manager': 'BlackRock Fixed Income Team',
        'manager_tenure_years': 15,
        'name': 'iShares Core Global Aggregate Bond ETF (AGBP - GBP Hedged)',
        'ocf_pct': 0.1,
        'ticker': 'AGBP',
        'trustnet_url': 'https://www.trustnet.com/factsheets/E/agbp/ishares-core-global-aggregate-bond-ucits-etf-gbp-hedged-dist',
        'type': 'Passive',
        'yearly_returns': [   {'return_pct': 2.4, 'year': '2017'},
                              {'return_pct': -1.2, 'year': '2018'},
                              {'return_pct': 6.8, 'year': '2019'},
                              {'return_pct': 5.4, 'year': '2020'},
                              {'return_pct': -2.1, 'year': '2021'},
                              {'return_pct': -13.2, 'year': '2022'},
                              {'return_pct': 5.4, 'year': '2023'},
                              {'return_pct': 6.1, 'year': '2024'},
                              {'return_pct': 4.8, 'year': '2025'},
                              {'is_ytd': True, 'return_pct': 2.8, 'year': '2026 YTD'}],
        'ytd_return_2026': 2.8}]

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
            self.wfile.write(json.dumps({
                "source": "Trustnet.com (FE fundinfo)",
                "total_funds": len(TRUSTNET_MASTER_FUNDS),
                "funds": TRUSTNET_MASTER_FUNDS
            }, indent=2).encode("utf-8"))
            return
        
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
                target_growth = float(data.get("target_growth", 7.5))

                horizon = max(1, retirement_age - current_age)

                def future_val(p, pmt, rate, years):
                    r = rate / 100.0
                    lump_res = p * ((1.0 + r) ** years)
                    if pmt > 0 and r > 0:
                        mr = r / 12.0
                        monthly_res = pmt * (((1.0 + mr) ** (years * 12) - 1.0) / mr)
                    else:
                        monthly_res = pmt * 12 * years
                    return round(lump_res + monthly_res)

                active_rate = (21.5 * 0.3) + (12.2 * 0.25) + (14.8 * 0.25) + (11.8 * 0.20)
                passive_rate = (20.8 * 0.35) + (14.2 * 0.30) + (11.8 * 0.20) + (6.8 * 0.15)

                total_principal = lump_sum + (monthly_amount * 12 * horizon)
                active_val = future_val(lump_sum, monthly_amount, active_rate, horizon)
                passive_val = future_val(lump_sum, monthly_amount, passive_rate, horizon)
                target_val = future_val(lump_sum, monthly_amount, target_growth, horizon)

                response = {
                    "source": "Trustnet.com (FE fundinfo)",
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

        if parsed.path == "/api/drawdown":
            content_length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(content_length)
            try:
                data = json.loads(body.decode("utf-8"))
                fund_val = float(data.get("fund_value", 500000))
                retire_age = int(data.get("retire_age", 65))
                net_monthly = float(data.get("net_monthly", 2500))
                growth_rate = float(data.get("growth_rate", 5.5)) / 100.0
                inflation_rate = float(data.get("inflation_rate", 3.0)) / 100.0
                wrapper = str(data.get("wrapper", "pension_ufpls"))
                other_income = float(data.get("other_income", 0))
                adjust_inflation = bool(data.get("adjust_inflation", True))

                def uk_tax(gross, other=0.0):
                    if wrapper == "isa_tax_free" or gross <= 0:
                        return 0.0
                    taxable = gross * 0.75 if wrapper == "pension_ufpls" else gross
                    tot = taxable + other
                    def tax_for(inc):
                        if inc <= 0: return 0.0
                        pa = 12570.0 if inc <= 100000 else max(0.0, 12570.0 - (inc - 100000.0) / 2.0)
                        after_pa = max(0.0, inc - pa)
                        if after_pa <= 0: return 0.0
                        basic = min(after_pa, 37700.0) * 0.20
                        higher = 0.0
                        add = 0.0
                        if after_pa > 37700.0:
                            h_max = max(0.0, 125140.0 - pa - 37700.0)
                            higher = min(after_pa - 37700.0, h_max) * 0.40
                            if after_pa > 37700.0 + h_max:
                                add = (after_pa - 37700.0 - h_max) * 0.45
                        return basic + higher + add
                    return max(0.0, tax_for(tot) - tax_for(other))

                def find_gross(target_net, other=0.0):
                    if target_net <= 0 or wrapper == "isa_tax_free":
                        return target_net
                    low = target_net
                    high = target_net * 2.5
                    for _ in range(35):
                        mid = (low + high) / 2.0
                        if abs(mid - uk_tax(mid, other) - target_net) < 0.01:
                            return mid
                        if mid - uk_tax(mid, other) < target_net:
                            low = mid
                        else:
                            high = mid
                    return (low + high) / 2.0

                year1_net = net_monthly * 12
                year1_gross = find_gross(year1_net, other_income)
                year1_tax = uk_tax(year1_gross, other_income)

                balance = fund_val
                m_rate = (1.0 + growth_rate) ** (1.0 / 12.0) - 1.0
                schedule = []
                depleted = False
                depletion_age = None
                total_tax = 0.0
                total_net = 0.0

                for yr in range(45):
                    age_start = retire_age + yr
                    start_b = balance
                    if balance <= 0:
                        if not depleted:
                            depleted = True
                            depletion_age = age_start
                        break
                    inf_factor = (1.0 + inflation_rate) ** yr
                    target_net = year1_net * inf_factor if adjust_inflation else year1_net
                    other_y = other_income * inf_factor if adjust_inflation else other_income
                    gross_y = find_gross(target_net, other_y)
                    tax_y = uk_tax(gross_y, other_y)
                    m_gross = gross_y / 12.0

                    y_growth = 0.0
                    actual_gross = 0.0
                    for m in range(12):
                        if balance <= 0: break
                        m_int = balance * m_rate
                        y_growth += m_int
                        balance += m_int
                        if balance >= m_gross:
                            balance -= m_gross
                            actual_gross += m_gross
                        else:
                            actual_gross += balance
                            balance = 0.0
                            depleted = True
                            depletion_age = age_start + ((m + 1) / 12.0)
                            break

                    ratio = actual_gross / gross_y if gross_y > 0 else 1.0
                    actual_tax = tax_y * ratio
                    actual_net = actual_gross - actual_tax
                    total_tax += actual_tax
                    total_net += actual_net

                    real_b = balance / ((1.0 + inflation_rate) ** (yr + 1))
                    schedule.append({
                        "age": age_start + 1,
                        "year_num": yr + 1,
                        "start_balance": round(start_b),
                        "growth": round(y_growth),
                        "gross_drawn": round(actual_gross),
                        "tax_paid": round(actual_tax),
                        "net_in_hand": round(actual_net),
                        "end_balance_nominal": round(balance),
                        "end_balance_real": round(real_b)
                    })
                    if balance <= 0:
                        break

                res_obj = {
                    "is_depleted": depleted,
                    "depletion_age": round(depletion_age, 1) if depletion_age else None,
                    "longevity_years": round(depletion_age - retire_age, 1) if depletion_age else 45.0,
                    "is_sustainable": not depleted,
                    "year1_gross_monthly": round(year1_gross / 12.0),
                    "year1_gross_annual": round(year1_gross),
                    "year1_tax_monthly": round(year1_tax / 12.0),
                    "year1_tax_annual": round(year1_tax),
                    "year1_effective_tax_pct": round((year1_tax / year1_gross * 100), 2) if year1_gross > 0 else 0,
                    "lifetime_tax_paid": round(total_tax),
                    "lifetime_net_withdrawn": round(total_net),
                    "schedule_count": len(schedule)
                }

                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps(res_obj).encode("utf-8"))
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
        print(f" Dutta UK Funds Selection Advisor (Trustnet Edition)")
        print(f" Local URL: {url}")
        print(f" Data Source: Trustnet.com (FE fundinfo)")
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
