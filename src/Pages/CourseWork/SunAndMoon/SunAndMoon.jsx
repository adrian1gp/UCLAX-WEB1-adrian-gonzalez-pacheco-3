import { useState } from "react";
import Styled, { styled } from "styled-components";
import sunSrc from "./images/sun.png";
import moonSrc from "./images/moon.png";

const SunAndMoon = () => {
  // javascript

  const [imgSrc, imgSrcUpdate] = useState(sunSrc);

  const changeToMoon = () => {
    // console.log('MOON')
    imgSrcUpdate(moonSrc);
  };
  const changeToSun = () => {
    //console.log('SUN')
    imgSrcUpdate(sunSrc);
  };

  // html SunAndMoon
  return (
    <SunAndMoonStyled>
      <h2>Sun And Moon </h2>
      <div className="SunAndMoonImage"></div>
      <img
        src={imgSrc}
        onMouseEnter={changeToMoon}
        onMouseLeave={changeToSun}
      />
    </SunAndMoonStyled>
  );
};

export default SunAndMoon;

// styles
const SunAndMoonStyled = styled.div`
  .SunAndMoonImage {
    text-align: center;

    img {
      border: solid 20px teal;
      margin: 30px;
      padding: 20px;
      background-color: #00ffff;
    }
  }
`;
