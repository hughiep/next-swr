import useSWR from "swr"

export const fetcher = () => fetch("https://randomfox.ca/floof/").then(res => res.json());

export function useAnimal (initData) {
  const { data, error } = useSWR(`/api/dogs`, fetcher, initData);

  return {
    animal: data,
    isLoading: !error && !data,
    isError: error
  }
}