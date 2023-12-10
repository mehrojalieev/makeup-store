import { useNavigate, useParams } from "react-router-dom"
import "./Category.scss"
import { useEffect } from "react";

const Category = () => {

    const {categ} = useParams()
    console.log(categ);
    const navigate = useNavigate()

    useEffect(() => {
        if(navigate.includes("/blush")){
            console.log(true);
        } else{
            console.log(false);
        }
    }, [])

  return (
    <div>Category</div>
  )
}

export default Category