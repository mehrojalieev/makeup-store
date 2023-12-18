import { Link } from "react-router-dom"
import "./Brand.scss"

import Brand1 from "../../assets/images/brand.png"
import Brand2 from "../../assets/images/brand2.png"

const Brand = () => {
    return (
        <div className="brand">
            <div className="brand__title-content">
                <h2>Top Fragrance Brands</h2>
                <Link>View All Brands</Link>
            </div>
            <div className="brand__box-wrapper">
                <div className="brand-box">
                    <img width={200} height={160} src={Brand1} />
                    <Link>Armaf</Link>
                </div>
                <div className="brand-box">
                    <img width={200} height={160} src={Brand2} />
                    <Link>Dolce & Gabbana</Link>
                </div>
                <div className="brand-box">
                    <img width={200} height={160} src="https://img.fragrancex.com/images/assets/product%20images/calvin-klein.jpg"/>
                    <Link>Calvin Klein</Link>
                </div>
                <div className="brand-box">
                    <img width={200} height={160} src="https://img.fragrancex.com/images/assets/product%20images/mont-blanc.jpg"/>
                    <Link>Montblanc</Link>
                </div>  
                <div className="brand-box">
                    <img width={200} height={160} src="https://img.fragrancex.com/images/assets/product%20images/dior.jpg"/>
                    <Link>Dior parfume</Link>
                </div>
                <div className="brand-box">
                    <img width={200} height={160} src="https://img.fragrancex.com/images/assets/product%20images/jimmy-choo.jpg"/>
                    <Link>Jimmy Choo</Link>
                </div>
            </div>
        </div>
    )
}

export default Brand