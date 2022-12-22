import React, { useState, useEffect } from "react";
import * as S from "./Styled";
import List from "../List/List";
import axios from "axios";
import Datasheet from "../Datasheet/Datasheet";

export default function Search({
  openComics, 
  setOpenComics,
  openEvents,
  setOpenEvents,
}) {
  const [typing, setTyping] = useState("");
  const [abilities, setAbilities] = useState("");
  const [openList, setOpenList] = useState(false);
  const [references, setReferences] = useState("");
  const [openDataSheet, setOpenDataSheet] = useState(false);

  const searchHero = (name) => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=1&apikey=06ead66137452ef75685fcdc895a6c0b&hash=2774d42849c52a2ec23f9b2298e41e7a&limit=100`
      )
      .then((response) => {
        setAbilities(response.data);
        setOpenList(true);
      });
    return abilities;
  };
  const searchId = (id) => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=06ead66137452ef75685fcdc895a6c0b&hash=2774d42849c52a2ec23f9b2298e41e7a`
      )
      .then((response) => {
        setReferences(response.data);
        setOpenDataSheet(true);
        setOpenList(false);
      });
  };
  
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          var btn = document.querySelector("#submit");
          btn.click(()=>searchHero(typing));
        }
      });
    }
  }, []);
  return (
    <>
      <S.SearchHero>
        <S.Title>Super-hero</S.Title>
        <S.Input onChange={(e) => setTyping(e.target.value)}></S.Input>
        <S.Button
          id="submit"
          onClick={() => {
            searchHero(typing), setOpenDataSheet(false);
          }}
        >
          {" "}
          Entre
        </S.Button>
      </S.SearchHero>
      <S.List>
        {abilities.data?.results?.map((item, index) => (
          <div key={index}>
            <div onClick={() => searchId(item.id)}>
              {openList && (
                <List
                  name={item?.name}
                  image={
                    item?.thumbnail?.path +
                    "." +
                    abilities?.data?.results[0]?.thumbnail?.extension
                  }
                />
              )}
            </div>
          </div>
        ))}
        {references.data?.results?.map((hero, index) => {
        return (
          <div key={index}>
            {openDataSheet && (
              <Datasheet
                name={hero?.name}
                image={
                  hero?.thumbnail?.path +
                  "." +
                  references?.data?.results[0]?.thumbnail?.extension
                }
                id={hero.id}
                description={hero?.description}
                urls={hero?.urls}
                setOpenDataSheet={setOpenDataSheet}
                setOpenList={setOpenList}
                openComics={openComics} 
                setOpenComics={setOpenComics}
                openEvents={openEvents}
                setOpenEvents={setOpenEvents}
              />
            )}
          </div>
        );
      })}
      </S.List>      
    </>
  );
}
