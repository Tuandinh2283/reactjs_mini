import React from "react";
import "../../components/Plans/Plans.css";
import { plansData } from "../../data/plansData";
import whileTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container" id="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text"> READY TO START</span>
        <span> YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS </span>
      </div>

      <div className="plans">
        {plansData.map((plan) => (
          <div className="plan" key={plan.id}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>{plan.price}</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whileTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits -</span>
            </div>
            <button className="btn">Join</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Plans;
