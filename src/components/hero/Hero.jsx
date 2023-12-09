import { NavLink } from "react-router-dom"
import { connect, useSelector } from "react-redux";
import { loadProducts } from "../../redux/actions/product-action";
import bannerImage  from "../../assets/images/banner.png"
import "./Hero.scss"

// SWIPER CONNECT
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect } from "react";

const Hero = (props) => {

    useEffect(() => {
        props.loadProducts()
    }, [])

    const {products_data} = useSelector(state => state.products)

  return (
    <header>
        <div className="hero__navbar">
            <ul className="hero__menu">
                <li><NavLink end className={({isActive}) => isActive ? "hero__nav-item hero__nav-item--active" : "hero__nav-item"}>Blush</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "hero__nav-item hero__nav-item--active" : "hero__nav-item"}>Bronzer</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "hero__nav-item hero__nav-item--active" : "hero__nav-item"}>Eyebrow</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "hero__nav-item hero__nav-item--active" : "hero__nav-item"}>Eyeliner</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "hero__nav-item hero__nav-item--active" : "hero__nav-item"}>Eyeshadow</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "hero__nav-item hero__nav-item--active" : "hero__nav-item"}>Foundation</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "hero__nav-item hero__nav-item--active" : "hero__nav-item"}>Lip liner</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "hero__nav-item hero__nav-item--active" : "hero__nav-item"}>Lipstick</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "hero__nav-item hero__nav-item--active" : "hero__nav-item"}>Mascara</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "hero__nav-item hero__nav-item--active" : "hero__nav-item"}>Nail polish</NavLink></li>
            </ul>
        </div>

    <div className="hero__banner">
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          disableOnInteraction: true,
          pauseOnMouseEnter: false,
          delay: 3500,
          waitForTransition: true,
          reverseDirection: false,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper hero-swiper"
      >
        <SwiperSlide data-swiper-autoplay="2000" className="swiper-card"><img src="https://img.freepik.com/free-vector/perfume-bottle-black-silk-fabric-background_107791-1629.jpg" alt="" /></SwiperSlide>
        <SwiperSlide data-swiper-autoplay="2000" className="swiper-card"><img src={bannerImage} alt="" /></SwiperSlide>
        <SwiperSlide data-swiper-autoplay="2000" className="swiper-card"><img src="https://cdn2.f-cdn.com/contestentries/324803/15600593/568bba204abda_thumb900.jpg" alt="" /></SwiperSlide>
        <SwiperSlide data-swiper-autoplay="2000" className="swiper-card"><img src="https://c8.alamy.com/comp/2M3E26H/sale-banner-with-cosmetic-products-on-black-draped-silk-fabric-vector-realistic-brand-poster-with-luxury-makeup-and-skincare-products-lipstick-and-perfume-bottle-special-offer-promo-background-2M3E26H.jpg" alt="" /></SwiperSlide>
        <SwiperSlide data-swiper-autoplay="2000" className="swiper-card"><img src="https://png.pngtree.com/template/20220331/ourmid/pngtree-original-french-imported-splashing-red-perfume-banner-image_910067.jpg" alt="" /></SwiperSlide>
        <SwiperSlide data-swiper-autoplay="2000" className="swiper-card"><img src="https://t4.ftcdn.net/jpg/03/62/51/01/360_F_362510186_nbRqru6Jdiuf1rS6O42CqUi5mLQPG6Mu.jpg" alt="" /></SwiperSlide>
        
      </Swiper>
    </div>
      

    </header>
  )
}

export default connect(null, {loadProducts})(Hero)