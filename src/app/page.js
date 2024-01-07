import ImageSlider from "@/components/ImageSlider";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      <section className="bg-left bg-cover bg-no-repeat bg-[url('/hero.jpg')] ">
        <div className="flex justify-end">
          <div className="hidden lg:block lg:basis-1/2 "></div>
          <div className="px-4 mx-auto text-center py-24 lg:py-56">
            <div className="bg-slate-500 opacity-75 rounded-lg shadow-lg p-3 mb-8 md:p-6 lg:bg-transparent lg:shadow-transparent">
              <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-third md:text-5xl lg:text-6xl">
                Kedai Rumah Duren
              </h1>
              <p className="text-lg font-normal text-gray-200 lg:text-gray-800 lg:text-xl sm:px-16 lg:px-48">
                Restoran dengan olahan durian terbaik cenahmah
              </p>
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
              <a
                href="/reservasi"
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary dark:focus:ring-primary"
              >
                Pesan Sekarang
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a
                href="/about"
                className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-primary rounded-lg border border-gray-800 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
              >
                Tentang Kami
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-bg py-10">
        <div className="px-4">
          <h2 className="font-semibold text-center text-2xl mb-8">
            Makanan Favorite
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <Image
              src="https://placehold.co/600x400/png"
              width={600}
              height={400}
            ></Image>
            <Image
              src="https://placehold.co/600x400/png"
              width={600}
              height={400}
            ></Image>
            <Image
              src="https://placehold.co/600x400/png"
              width={600}
              height={400}
            ></Image>
          </div>
        </div>
        <div className="mt-20 mb-5 px-4 lg:px-10">
          <h2 className="font-semibold text-2xl text-center">Durian Cake</h2>
          <div className="flex flex-col lg:flex-row">
            <div className="basis-3/4">
              <Image src="/mkn.png" width={500} height={500}></Image>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                architecto non, sunt consequatur sit iste beatae sed saepe dicta
                fuga tempora eos temporibus necessitatibus excepturi
                reprehenderit ut numquam quia sint.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus vitae
          distinctio quas totam officiis obcaecati debitis assumenda, deleniti
          eum doloribus nihil tempore ab cum similique. Dolorum delectus sed
          eos, rerum eaque rem praesentium, earum modi dolores quod nemo
          aspernatur quisquam illo. Non quod, sapiente nisi soluta et fugiat
          nesciunt nam doloremque itaque accusamus, officia aliquam placeat
          voluptates provident optio nemo reprehenderit? Ducimus possimus qui
          facere enim iusto reprehenderit. Velit odio exercitationem, minima a
          voluptates officia dolorum aliquid, cum illum porro non totam
          necessitatibus quasi id molestiae fugiat. Officia quaerat nulla sit
          aliquam vel nesciunt, iure recusandae soluta, vero blanditiis fugit?
        </p>
      </section>
    </div>
  );
};

export default Page;
