const fetchApi = async (endPoint,options = {}) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API}/${endPoint}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      ...options
    });

    if (!res.ok) {
      return "not ok";
    }
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default fetchApi;
