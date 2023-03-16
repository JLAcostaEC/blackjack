import './Card.css'

type props = {
  src: string
  className?: string
}

export default function Card(props: props) {
  return (
    <div className={`card-wrapper transition-all ${props.className}`}>
      <img src={props.src || '/'} className="w-28"/>
    </div>
  )
}