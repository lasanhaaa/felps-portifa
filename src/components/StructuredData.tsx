import { services, site, socials } from "@/lib/content";

/** schema.org data so Google knows this is Felipe Terra's personal site. */
export function StructuredData() {
  const person = {
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: site.fullName,
    alternateName: site.name,
    url: site.url,
    image: `${site.url}/images/portrait.jpg`,
    jobTitle: site.title,
    email: `mailto:${site.email}`,
    knowsAbout: [...services],
    address: { "@type": "PostalAddress", addressLocality: "São Carlos", addressRegion: "SP", addressCountry: "BR" },
    sameAs: socials.map((social) => social.href),
  };
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        alternateName: site.fullName,
        inLanguage: "en",
        publisher: { "@id": person["@id"] },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}/#profile`,
        url: site.url,
        isPartOf: { "@id": `${site.url}/#website` },
        mainEntity: person,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
