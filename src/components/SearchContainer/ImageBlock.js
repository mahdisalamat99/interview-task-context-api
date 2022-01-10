import {useContext} from 'react';
import { DataContext } from '../../contexApi';
import { useParams } from "react-router-dom"


export default function ImageBlock(){
    const [data,setData] = useContext(DataContext);

    let {searchParam} = useParams();

    
    
    let imageBlocksData;
    
    if(searchParam.toLowerCase() === "all"){
        imageBlocksData = data.imageBlocks;
    }else{
        imageBlocksData = data.imageBlocks.filter(item=>item.category.toLowerCase() === searchParam.toLowerCase())
    }
    
    console.log(data);
    let searchst = data.st;

    imageBlocksData = imageBlocksData.filter(item =>item.title.includes(searchst));
    

    return (
        imageBlocksData.map((item)=>{
            return (
        <div className="image-block" style={{backgroundImage: "url(/public_assets/" + item.localImage + ".jpg)"}} key={item.index}>
            <div>
                <span className="category">{item.category.toUpperCase()}</span>
                <div className="foot-sec">
                    <h1>{item.title}</h1>
                    <span className="date">{item.date}</span>
                </div>
            </div>
        </div>
            )
        })
    )
}