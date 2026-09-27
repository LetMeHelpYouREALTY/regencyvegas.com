import { generateBreadcrumbSchema } from "@/lib/schema";

export default function BreadcrumbJsonLd({ items }) {
  if (!items?.length) {
    return null;
  }

  const schema = generateBreadcrumbSchema(items);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
