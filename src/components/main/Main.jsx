import "./Main.scss"
import { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux"
import { loadProducts } from "../../redux/actions/product-action"
import { loadFavouriteProduct } from "../../redux/actions/favourite-action";
import { loadCarts } from "../../redux/actions/cart-action";
import parse from "html-react-parser"
import Parf1 from "../../assets/images/parf1.png"
import Parf2 from "../../assets/images/parf2.png"
import Parf3 from "../../assets/images/parf3.png"
import Parf4 from "../../assets/images/parf4.png"

// ICONS
import { FaHeart } from "react-icons/fa";

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import { Container } from "../../utils/Utils";


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
        <Container>


        <div className="main-title">
          <h3>Best Sellers</h3>
          <Link> See All</Link>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={50}
          centeredSlides={false}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          
          navigation={true}

          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >

          <SwiperSlide className="slide-card"   >
            <img src={'https://img.fragrancex.com/images/products/sku/small/61100w.jpg'} />
            <p>Bright Crystal By Versace As low as $ 12.71</p>
          </SwiperSlide>
          <SwiperSlide className="slide-card">
            <img src={"https://img.fragrancex.com/images/products/sku/small/884w.jpg"} />
            <p>Light Blue By Dolce & Gabbana  As low as $ 34.60</p>
          </SwiperSlide>
          <SwiperSlide className="slide-card">
            <img src={"https://img.fragrancex.com/images/products/sku/small/67930w.jpg"} />
            <p>Jimmy Choo By Jimmy Choo As low as $27.38</p>
          </SwiperSlide>
          <SwiperSlide className="slide-card">
            <img src={"https://img.fragrancex.com/images/products/sku/small/352w.jpg"} />
            <p>Eternity By Calvin Klein As low as $ 20</p>
          </SwiperSlide>
          <SwiperSlide className="slide-card">
            <img src="https://img.fragrancex.com/images/products/sku/small/1099w.jpg" />
            <p> Red Door By Elizabeth ArdenAs low as $ 8.64</p>
          </SwiperSlide>
          <SwiperSlide className="slide-card">
            <img src="https://img.fragrancex.com/images/products/sku/small/60582w.jpg" />
            <p>EuphoriaBy Calvin KleinAs low as $ 20.89 </p>
          </SwiperSlide>


        </Swiper>
        </Container>

      </main>
    </>
  )
}

export default connect(null, { loadProducts, loadCarts, loadFavouriteProduct })(Main)