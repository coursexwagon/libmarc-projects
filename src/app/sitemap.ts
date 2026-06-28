import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://libmarcprojects.co.za";
  const services = [
    "demolition-rock-blasting",
    "rubble-removal",
    "plant-hire",
    "cctv-installation",
    "roller-shutter-gates",
  ];

  const staticPages = [
    "",
    "/about",
    "/services",
    "/projects",
    "/rates",
    "/contact",
    "/estimate",
    "/safety",
    "/service-areas",
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  for (const page of staticPages) {
    entries.push({
      url: `${base}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1.0 : 0.8,
    });
  }

  // Service pages
  for (const slug of services) {
    entries.push({
      url: `${base}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  return entries;
}
