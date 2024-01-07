import Image from "next/image";
const MenuList = ({ nama_menu, gambar, deskripsi }) => {
  const imgaeURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}${process.env.IMAGE_URL}`;
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-secondary mb-10">
      <Image
        src={imgaeURL + gambar}
        width={500}
        height={500}
        alt="Menu"
        className="max-h-44 object-cover object-center"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{nama_menu}</div>
        <p className="text-gray-700 text-base">{deskripsi}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
};

export default MenuList;
