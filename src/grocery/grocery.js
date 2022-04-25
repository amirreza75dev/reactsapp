import { useEffect, useState } from "react";
import ListGrocery from "./listGrocery";

const Grocery = () => {

    const [list,setList] = useState([])
    
    const [alert,setAlert]= useState({show :false, mes : "", type:""})
    const [value,setValue] = useState("")
    const [edit,setEdit] = useState(false)
    const [editId,setEditId] = useState(null)

    const handleList = ()=>{
        if(!edit && value.length >= 1){
            
            showAlert(true,"item added" ,"success")
            const newItem = {id: new Date().getTime().toString(), title: value}
            setList([...list,newItem])
            setValue("")

            

        }
        if(edit){
            setList(
                list.map((item)=>{
                    if(item.id ===editId){
                        return {...item, title :value}
                    }
                    return item
                })
            )
            setValue("")
            setEditId(null)
            setEdit(false)
            showAlert(true,"value changed", "success")


        }
    }

    const showAlert = (show = false , mes ='', type = '') =>{ 
        setAlert({show,mes,type})
    }


    useEffect(() => {
        const timeout = setTimeout(() => {
          showAlert();
        }, 3000);
        return () => clearTimeout(timeout);
      }, [list]);



      const editItems = (id)=>{
          const editItem = list.find((item)=>item.id ===id);

          setValue(editItem.title)
          setEdit(true)
          setEditId(id)


        


    }

    const deleteItems = (id)=>{
        const deleteItem = list.filter((item)=>item.id !==id);
        setList(deleteItem)
        showAlert(true,"item deleted", "danger")




      


  }

    
    return (
        <div className="grocery">
            {alert.show && <div className={alert.type}> {alert.mes} </div>}
            <h1>Grocery Bud</h1>

            <form onSubmit= {(e)=> e.preventDefault()}>
                <input type="text" placeholder="egg" value ={value} onChange={(e)=> setValue(e.target.value)}/>
                <button onClick={()=>handleList()}>{edit ? "Edit": "Submit"}</button>

            </form>
            <ListGrocery list = {list} editItems ={editItems} deleteItems ={deleteItems}/>
            <div className="clear-items" onClick ={ ()=>{setList([]); showAlert(true,"items deleted","danger")}}>
                Clera Items
            </div>



        </div>
      );
}
 
export default Grocery;