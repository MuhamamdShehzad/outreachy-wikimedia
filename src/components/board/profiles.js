import React from "react";
import "./boardstyle.css";
export default function profiles({ Leaderboard }) {
  return <div id="profile">{Item(Leaderboard)}</div>;
}

function Item(data) {
  return (
    <>
      {data.map((value, index) => (
        <div className="flex" key={index}>
          <div className="item1">
            <img src={value.img} alt="" />

            <div className="info">
              <h3 className="name text-dark">{value.name}</h3>
              <span>{value.location}</span>
            </div>
          </div>
          <div className="item1">
            <span>{value.score}</span>
          </div>
        </div>
      ))}
    </>
  );
}
