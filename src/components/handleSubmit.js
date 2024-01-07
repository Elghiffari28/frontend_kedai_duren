const handleSubmit = async (formData, router, toast) => {
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
    toast.success("Pemesanan Berhasil");
    // Lakukan sesuatu setelah mengirim data
    router.push("/");
  } catch (error) {
    console.error("Error:", error);
  }
};

export default handleSubmit;
