import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, url }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SMS Prank Xizmati",
    "url": url,
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": "SMS Xizmati"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default SEO;
