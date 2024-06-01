import { arimoFont } from "./fonts.js";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata = {
    title: "FalTiSan",
    description: "An independent IT service provider",
    authors: [{name: 'Naufal Fatihul Ihsan', url: 'https://github.com/Wingscape'}],
    icons: {
        icon: '/icon.ico',
        apple: '/icon.ico'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${arimoFont.className} text-[16px]`}>
                <header className="fixed z-10 top-0 right-0 left-0 bg-white px-[72px] py-6">
                    <nav className="grid grid-cols-3 gap-x-4">
                        <Link href="/">
                            <Image 
                                src="/FalTiSan.svg"
                                alt="FalTiSan Logo"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{
                                    width: 'auto',
                                    height: '24px'
                                }}
                                unoptimized={true}
                            />
                        </Link>
                        <ul className="flex flex-row px-10">
                            <li className="flex-1 mr-10 text-right hover:text-faltisan-lightblue"><a href="">About</a></li>
                            <li className="flex-none hover:text-faltisan-lightblue"><a href="">Portfolio</a></li>
                            <li className="flex-1 ml-10 text-left hover:text-faltisan-lightblue"><a href="">Contact</a></li>
                        </ul>
                    </nav>
                </header>
                {children}
                <footer className="border-black border-t-4 px-[72px] pt-16 pb-[107px] grid grid-cols-2 gap-x-4">
                    <Image 
                        src="/FalTiSan_Ti.svg"
                        alt="FalTiSan with Ti letters Logo"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                            width: 'auto',
                            height: '69px'
                        }}
                        unoptimized={true}
                    />
                    <p className="text-right">&#169; 2024 FalTiSan. All Rights Reserved.</p>
                </footer>
            </body>
        </html>
    );
}
