import {connect } from "react-redux";
import { addTocart} from "../redux/actions/ProductAction";
import ProductCard from "../components/ProductCard";


const mapStateToProps=state=>({
    // data:state.cardItems
})
const mapDispatchToProps=(dispatch)=>({
    addToCartHandler:data=>dispatch(addTocart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(ProductCard)