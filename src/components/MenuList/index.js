import Image from "next/image";
const MenuList = ({ nama_menu, gambar, deskripsi }) => {
  const imgaeURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.IMAGE_URL}`;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-secondary mb-10 max-h-[450px] md:max-h-[420px] h-full">
      <div className="min-h-[350px] max-h-[350px]">
        <Image
          src={imgaeURL + gambar}
          width={500}
          height={500}
          alt="Menu"
          priority={true}
          className="max-h-44 object-cover object-center"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{nama_menu}</div>
          <p className="text-gray-700 text-base overflow-clip">{deskripsi}</p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Durian
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Kedai
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Food
        </span>
      </div>
    </div>
  );
};

export default MenuList;
