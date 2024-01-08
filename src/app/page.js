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
                Satu-satunya Cafe & Resto di kota Angin Majalengka yg memiliki
                konsep branch menu aneka durian olahan, aneka makanan dan aneka
                minuman.
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
              src="/carousel/car1.jpg"
              alt="placeholder"
              width={600}
              height={400}
            ></Image>
            <Image
              src="/carousel/car2.jpg"
              alt="placeholder"
              width={600}
              height={400}
            ></Image>
            <Image
              src="/carousel/car3.jpg"
              alt="placeholder"
              width={600}
              height={400}
            ></Image>
          </div>
        </div>
        <div className="mt-20 mb-5 px-4 lg:px-10">
          <h2 className="font-semibold text-2xl text-center">Durian Cake</h2>
          <div className="flex flex-col lg:flex-row">
            <div className="basis-3/4">
              <Image
                src="/mkn.png"
                alt="Makan"
                width={500}
                height={500}
              ></Image>
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
      <section className="bg-gray-100 mb-5">
        <h2 className="text-center font-semibold text-2xl pt-5">Rute</h2>
        <div className="flex justify-center mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.228994738724!2d108.24915567577858!3d-6.741898193254407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f27f7a96bfe3f%3A0x15406897479a8aa2!2sKedai%20Rumah%20Duren!5e0!3m2!1sen!2sid!4v1704742245925!5m2!1sen!2sid"
            width="1080"
            height="400"
            className="border-2"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Page;
