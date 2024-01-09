import { useState } from "react";

const submitRatingToServer = async (ratingValue) => {
  try {
    const response = await fetch("http://localhost:3001/rating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating: ratingValue }),
    });

    if (response.ok) {
      console.log("Rating submitted successfully!");
      // Lakukan sesuatu setelah berhasil mengirim rating ke server
    } else {
      console.error("Failed to submit rating");
      // Handle kesalahan jika gagal mengirim rating ke server
    }
  } catch (error) {
    console.error("Error submitting rating:", error);
    // Handle error jika ada kesalahan dalam proses pengiriman rating
  }
};

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (event, router) => {
    event.preventDefault();
    console.log("Rating:", rating);
    submitRatingToServer(rating);
    setSubmitted(true);
  };

  if (submitted) {
    return null; // Jika form sudah di-submit, tampilkan null (tidak ada yang ditampilkan)
  }

  return (
    <div className="bg-white border-2 rounded-lg shadow-lg p-4 w-72">
      <p className="text-center mb-2">
        Seberapa puaskah anda menggunakan website ini?
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col mx-auto">
        <div className="flex flex-row items-center gap-3 mx-auto">
          {[...Array(5)].map((_, index) => {
            const value = index + 1;
            return (
              <label key={index} className="flex items-center">
                <input
                  type="radio"
                  name="rating"
                  value={value}
                  onClick={() => handleRatingChange(value)}
                />
                {/* Tambahkan tampilan ikon bintang di sini */}
                {/* Contoh: */}
                <svg
                  className="w-4 h-4 text-yellow-300 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </label>
            );
          })}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StarRating;
