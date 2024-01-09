import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const handleSubmit = async (formData, router) => {
  try {
    const response = await fetch("http://localhost:3001/proses_pemesanan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(response);
    console.log(response.data); // Menampilkan pesan dari server
    toast.success("Pemesanan Terkirim! tunggu konfirmasi dari admin kami", {
      position: toast.POSITION.TOP_CENTER,
    });
    // Lakukan sesuatu setelah mengirim data
    setTimeout(() => {
      router.push("/");
    }, 5000);
  } catch (error) {
    toast.error("Pemesanan Terkirim!", {
      position: toast.POSITION.TOP_CENTER,
    });
    console.error("Error:", error);
  }
};

export default handleSubmit;
