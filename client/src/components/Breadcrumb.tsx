/**
 * Dynamic Breadcrumb Component
 * Automatically generates breadcrumbs based on current pathname
 * Renders both UI and JSON-LD structured data
 */

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  path: string;
}

export function Breadcrumb() {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);

  // Map of paths to breadcrumb labels
  const pathMap: Record<string, string> = {
    "/": "Home",
    "/the-city": "The City",
    "/developer": "Developer",
    "/enquire": "Enquire",
    "/faq": "FAQ",
    "/partners": "Partners",
    "/dealers": "Dealers",
    "/partnerships": "Partnerships",
  };

  // Generate breadcrumb structure based on current location
  const generateBreadcrumbs = () => {
    const pathname = window.location.pathname;

    // Always start with home
    const items: BreadcrumbItem[] = [{ label: "Home", path: "/" }];

    // Add current page if not home
    if (pathname !== "/" && pathMap[pathname]) {
      items.push({ label: pathMap[pathname], path: pathname });
    }

    setBreadcrumbs(items);
  };

  useEffect(() => {
    generateBreadcrumbs();

    // Listen for route changes (for client-side navigation)
    window.addEventListener("popstate", generateBreadcrumbs);
    return () => window.removeEventListener("popstate", generateBreadcrumbs);
  }, []);

  // Generate JSON-LD structured data for breadcrumbs
  useEffect(() => {
    if (breadcrumbs.length > 0) {
      const baseUrl = "https://royalswisscity.com";
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          item: `${baseUrl}${item.path}`,
        })),
      };

      // Update or create JSON-LD script tag
      let scriptTag = document.querySelector(
        'script[type="application/ld+json"][data-breadcrumb="true"]'
      );

      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.setAttribute("type", "application/ld+json");
        scriptTag.setAttribute("data-breadcrumb", "true");
        document.head.appendChild(scriptTag);
      }

      scriptTag.innerHTML = JSON.stringify(schemaData);
    }
  }, [breadcrumbs]);

  // Render breadcrumb structure ONLY in JSON-LD, never visually
  // Users will never see this, only search engines
  return null;
}

export default Breadcrumb;
