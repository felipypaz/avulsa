import styled from "styled-components";
import Stars from "./assets/start.png";
export const Container = styled.div`
  background: url(${Stars});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
/*   height: 100vh; */
  display: flex;
  color: #fff;
  flex-direction: column;
  align-items: center;
  .All {
    /*  margin-top: 5rem; */
    display: flex;
    height: 1100px;
  }
  .teste {
    display: flex;
    flex-direction: column;
    align-items: center;
    /*  position: relative;
    bottom: 70px; */
  }
  .card {
    position: relative;
    bottom: 30px;
    width: 25.25rem;
    height: 42.5rem;
    border-radius: 0.75rem;
    box-shadow: 0px 3.784829616546631px 94.62073516845703px 0px
      rgba(0, 0, 0, 0.25);
    background: #fff;

    background: linear-gradient(45deg, #000511, #0e4665);

    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
  }
  .card1 {
    position: relative;
    left: 20px;
    width: 25.25rem;
    height: 42.5rem;
    border-radius: 0.75rem;
    box-shadow: 0px 3.784829616546631px 94.62073516845703px 0px
      rgba(0, 0, 0, 0.25);
    background: #fff;

    background: linear-gradient(45deg, #8e8e8e, #595959);

    display: flex;
    flex-direction: column;
    align-items: center;
    /*  z-index: 2; */
  }
  .card2 {
    position: relative;
    right: 20px;
    width: 25.25rem;
    height: 42.5rem;
    border-radius: 0.75rem;
    box-shadow: 0px 3.784829616546631px 94.62073516845703px 0px
      rgba(0, 0, 0, 0.25);
    background: #fff;

    background: linear-gradient(45deg, #8e8e8e, #595959);

    display: flex;
    flex-direction: column;
    align-items: center;
    /* z-index: 1; */
  }

  .button1 {
    display: flex;
    width: 13rem;
    padding: 0.5rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.3125rem;
    border: 1px solid #000;
    background: none;
    color: #000;
    cursor: pointer;
    /*   &:hover{
    background-color:#939393;
    } */
  }
  .button2 {
    cursor: pointer;
    display: flex;
    width: 13rem;
    padding: 0.5rem 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.3125rem;
    border: 1px solid #d2d2d2;
    background: none;
    color: #fff;
    /*   &:hover{
    background-color:#939393;
    } */
  }
  .More {
    /*     position: relative;
    top: 20px; */
    font-family: Inter;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: 1px solid #25659a;
    background: #25659a;
    display: flex;
    width: 11.9375rem;
    padding: 0.625rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.3125rem;
    background: var(--background-etiqueta-card-2, #25659a);
    z-index: 4;
  }
`;

export const P = styled.div`
  /* border: 2px solid red ; */
  /* width: 70%; */
  font-family: Roboto;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: space-between;
  height: 2.5rem;
  align-items: center;
  /* p{
  margin-left: 20px;
} */
  .img {
    margin-right: 20px;
    height: 1.5rem;
  }
`;

export const H5 = styled.h5`
  margin: 0;
  font-family: Roboto;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const H1 = styled.h1`
  font-family: Poppins;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 20px 0 0 0;
  margin-top: 4rem;
`;
export const H2 = styled.h2`
  font-family: Poppins;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  margin-bottom: 4rem;
`;
