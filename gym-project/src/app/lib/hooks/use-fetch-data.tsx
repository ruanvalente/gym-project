import { useEffect } from "react";

export function useFetchData(
  url: string,
  setState: React.Dispatch<React.SetStateAction<any>>
) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setState(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url, setState]);
}
