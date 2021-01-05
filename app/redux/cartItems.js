var items=[]

// quantity=[]
var ind =0
export default  cartItems = (state=items , action) => {
   switch (action.type) {

       case 'ADD_TO_CART':
           {
           if( state.indexOf(action.payload,0) !== -1 )
           {

            console.log("item exists already!")
            console.log("existing item id ", state.indexOf(action.payload,0))
            console.log(state)
             return state
           }
           else
           {
           console.log("adding in cart") 
           action.payload.qInCart=+1
           console.log("I am payload",action.payload)
           console.log("I am state",state)
           return  [...state, action.payload] 
        //    && console.log(state)
           }
       }

           case 'REMOVE_FROM_CART':
       {
           console.log("removing item from cart")
           return state.filter(cartItem => cartItem.id !== action.payload.id)
       }

       case 'INCREMENT_QUANTITY':
           {   
                ind = state.indexOf(action.payload,0)
                console.log(ind)
                console.log(action.payload)
                console.log(state)
                console.log(state.indexOf(action.payload,0))
            if(state[ind].qInCart === state[ind].quantity)
            {
                console.log("this quantity is limit!")
                return [...state]
            }
            else
           {    console.log("in inc quantity payload ",action.payload)
               console.log("in inc quantity state ",state)
              state[state.indexOf(action.payload,0)].qInCart+=1
              console.log("quantity in cart",action.payload.qInCart,"of id : ",action.payload.id)
              
              return [...state]
           }
       }
  
       case 'DECREMENT_QUANTITY':
             { 
              if(state[state.indexOf(action.payload,0)].qInCart==1)
              {console.log("can not decrement more")
              return [...state]
             }
             else {
              console.log("in dec quantity",action.payload)
              state[state.indexOf(action.payload,0)].qInCart-=1
              console.log("quantity in cart",action.payload.qInCart,"of id : ",action.payload.id)
             
              return [...state] 
           }}
       }

   return state
}



