import {AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai'

const ListGrocery = ({list,editItems,deleteItems}) => {


    return ( 
        <div className="list-grocery">
            {list.map((item)=>{
                const {title , id}= item
                return <div key={id} className="list-item">
                    <h3>{title}</h3>
                    <button onClick = {()=> editItems(id)}><AiOutlineEdit className="item-edit" /></button>
                    <button onClick = {()=> deleteItems(id)}><AiOutlineDelete className="item-delete"/> </button>

                </div>
            })}

        </div>
     );
}
 
export default ListGrocery;