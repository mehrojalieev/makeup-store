import { useSelector } from "react-redux"
import "./AllBrandProduct.scss"
import { IoStar } from "react-icons/io5";
import { useState } from "react";
import parse from "html-react-parser"

const AllBrandProduct = () => {

    const [numbRandom, setNumbRandom] = useState(Math.floor(Math.random() * 50))

    const {products_data} = useSelector(state => state.products)
    console.log(products_data);
  return (
    <div className="brand__products-wrapper">
        {
            products_data.slice(0, 60).map(product => 
                <div className="product-card">
                    <img src={product.api_featured_image}/>
                    <h4>{product.name}</h4>
                    <div className="icons-card">
                    <i><IoStar/></i>
                    <i><IoStar/></i>
                    <i><IoStar/></i>
                    <i><IoStar/></i>
                    <i><IoStar/></i>
                    <strong>({numbRandom})</strong>
                    </div>
                    <p>{parse(product.description.slice(0,30))}</p>
                </div>
                )
        }
    </div>
  )
}

export default AllBrandProduct