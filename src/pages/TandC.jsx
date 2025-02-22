import React from "react";
import { termsData } from "../Data";
import Heading from "../components/global/Heading";

const TandC = () => {

  return (
    <div className="max-w-5xl p-10 text-gray-900 ">
      <Heading heading={"Terms & Conditions"} />
      <p className="mb-4">
        Welcome to CAAVYA! By using our website and services, you agree to the
        following Terms and Conditions. Please read them carefully.
      </p>
      {termsData.map((data, index) => (
        <section className="mb-6" key={index}>
          <h2 className="font-bold text-lg">
            {index + 1}. {data.title}
          </h2>
          {data.points.map((point, i) => (
            <p key={i}>{point}</p>
          ))}
        </section>
      ))}
    </div>
  );
};

export default TandC;
