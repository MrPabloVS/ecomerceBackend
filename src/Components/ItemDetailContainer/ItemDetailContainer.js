
import ItemDetail from '../ItemDetail/ItemDetail'
import React, {useState, useEffect,} from 'react';
import {useParams} from 'react-router'
import Loading from '../Loading/Loading';
import {getFirestore} from '../../sevices/getFirebase'

function ItemDetailContainer() {

    const {id} = useParams()
    const [Produc, setProduc] = useState([])
    const [loading, setLoading] = useState(true)
    


    useEffect(() => {

        const dataBase = getFirestore()
        dataBase.collection('Items').doc(id).get()
        .then(resp =>  setProduc( { id: resp.id , ...resp.data() } ))
        .catch(err=>console.log(err))
        .finally(()=> setLoading(false))

    }, [id])

    return(
     <div >
     { loading ? <Loading/> :
         <ItemDetail item={Produc} itemName={Produc.title} itemPrice={"$" + Produc.price} itemImg={Produc.img} stockProp={Produc.stock} itemId={id}></ItemDetail>}       
     </div>
    )

}

export default ItemDetailContainer