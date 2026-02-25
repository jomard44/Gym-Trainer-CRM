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
      throw new Error("failed to fetch the api")
    }
    const data = await res.json();
    
    return data;
  } catch (error) {
    console.error(error.message)
  }
};

export default fetchApi;
