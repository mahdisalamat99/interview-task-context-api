import {useState,useEffect , useContext} from "react";
import { useParams } from "react-router-dom"
import BigBlock from "./BigBlock";
import ImageBlock from "./ImageBlock";
import TextBlock from "./TextBlock";
import Header from "./../Header";
import { DataContext } from "../../contexApi";

import "./style.scss";

export default function SearchContainer(){

    const [data,setData] = useContext(DataContext);
    // console.log(data);

    // useEffect(() => {
    //     // console.log(data)
    // }, [data])

    const [searchSt , setSearchSt] = useState("");


    let {searchParam} = useParams();


    console.log(searchParam);

    useEffect(()=>{
        setData({...data, sp: searchParam , st : searchSt})
    },[searchParam,searchSt])


  


    // console.log(data);
    
    // let imageBlocks, bigBlocks, textBlocks;

    // if(searchParam.toLowerCase() === "all"){
    //     imageBlocks = data.imageBlocks;
    //     bigBlocks = data.bigBlocks;
    //     textBlocks = data.textBlocks;
    // }else{
    //     imageBlocks = data.imageBlocks.filter(item=>item.category.toLowerCase() === searchParam.toLowerCase())
    //     bigBlocks = data.bigBlocks.filter(item=>item.category.toLowerCase() === searchParam.toLowerCase())
    //     textBlocks = data.textBlocks.filter(item=>item.category.toLowerCase() === searchParam.toLowerCase())

    // }

    // imageBlocks = imageBlocks.filter(item =>item.title.includes(searchSt));
    // bigBlocks = bigBlocks.filter(item =>item.title.includes(searchSt));
    // textBlocks = textBlocks.filter(item =>item.title.includes(searchSt));

    return (
        <div className="main-con">
        <Header/>
            <div className="search-bar">
                <input type="text" placeholder="Search for..." 
                name="name" 
                value={searchSt} 
                onChange={(e)=> setSearchSt(e.target.value.toLowerCase())}
                />
            </div>
        <div className="search-con">
            <div className="image-block-container">
      
                        <ImageBlock/>
          
            </div>
            <div className="big-block-container">
   
                        <BigBlock />
       
            </div>
            <div className="text-block-container">
                        <TextBlock />
            </div>
        </div>
        </div>
    )
}