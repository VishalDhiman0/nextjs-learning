import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Learning nextjs",
    description: "This website is made for learning nextjs."
}

export default function RootLayout({
    children
}: { children: React.ReactNode }) {
    return (
        <html lang="en">
          <body>{children}</body>
        </html>
      );
}