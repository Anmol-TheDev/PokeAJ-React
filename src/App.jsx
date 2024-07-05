import { getDocs,collection,orderBy,query, limit } from "firebase/firestore";
import { db } from "../firebase/database";
import "./App.css";
import { useEffect, useState,createContext } from "react";
import MainPage from "../component/pokeCard";

 export const DataContext =createContext();
 function App() {
 const [data,setdata]=useState([]);

  //function for storing all pokeData

  useEffect(()=>{
  const fun = async () => {

    try{
    let doc =query(collection(db,"pkShortData"),orderBy("id"),limit(20));
    const docRef =  await getDocs(doc);
    docRef.forEach(el=>{
      setdata((data)=>[...data,el.data()])
    })
    } catch(err){
      console.log(err)
    }
  }
  
 fun();

},[])

return (
  <>
  <DataContext.Provider value={data}>
    <MainPage/>
  </DataContext.Provider>
  <footer>
    <h3>Developer: AJ</h3>
    <div>
      <a target="_blank" href="https://discord.gg/SWMThTC4"><i id="discord" className="fab fa-discord"></i></a>
      <a id="email" target="_blank" href="mailto:ajlagend06@gmail.com"><i  className="fa fa-envelope" aria-hidden="true"></i></a>
      <a target="_blank" href="https://github.com/matrixAJ27"><i id="git" className="fa-brands fa-github"></i></a>
    </div>

  </footer>
  </>
  );
}

export default App;
