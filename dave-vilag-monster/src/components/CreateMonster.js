import React, { useState } from "react";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRight from "../assets/arrow-right.svg";
import Air from "../assets/air.svg";
import Earth from "../assets/earth.svg";
import Fire from "../assets/fire.svg";
import Water from "../assets/water.svg";
import Attack from "../assets/attack.svg";
import Defense from "../assets/defense.svg";
import MonsterList from "./MonsterList";

const CreateMonster = () => {
  const arr = [Air, Earth, Fire, Water];
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [defense, setDefense] = useState(0);
  const [attack, setAttack] = useState(0);
  const [obj, setObj] = useState([]);
  const [search, setSearch] = useState("");

  const deleteHandler = (index) => {
    const removeArr = [...obj].filter((el, newIndex) => newIndex !== index);
    setObj(removeArr);
  };

  const handleClickRight = () => {
    setCount(count + 1);
    if (count === 3) {
      setCount(0);
    }
  };
  const handleClickLeft = () => {
    setCount(count - 1);
    if (count === 0) {
      setCount(3);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    obj.push({ name, count, attack, defense });
    setCount(0);
    setAttack(0);
    setDefense(0);
    setName("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const filteredArray = [...obj].filter(
    //   elem => elem.name.search(search) !== -1
    // );
    const filteredArray = [...obj].filter((elem) => elem.name === search);
    setObj(filteredArray);
  };

  return (
    <div className="createMonster">
      <form action="">
        <div className="createMonster__select">
          <img src={ArrowLeft} alt="left-arrow" onClick={handleClickLeft} />
          <img src={arr[count]} className="createMonster__picture" alt="pic" />
          <img src={ArrowRight} alt="right-arrow" onClick={handleClickRight} />
        </div>
        <div className="createMonster__input">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="createMonster__stats">
          <img src={Attack} alt="attack" />
          <input
            type="number"
            name="attack_counter"
            id="attack_counter"
            onChange={(e) => setAttack(e.target.value)}
            value={attack}
          />
          <img src={Defense} alt="defense" />
          <input
            type="number"
            name="defense_counter"
            id="defense_counter"
            onChange={(e) => setDefense(e.target.value)}
            value={defense}
          />
        </div>
        <div className="createMonster__button">
          <button onClick={handleForm} type="submit">
            Add
          </button>
        </div>
      </form>
      <div className="createMonster__search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            id="searchId"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
      </div>
      <div className="createMonster__list">
        {obj.map((monster, index) => (
          <MonsterList
            key={index}
            pic={arr[monster.count]}
            monsterName={monster.name}
            attackValue={monster.attack}
            defenseValue={monster.defense}
            deleteHandler={() => deleteHandler(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CreateMonster;
