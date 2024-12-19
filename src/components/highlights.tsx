import Image from "next/image";

const Highlights = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 sm-lg:grid grid-cols-2 grid-rows-2-auto gap-x-3 sm-lg:gap-y-10">
            <div className="text-[2.5rem] font-bold leading-[43px] bg-clip-text text-transparent bg-gradient-to-t from-[#25ABE2] via-[#0A2935] via-[30%] to-[#0A2935]">A safe & trusted <br /> staking solution</div>
            <div className="opacity-60 text-[#0A2935] font-medium leading-5 font-jet-brains flex justify-between items-center">Ice Staking has been helping 147,548 people stake on Solana for 2+ years</div>
            <Image src={"/assets/highlight-frame-1.svg"} width={414} height={382} alt="logo" />
            <div className="flex flex-col gap-3 justify-between items-center">
                <Image src={"/assets/highlight-frame-2.svg"} width={414} height={240} alt="logo" />
                <Image src={"/assets/highlight-frame-3.svg"} width={414} height={130} alt="logo" />
            </div>
        </div>
    )
}

export default Highlights;