import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const First = ({ className }) => {
  return (
    <div className={className}>
      <p>Rends toi au banc près du Château de Vincennes</p>
      <div className="reponse">
        <button>
          <a href="https://goo.gl/maps/EybnfkfP2xE1Aucs5" target="blank">
            Où se trouve le banc ?
          </a>
        </button>
        <Link to="/ecoute">
          <button>j'y suis</button>
        </Link>
      </div>
    </div>
  );
};

export default styled(First)`
  font-family: "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .reponse {
    position: fixed;
    bottom: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  a {
    font-size: 14px;
    text-decoration: none;
    color: white;
  }

  a:visited {
    color: white;
  }
  button {
    background: transparent;
    border: none;
    color: white;
    font-size: 14px;
  }
`;
