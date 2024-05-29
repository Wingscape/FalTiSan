import { Arimo } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
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
                    <nav className="grid grid-cols-3 gap-x-4">
                        <Link href="/">
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
                        </Link>
                        <ul className="flex flex-row px-10 text-base">
                            <li className="flex-1 mr-10 text-right"><a href="">About</a></li>
                            <li className="flex-none"><a href="">Portfolio</a></li>
                            <li className="flex-1 ml-10 text-left"><a href="">Contact</a></li>
                        </ul>
                    </nav>
                </header>
                {children}
                <footer className="bg-sky-200 px-[72px] py-16 grid grid-cols-2 gap-x-4">
                    <Image 
                        src="/FalTiSan.svg"
                        alt="Logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                            width: 'auto',
                            height: '69px'
                        }}
                    />
                    <p className="text-right">&#169; 2024 FalTiSan. All Rights Reserved.</p>
                </footer>
            </body>
        </html>
    );
}
