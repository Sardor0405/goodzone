import { useState } from "react";
import React from "react";
import './RightButtom.css'
import {MdCollections} from 'react-icons/md'
import { FaShoppingBag } from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import {BsPlusLg} from "react-icons/bs";
import {AiOutlineMinus} from "react-icons/ai";


function RightShop({right=false,onChange}){
    const [count, setCount] = useState(0)
    const incrase = ()=>{
        setCount(count+1)
    }
    const deccrase = ()=>{
        if(count>0){
            setCount(count-1)
        }
        
        
    }
    return(
        <div className={`right-shop-box  ${right && 'right-shop-box-ture'}` }>
            <div style={{display:'flex', alignItems:'center', marginBottom:20, justifyContent:'space-between', borderBottom:"1px solid lightgray", padding:10}}>
                <div style={{color:"red",display:"flex", fontWeight:700}}>
                <FaShoppingBag style={{marginRight:10,fontSize:24}}/><span>1 www</span>
                </div>
                <AiOutlineClose style={{cursor:"pointer",fontWeight:900,fontSize:20,color:"lightgray"}} onClick={onChange}/>
            </div>
            <div>
            <div>
                <BsPlusLg onClick={incrase} style={{marginLeft:15}}/>
            </div>
            <div className="center">
            <h3 className="center-teg">{count}</h3>
            </div>
            <div>
            <AiOutlineMinus onClick={deccrase} style={{marginLeft:15, color:"black", }}/>
            </div>
            </div>
        </div>
    )
}
export default function RightButton(){
    const [right, setRight]=useState(false)

    const changeRight=()=>{
        setRight(!right)
    }
    return(
        <>
        <div className="right-button" onClick={changeRight}>
            <div style={{display:'flex', alignItems:'center', marginBottom:20}}>
                
                <FaShoppingBag style={{marginRight:10,fontSize:24}}/><span>1 www</span>
            </div>
            <button>400 ming so'm</button>
        </div>
        <RightShop right={right} onChange={changeRight}/>
        </>
    )
}