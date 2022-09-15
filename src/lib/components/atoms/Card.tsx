
type props = {
  src: string
}

export default function Card(props: props) {
  return (
    <img src={props.src || '/'} className="w-1/2"/>
  )
}