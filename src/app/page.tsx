import { Inter } from "@next/font/google";
import { Button, ButtonVariant } from "@/components/Button/Button";
import Image from "next/image";
import "./page.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <div className={"absolute h-[194px] w-full top-0 image-wrapper"}>
                <Image src="/pattern-background-mobile.svg" alt="Background image" className={"w-full mobile"} fill/>
                <Image src="/pattern-background-desktop.svg" alt="Background image" className={"w-full desktop"} fill/>
            </div>
            <main className={"px-6 z-10"}>
                <div className={"bg-white rounded-[20px] card"}>
                    <div className={"relative h-[160px] md:h-[220px] w-full"}>
                        <Image className={"rounded-tr-[20px] rounded-tl-[20px]"} src="/illustration-hero.svg" alt="Hero image" fill/>
                    </div>
                    <div className={"px-6 py-8 md:p-12 flex flex-col items-center"}>
                        <h1 className={"text-[22px] font-black text-dark"}>Order Summary</h1>
                        <p className={"text-center text-grey mt-4 text-[15px] leading-[25px] px-2 md:px-4"}>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

                        <div className={"mt-6 flex p-4 bg-light rounded-[11px] w-full h-[81px]"}>
                            <div className={"color-dark h-[48px] w-[48px] relative"}>
                                <Image src="/icon-music.svg" alt="Music" fill/>
                            </div>

                            <div className={"flex justify-between items-center text-sm w-full ml-[20px] flex-1"}>
                                <div>
                                    <div className={"font-black text-dark"}>Annual Plan</div>
                                    <div className={"text-grey font-medium"}>$59.99/year</div>
                                </div>

                                <a href="#" className={"text-[13px] underline text-primary font-bold"}>Change</a>
                            </div>
                        </div>

                        <div className={"flex flex-col gap-y-2 md:gap-y-4 w-full mt-6 md:mt-8"}>
                            <Button label="Proceed to Payment"/>
                            <Button label="Cancel order" variant={ButtonVariant.TRANSPARENT}/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
