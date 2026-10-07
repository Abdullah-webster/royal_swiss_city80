/**
 * SEO Head Component
 * Dynamically manages meta tags, structured data, and SEO optimization
 * Supports multi-language (English & Urdu)
 */

import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, any>;
  language?: "en" | "ur";
  alternate?: Array<{ hrefLang: string; href: string }>;
  noindex?: boolean;
  nofollow?: boolean;
}

export function SEOHead({
  title = "Royal Swiss City - Best Gated Community in Lahore",
  description = "Premium gated community in Lahore with 60+ years of Habib Rafiq legacy. Best society for residential living in Pakistan.",
  keywords = "best society lahore, gated community, luxury housing, habib rafiq",
  canonical = "https://royalswisscity.com",
  ogImage = "https://royalswisscity.com/og-image.jpg",
  ogType = "website",
  ogTitle,
  ogDescription,
  twitterImage = ogImage,
  structuredData,
  language = "en",
  alternate = [],
  noindex = false,
  nofollow = false,
}: SEOHeadProps) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Helper function to set meta tag
    const setMeta = (name: string, content: string, isProperty: boolean = false) => {
      let element = document.querySelector(
        isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        if (isProperty) {
          element.setAttribute("property", name);
        } else {
          element.setAttribute("name", name);
        }
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Core Meta Tags
    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("author", "Habib Rafiq");
    setMeta("viewport", "width=device-width, initial-scale=1.0, maximum-scale=5.0");
    setMeta("robots", `${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"},max-snippet:-1,max-image-preview:large,max-video-preview:-1`);
    setMeta("googlebot", "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1");
    setMeta("language", language === "ur" ? "Urdu" : "English");

    // Open Graph Tags
    setMeta("og:title", ogTitle || title, true);
    setMeta("og:description", ogDescription || description, true);
    setMeta("og:url", canonical, true);
    setMeta("og:type", ogType, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:locale", language === "ur" ? "ur_PK" : "en_PK", true);
    
    // Twitter Card Tags
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", twitterImage);
    setMeta("twitter:site", "@royalswisscity");
    setMeta("twitter:creator", "@habibrafiq");

    // Business Tags
    setMeta("business:contact_data:street_address", "Royal Swiss City, Lahore");
    setMeta("business:contact_data:locality", "Lahore");
    setMeta("business:contact_data:region", "Punjab");
    setMeta("business:contact_data:postal_code", "54000");
    setMeta("business:contact_data:country_name", "Pakistan");

    // Theme Color
    setMeta("theme-color", "#0B1E2B");
    setMeta("msapplication-TileColor", "#0B1E2B");

    // Canonical Link
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);

    // Alternate Language Links (Hreflang)
    // Remove old hreflang tags
    document.querySelectorAll("link[rel='alternate'][hreflang]").forEach((el) => el.remove());

    // Add new hreflang tags
    alternate.forEach(({ hrefLang, href }) => {
      const altLink = document.createElement("link");
      altLink.setAttribute("rel", "alternate");
      altLink.setAttribute("hreflang", hrefLang);
      altLink.setAttribute("href", href);
      document.head.appendChild(altLink);
    });

    // Add hreflang for x-default
    const xDefaultLink = document.createElement("link");
    xDefaultLink.setAttribute("rel", "alternate");
    xDefaultLink.setAttribute("hreflang", "x-default");
    xDefaultLink.setAttribute("href", canonical);
    document.head.appendChild(xDefaultLink);

    // Structured Data (JSON-LD)
    if (structuredData) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.setAttribute("type", "application/ld+json");
        document.head.appendChild(scriptTag);
      }
      scriptTag.innerHTML = JSON.stringify(structuredData);
    }

    // Preconnect to external domains for performance
    const domains = [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://maps.googleapis.com",
    ];

    domains.forEach((domain) => {
      let link = document.querySelector(`link[rel='preconnect'][href='${domain}']`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "preconnect");
        link.setAttribute("href", domain);
        document.head.appendChild(link);
      }
    });

    // Prefetch DNS for external resources
    const dnsPrefetch = [
      "https://www.google-analytics.com",
      "https://www.googletagmanager.com",
    ];

    dnsPrefetch.forEach((domain) => {
      let link = document.querySelector(`link[rel='dns-prefetch'][href='${domain}']`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "dns-prefetch");
        link.setAttribute("href", domain);
        document.head.appendChild(link);
      }
    });

  }, [title, description, keywords, canonical, ogImage, ogType, ogTitle, ogDescription, twitterImage, structuredData, language, alternate, noindex, nofollow]);

  return null;
}

export default SEOHead;
