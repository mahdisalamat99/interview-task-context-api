import { useContext } from "react";
import { DataContext } from "../../contexApi";
import { useParams } from "react-router-dom";

export default function TextBlock(){
    const [data,setData] = useContext(DataContext);

    let {searchParam} = useParams();

    let textBlocksData;

    if(searchParam.toLowerCase() === "all"){
        textBlocksData = data.textBlocks;
    }else{
        textBlocksData = data.textBlocks.filter(item=>item.category.toLowerCase() === searchParam.toLowerCase())
    }

    let searchst = data.st;

    textBlocksData = textBlocksData.filter(item =>item.title.includes(searchst));

    return (
        textBlocksData.map((item)=>{
            return (
        <div className="text-block" key={item.index}>
            <h1>{item.title}</h1>
            <p>
                <img src={"/public_assets/" + item.localImage + ".jpg"} alt="image" />
                {item.text}
            </p>
            <div>
                <img src={"/public_assets/" + item.localAuthor + ".jpg"} alt="image" />
                <span>{item.date}</span>
                <span>{item.category.toUpperCase()}</span>
            </div>
        </div>
            )
        })
    )
}