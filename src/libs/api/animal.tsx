import useSWR from "swr"

const fetcher = () => fetch("https://randomfox.ca/floof/").then(res => res.json());

export function useAnimal () {
  const { data, error } = useSWR(`/api/dogs`, fetcher)

  return {
    animal: data,
    isLoading: !error && !data,
    isError: error
  }
}