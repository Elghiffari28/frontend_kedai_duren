import MenuList from "@/components/MenuList";

const page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api_menu`
  );
  const menu = await response.json();
  const menus = menu.payload.data;

  return (
    <div className="mt-16">
      <h1 className="text-center text-3xl font-bold p-5">Daftar Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 px-5">
        {menus.map((data) => {
          return (
            <MenuList
              key={data.id}
              nama_menu={data.nama_menu}
              gambar={data.gambar}
              deskripsi={data.deskripsi}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
