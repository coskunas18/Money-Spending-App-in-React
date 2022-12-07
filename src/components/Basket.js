import { useState } from "react";
import BasketItem from "./BasketItem";


function Basket ({basket,products,total,resetBasket}) {



    return(
        <>   
       <div className="basket-containter container">
        <h3>Alışveriş Detayları</h3>
        <ul>
       {basket.map(item =>(
           <BasketItem key={item.id}  item ={item} product = {products.find(p => p.id === item.id)} />
        ))}
        </ul>
        {total > 0 && <div className="total">     
          Toplam: {total} TL <br />
          <button className="reset-btn" onClick={resetBasket} >Sepeti Sıfırla </button>
          </div>}
       </div>

       <style jsx>{`
        .basket-containter{
          padding:20px;
          background:#fff;
          border:1px solid #ddd;
        }

        .basket-containter h3 {
          font-size:24px;
          margin-bottom:15px;
        }

        
        .basket-containter .reset-btn {
          height:40px;
          padding:0 20px;
          font-size:16px;
          font-weight: 500;
          cursor:pointer;
          margin-top:15px;
          background:#1350FE;
          color:white;
        }

        .total{
          border-top:1px solid #ddd;
          padding-top:10px;
          margin-top:10px;
          font-size:18px;
          font-weight:bold;
          text-align:right;
          color:#286F69;
        }
       `}</style>
      </>
    );

}

export default Basket