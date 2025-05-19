import { blogsLoader } from "@/lib/source";
import { DEPLOYED_URL } from "@/utils/constants";
import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  const blogs = [...blogsLoader.getPages()].map((page) => ({
    url: `${DEPLOYED_URL}/blogs/${page.slugs[0]}`,
    lastModified: new Date(page.data.date ?? page.file.name),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const routes = [
    {
      url: DEPLOYED_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${DEPLOYED_URL}/docs`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${DEPLOYED_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${DEPLOYED_URL}/litepaper`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  return [...routes, ...blogs];
};

export default sitemap;
