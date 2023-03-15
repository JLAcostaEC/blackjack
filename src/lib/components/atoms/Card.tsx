import './Card.css'

type props = {
  src: string
}

export default function Card(props: props) {
  return (
    <div id="card-wrapper" className='transition-all'>
      <img src={props.src || '/'} className="w-28"/>
    </div>
  )
}