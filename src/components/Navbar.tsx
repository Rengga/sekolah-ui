import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4">
      <div className="hidden md:flex py-2 px-4 gap-2 w-72 rounded-full bg-white border border-purple-300">
        <Image src="/search.png" alt="" width={14} height={14} className="object-contain" />
        <input type="text" placeholder="Search..." className="w-full focus:outline-none" />
      </div>
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="" width={20} height={20} />
          <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">1</div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Kobo Kanaeru</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full" />
      </div>
    </div>
  );
};

export default Navbar;
