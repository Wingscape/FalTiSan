import { Arimo } from "next/font/google";
import "./globals.css";

const arimoFont = Arimo({ subsets: ["latin"] });

export const metadata = {
    title: "FalTiSan",
    description: "An independent IT service provider",
    authors: [{name: 'Naufal Fatihul Ihsan', url: 'https://github.com/Wingscape'}],
    icons: {
        icon: '/favicon.ico'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={arimoFont.className}>
                <header>
                    <nav></nav>
                </header>
                {children}
                <footer></footer>
            </body>
        </html>
    );
}
