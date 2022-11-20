import { useParams } from "react-router-dom"
import FIrstContainer from "../SharedComponents/FIrstContainer"
import SecondContainer from "../SharedComponents/SecondContainer"
import data from '../data.json'

const Products = ({showCart,setShowCart, showScroll, setShowScroll}) => {
    const {id} = useParams()
    const filteredData = data.find((item)=> +item.id === +id)


  return (
    <div>
    <FIrstContainer showCart={showCart} setShowCart={setShowCart} showScroll={showScroll} setShowScroll={setShowScroll} />
        <p>{filteredData.slug}</p>
        <img style={{width:'328px'}} src={process.env.PUBLIC_URL + filteredData.image.desktop} alt={filteredData.name} />
      <SecondContainer/>
    </div>
  )
}

export default Products