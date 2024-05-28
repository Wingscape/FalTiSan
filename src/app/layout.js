import { Arimo } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const arimoFont = Arimo({ subsets: ["latin"] });

export const metadata = {
    title: "FalTiSan",
    description: "An independent IT service provider",
    authors: [{name: 'Naufal Fatihul Ihsan', url: 'https://github.com/Wingscape'}],
    icons: {
        icon: '/icon.ico'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={arimoFont.className}>
                <header className="bg-sky-500 px-[72px] py-6">
                    <nav>
                        <Image 
                            src="/FalTiSan.svg"
                            alt="Logo"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: 'auto',
                                height: '24px'
                            }}
                        />
                        <ul>
                            <li><a href="">About</a></li>
                            <li><a href="">Portfolio</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </nav>
                </header>
                {children}
                <footer></footer>
            </body>
        </html>
    );
}
