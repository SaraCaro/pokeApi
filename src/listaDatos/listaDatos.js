import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebaseConfig';
import { useEffect, useState } from "react";

function ListaDatos(){
    
    const [ejemplo, setEjemplo] = useState([]);
    const leerDatosFireStore = async () => {
       
        await getDocs(collection(db, "ejemplo"))
            .then((querySnapshot)=>{               
                const listado = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setEjemplo(listado);                
                // console.log(todos, newData);
            })
    }

    useEffect(()=>{
        leerDatosFireStore();
    }, [])

    return (        
        <div className="">
            <h1>Componente lista datos</h1>
            {
                ejemplo.map((ejemplo)=>(
                    <p key={ejemplo.id}>
                        {ejemplo.nombre}
                    </p>
                ))
            }
        </div>
    )
}

export default ListaDatos;