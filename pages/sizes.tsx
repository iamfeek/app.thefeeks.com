import fetcher from "../lib/fetch"
import useSWR from "swr"

const SizesPage = () => {
  const { data = [] } = useSWR('/api/posts', fetcher)
  console.log(data);

  return <h1>Sizes: {data.length}</h1>
}

export default SizesPage;