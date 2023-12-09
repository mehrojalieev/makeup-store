import { connect, useSelector } from "react-redux"
import { loadProducts } from "../../redux/actions/product-action"
import "./Main.scss"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Main = () => {

    const {products_data} = useSelector(state => state.products)
    console.log(products_data);
  return (
    <main>
         <Swiper
        slidesPerView={3}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="main-swiper"
      >
        {
            products_data?.splice(20, 30).map(product => 
                    <SwiperSlide key={product.id} className="main__swiper-slide">
                        <div className="product__card-image">
                          <img src={product.api_featured_image} alt="Image" />
                        </div>
                        <h3>{product.name}</h3>
                        </SwiperSlide>
                )
        }
      </Swiper>
    </main>
  )
}

export default connect(null, {loadProducts})(Main)