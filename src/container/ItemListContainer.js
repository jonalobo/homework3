import ItemCount from '../components/ItemCount'
import '../css/ItemListContainer.css'
const ItemListContainer = () => {
  return (
    <div className='contenedor'>
      <ItemCount 
      stock="3"
      initial= '1'
      />
    </div>
  )
}
export default ItemListContainer