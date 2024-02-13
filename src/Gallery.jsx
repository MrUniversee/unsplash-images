import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useGlobalContext } from './context'
const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
 }`
const Gallery = () => {
  const { searchQuery } = useGlobalContext()
  const { isLoading, isError, data } = useQuery({
    queryKey: ['images', searchQuery],
    queryFn: async () => {
      const response = await axios(`${url}&query=${searchQuery}`)
      return response.data
    },
  })

  if (isLoading) {
    return (
      <section className="image-container">
        <h4>loading...</h4>
      </section>
    )
  }
  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    )
  }
  const images = data.results
  if (images.length < 1) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    )
  }

  return (
    <section className="image-container">
      {images.map((item) => {
        const url = item?.urls?.regular
        return (
          <img
            key={item.id}
            src={url}
            className="img"
            alt={item.alt_description}
          />
        )
      })}
    </section>
  )
}
export default Gallery
