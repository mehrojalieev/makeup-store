import { connect, useSelector } from "react-redux"
import { loadProducts } from "../../redux/actions/product-action"
import "./Main.scss"
import parse from "html-react-parser"
import { FaRegHeart } from "react-icons/fa";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import { useState } from "react";


const Main = () => {


  const { products_data } = useSelector(state => state.products)
  console.log(products_data);


  const [openLike, setOpenLike] = useState(false)
  const handleHoverImage = (id) => {
    console.log(id);
    if(id){
      setOpenLike(true)
    }
  }


  return (
    <>
      <main>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}

          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {
            products_data.slice(5, 25).map(product =>
              <SwiperSlide key={product.id}>
                <div className="card-image">
                  <Link to={`single-product/${product.id}`}>
                    <img  onMouseEnter={() =>handleHoverImage(product.id)} src={product.api_featured_image} alt="Image" />
                  </Link>
                  <button style={openLike ? {display: "block"} : {display: "none"}} className="like-btn"><FaRegHeart /></button>
                </div>
                <h3 className="product-name">{product.name.slice(0, 15)}</h3>
                {
                  product.description  ? <p className="product-description">{parse(product.description.slice(0, 25))}</p>
                    : <p>Lorem ipsum dolor sit amet consectetur.</p>
                }
                <div className="price-action">
                  <strong>Price</strong>
                  <p>{product.price} $</p>
                </div>
                <div className="add-cart-btn">
                  <button>Add to card</button>
                </div>
              </SwiperSlide>

            )
          }

        </Swiper>
      </main>
    </>
  )
}

export default connect(null, { loadProducts })(Main)