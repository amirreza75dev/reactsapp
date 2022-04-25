import { useEffect,useState } from "react";



const Tabs = ({url}) => {
    const [information, setInformation]= useState(null)
    const [value , setValue] = useState(0)
    const [loading,setLoading] =useState(true)


    const fetchApi = async ()=>{
        try{
            const response = await fetch(url)
            const data = await response.json()
            setLoading(false)
            console.log(data);
            
            setInformation(data)
        }catch(err){
            console.log("hi" + err.message);

        }




    }
    useEffect(()=>{
        fetchApi()


    },[])

    
   

    
    if(loading){
        return(
            <div>loading</div>
        )
    }
    const {id,order,title,dates,duties,company} =information[value]
    return ( <div className="tabs">

        <h1>Experience

        <div className="border"></div>
        </h1>
        
        <div className="information">
             <div className="names">
                {information.map((info,index)=>{
                    return <div key={info.id} className={`name ${index ===value && 'style'}`} onClick={()=>setValue(index)} >
                        {info.company}
                    </div>
                })}
            </div>
            <div className="details">
                <h1>{title}</h1>
                <p>{company}</p>
                <h6>{dates}</h6>
                {duties.map((duty,index)=>{
                   return <div className="paras" key={index} className="duties">
                        <p>{duty}</p>
                    </div>

                })}


            </div>



        </div>



        

    </div> );
}
 
export default Tabs;