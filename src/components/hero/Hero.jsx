import "./Hero.scss"
import { Link } from "react-router-dom"
import { connect, useSelector } from "react-redux";
import Banner from "../../assets/images/banner.webp"
import { FaLongArrowAltRight, FaStar } from "react-icons/fa";
import { loadProducts } from "../../redux/actions/product-action";

import { useEffect, useState } from "react";
const Hero = (props) => {

  useEffect(() => {
    props.loadProducts()
  }, [])


  return (
    <section className="hero">
      <div className="hero__navbar">
        <div className="hero__nav-icons">
          <i><FaStar /></i>
          <i><FaStar /></i>
          <i><FaStar /></i>
          <i><FaStar /></i>
          <i><FaStar /></i>
        </div>
        <p>over 20 million customers</p>
      </div>


      <div className="hero-banner">
        <img src={Banner} alt="banner" />
        <div className="hero__banner-contents">
          <h3>Shop Back to School Deals</h3>
          <p>At FragranceX.com, our mission is to provide you with the largest selection of perfumes and colognes at the lowest prices.</p>
          <div className="content-btns">
            <Link to="/products" className="btn-link">SHOP ALL PERFUMES <i><FaLongArrowAltRight /></i> </Link>
            <Link to="/products" className="btn-link">SHOP ALL COLOGNES <i><FaLongArrowAltRight /></i> </Link>
          </div>
          <p className="shipping-text">Free Shipping</p>
        </div>
      </div>



    </section>
  )
}

export default connect(null, { loadProducts })(Hero)