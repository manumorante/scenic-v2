import { config } from '@/lib/config'
import type { Movie } from '@/types'

type Props = {
  title: Movie['title']
  src?: Movie['poster_path']
}

export default function MovieCard({ title, src }: Props) {
  const image = src ? `${config.imgBaseURL}/w500${src}` : ''
  return (
    <div className="poster-aspec-ratio bg-black">
      {image && <img className="w-full h-auto" src={image} alt={title} />}
    </div>
  )
}
