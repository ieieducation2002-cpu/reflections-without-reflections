import "./globals.css";

export const metadata = {
  title: "Reflection without Reflection | කමටහන් නොවන කමටහන්",
  description: "Mindful quotes and spiritual reflections by Venerable Bandarawela Wangeesa Thero. A journey into Buddhist wisdom and self-discovery.",
  keywords: "Buddhism, mindfulness, meditation, Bandarawela Wangeesa Thero, spiritual quotes, reflection",
  authors: [{ name: "Bandarawela Wangeesa Thero" }],
  openGraph: {
    title: "Reflection without Reflection | කමටහන් නොවන කමටහන්",
    description: "Mindful quotes and spiritual reflections by Venerable Bandarawela Wangeesa Thero",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#A8B8B3" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
