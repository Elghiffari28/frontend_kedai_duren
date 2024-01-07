import { useState, useEffect } from "react";

const useFetchData = (setMejas) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api_meja`
        );
        const mejaData = await response.json();
        const mejasFromApi = mejaData.payload.data;
        setMejas(mejasFromApi); // Simpan data meja ke dalam state
      } catch (error) {
        console.error("Error fetching meja:", error);
      }
    };

    fetchData(); // Panggil fungsi untuk mengambil data meja saat komponen dimuat
  }, [setMejas]);
};

export default useFetchData;
