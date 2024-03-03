import products from "../product";

const Description = () => {
  return (
    <div>
        {products.map((product) =>(
            <div key={product.id}>
                <p className="">{product.description}</p>
            </div>
        ))}
    </div>
  )
}

export default Description