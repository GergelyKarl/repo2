import React from "react";
import "./Widget.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

const Widget = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widget__article">
      <div className="widget__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widget__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widget">
      <div className="widget__header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Vmi hír", "Top news - 9857 readers")}
      {newsArticle("Corona virus 2020 Magyarország", "Top news - 9857 readers")}
      {newsArticle(
        "Super important news from the world",
        "Top news - 9857 readers"
      )}
      {newsArticle(
        "Super important news from the world",
        "Top news - 9857 readers"
      )}
      {newsArticle(
        "Super important news from the world",
        "Top news - 9857 readers"
      )}
    </div>
  );
};

export default Widget;
