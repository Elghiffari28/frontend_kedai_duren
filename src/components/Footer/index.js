import GetDate from "../getDate";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="text-center md:text-left">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mx-6 py-10">
          {/* Navigation Section */}
          <div className="flex flex-col justify-center">
            <h6 className="text-2xl font-bold mb-5">Navigasi</h6>
            <p className="mb-4">
              <a href="/">Beranda</a>
            </p>
            <p className="mb-4">
              <a href="/menu">Menu</a>
            </p>
            <p className="mb-4">
              <a href="/reservasi">Reservasi</a>
            </p>
            {/* <p className="mb-4">
              <a href="/about">Tentang Kami</a>
            </p> */}
          </div>
          {/* Alamat Section */}
          <div>
            <h6 className="text-2xl font-bold mb-5">Alamat</h6>
            <p>
              Jl. Raya Cirebon - Bandung No.55, Burujul Wetan, Kec. Jatiwangi,
              Kabupaten Majalengka, Jawa Barat 45454
            </p>
            <div className="py-2 mt-3 mx-auto md:mx-0 bg-primary max-w-[150px] rounded-lg shadow-lg flex justify-center items-center">
              <a href="https://www.google.com/maps/dir//Jl.+Raya+Cirebon+-+Bandung+No.55,+Burujul+Wetan,+Kec.+Jatiwangi,+Kabupaten+Majalengka,+Jawa+Barat+45454/@0,0,22z/data=!4m6!4m5!1m0!1m2!1m1!1s0x2e6f27f7a96bfe3f:0x15406897479a8aa2!3e0?gl=id">
                Direction
              </a>
            </div>
          </div>
          {/* Contact Section */}
          <div>
            <h6 className="text-2xl font-bold mb-5">Contact</h6>
            <a href="/wa" className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path d="M19.077,4.928C17.191,3.041,14.683,2.001,12.011,2c-5.506,0-9.987,4.479-9.989,9.985 c-0.001,1.76,0.459,3.478,1.333,4.992L2,22l5.233-1.237c1.459,0.796,3.101,1.215,4.773,1.216h0.004 c5.505,0,9.986-4.48,9.989-9.985C22.001,9.325,20.963,6.816,19.077,4.928z M16.898,15.554c-0.208,0.583-1.227,1.145-1.685,1.186 c-0.458,0.042-0.887,0.207-2.995-0.624c-2.537-1-4.139-3.601-4.263-3.767c-0.125-0.167-1.019-1.353-1.019-2.581 S7.581,7.936,7.81,7.687c0.229-0.25,0.499-0.312,0.666-0.312c0.166,0,0.333,0,0.478,0.006c0.178,0.007,0.375,0.016,0.562,0.431 c0.222,0.494,0.707,1.728,0.769,1.853s0.104,0.271,0.021,0.437s-0.125,0.27-0.249,0.416c-0.125,0.146-0.262,0.325-0.374,0.437 c-0.125,0.124-0.255,0.26-0.11,0.509c0.146,0.25,0.646,1.067,1.388,1.728c0.954,0.85,1.757,1.113,2.007,1.239 c0.25,0.125,0.395,0.104,0.541-0.063c0.146-0.166,0.624-0.728,0.79-0.978s0.333-0.208,0.562-0.125s1.456,0.687,1.705,0.812 c0.25,0.125,0.416,0.187,0.478,0.291C17.106,14.471,17.106,14.971,16.898,15.554z"></path>
              </svg>
              <span className="ml-3">0877-2345-9026</span>
            </a>
            <a href="/ig" className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
              </svg>
              <span className="ml-3">kedaikopijebor</span>
            </a>
            <a href="/fb" className="flex items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h7.621v-6.961h-2.343v-2.725h2.343V9.309 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365V21H19c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z"></path>
              </svg>
              <span className="ml-3">Kedai Rumah Duren Cafe & Resto</span>
            </a>
          </div>
        </div>
        <GetDate />
      </div>
    </footer>
  );
};

export default Footer;
