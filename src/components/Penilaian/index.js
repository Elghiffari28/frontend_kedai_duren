import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan sesuatu dengan nilai penilaian, seperti mengirimkan ulasan dan rating ke server
    console.log("Rating:", rating);
    // ... kode untuk mengirim data ke server atau melakukan tindakan lainnya
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {[...Array(5)].map((_, index) => {
          const value = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={value}
                onClick={() => handleRatingChange(value)}
              />
              {/* Tambahkan tampilan ikon bintang di sini */}
              {/* Contoh: */}
              <span>{"\u2605"}</span>
            </label>
          );
        })}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StarRating;
