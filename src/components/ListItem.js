import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
import { IoMdPricetag } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { connect } from 'react-redux';
import { addProductToCart, increaseQuantity, decreaseQuantity, removeProductFromCart } from "../actions/cartActions.js";

function ListItem(props) {

    const itemDetails = props.itemDetails;
    var imagePath = "images/" + itemDetails.filename;
    const isProductAdded = props.isAdded === true ? true : false;
    const cardWidth = props.isCartScreen === false ? {"width":"30%"} : {"width":"50%"};
    return (
        <div className="flex-row item-cont" style = {cardWidth}>
            <div className="item-right">
                <img src={imagePath} />
            </div>
            <div className="flex-col item-left">
                <div className="item-tag">
                    <p>20%</p>
                    <label>OFF</label>
                </div>
                <div className="item-details">
                    <h3>{itemDetails.title}</h3>
                    <p>{itemDetails.description.length < 100 ? itemDetails.description : itemDetails.description.substr(0,90)+"..."}
                    <span>{itemDetails.description.length > 100 && <label className = "view-more">View More</label>}</span></p>
                    
                    <div className="flex-row item-details-price">
                        <IoMdPricetag />
                        <label>{itemDetails.price}</label>
                    </div>

                </div>
                <div className="item-actions">
                    {isProductAdded === true ? RemoveFromCartButton(props) : AddToCartButton(props)}
                </div>

            </div>
        </div>
    );
}

/** Add to cart button component **/
function AddToCartButton(props) {
    const details = props.itemDetails;
    return (<div className="flex-row carticon-cont"
        onClick={() => props.addItemToCart(details)}>
        <FaCartPlus className="cart-icon" />
        <label >ADD</label>
    </div>);
}

/** Remove from cart button component **/
function RemoveFromCartButton(props) {
    const details = props.itemDetails;
    var totalPrice = details.quantity ? details.quantity*details.price :details.price
    //quantity buttons container
    const quantityCont = (
        <div className="flex-row quantity-cont">
            <AiOutlineMinusSquare className="quantity-button"  onClick={details.quantity ===1 ? ()=>{} :() => props.decreaseQuantity(details)} />
            <label className="quantity-input" >{details.quantity ? details.quantity : 1} </label>
            <AiOutlinePlusSquare className="quantity-button" onClick={() => props.increaseQuantity(details)} />
        </div>);
    return (<>
        <div className="carticon-cont" onClick = {()=>props.removeItemFromCart(details)}>
            <MdDelete className="remove-icon" />
        </div>
        <div className="flex-row item-details-price">
            <IoMdPricetag />
            <label>{totalPrice.toFixed(2) }</label>
        </div>
        {quantityCont}
    </>)
}

const MapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (itemObj) => dispatch(addProductToCart(itemObj)),
        increaseQuantity: (itemObj) => dispatch(increaseQuantity(itemObj)),
        decreaseQuantity: (itemObj) => dispatch(decreaseQuantity(itemObj)),
        removeItemFromCart:(itemObj)=>dispatch(removeProductFromCart(itemObj))
    };
};


export default connect(null, MapDispatchToProps)(ListItem);