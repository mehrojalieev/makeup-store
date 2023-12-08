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
    console.log(products_data.slice(0, 10));

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
      <img src={bannerImage} alt="Banner" />
    </div>
      

    </header>
  )
}

export default connect(null, {loadProducts})(Hero)