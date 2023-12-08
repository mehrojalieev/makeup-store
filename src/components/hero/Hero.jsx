import { NavLink } from "react-router-dom"
import "./Hero.scss"

// SWIPER CONNECT
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Hero = () => {
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

        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

    </header>
  )
}

export default Hero