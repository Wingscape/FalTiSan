import { bitterFont } from "./fonts.js";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <header className="grid grid-cols-2 gap-x-10 px-[72px] pb-[102px] pt-[174px]">
                <section>
                    <h1 className="group text-[56px] font-bold leading-tight">
                        Experienced ETL and Web Developer: <span className="group-hover:text-zinc-200 transition-color ease-in-out duration-300">Nau</span>Fal <span className="group-hover:text-zinc-200 transition-color ease-in-out duration-300">Fa</span><span className="text-faltisan-mediumblue">Ti</span><span className="group-hover:text-zinc-200 transition-color ease-in-out duration-300">hul Ih</span>San
                    </h1>
                    <p className={`${bitterFont.className} text-[27px] leading-tight mt-10 mb-12`}>Seeking job opportunities and extending services to potential clients. Click the button below!</p>
                    <button className="transition-color ease-in-out duration-300 bg-faltisan-mediumblue hover:bg-faltisan-lightblue hover:text-black text-[27px] text-white py-4 px-12">Contact me!</button>
                </section>
                <div className="relative z-0">
                    <Image 
                        src="/MyPicture.jpeg"
                        alt="Picture of my face"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                            height: 'auto',
                            width: '100%',
                            maxWidth: '438px',
                            float: 'right'
                        }}
                    />
                    <div className="absolute bg-white border-y-2 border-l-2 border-faltisan-lightblue top-[-56px] right-0 w-[520px] h-14"></div>
                    <div className="absolute bg-faltisan-mediumblue top-[-56px] right-[552px] w-[16px] h-14"></div>
                    <div className="absolute bg-faltisan-mediumblue top-[-56px] right-[584px] w-[72px] h-14"></div>
                    <div className="absolute bg-faltisan-mediumblue top-[-56px] right-[438px] w-[56px] h-[520px]"></div>
                </div>   
            </header>
            <section></section>
            <section></section>
            <section></section>
        </main>
    );
}
