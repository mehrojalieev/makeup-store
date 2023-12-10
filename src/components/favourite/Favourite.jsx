import "./Favourite.scss"
import { connect, useSelector } from 'react-redux'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Favourite = () => {

    const { favourite_data } = useSelector(state => state.favourites)
    console.log(favourite_data);

    return (
        <div className='liked-wrapper'>
            {
                favourite_data.map(product =>
                    product !== null && product !== undefined &&
                    <div className="liked-list">
                        <img src={product?.api_featured_image} alt="Cart-Image" />
                        <h3>{product?.name}</h3>
                        <p>{product?.description?.slice(0, 40)}</p>

                        <div className="icons">
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                            <i><FaStar /></i>
                        </div>
                        <div className="purchase-action">
                            <button className="purchase-btn">Purchase</button>

                            <strong>{product?.price}</strong>

                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default connect(null, {})(Favourite)