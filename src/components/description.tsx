
import Image from "next/image";

const Description = () => {
    return (
        <div className="flex items-center justify-center py-5">
            <div className="relative flex justify-between gap-[60px] flex-col">
                <div className="flex w-fit font-jet-brains gap-x-4 justify-around bg-[#f1f9ff] border-opacity-[12%] border-[#25ABE2] border-[2px] py-[6px] px-3 shadow-[0_0_20px_0_#25ABE21F] backdrop-filter: blue(4px) rounded-[10px] font-bold text-sm after:content-[url('/assets/snow-1.svg')] after:h-auto after:w-full after:bg-no-repeat after:absolute after:top-[-8px] after:right-[-50px]">
                    <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#25ABE2] to-[#0A2935]">$105 TVL</span>
                    <span className="border-[1px] border-[#25ABE2] border-opacity-[20%]"></span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#25ABE2] to-[#0A2935]">5.2M SOL Staked</span>
                    <span className="border-[1px] border-[#25ABE2] border-opacity-[20%]"></span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-t from-[#25ABE2] to-[#0A2935]">12.7% APY</span>
                </div>
                <div className="font-bold flex flex-col gap-4">
                    <div className="text-[3.25rem] font-bold leading-[3.25rem] bg-clip-text text-transparent pb-2 bg-gradient-to-t from-[#25ABE2] via-[#0A2935] via-[10%] to-[#0A2935]">
                        <span className="text-[3.25rem] font-bold leading-[3.25rem] text-[#00DDFF]">$SOL</span>
                        <Image className="inline-block w-[50px] h-[50px]" src={'/assets/solana-logo.svg'} width={40} height={40} alt={'snow'} />
                        Backed Infrastructure Funding</div>
                    <div className="opacity-60 text-[#0A2935] font-medium leading-5 font-jet-brains">Ice Staking is an initiative to help fund open source infrastructure on Solana</div>
                </div>
                <div className="flex justify-between items-center bg-white rounded-2xl px-[10px] py-2 gap-2">
                    <Image className="w-[32px] h-[32px]" src={'/assets/solana-logo-2.png'} width={32} height={32} alt={'solana logo'} />
                    <input type="text" placeholder="Enter Amount" className="font-semibold mr-auto outline-none opacity-40 w-full" />
                    <div className="flex gap-5 border-l-2 border-[#25ABE2] border-opacity-[20%]">
                        <select className="z-20 pl-3 outline-none font-semibold text-[#0A2935] flex justify-center items-center" name="cars" id="cars">
                            <option value="nativeStake">Native Stake</option>
                            <option value="liquidStake">Liquid Stake</option>
                        </select>

                        <button className="bg-gradient-to-t w-[105px] from-[#00ddff] text-white to-[#25abe2] rounded-2xl px-5 py-3 font-semibold bg-[#CDEBFF] border-[3px] border-[#25ABE2B2] border-opacity-[70%] leading-[18px]">Stake</button>
                    </div>
                </div>
            </div>
            <div>
                <Image className="hidden sm-lg:min-h-[100px] sm-lg:block" src={"/assets/ice-stake-logo.svg"} width={610} height={0} alt="logo" />
            </div>
        </div>
    )
}

export default Description;