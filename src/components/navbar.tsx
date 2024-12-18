const Navbar = () => {
    return (
        <div className="flex justify-end gap-x-2 mx-[25em] p-2 border border-gray-800">
            <div>image</div>
            <div>Security</div>
            <div>System</div>
            <button className="bg-[#CDEBFF] border-[3px] border-[#25ABE2] border-opacity-[20%] rounded-[12px] text-[#25ABE2] font-semibold leading-4 px-5 py-3">Connect wallet</button>
        </div>
    )
}

export default Navbar;