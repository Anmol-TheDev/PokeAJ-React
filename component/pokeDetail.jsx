import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./pokeDetail.css";

const PokeDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const [Data, setData] = useState();
  let [img, setImg] = useState();
  const [mainImgUrl, setMainImgUrl] = useState();
  const [index,setIndex]=useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((output) => {
        setData(output);
        if (output) {
          setImg([
            { url: output?.sprites.other["official-artwork"].front_default },
            { url: output.sprites.other["official-artwork"].front_shiny },
            { url: output.sprites.other["home"].front_default },
            { url: output.sprites.other["home"].front_shiny },
          ]);
          setMainImgUrl(
            output?.sprites.other["official-artwork"].front_default
          );
        }
      });
  }, []);
  console.log(Data);
  if (!Data) {
    return <div>Loadding</div>;
  }
  const backBtn =()=>{
      navigate(-1);
      
  }
  return (
    <div className="container">
  
      <button onClick={backBtn}><i class="fa-solid fa-arrow-left"></i></button>
      <h1>{Data.name}</h1>

      <div className="images">
        <div className="mainImg">
          <img src={mainImgUrl} alt="Img" />
        </div>
        <div className="groupedImg">
          {img?.map((el,i) => {
            return (
              <img className={`${i===index ? 'bakgroundChnage':""}`}
                key={el.url}
                src={el.url}
                onClick={() => {
                  setIndex(i)

                  setMainImgUrl(el.url);
                }}
                alt="Img"
              />
            );
          })}
        </div>
      </div>

      <section className="information">
        <div className="types">
          {Data.types.map((el) => {
            return <p key={el.type.name} >{el.type.name}</p>;
          })}
        </div>
        <div className="pokebodyDetail">
          <p>Weight : {Data.weight / 10}Kg</p>
          <p>Height : {Data.height / 10}M</p>
        </div>
      </section>
      <div className="skillBarBox">
        <div className="skillBar">
          <span className="skill-name">HP</span>
          <span className="skill-percent">{Data.stats[0].base_stat}</span>
          <span className="skill-bar level5"style={{width:Data.stats[0].base_stat/200*100+'%'}}></span>
        </div>

        <div className="skillBar">
          <span className="skill-name">ATTACK</span>
          <span className="skill-percent">{Data.stats[1].base_stat}</span>
          <span className="skill-bar level4"style={{width:Data.stats[1].base_stat/200*100+'%'}}></span>
        </div>

        <div className="skillBar">
          <span className="skill-name">DEFENSE</span>
          <span className="skill-percent">{Data.stats[2].base_stat}</span>
          <span className="skill-bar level3"style={{width:Data.stats[2].base_stat/200*100+'%'}}></span>
        </div>
        <div className="skillBar">
          <span className="skill-name">S.ATTACK</span>
          <span className="skill-percent">{Data.stats[3].base_stat}</span>
          <span className="skill-bar level3"style={{width:Data.stats[3].base_stat/200*100+'%'}}></span>
        </div>
        <div className="skillBar">
          <span className="skill-name">S.DEFENSE</span>
          <span className="skill-percent">{Data.stats[4].base_stat}</span>
          <span className="skill-bar level3"style={{width:Data.stats[4].base_stat/200*100+'%'}}></span>
        </div>

        <div className="skillBar">
          <span className="skill-name">SPEED</span>
          <span className="skill-percent">{Data.stats[5].base_stat}</span>
          <span className="skill-bar level1" style={{width:Data.stats[5].base_stat/200*100+'%'}}></span>
        </div>
      </div>
    </div>
  );
}
export default PokeDetail;
