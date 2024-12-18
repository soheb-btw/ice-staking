const Button = ({ children }: { children: string}) => {
  return (
    <button className="bg-[#CDEBFF] border-[3px] border-[#25ABE2] border-opacity-[20%] rounded-[12px] text-[#25ABE2] font-semibold leading-4 px-5 py-3">
      {children}
    </button>
  );
};

export default Button;