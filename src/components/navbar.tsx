import Image from "next/image";
import Button from "./button";

const Navbar = () => {
    return (
        <div className="mx-10 sm-lg:mx-auto flex justify-between items-center gap-x-2 py-5 max-w-[850px] mx-auto">
            <Image src={"/assets/ice-stake-logo.svg"} width={40} height={30} alt="logo" />
            <div className="flex items-center gap-x-5 font-jet-brains">
                <div className="font-medium">Security</div>
                <div className="font-medium">System</div>
                <Button>Connect wallet</Button>
            </div>
        </div>
    )
}

export default Navbar;