import React from "react";
import "./Companies.css";
import equinix from "../../assets/images_tuan/equinix.png";
import tower from "../../assets/images_tuan/tower.png";
import realty from "../../assets/images_tuan/realty.png";

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src={tower} alt="tower" />
        <img src={realty} alt="realty" />
        <img src={equinix} alt="equinix" />
        <img src={tower} alt="r3" />
      </div>
    </section>
  );
};
export default Companies;
