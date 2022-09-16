

const Item = ({spec}) => {
  return (
    <article>
        <h3>{spec.name}</h3>
        <p>{spec.img}</p>
    </article>
  )
}

export default Item