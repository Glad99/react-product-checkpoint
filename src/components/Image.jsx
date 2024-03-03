
import products from "../product";
const Image = () => {
  return (
    <div>{products.map((product) =>(
        <div key={product.id}>
            <img src={product.imageUrl} alt={product.name}/>
        </div>
    ))}</div>
  )
}

export default Image