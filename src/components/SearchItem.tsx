type SearchItemProps = {
  item: {
    id: string
    name: string
    attributes: {
      primary_image_url: string
      name: string
    }
  }
}

const SearchItem = ({ item }: SearchItemProps) => {
  return (
    <li key={item.id}>
      <div className="flex items-center py-5 w-[600px]">
        <img
          className="object-cover h-20 w-40 rounded-md"
          src={item.attributes?.primary_image_url}
          alt={item.name}
        />
        <div className="ml-5">{item.attributes?.name}</div>
      </div>
    </li>
  )
}

export default SearchItem
