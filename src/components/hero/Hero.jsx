import { NavLink } from "react-router-dom"
import { connect, useSelector } from "react-redux";
import { loadProducts } from "../../redux/actions/product-action";
import bannerForHead from "../../assets/images/bannerForHead.png"
import Lock from "../../assets/images/lock.svg"
import Trusted from "../../assets/images/trusted.svg"
import Delivery from "../../assets/images/deliver.svg"
import { FaStar } from "react-icons/fa";
import "./Hero.scss"

// SWIPER CONNECT
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import db from "../../categories/categories.json"
const Hero = (props) => {

  const typeOf = Object.keys(db)

  const categories = ["pencil", "lipstick", "liquid", "", null, "powder", "lip_gloss", "gel", "cream", "palette", "concealer", "highlighter", "bb_cc", "contour", "lip_stain", "mineral"]

  useEffect(() => {
    props.loadProducts()
  }, [])

  const { products_data } = useSelector(state => state.products)

  return (
    <header>
      <div className="hero__navbar">
        <div className="hero__nav-icons">
          <i><FaStar/></i>
          <i><FaStar/></i>
          <i><FaStar/></i>
          <i><FaStar/></i>
          <i><FaStar/></i>
        </div>
        <p>over 20 million customers</p>
      </div>
  

      <div className="hero__banner">
        <Swiper
         autoplay={{delay: 3000}}
         speed={1300}
         slidesPerView={1}
         slidesPerGroup={1}
         loop={true}
         navigation={true}
         modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper hero-swiper"
        >
          <SwiperSlide data-swiper-autoplay="2000" className="swiper-card"><img src="https://i.makeupstore.uz/c/cf/cfpcwugzzwxw.jpg" alt="" /></SwiperSlide>
          <SwiperSlide data-swiper-autoplay="2000" className="swiper-card"><img src="https://i.makeupstore.uz/l/lh/lhmzvn7e56y0.jpg" alt="" /></SwiperSlide>

        </Swiper>
      </div>

          <div className="hero__feature">
              <div className="feature-card">
                <img width={65} height={65} src={Lock} alt="Lock" />
                <p> Safe & secury Checkout </p>
              </div>
              <div className="feature-card">
                <img width={65} height={65} src={Trusted} alt="Lock" />
                <p> 100% authentic fragrances </p>
              </div>
              <div className="feature-card">
                <img width={65} height={65} src={Delivery} alt="Lock" />
                <p>Items Ship Same Day</p>
              </div>
          </div>

    </header>
  )
}

export default connect(null, { loadProducts })(Hero)