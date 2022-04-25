import people from './slidedata'
import { FaQuoteRight } from "react-icons/fa";
import { FcPrevious , FcNext } from "react-icons/fc";
import { useEffect, useState } from 'react';


const Slider = () => {
    const [index,setIndex] =useState(0)

    useEffect(()=>{
        const lastChild = people.length -1 ;
        if(index <0){
            setIndex(lastChild)
        }
        if(index >lastChild){
            setIndex(0)
        }

    },[index])

    useEffect(()=>{

        const change = setInterval(()=>{
            setIndex(index + 1)

        },5000)

        return ()=>{clearInterval(change)}


    },[index])


    return ( 
        <div className="slider">
            {people.map((person,indexPerson)=>{
                const  {id,image,name,title,quote} = person;
                let position = "next-slide"
                if(index == indexPerson){
                    position ="active-slide"
                }
                if((index -1 == indexPerson) || (index == 0 && indexPerson == people.length-1)){
                    position ="prev-slide"
                }


                
                return (<div key={indexPerson} className={`article ${position}`}>
                    <img src={image} alt={title}/>
                    <h2>{name}</h2>
                    <p>{title}</p>
                    <p className = "quote">{quote}</p>
                    <FaQuoteRight className="quote-icon" />
                    <FcPrevious className="next" onClick= {()=> setIndex(index - 1)}/>
                    <FcNext className = "prev" onClick= {()=> setIndex(index +1)}/>
                </div>)

            })}



        </div>
     );
}
 
export default Slider;