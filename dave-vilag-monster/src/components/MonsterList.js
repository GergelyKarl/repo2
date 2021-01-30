import React from "react";
import Attack from "../assets/attack.svg";
import Defense from "../assets/defense.svg";
import Trash from "../assets/trash-can.svg";

const MonsterList = ({
  pic,
  attackValue,
  defenseValue,
  monsterName,
  deleteHandler,
}) => {
  return (
    <div className="monsterList">
      <img src={pic} alt="pic" />
      <div className="monsterList__stats">
        <h3>{monsterName}</h3>
        <div className="monsterList__pics">
          <img src={Attack} alt="Attack" />
          <h4>{attackValue}</h4>
          <img src={Defense} alt="Defense" />
          <h4>{defenseValue}</h4>
        </div>
      </div>
      <img src={Trash} alt="Trash" onClick={deleteHandler} />
    </div>
  );
};

export default MonsterList;
