import {useEffect,useState} from 'react';
import ListItem from './ListItem';
import {connect} from 'react-redux';
import './App.css';


function CartListContainer(props){
    const [allProducts,setAllProducts]=useState([]);
    const fetchAllProducts = () =>{
        fetch('groceryProducts.json')
        .then(function(response){
            var list = [];
            if(response.status === 200)
              return response.json();
            else
              return list;
          })
          .then(function(resJson) {
            setAllProducts(resJson)
          });
    }
    useEffect(()=>{
        //fetchAllProducts();
    },[]);
    var allProductComp;
    const cartItems = props.addedProducts || [];
    if (cartItems.length > 0) {
        allProductComp = cartItems.map(function (product) {
            var productDetails = product;
            return (
                <ListItem key ={productDetails.id} 
                          itemDetails={productDetails} 
                          isAdded = {true}
                          isCartScreen = {true}
                          quantity = {productDetails.quantity ?productDetails.quantity :1}
                />
            )
            
        });
    }
    return(
        <div className = "cart-listcont flex-col">
            {allProductComp}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        addedProducts: state.cart.products
    }
};


export default connect (mapStateToProps,null)(CartListContainer);

