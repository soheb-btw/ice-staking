import Image from "next/image";

const Footer = () => {
    return (
        <div className="pt-10 mx-auto flex relative flex-col w-full justify-end left-0 bg-white mt-[120px] gap-4 font-jet-brains">
            <Image className="hidden w-full absolute z-[-1] sm-lg:block sm-lg:top-[-100px] screen-xl:top-[-130px]" src={'/assets/footer-wave.svg'} width={1200} height={1200} alt={'footer wave'} />
            <div className="flex-col flex px-10 pb-10 gap-10 sm-lg:max-w-[850px] sm-lg:flex-row mx-auto w-full sm-lg:gap-11">
                <div className="mr-auto flex flex-col gap-4">
                    <div className="text-[#25abe2] text-sm font-semibold font-tasa-orbiter">ABOUT US</div>
                    <Image src={'/assets/ice-skating-footer-logo.svg'} width={52} height={52} alt={'footer wave'} />
                    <div className="text-[#092835] font-medium">Ice Staking is an initiative to help fund <br /> open source infrastructure on Solana</div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#25abe2] text-sm font-semibold font-tasa-orbiter">LINKS</div>
                    <div className="flex flex-col gap-2 opacity-60 text-[#092835]">
                        <div className="font-medium">Gitbook</div>
                        <div className="font-medium">Sanctum</div>
                        <div className="font-medium">Stakewizz</div>
                        <div className="font-medium">Solana Beach</div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#25abe2] text-sm font-semibold font-tasa-orbiter">SOCIALS</div>
                    <div className="flex flex-col gap-2 opacity-60 text-[#092835]">
                        <div className="font-medium">Twitter</div>
                        <div className="font-medium">Discord</div>
                        <div className="font-medium">Telegram</div>
                    </div>
                </div>
            </div>
            <div className="bg-white flex justify-center">
                <Image className="w-full px-6" src={'/assets/footer-text.svg'} width={0} height={100} alt={'footer text'} />
            </div>
        </div>
    )
}

export default Footer;