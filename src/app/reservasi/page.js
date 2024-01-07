"use client";
import React, { useState } from "react";
import StarRating from "@/components/Penilaian";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import handleSubmit from "@/components/handleSubmit";
import useFetchData from "@/components/fetchDataMeja";

const page = () => {
  const [formData, setFormData] = useState({});
  const [mejas, setMejas] = useState([]);
  const [error, setError] = useState("");
  const router = useRouter("");

  const handlePostRequest = async (data) => {
    try {
      const response = await fetch("/proses_pemesanan", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error); // Set pesan error ke state
        return;
      }

      // Lakukan sesuatu jika respons berhasil
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData, router, toast);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useFetchData(setMejas);

  return (
    <div className="mt-16 min-h-screen">
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="mb-5 p-5">
        <h1 className="text-2xl font-semibold text-center">
          Reservasi Kedai Rumah Duren
        </h1>
      </div>
      <form className="max-w-lg mx-auto" onSubmit={onSubmit}>
        <div className="mb-5">
          <label
            htmlFor="nama"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Nama Koordinator
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Nama Anda"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="nohp"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            No. HP
          </label>
          <input
            type="text"
            id="nohp"
            name="nohp"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="No HP anda"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="jumlah_tamu"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Jumlah Tamu
          </label>
          <input
            type="text"
            id="jumlah_tamu"
            name="jumlah_tamu"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Jumlah Tamu"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-start justify-between mb-5 mt-5 gap-5">
          <div className="flex items-center h-5">
            <label
              htmlFor="tanggal"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Tanggal Booking
            </label>
            <input
              type="date"
              id="tanggal"
              name="tanggal"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center h-5">
            <label
              htmlFor="jam"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Jam Booking
            </label>
            <input
              type="time"
              id="jam"
              name="jam"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center">
            <label
              htmlFor="id_meja"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              No Meja
            </label>
            <select name="id_meja" id="id_meja" onChange={handleInputChange}>
              <option value="">---</option>
              {mejas.map((data) => {
                return (
                  <option key={data.no_meja} value={data.no_meja}>
                    {data.no_meja}
                  </option>
                );
              })}
            </select>
          </div>
          <p className="text-gray-600 text-xs italic">
            Keterangan: I = Indoor O = Outdoor L = Lesehan P = Parkiran
          </p>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mt-5 px-5 py-2.5 text-center "
        >
          Pesan Sekarang
        </button>
      </form>
      <StarRating />
    </div>
  );
};

export default page;
