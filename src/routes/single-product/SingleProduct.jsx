import { useEffect, useState } from "react"
import "./SingleProduct.scss"
import { useParams } from "react-router-dom"
import { instance } from "../../api"
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdBrandingWatermark } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";
import parse from "html-react-parser"

const SingleProduct = () => {

  const [singleProductData, setSingleProductData] = useState([])
  const { id } = useParams()

  const [randomNumb, SetnandomNumb] = useState(Math.floor(Math.random() * 20));

  useEffect(() => {
    instance(`/products/${id + ".json"}`)
      .then(response => {
        console.log(response.data)
        setSingleProductData(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="product__wrapper">
      <div className="product-content">
        <h3>{singleProductData.name}</h3>
        <p>{(singleProductData.description?.slice(0, 300))}</p>
        <div className="icons">
          <i><FaStar /></i>
          <i><FaStar /></i>
          <i><FaStar /></i>
          <i><FaStar /></i>
          <i><FaStarHalfAlt /></i>
        </div>
      </div>
      <div className="product-image">
        <img src={singleProductData.api_featured_image
        } alt="" />
      </div>
      <div className="product__actions-container">
        <div className="brand">
          <strong><MdBrandingWatermark />Brand</strong>
          <h3>{singleProductData.brand}</h3>
        </div>
        {
          singleProductData.price === "0" ? <strong className="price-text">{singleProductData.price} $</strong>
          :<strong className="price-text"> {randomNumb} $</strong>
        }

        <div className="btn-actions">
          <button>Add To Cart</button>
          <button>Purchase</button>
        </div>
        <div className="service">
          <i><GrDeliver /></i>
          <p>Delivery Service</p>
        </div>
          <div className="chegirma">
          <span>Get</span> <b>15%</b> <span>Off</span>
          </div>
      </div>
    </div>
  )
}

export default SingleProduct