import { bitterFont } from "./fonts.js";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <header className="grid grid-cols-1 min-[1160px]:grid-cols-2 gap-x-10 h-dvh min-h-[730px] px-[36px] min-[600px]:px-[72px] pb-[102px] pt-[174px]">
                <section>
                    <h1 className="group text-[36px] min-[375px]:text-[40px] min-[600px]:text-[48px] min-[1330px]:text-[56px] font-bold leading-tight">
                        Experienced ETL and Web Developer: <span className="group-hover:text-zinc-200 transition-color ease-in-out duration-300">Nau</span>Fal <span className="group-hover:text-zinc-200 transition-color ease-in-out duration-300">Fa</span><span className="text-faltisan-mediumblue">Ti</span><span className="group-hover:text-zinc-200 transition-color ease-in-out duration-300">hul Ih</span>San
                    </h1>
                    <p className={`${bitterFont.className} text-[16px] min-[375px]:text-[20px] min-[600px]:text-[24px] min-[1330px]:text-[28px] leading-tight mt-10 mb-12`}>Seeking job opportunities and extending services to potential clients. Click the button below!</p>
                    <button className="transition-color ease-in-out duration-300 bg-faltisan-mediumblue hover:bg-faltisan-lightblue hover:text-black text-[20px] min-[1330px]:text-[28px] text-white py-4 px-12">Contact me!</button>
                </section>
                <div className="relative z-0 invisible min-[1160px]:visible">
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
                        priority={true}
                    />
                    <div className="absolute bg-white border-y-2 border-l-2 border-faltisan-lightblue top-[-56px] right-0 w-[520px] h-14"></div>
                    <div className="absolute bg-faltisan-mediumblue top-[-56px] right-[552px] w-[16px] h-14"></div>
                    <div className="absolute bg-faltisan-mediumblue top-[-56px] right-[584px] w-[72px] h-14"></div>
                    <div className="absolute bg-faltisan-mediumblue top-[-56px] right-[438px] w-[56px] h-[520px]"></div>
                </div>   
            </header>
            <section className="grid grid-cols-1 min-[1160px]:grid-cols-2 mb-10">
                <div className="h-[300px] w-full min-[1160px]:h-auto min-[1160px]:w-full" 
                    style={{
                            backgroundImage: 'url(/About.svg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}>
                </div>
                <section className="grid content-center px-[32px] min-[600px]:pr-[136px] min-[600px]:pl-[64px] py-10 text-[16px] min-[375px]:text-[20px] min-[1330px]:text-2xl">
                    <div>
                        <h2 className="pb-10 text-[32px] min-[600px]:text-[40px] min-[1330px]:text-[48px] font-bold leading-tight">About</h2>
                        <p>My journey in technology started with a fascination for artificial intelligence. Initially, I found myself on a different path when my recent role reintroduced me to the captivating world of web development.</p><br/>
                        <p>Beyond just aesthetics, I discovered the art of crafting efficient backend architectures that power engaging digital experiences. Today, I stand as a seasoned web developer, blending creativity with technical expertise to bring visions to life.</p><br/>
                        <p className="pb-9">Whether you're a collaborator seeking a partner or simply curious about my journey, I invite you to connect. I also specialize in creating seamless ETL (Extract Transform Load) processes to optimize data flow.</p>
                        <Link href='/' className="flex flex-row group w-fit">
                            <p className="font-bold group-hover:text-faltisan-lightblue">Let's connect!</p>
                            <div className="p-px ml-4 transition-color ease-in-out duration-300 bg-faltisan-mediumblue group-hover:bg-faltisan-darkblue group-hover:border-faltisan-darkblue">
                                <Image 
                                    src="/KeyboardArrowDownGoogleFont.svg"
                                    alt="Arrow down"
                                    width={30}
                                    height={30}
                                    sizes="100vw"
                                    unoptimized={true}
                                />
                            </div>
                        </Link>
                    </div>
                </section>
            </section>
            <section className="bg-[#EEEEEE] px-[36px] min-[600px]:px-[72px] pt-[48px] pb-[40px]">
                <h2 className="text-[32px] min-[600px]:text-[40px] min-[1330px]:text-[48px] pb-[40px] font-bold leading-tight text-center">Portfolio</h2>
                <div className="grid grid-cols-1 min-[600px]:grid-cols-2 min-[1160px]:grid-cols-4 gap-x-8">
                    <article className="bg-white p-6">
                        <h4 className="text-faltisan-darkblue">Data analyst</h4>
                        <h3 className="text-[24px] min-[600px]:text-[32px] font-bold leading-tight mb-3">Cras id interdum lacus</h3>
                        <p className={`${bitterFont.className} leading-tight mb-[23px]`}>Nulla eleifend imperdiet enim, at tincidunt urna fermentum sit amet. Aliquam sed eleifend nisi.</p>
                        <button className="transition-color ease-in-out duration-300 border-2 border-faltisan-mediumblue text-faltisan-mediumblue hover:bg-faltisan-mediumblue hover:text-white py-[11px] px-[23px]">See more!</button>
                    </article>
                    <article className="bg-white p-6">
                        <h4 className="text-faltisan-darkblue">Software engineering</h4>
                        <h3 className="text-[24px] min-[600px]:text-[32px] font-bold leading-tight mb-3">Sed et dapibus elit</h3>
                        <p className={`${bitterFont.className} leading-tight mb-[23px]`}>Nulla eleifend imperdiet enim, at tincidunt urna fermentum sit amet. Aliquam sed eleifend nisi. </p>
                        <button className="transition-color ease-in-out duration-300 border-2 border-faltisan-mediumblue text-faltisan-mediumblue hover:bg-faltisan-mediumblue hover:text-white py-[11px] px-[23px]">See more!</button>
                    </article>
                </div>
            </section>
            <section className="px-[36px] min-[600px]:px-[72px] pt-[48px] pb-[58px] text-[16px] min-[375px]:text-[20px] min-[600px]:text-[24px]">
                <h2 className="text-[32px] min-[600px]:text-[40px] min-[1330px]:text-[48px] pb-[40px] font-bold leading-tight">Contact</h2>
                <p>Thank you for your interests. Let me know if I can help you with something!</p>
                <div className="mt-[34px]">
                    <Link href='/' className="flex flex-row mb-[24px] w-fit">
                        <Image 
                            src="/LinkedinFontAwesome.svg"
                            alt="Linkedin"
                            width={32}
                            height={0}
                            unoptimized={true}
                            style={{
                                height: 'auto'
                            }}
                        />
                        <p className="ml-2 font-bold hover:text-faltisan-lightblue">Naufal Fatihul Ihsan Dhiya Ul Lail</p>
                    </Link>
                </div>
                <div>
                    <Link href='/' className="flex flex-row w-fit">
                        <Image 
                            src="/MailGoogleFont.svg"
                            alt="Mail"
                            width={32}
                            height={0}
                            unoptimized={true}
                            style={{
                                height: 'auto'
                            }}
                        />
                        <p className="ml-2 font-bold hover:text-faltisan-lightblue">naufal17042003@gmail.com</p>
                    </Link>
                </div>
            </section>
        </main>
    );
}
