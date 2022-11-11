
import { ADD_TO_CART, REMOVE_FROM_CART,DEC,INC, EMPTY_CART } from "./ShoeShopAction";

export function ShoeShopReducer(state,action){

    switch(action.type){
        case ADD_TO_CART:

        let productExists = state.basket.find((item) => item.id === action.payload.id)

        let newProduct
        if (!productExists){
             newProduct = [...state.basket,action.payload]
        } else{
            newProduct= state.basket.map((item)=> item.id ===action.payload.id? {...item,qty: item.qty+1} : {...item})
        }
            return{
                ...state,
                basket:newProduct
            }

        case INC:
            return{
                ...state,
                basket: state.basket.map((item)=> item.id === action.payload? {...item,qty: item.qty+1} : {...item})
            }
        case DEC:
                return{
                    ...state,
                    basket: state.basket.map((item)=> item.id === action.payload? {...item,qty: item.qty-1} : {...item})
                }
        

        case REMOVE_FROM_CART:  
                const index = state.basket.findIndex((item) => item.id === action.payload)
      
                  let newBasket = [...state.basket]
      
                  if (index >=0){
                      newBasket.splice(index,1)
                  }else{
                      console.warn("Item does not exist")
                  }
                  return{
      
                      ...state,
                      basket: newBasket
      
                  }
        case EMPTY_CART:
            return{
                ...state,
                basket:[]
            }


      default:
            return state
    }

    

}