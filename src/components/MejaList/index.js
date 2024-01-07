const MejaList = (nilai) => {
  return <option value={nilai}>{nilai}</option>;
};

const getListMeja = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api_meja`
  );
  const meja = await response.json();
  return {
    props: {
      meja,
    },
  };
};

export default { MejaList, getListMeja };
