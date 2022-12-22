import "./MiddleHeader.css"
import {useState,useEffect } from "react"
import {BiSearch} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsCart3} from 'react-icons/bs'
import {FaBalanceScaleLeft} from 'react-icons/fa'
import {BiUser} from 'react-icons/bi'

function MiddleHeader(){
    const [nav,setNav] = useState(false)
    const onChangeBack=()=>{
        if(window.scrollY>66){
            setNav(true)
        }
        else{
            setNav(false)

        }
    }

    useEffect(()=>{
        onChangeBack()
        window.addEventListener("scroll",onChangeBack)
    })
    return (
        <div className={`middle-header-cont ${nav && 'middle-header-sticky'}`}>
            <img src="https://goodzone.uz/logogz_ru.svg" alt="" />
            <div className="middle-header-search">
                <input type="text" placeholder="Mahsulot bo'yicha qidirish"/>
                <button><BiSearch/></button>
            </div>
            <div className="middle-header-icons">
                <div>
                         <AiOutlineHeart style={{fontSize:24}}/>
                         <span>Sevimlilar</span>
                </div>
                <div>
                         <FaBalanceScaleLeft style={{fontSize:24}}/>
                         <span>Sevimlilar</span>
                </div>
                <div>
                         <BsCart3 style={{fontSize:24}}/>
                         <span>Sevimlilar</span>
                </div>
                <div>
                         <BiUser style={{fontSize:24}}/>
                         <span>Sevimlilar</span>
                </div>
            </div>
        </div>
    )

}

export default MiddleHeader