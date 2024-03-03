
import products from "../product";
const Name = () => {
  return (
    <div>
        {products.map((product) =>(
            <div key={product.id}>
                <h2>{product.name}</h2>
            </div>
        ))}
    </div>
  )
}

export default Name