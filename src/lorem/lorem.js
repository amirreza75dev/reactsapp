import { useState } from 'react';
import data from './loremData'
const Lorem = () => {

    const [count,setCount] =useState(0)
    const [text,setText] =useState([])

const handleEvent = (e)=>{
    e.preventDefault();
    console.log(count);
    let intCount = parseInt(count)

    if (intCount > 8){
        intCount = 1
    }
    if (intCount <= 0 ){
        
        intCount = 1
    }
    const amount = data.slice(0,intCount)
    setText(amount)
    console.log(text);
    
}

    return ( 
        <div className="lorem">
            <h1>TIRED OF BORING LOREM IPSUM</h1>
            <form onSubmit ={handleEvent}>
                <label htmlFor="ipsum">
                    Paragraphs
                </label>
                <input type="number" id="ipsum" value={count} name = "count" onChange= {(e)=> setCount(e.target.value)}/>
                <button> GENERATE</button>




            </form>
            <div className="article-lorem">
                    {text.map((info, index)=>{
                        return (
                        <div key={index}>
                            <p>{info}</p>
                        </div>
                        )
                    })}
                   
                </div>



        </div>
     );
}
 
export default Lorem;