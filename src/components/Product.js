
import { moneyFormat } from "../helpers"

function Product({product,basket,setBasket,total,money}){

  const basketItem = basket.find(item => item.id === product.id)

  const addBasket = () =>{
    const checkBasket = basket.find(item => item.id == product.id) // ürün daha önce eklenmiş mi?
    if(checkBasket){  // eğer eklenmişse
          checkBasket.amount +=1
          setBasket([...basket.filter(item => item.id !== product.id),checkBasket]) //daha önce eklenmişse onu hariç tuttuk

    }else{ //eğer eklenmemişse
        setBasket([...basket,{
          id:product.id,
          amount:1,
        }])
    }
  }


  const removeBasket = () => {
     
    const currentBasket = basket.find(item => item.id === product.id);
    const basketWithoutCurrent = basket.filter(item => item.id !== product.id);
    currentBasket.amount -= 1

    if (currentBasket.amount === 0) {
       setBasket([...basketWithoutCurrent])
    }else{
      setBasket([...basketWithoutCurrent,currentBasket])
    }




  }




    return(
      <div className="product">
        <img src={product.image} alt="" />
        <h6>{product.title} </h6>
        <div className="price"> {moneyFormat(product.price)} TL</div>
        <div className="actions">
           <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>Çıkar</button>
           <span className="amount"> {basketItem && basketItem.amount || 0}  </span>
           <button className="buy-btn" disabled={total + product.price > money} onClick={addBasket} >Ekle</button>
        </div>
        <style jsx>{`
        .product{
          padding:15px;
          background:#fff;
          border:1px solid #ddd;
          margin-bottom:20px;
          width:24%;
        }
        .product img {
          width:100%;
          height:200px;
        }
        .product h6{
          font-size:20px;
          margin-bottom:10px;
        }
        .product .price{
          font-size:20px;
          color:#106100;
        }
        .product .actions{
          display:flex;
          align-items:center;
          justify-content:center;
        }
        .actions button{
          height:40px;
          padding: 0 15px;
          flex:1;
          cursor:pointer
        }
        .actions button[disabled]{
          opacity:.3;
          cursor:not-allowed;
        }
        .actions .amount{
          width:50px;
          text-align:center;
          font-weight:bold;
          border:1px solid #ddd;
          height:40px;
          display:flex;
          align-items:center;
          justify-content:center;

        }
        .actions .buy-btn{
          background:#004C61;
          color:#fff;
          border-radius:4px;
        }

        .actions .sell-btn{
          background:#FA5A4C;
          color:#fff;
          border-radius:4px;
        }
      `}</style>
      </div>
    )
}

export default Product