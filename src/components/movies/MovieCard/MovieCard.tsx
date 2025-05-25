import { config } from '@/lib/config'
import type { Movie } from '@/types'

type Props = {
  title: Movie['title']
  src: Movie['poster_path']
}

export default function MovieCard({ title, src }: Props) {
  const image = `${config.imgBaseURL}/w500${src}`
  return (
    <div>
      <img className="w-full h-auto poster-aspec-ratio" src={image} alt="" />
      <div className="leading-tight">{title}</div>
    </div>
  )
}
