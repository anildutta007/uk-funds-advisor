// Serverless Function: Vercel Node runtime for Live UK Pension News
// Fetches official Google News UK Pension RSS feed and returns clean JSON without CORS or rate-limit issues.

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Cache-Control", "s-maxage=180, stale-while-revalidate=600");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const rssTarget = "https://news.google.com/rss/search?q=UK+pension+OR+State+Pension&hl=en-GB&gl=GB&ceid=GB:en";
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const response = await fetch(rssTarget, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8"
      },
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Upstream RSS returned HTTP ${response.status}`);
    }

    const xml = await response.text();
    const items = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xml)) !== null && items.length < 30) {
      const itemXml = match[1];
      const titleMatch = /<title>([\s\S]*?)<\/title>/.exec(itemXml);
      const linkMatch = /<link>([\s\S]*?)<\/link>/.exec(itemXml);
      const pubDateMatch = /<pubDate>([\s\S]*?)<\/pubDate>/.exec(itemXml);
      const descMatch = /<description>([\s\S]*?)<\/description>/.exec(itemXml);
      const sourceMatch = /<source[^>]*>([\s\S]*?)<\/source>/.exec(itemXml);

      if (titleMatch) {
        let title = titleMatch[1].replace(/<!\[CDATA\[(.*?)\]\]>/g, "$1").trim();
        let description = descMatch ? descMatch[1].replace(/<!\[CDATA\[(.*?)\]\]>/g, "$1").trim() : "";
        let link = linkMatch ? linkMatch[1].trim() : "";
        let pubDate = pubDateMatch ? pubDateMatch[1].trim() : "";
        let source = sourceMatch ? sourceMatch[1].trim() : "";

        items.push({
          title,
          link,
          pubDate,
          description,
          source
        });
      }
    }

    return res.status(200).json({
      status: "ok",
      count: items.length,
      lastUpdated: new Date().toISOString(),
      items
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message || "Failed to fetch live pension feed"
    });
  }
}
