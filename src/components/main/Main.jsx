import "./Main.scss"
import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux"
import { loadProducts } from "../../redux/actions/product-action"
import { loadFavouriteProduct } from "../../redux/actions/favourite-action";
import { loadCarts } from "../../redux/actions/cart-action";
import parse from "html-react-parser"
// import { useGetParfumesQuery } from "../../api/apiSlice";

// ICONS
import { FaHeart } from "react-icons/fa";

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";


const Main = (props) => {

  // const [getParfumes] = useGetParfumesQuery()
  // console.log(getParfumes);

  const { products_data } = useSelector(state => state.products)
  console.log(products_data);

  const { currency_data } = useSelector(state => state.currency)
  console.log(currency_data);



  useEffect(() => {
    props.loadCarts()
    props.loadFavouriteProduct()
  }, [])

  const [randomNumb, SetnandomNumb] = useState(Math.floor(Math.random() * 50))
  const [openLike, setOpenLike] = useState(false)



  const handleCart = (product) => {
    if (product.length !== 0) {
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

    <div className="main-title">
      <h3>Best Sellers</h3>
      <Link> See All</Link>
    </div>
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
            products_data.slice(0,10).map(product => 
                <SwiperSlide className="slide-card" key={product.id}>
                   <img src={product.api_featured_image} alt="" />
                   <p>{product.name}</p>
                   <strong>By {product.brand}</strong>
                   <strong>As low as {product.price}</strong>
                </SwiperSlide>
              )
          }

        </Swiper>
        
      </main>
    </>
  )
}

export default connect(null, { loadProducts, loadCarts, loadFavouriteProduct })(Main)