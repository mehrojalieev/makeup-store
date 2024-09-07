import "./AllProducts.scss"
import React, { useEffect, useState } from 'react'
import { Container, SkeletonCards } from '../../utils/Utils'
import ProductCard from '../../components/product-card/ProductCard'
import { instance } from '../../api'
const AllProducts = () => {

    const [AllData, setAllData] = useState([])

    console.log(AllData);


    useEffect(() => {
        async function loadAllProducts() {
            try {
                const response = await instance.get("/parfumes")
                setAllData(response?.data?.data)
            }
            catch (error) {
                console.log(error);
            }
        }
        loadAllProducts()
    }, [])

    return (
        <div className=''>
            <Container>
                {
                    AllData.length > 0 ? (
                        <div className="all__products-wrapper">
                            {
                                AllData.map((product) => (
                                    <ProductCard product={product} key={product?._id} />
                                ))
                            }
                        </div>
                    ) : (
                        <SkeletonCards count={15} />
                    )
                }
            </Container>
        </div>
    )
}

export default AllProducts
