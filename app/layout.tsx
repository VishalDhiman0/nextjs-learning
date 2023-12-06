import { Metadata } from 'next';
import './layout.css';

export const metadata: Metadata = {
    title: "Learning nextjs",
    description: "This website is made for learning nextjs."
}

export default function RootLayout({
    children
}: { children: React.ReactNode }) {
    return (
        <html lang="en">
          <body className='root'>{children}</body>
        </html>
      );
}