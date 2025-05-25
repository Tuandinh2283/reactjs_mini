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
            <span style={{ color: "black" }}>{plan.name}</span>
            <span style={{ color: "black" }}>{plan.price}</span>
            <div className="features" style={{ color: "black" }}>
              {plan.features.map((feature, i) => (
                <div className="feature" style={{ color: "black" }}>
                  <img src={whileTick} alt="" />
                  <span key={i} style={{ color: "black" }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <span style={{ color: "black" }}>See more benefits -</span>
            </div>
            <button className="btn" style={{ color: "black" }}>
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Plans;
