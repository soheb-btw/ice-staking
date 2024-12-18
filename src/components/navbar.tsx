import Image from "next/image";
import Button from "./button";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center gap-x-2 mx-[25em] py-5">
            <Image src={"/assets/ice-stake-logo.svg"} width={40} height={30} alt="logo" />
            <div className="flex items-center gap-x-5">
                <div className="font-medium">Staking</div>
                <div className="font-medium">System</div>
                <Button>Connect wallet</Button>
            </div>
        </div>
    )
}

export default Navbar;