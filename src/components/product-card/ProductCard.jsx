import "./ProductCard.scss"
const ProductCard = ({product}) => {
  return (
    <div className="product-card">
        <img src={product?.images[0]} />
    </div>
  )
}

export default ProductCard
