import '../css/ItemListContainer.css'
const ItemListContainer = (props) => {
  return (
    <div className="container mx-auto contenedor">
        <h1 className='texto'>{props.texto}</h1>
    </div>
  )
}
export default ItemListContainer