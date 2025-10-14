import Hero from "./components/Hero";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>درنگ گاه | کتاب‌ها و نقل قول‌ها</title>
        <meta name="description" content="درنگ گاه: جایی برای کشف بهترین نقل قول‌ها و قطعات کوتاه کتاب‌ها به زبان فارسی." />
        <meta name="keywords" content="کتاب، نقل قول، درنگ گاه، آموزش، فارسی" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="درنگ گاه | کتاب‌ها و نقل قول‌ها" />
        <meta property="og:description" content="درنگ گاه: جایی برای کشف بهترین نقل قول‌ها و قطعات کوتاه کتاب‌ها به زبان فارسی." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourdomain.com/hero-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="درنگ گاه | کتاب‌ها و نقل قول‌ها" />
        <meta name="twitter:description" content="درنگ گاه: جایی برای کشف بهترین نقل قول‌ها و قطعات کوتاه کتاب‌ها به زبان فارسی." />
        <meta name="twitter:image" content="https://yourdomain.com/hero-image.jpg" />

        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "درنگ گاه",
            "url": "https://yourdomain.com",
            "description": "درنگ گاه: جایی برای کشف بهترین نقل قول‌ها و قطعات کوتاه کتاب‌ها به زبان فارسی."
          })}}
        />
      </Head>
      <Hero />
    </>
  );
}
