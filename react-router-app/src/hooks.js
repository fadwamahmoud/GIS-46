import { useEffect } from "react";
import { useState } from "react";

export const useFetchImage = () => {
  const [imageURL, setImageURL] = useState(null);

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);
  // reusable
  useEffect(() => {
    setTimeout(() => {
      fetch("https://picsum.photos/v2/list", {
        header: {
          "User-Agent": "gis",
        },
      })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }

          return response.json();
        })
        .then((response) => {
          console.log(response[0].download_url);
          setImageURL(response[0].download_url);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    }, 5000);

    // fetch
  }, []);

  return { imageURL, error, loading };
};
