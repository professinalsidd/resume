import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Portfolio",
  description: "Showcasing my portfolio of web development projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="portfolio, web development, projects, React, Next.js"
        />
        <meta name="author" content="Siddharth Jain" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://nextgencodersprogram.online/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <link rel="canonical" href="https://nextgencodersprogram.online/" />
        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
