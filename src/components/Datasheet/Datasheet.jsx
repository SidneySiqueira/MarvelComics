import axios from "axios";
import React from "react";
import { useState } from "react";
import Comics from "../Comics/Comics";
import Events from "../Events/Events";
import * as S from "./Styled";

export default function Datasheet({
  name,
  image,
  id,
  description,
  urls,
  setOpenDataSheet = { setOpenDataSheet },
  setOpenList = { setOpenList },
  openComics,
  setOpenComics,
  openEvents,
  setOpenEvents,
}) {
  const [catolog, setCatalog] = useState();
  const [events, setEvents] = useState();

  const comicsId = (choice) => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${choice}/comics?apikey=06ead66137452ef75685fcdc895a6c0b&hash=2774d42849c52a2ec23f9b2298e41e7a&limit=50&ts=1`
      )
      .then((response) => {
        setCatalog(response.data);
        setOpenComics(true);
        setOpenEvents(false);
      });
    return catolog;
  };
  const eventsId = (choice) => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${choice}/events?apikey=06ead66137452ef75685fcdc895a6c0b&hash=2774d42849c52a2ec23f9b2298e41e7a&limit=50&ts=1`
      )
      .then((response) => {
        setEvents(response.data);
        setOpenEvents(true);
        setOpenComics(false);
      });
    return events;
  };
  return (
    <S.Datasheet>
      <S.Information>
        <S.Image src={image} />
        <S.Presentation>
          <S.Name>{name}</S.Name>
          <S.Description>
            {description ? description : "Don't have information"}
          </S.Description>
          {urls.map((item) => {
            return (
              <S.Links>
                <S.References>{item.type}:</S.References>
                <S.Urls href={item.url} target="_blank">Click here</S.Urls>
              </S.Links>
            );
          })}
        </S.Presentation>
        <S.X
          onClick={() => {
            setOpenDataSheet(false), setOpenList(true);
          }}
        >
          X
        </S.X>
      </S.Information>
      <S.Shares>
        <S.Div>
          <S.Category onClick={() => comicsId(id)}>Comics</S.Category>
        </S.Div>
        <S.Div>
          <S.Category onClick={() => eventsId(id)}>Events</S.Category>
        </S.Div>
      </S.Shares>
      <S.Catalog>
        {openComics && (
          <S.Close>
            <S.CloseComics
              onClick={() => {
                setOpenComics(false);
              }}
            >
              X
            </S.CloseComics>
          </S.Close>
        )}

        {catolog?.data?.results?.map((item, index) => {
          return (
            <div key={index}>
              {openComics && (
                <Comics
                  title={item.title}
                  image={item?.thumbnail?.path + "." + item.thumbnail.extension}
                  sinopse={item.description}
                  setOpenComics={setOpenComics}
                />
              )}
            </div>
          );
        })}
        {openEvents && (
          <S.Close>
            <S.CloseComics
              onClick={() => {
                setOpenEvents(false);
              }}
            >
              X
            </S.CloseComics>
          </S.Close>
        )}
        {events?.data?.results?.map((item2) => {
          return (
            <div>
              {openEvents && (
                <Events
                  title2={item2.title}
                  image2={
                    item2?.thumbnail.path + "." + item2.thumbnail.extension
                  }
                  description2={item2.description}
                  start={item2.start}
                  end={item2.end}
                />
              )}
            </div>
          );
        })}
      </S.Catalog>
    </S.Datasheet>
  );
}
