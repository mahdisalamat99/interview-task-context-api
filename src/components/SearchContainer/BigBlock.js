import { useContext } from "react";
import { DataContext } from "../../contexApi";
import { useParams } from "react-router-dom";

export default function BigBlock(){
    const [data,setData] = useContext(DataContext);

    let {searchParam} = useParams();

    let bigBlocksData;

    if(searchParam.toLowerCase() === "all"){
        bigBlocksData = data.bigBlocks;
    }else{
        bigBlocksData = data.bigBlocks.filter(item=>item.category.toLowerCase() === searchParam.toLowerCase())
    }

    let searchst = data.st;

    bigBlocksData = bigBlocksData.filter(item =>item.title.includes(searchst));


    return (
        bigBlocksData.map((item)=>{
            return (
        <div className="big-block" key={item.index}>
            <span className="category">{item.category.toUpperCase()}</span>
            <img src={"/public_assets/" + item.localImage + ".jpg"} alt="image" />
            <div className="foot-sec">
                <div>
                    <h1>{item.title}</h1>
                    <span>{item.date}</span>
                </div>
                <div>
                    <img src={"/public_assets/" + item.localAuthor + ".jpg"} alt="image" />
                </div>
            </div>
        </div>
            )
        })
    )
}