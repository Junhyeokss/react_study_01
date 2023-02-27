import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import styled from "styled-components";

// 1. api : db가 있음
// 2. db에서 data를 가져옴 useEffect 데이터 가져올때 React
// 3. 가져온 data를 React로 뿌려줌
// 4.

const UL = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 10px;
  img {
    max-width: 100%;
  }
  @media (max-width: 768px) {
    grid-templete-columns: repeat (1, 1fr);
  }
`;

const H1 = styled.h1`
  text-align: center;
`;

const Search = styled.div`
  text-align: center;
  padding: 20px 0;
`;

function App() {
  const [pic, sepic] = useState([]);
  const [s, setS] = useState();
  const getData = async () => {
    const data = await fetch(
      `https://pixabay.com/api/?key=21103852-9b5f4834542caaf4eef2c8533&q=${s}&image_type=photo`
    ).then((r) => r.json());

    //console.log(data, data.hits, data.hits[0].id);
    sepic(data.hits);
    console.log(data.hits);
  };

  // useEffect는 한번만 실행하는 변수
  useEffect(() => {}, []);

  getData();

  return (
    <>
      <H1>김준혁의 첫번째 리엑트</H1>
      <Search>
        <div>
          search :{" "}
          <input onChange={(e) => setS(e.target.value)} value={s}></input>
        </div>
      </Search>
      <UL>
        {pic.map((it) => {
          return (
            <li key={it.id}>
              <img src={it.largeImageURL} />
              <div>{it.id}</div>
              <div>{it.tags}</div>
            </li>
          );
        })}
      </UL>
    </>
  );
}

export default App;
