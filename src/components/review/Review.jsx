import "./Review.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Slider1 from "../../assets/images/slider1.png"
import Slider2 from "../../assets/images/slider2.png"

import {Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
const Review = () => {
    return (
        <div className="review">
            <Swiper
               speed={1500}
               slidesPerView={1}
               slidesPerGroup={1}
               loop={true}
               navigation={true}
               modules={[Autoplay, Pagination, Navigation]}
                className="review-swiper"
            >
                <SwiperSlide className="slider-item">
                   <p>
                   "I've shopped FragranceX.com for years and
                    have always found what I was looking for.
                    This is the only place I shop for
                    cologne...wouldn't go elsewhere."
                   </p>
                </SwiperSlide>
                <SwiperSlide  className="slider-item">
                    <p>
                    "FragranceX.com is the ONLY place I purchase perfume from. The selection and quality is amazing. I would recommend FragranceX.com to everyone i know!"
                    </p>
                </SwiperSlide>
                <SwiperSlide  className="slider-item">
                    <p>
                    "A great site to buy gifts for family! They have a great selection and it’s so easy to place an order. The delivery time is exceptional!"
                    </p>
                </SwiperSlide>
                <SwiperSlide  className="slider-item">
                    <p>
                "Products are high quality and come in great packaging. Scents match to expectations and would buy again. Very satisfied with my order."
                    </p>
                    </SwiperSlide>

            </Swiper>
            <div className="slider__content-container">
                    <div className="slider-card">
                        <img width={130} height={130} src={Slider1} />
                        <Link>Hard to Find Fragrances</Link>
                    </div>
                    <div className="slider-card">
                        <img width={130} height={130} src={Slider2} />
                        <Link>Celebrity Scents</Link>
                    </div>
            </div>
        </div>
    )
}

export default Review