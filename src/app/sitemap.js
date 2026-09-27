import { SITE_URL } from "@/lib/constants";
import { PAGE_SEO } from "@/lib/seo";

export default function sitemap() {
  const staticPages = Object.values(PAGE_SEO).map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : 0.8,
  }));

  return staticPages;
}


