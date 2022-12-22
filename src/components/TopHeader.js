import "./Topheader.css"
import Dropdown from 'react-bootstrap/Dropdown';
import {BsFillTelephoneFill} from 'react-icons/bs'
let dataLang = ["Ruskiy","Uzbek"]
let dataCity = ["Samarqand","Toshkent","Buxoro"]
function BasicExample({name,data}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
        {name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {data.map((item)=>{
                       return  <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
        })}
      
    
      </Dropdown.Menu>
    </Dropdown>
  );
}

function TopHeader(){
    return <div className="cont">
        <div className="left">
        <BasicExample name={"Til"} data={dataLang}/>
        <BasicExample name={"Shahar"} data={dataCity}/>
        </div>
        <div className="middle">
            <ul>
                <li>
                    <a href="#">Do'konlar</a>
                </li>
                <li>
                    <a href="#">Yetkazib berish</a>
                </li>
                <li>
                    <a href="#">Kampaniya haqida</a>
                </li>
            </ul>
        </div>
        <div className="right">
          <BsFillTelephoneFill/>
            +998942845902
        </div>
       
    </div>
}
export default TopHeader
