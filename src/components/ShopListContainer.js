import {useEffect,useState} from 'react';
import ListItem from './ListItem';
import {connect} from 'react-redux';


function ShopListContainer(props){
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
        fetchAllProducts();
    },[]);
    var allProductComp;
    const cartItems = props.addedProducts || [];
    if (allProducts.length > 0) {
        allProductComp = allProducts.map(function (product) {
            var productDetails = product;
            //check if product available in cart
            var filterForAddedList = props.addedProducts.filter((item)=>{
                if(product.pId === item.pId)
                 return item;
            });
            if(filterForAddedList.length > 0){
                productDetails = filterForAddedList[0];
            }
            return (
                <ListItem key ={productDetails.pId} 
                          itemDetails={productDetails} 
                          isAdded = {filterForAddedList.length>0 ? true:false}
                          isCartScreen = {false}
                          quantity = {productDetails.productCount ?productDetails.productCount :1}
                />
            )
            
        });
    }
    return(
        <div className = "flex-row list-cont">
            {allProductComp}
        </div>


    )
}

const mapStateToProps = state => {
    return{
        addedProducts: state.cart.products
    }
};


export default connect (mapStateToProps,null)(ShopListContainer);

