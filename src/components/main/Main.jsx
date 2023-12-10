import { connect, useSelector } from "react-redux"
import { loadProducts } from "../../redux/actions/product-action"
import { loadFavouriteProduct } from "../../redux/actions/favourite-action";
import { useEffect, useState } from "react";
import "./Main.scss"
import parse from "html-react-parser"
import { FaHeart } from "react-icons/fa";
import { loadCarts } from "../../redux/actions/cart-action";

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";


const Main = (props) => {

  const { products_data } = useSelector(state => state.products)

  const {currency_data} = useSelector(state => state.currency)
  console.log(currency_data);

  
  
  useEffect(() => {
    props.loadCarts()
    props.loadFavouriteProduct()
  }, [])

  const [randomNumb, SetnandomNumb] = useState(Math.floor(Math.random() * 50))
  const [openLike, setOpenLike] = useState(false)



  const handleCart = (product) => {
    if(product.length !==  0){ 
      props.loadCarts(product)
      console.log(loadCarts);
    }
  }


  const handleLike = (likedProduct) => {
      console.log(likedProduct);
            props.loadFavouriteProduct(likedProduct)
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
                    <img  src={product.api_featured_image} alt="Image" />
                    <button onClick={() => handleLike(product)} className="like-btn"><FaHeart/></button>
                  </Link>
                </div>
                <h3 className="product-name">{product.name.slice(0, 15)}</h3>
                {
                  product.description  ? <p className="product-description">{parse(product.description.slice(0, 25))}</p>
                    : <p>Lorem ipsum dolor sit amet consectetur.</p>
                }
                <div className="price-action">
                  <strong>Price</strong>
                   <p>{currency_data == "uzs" ? product.price * 12300 +"Sum" : currency_data == "rubl" ? product.price * 92+"Rubl" : product.price} </p>
                </div>
                <div className="add-cart-btn">
                  <button onClick={() => handleCart(product)}>Add to card</button>
                </div>
              </SwiperSlide>

            )
          }

        </Swiper>
      </main>
    </>
  )
}

export default connect(null, { loadProducts, loadCarts, loadFavouriteProduct })(Main)