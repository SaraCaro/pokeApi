import { collection, getDocs, addDoc } from "firebase/firestore";
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

    const escribeDatosFireStore = async () => {
        try {
            const docRef = await addDoc(collection(db, "ejemplo"), {
              nombre: "prueba3",    
            });
            console.log("Document written with ID: ", docRef.id);
            leerDatosFireStore();
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    return (        
        <div className="">
            <h1>Componente lista datos</h1>
            <button onClick={escribeDatosFireStore}>Escribe</button>
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