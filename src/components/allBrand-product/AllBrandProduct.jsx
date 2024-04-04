import { useSelector } from "react-redux"
import "./AllBrandProduct.scss"
import { IoStar } from "react-icons/io5";
import { useState } from "react";
import parse from "html-react-parser"
import { Link } from "react-router-dom";
import { Container } from "../../utils/Utils";

const AllBrandProduct = () => {

    const [numbRandom, setNumbRandom] = useState(Math.floor(Math.random() * 50))

    const {products_data} = useSelector(state => state.products)
    console.log(products_data);
  return (
    <Container>

    <div className="allbrands">
      <h2 className="allbrands-title">All Brands</h2>
    <div className="brand__products-wrapper">
        {
            products_data.slice(0,80).map(product => 
                <div className="product-card">
                    <Link to={`/single-product/${product.id}`}>
                      <img src={product.api_featured_image}/>
                      </Link>
                      <div className="product-content">

                    <h4 className="product-name">{product.name.slice(0,20)}</h4>
                    <div className="icons-card">
                    <i><IoStar/></i>
                    <i><IoStar/></i>
                    <i><IoStar/></i>
                    <i><IoStar/></i>
                    <i><IoStar/></i>
                    <strong className="store-count">({numbRandom})</strong>
                    </div>
                    <p>{parse(product.description.slice(0,30))}</p>
                    </div>
                </div>
                )
        }
    </div>
    </div>
    </Container>
  )
}

export default AllBrandProduct