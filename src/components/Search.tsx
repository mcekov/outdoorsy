import { useEffect, useState } from 'react'
import SearchItem from './SearchItem'
import { getData } from '../utils/data.util'

const Search = () => {
  const [searchText, setSearchText] = useState('')
  const [vehicles, setVehicles] = useState<Vehicles[]>([])

  const url = `https://search.outdoorsy.com/rentals?address=Atlanta%2C%20GA&currency=USD&filter[type]=${searchText}&locale=en-us&page[limit]=24&page[offset]=0`

  type Vehicles = {
    data: { data: [] }
  }

  useEffect(() => {
    const retrieveData = async () => {
      const response = await getData<{ data: { data: [] } }>(url)
      setVehicles(response?.data?.data)
    }

    retrieveData()
  }, [url])

  return (
    <>
      <div className="flex justify-center mt-20">
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="w-[600px] bg-primary border px-4 py-2 rounded-[6px] focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1"
            type="search"
            placeholder="Type to search"
          />
        </form>
      </div>
      <div className="flex justify-center">
        <ul>
          {vehicles?.map((item: object, index: number) => (
            <SearchItem key={index} item={item as any} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default Search
