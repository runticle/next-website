import styled from "styled-components"

const LeavesStyle = styled.div`
    // falling leaves
    position:absolute;
    width:100%;
    height: 100%;
    z-index:0;
    overflow:hidden;
    top:0;
    left:0;
    pointer-events: none;

    border-bottom: 1px solid var(--lightGreen);

  .leaf{
    position: absolute;
    top:-100px;
    width: 40px;
    height: 40px;
    background:#f1f1f1;
    border-radius: 0 70%;
    opacity:0.3;
    transform: rotate(0deg);
    animation: fall 10s infinite ease-in;
    pointer-events: none;
  }
  .leaf:nth-child(1){
    left:10%;
    animation-duration:14s;
  }
  .leaf:nth-child(2){
    left:15%;
    animation-duration: 10s;
  }
  .leaf:nth-child(3){
    left:24%;
    animation-duration:9s;
    border-radius: 70% 0;
  }
  .leaf:nth-child(4){
    left:35%;
    animation-duration:4s;
    border-radius: 70% 0;
  }
  .leaf:nth-child(5){
    left:46%;
    animation-duration:12s;
  }
  .leaf:nth-child(6){
    left:55%;
    animation-duration:8s;
    border-radius: 70% 0;
  }
  .leaf:nth-child(7){
    left:59%;
    animation-duration:7s;
  }
  .leaf:nth-child(8){
    left:76%;
    animation-duration:13s;
  }
  .leaf:nth-child(9){
    left:84%;
    animation-duration:5s;
    border-radius: 70% 0;
  }
  .leaf:nth-child(10){
    left:95%;
    animation-duration:10s;
  }
  @keyframes fall{
    0%{
      top:-100px;
      transform:translateX(0) rotate(0);
    }
    50%{
      transform:translateX(70px) rotate(80deg);
    }
    90%{
      transform:translateX(40px) rotate(40deg);
      top: 99vh;
    }
    100%{
      top:100vh;
      transform:translateX(40px) rotate(60deg);
    }
}

`

export default function Leaves() {
  return (
    <LeavesStyle>
      <div className="leaf"></div>
      <div className="leaf"></div>
      <div className="leaf"></div>
      <div className="leaf"></div>
      <div className="leaf"></div>
      <div className="leaf"></div>
      <div className="leaf"></div>
      <div className="leaf"></div>
      <div className="leaf"></div>
      <div className="leaf"></div>
    </LeavesStyle>
  )
}