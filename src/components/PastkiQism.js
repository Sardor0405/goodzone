import "./PastkiQism.css"
import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {FaFacebookF , FaTelegramPlane} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {GrYoutube} from 'react-icons/gr'




export default function FooterBar(){
  return(
  <div className="footer">
     <div className="footer_title">
       <ol>
        <li>Savolingiz bormi? Qo'ng'iroq qiling</li>
        <li>
          <BsFillTelephoneFill style={{paddingRight: 12, fontSize:30}}/>
          +998 94 284 59 02
        </li>
        <li>
          <MdEmail style={{paddingRight: 12, fontSize:35}}/>
          sardor7613@gmail.com
        </li>
        <li className="li1">
          <FaFacebookF style={{ fontSize:21}}/>
          <AiOutlineInstagram style={{ fontSize:25}}/>
          <FaTelegramPlane style={{ fontSize:25}}/>
          <GrYoutube style={{ fontSize:24}}/>
        </li>
       </ol>
       <ol>
        <li>Kompaniya</li>
        <li>Kompaniya haqida</li>
        <li>Do'kon manzillari</li>
        <li>Vakansiyalar</li>
       </ol>
       <ol>
        <li>Xaridorga yordam</li>
        <li>Savol va Javob</li>
        <li>Saytda qanday buyurtma berish kerak</li>
        <li>Tovarlarni almashtirish, qaytarish va ta'mirlash</li>
       </ol>
       <ol>
        <li>Ma'lumot</li>
        <li>Muddatli to'lov </li>
        <li>Yetkazib berish</li>
        <li>Izoh qoldirish</li>
       </ol>
     </div>
     <hr/>
     <div className="footer_image">
      <div>
        <img src="https://goodzone.uz/icons/payme.png" alt="" className="rasm"></img>
        <img src="https://goodzone.uz/icons/click.png" alt=""  className="rasm"></img>
        <img src="https://goodzone.uz/icons/uzcard.png" alt=""  className="rasm"></img>
        <img src="https://goodzone.uz/icons/apelsin.png" alt=""  className="rasm"></img>
        <img src="https://goodzone.uz/icons/humo.png" alt=""  className="rasm"></img>
        <img src="https://goodzone.uz/icons/paybox.svg" alt=""  className="rasm"></img>
        <img src="https://goodzone.uz/icons/visa.svg" alt=""  className="rasm"></img>
        <img src="https://goodzone.uz/icons/mastercard.svg" alt=""  className="rasm"></img>
        <img src="https://goodzone.uz/icons/payze.svg" alt=""  className="rasm"></img>
      </div>
      <div>
      <img src="https://goodzone.uz/icons/alif-nasiya-logo-b.svg" alt=""  className="rasm1"></img>
        <img src="https://goodzone.uz/icons/VIDJET.svg" alt=""  className="rasm1"></img>
        <img src="https://goodzone.uz/images/payment_logo/zoodpay.png" alt=""  className="rasm1"></img>
      </div>
     </div>
     <p className="p">2022 © goodzone.uz. Barcha huquqlar himoyalangan. Tovarlarning ko'rsatilgan qiymati va ularni sotib olish shartlari joriy sanaga amal qiladi</p>
  </div>

  )
  }