import { useContext, useEffect, useRef, useState } from "react";
import "./pokeCard.css";
import { DataContext } from "../src/App";
import { Divide as Hamburger } from "hamburger-react";
import video from './videoplayback.webm'
import { Link } from "react-router-dom";
function MainPage() {
  const poke = useContext(DataContext);
  const [pkdata, setPkData] = useState([]);
  const [StartVal, setStartVal] = useState(0);
  const [EndVal, setEndVal] = useState(20);
  const [display, setDisplay] = useState("none");
  const [sideBar, setSideBar] = useState({});
  const [btnDisplay,setbtnDisplay]= useState({display:'flex'});
  const [Xbtn,setXbtn] = useState({opacity:'0'});
  //NextButton
  const NestBtn = () => {
    setStartVal(StartVal + 20);
    setEndVal(EndVal + 20);
    window.scrollTo(0, 0);
  };
  //previousButton
  const PreviousBtn = () => {
    setStartVal(StartVal - 20);
    setEndVal(EndVal - 20);
    window.scrollTo(0, 0);
  };
  // style for filters li tag
  function filterStyle(el) {
    const style = {
      color: el,
      width: "67px",
      
    };
    return style;
  }

  useEffect(() => {
    if (poke) {
      setPkData([]);
      poke.forEach((element) => {
        if (element.id > StartVal && element.id <= EndVal) {
          setPkData((pkdata) => [...pkdata, element]);
        }
      });
    }

    if (EndVal < 21) {
      setDisplay("none");
    } else {
      setDisplay("block");
    }
  }, [poke, StartVal, EndVal]);
console.log(poke)
  const TypeBg = (argu) => {
    switch (argu) { 
      case "normal":
        return "#A8A77A";

      case "fire":
        return "#EE8130";

      case "water":
        return "#6390F0";

      case "electric":
        return "#F7D02C";

      case "grass":
        return "#7AC74C";

      case "ice":
        return "#96D9D6";

      case "fighting":
        return "#C22E28";

      case "poison":
        return "#A33EA1";

      case "ground":
        return "#E2BF65";

      case "flying":
        return "#A98FF3";

      case "psychic":
        return "#F95587";

      case "bug":
        return "#A6B91A";

      case "rock":
        return "#B6A136";

      case "ghost":
        return "#735797";

      case "dragon":
        return "#6F35FC";

      case "dark":
        return "#705746";

      case "steel":
        return "#B7B7CE";

      case "fairy":
        return "#D685AD";

      default:
        return "#FFFFFF";
    }
  };
  const filterType = (argument) => {
    setPkData([]);
    poke.forEach((el) => {
      el.type.forEach((element) => {
        if (element.Type.Name.includes(argument)) {
          setPkData((pkdata) => [...pkdata, el]);
        }
      });
    });
    scrollTo(0,260)
    setbtnDisplay({display:'none'})
  }

  const filterSearch=(argu)=>{
    if(argu.target.value.length){
      console.log(argu.target.value)
      setXbtn({opacity:'1'})
      setPkData([]);
      poke.forEach((el)=>{
        if(el.name.includes(argu.target.value.toString())){
          setPkData((pkdata)=>[...pkdata,el]);
        }
      })
      setbtnDisplay({display:'none'})
      setXbtn({opacity:'1'})
    }
    
    else{
      
      setPkData([])
      for(let i=0;i<20;i++){
        setPkData((pkdata)=>[...pkdata,poke[i]])
      }
      setbtnDisplay({display:'flex'})
      setXbtn({opacity:'0'})
    }
  }

  const closebtn=()=>{
      setPkData([])
    for(let i=0;i<20;i++){
      setPkData((pkdata)=>[...pkdata,poke[i]])
    }
    setbtnDisplay({display:'flex'})
    setXbtn({opacity:'0'})
  }
  return (
    <>
      <div className="Header">
        <video src={video} autoPlay muted loop></video>
        <div className="SideBar" style={sideBar}>
          <h2>Types</h2>
          <ul>
            <li
              style={filterStyle("#A8A77A")}
              onClick={() => {
                filterType("normal");
              }}
            >
              Normal
            </li>
            <li
              style={filterStyle("#EE8130")}
              onClick={() => {
                filterType("fire");
              }}
            >
              Fire
            </li>
            <li
              style={filterStyle("#6390F0")}
              onClick={() => {
                filterType("water");
              }}
            >
              Water
            </li>
            <li
              style={filterStyle("#F7D02C")}
              onClick={() => {
                filterType("electric");
              }}
            >
              Electric
            </li>
            <li
              style={filterStyle("#7AC74C")}
              onClick={() => {
                filterType("grass");
              }}
            >
              Grass
            </li>
            <li
              style={filterStyle("#96D9D6")}
              onClick={() => {
                filterType("ice");
              }}
            >
              Ice
            </li>
            <li
              style={filterStyle("#C22E28")}
              onClick={() => {
                filterType("fighting");
              }}
            >
              Fighting
            </li>
            <li
              style={filterStyle("#A33EA1")}
              onClick={() => {
                filterType("poison");
              }}
            >
              Poison
            </li>
            <li
              style={filterStyle("#E2BF65")}
              onClick={() => {
                filterType("ground");
              }}
            >
              Ground
            </li>
            <li
              style={filterStyle("#A98FF3")}
              onClick={() => {
                filterType("flying");
              }}
            >
              Flying
            </li>
            <li
              style={filterStyle("#F95587")}
              onClick={() => {
                filterType("psychic");
              }}
            >
              Psychic
            </li>
            <li
              style={filterStyle("#A6B91A")}
              onClick={() => {
                filterType("bug");
              }}
            >
              Bug
            </li>
            <li
              style={filterStyle("#B6A136")}
              onClick={() => {
                filterType("rock");
              }}
            >
              Rock
            </li>
            <li
              style={filterStyle("#735797")}
              onClick={() => {
                filterType("ghost");
              }}
            >
              Ghost
            </li>
            <li
              style={filterStyle("#6F35FC")}
              onClick={() => {
                filterType("dragon");
              }}
            >
              Dragon
            </li>
            <li
              style={filterStyle("#705746")}
              onClick={() => {
                filterType("dark");
              }}
            >
              Dark
            </li>
            <li
              style={filterStyle("#B7B7CE")}
              onClick={() => {
                filterType("steel");
              }}
            >
              Steel
            </li>
            <li
              style={filterStyle("#D685AD")}
              onClick={() => {
                filterType("fairy");
              }}
            >
              Fairy
            </li>
          </ul>
         <form>
         <input type="text" className="searchBox" autoSave="some_unique_value" onInput={(e)=>{filterSearch(e)}} placeholder="Pokemon"/>
         <button type="reset" style={Xbtn} className="closeBtn" onClick={()=>{closebtn()}}  ><i className="fa-solid fa-x"></i></button>
         </form>    
        </div>
        <Hamburger
          onToggle={(toggled) => {
            if (toggled) {
              setSideBar({ top: "0" });
            } else {
              setSideBar((sideBar) => {
                top: "-250px";
              });
              
                setPkData([])
                for(let i=StartVal;i<EndVal;i++){
                  setPkData((pkdata)=>[...pkdata,poke[i]])
                }
                setbtnDisplay({display:'flex'})
            }
          }}
        />
        <div className="header2ndChild">
          <h1>PokeAJ</h1>
           <form >
           <input type="text" autoSave="some_unique_value" onChange={(e)=>{filterSearch(e)}} placeholder="Pokemon" />
           <button type="reset" style={Xbtn} className="closeBtn" onClick={()=>{closebtn()}}><i className="fa-solid fa-x"></i></button>
           </form>
        </div>
      </div>

      <div id="PokeContainer">
        {pkdata?.map((element) => (
          <div key={element.id} className="Card">
            <Link to={"/pokemon?id="+element.id}>
            <div className="idDiv" ><p>{element.id}</p></div>
            <img
              src={element.sprites.Other.Official_artwork.Front_default}
              loading="eager"
            />
            <h2>{element.name}</h2>
            <div id="Cardfoot">
              {element.type.map((el) => (
                <span
                  key={el.Type.Name}
                  style={{ background: TypeBg(el.Type.Name) }}
                >
                  {el.Type.Name}
                </span>
              ))}
            </div>
          </Link>
          </div>
        ))}
      </div>
      <div id="ArrowBtn" style={btnDisplay}>
        <p onClick={PreviousBtn} style={{ display: display }}>
          <i className="fa-solid fa-arrow-left"></i>
        </p>
        <p onClick={NestBtn}>
          <i className="fa-solid fa-arrow-right"></i>
        </p>
      </div>
    </>
  );
}
export default MainPage;
