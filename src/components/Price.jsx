import products from "../product";

const Price = () => {
  return (
    <div>
        {products.map((product) =>(
            <div key={product.id}>
                <p>Price: ${product.price}</p>
            </div>
        ))}
    </div>
  )
}

export default Price