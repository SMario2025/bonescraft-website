export async function getServerSideProps({ res }) {
    const baseUrl = "https://bonescraft.de";

    const urls = [
        "",
        "/crypto",
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
            .map(
                (path) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <changefreq>weekly</changefreq>
      <priority>${path === "" ? "1.0" : "0.9"}</priority>
    </url>`
            )
            .join("")}
</urlset>`;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default function Sitemap() {
    return null;
}
