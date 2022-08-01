import ItemList from "../ItemList/ItemList";
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../sevices/getFirebase'
import Loading from "../Loading/Loading";


function ItemListContainer() {
    
  const [loading, setLoading] = useState(true)
  const [listado, setListado] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
        
        
    if (categoryId) {
        const dataBase = getFirestore()
        dataBase.collection('Items').where('category', '==', categoryId).get() 
        .then(resp => setListado( resp.docs.map(it => ({id: it.id, ...it.data() }) )) )            
    } else {
        const dataBase = getFirestore()
        dataBase.collection('Items').get() 
        .then(resp => setListado( resp.docs.map(it => ({id: it.id, ...it.data() }) )) )
        .catch(err => console.log(err) )
        .finally(()=> setLoading(false))            
    }

                    }, [categoryId])
    
    return (
      <div className="bg-black">
        
        {loading ? <Loading/> : 
                   <ItemList lista={listado} />            
            }   
          
      </div>
    );
  }
  
  export default ItemListContainer;
  