import {useState} from 'react';
import { moneyFormat } from '../helpers';

function Header({total,money}){
    return(
        <>  
             {total > 0 && money-total !== 0 && (
                <div className='header'>Harcayacak <span>{moneyFormat(money-total)} TL</span> paranız kaldı </div>
             )}
             {total === 0 && (
              <>
              <div className='header'>Harcamak için <span>{moneyFormat(money)} TL</span> paranız kaldı, İyi Şanslar </div>
              </>
             )}
             {money-total === 0 && (
                <>
                 <div className='header'>Paranız maalesef bitti ay başını bekleee</div>
                </>
             )}
             <style jsx>{`
              .header{
                position:sticky;
                top:0px;
                height:60px;
                justify-content:center;
                display:flex;
                align-items:center;
                background-color:#F4AB5D;
                color:#fff;
                font-size:24px;
                letter-spacing:1px;
              }

              .header span{
                margin:0px 10px;
                font-weight:bold;
              }

             `}</style>
        </>
    )
}

export default Header