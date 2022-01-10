import { useState,useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./style.scss";
import { DataContext } from "../../contexApi";



export default function Header(){
    const [data,setData] = useContext(DataContext);
    let {searchParam} = useParams();
    const [menu, setMenu] = useState(false);
   return (
        <header>
            <div className="navbar">
                <h1>THE WIRE</h1>
                <ul>
                {
                    data.categories.map((item, index)=>(
                        <li key={"li" + index}><Link className={searchParam.toLowerCase() === item.toLowerCase() ? "active": ""} to={"/" + item.toLowerCase()}>{item.toUpperCase()}</Link></li>
                    ))
                }
                </ul>
                <button onClick={_=>setMenu(true)}>Filters</button>
            </div>
            <div className={"sidebar" + (menu ? " active": "")}>
                <div className="backdrop" onClick={_=>setMenu(false)}></div>
                <ul>
                {
                    data.categories.map((item, index)=>(
                        <li key={"li" + index}><Link onClick={_=>setMenu(false)} className={searchParam.toLowerCase() === item.toLowerCase() ? "active": ""} to={"/" + item.toLowerCase()}>{item.toUpperCase()}</Link></li>
                    ))
                }
                </ul>
            </div>
        </header>
    )
}