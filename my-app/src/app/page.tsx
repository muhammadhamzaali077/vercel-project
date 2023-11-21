import React from "react";
import Image from "next/image";
import pic from "./Images/young-fitness-man-studio.jpg";
import legacy from "./Images/legacy.jpg";
import environment from "./Images/Environment.jpg";
import experience from "./Images/Experience.jpg";
import result from "./Images/Result.jpg";
import bg from "./Images/BG home.jpg";
const HomePage = () => {
  return (
    <main className="container">
      <div>
        <Image src={pic} alt="BG" height={605} width={999} id="bgPic"></Image>
        <div className="welcomeTxt">
          <h1 id="l1">
            Fitness Zone is your one-stop destination for all things fitness.
          </h1>
          <h1 id="l2">
            Our experienced trainers provide personalized training programs and
          </h1>
          <h1 id="l3">
            expert advice to help you achieve your fitness goals. Our gym is
          </h1>
          <h1 id="l4">
            equipped with state-of-the-art equipment and facilities to ensure
          </h1>
          <h1 id="l5">
            that you have everything you need to get in shape and stay
          </h1>
          <h1 id="l6">
            healthy. Sign up today and start your fitness journey with us!
          </h1>
        </div>
      </div>
      <div className="BG">
        <Image src={bg} alt="BG" height={810} width={1000}></Image>
      </div>
      <div className="serBG">
        <div className="why">
          <h1>Why Fitness Zone?</h1>
        </div>
        <div className="wrapper">
          <div className="legacyImage">
            <Image
              src={legacy}
              alt="legacy"
              height={300}
              width={300}
              id="img"
            ></Image>
            <div className="content">
              <h1>LEGACY</h1>
              <p>
                Unleash your potential in a Fitness Zone <br />
                steeped in a legacy of excellence and <br />
                generations of health and wellness
                <br /> commitment.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper1">
          <div className="experienceImage">
            <Image
              src={experience}
              alt="Experience"
              height={300}
              width={300}
              id="img1"
            ></Image>
            <div className="contentexp">
              <h1>EXPERIENCE</h1>
              <p>
                Elevate your fitness journey with <br />
                seasoned trainers dedicated to
                <br />
                curating a personalized and <br />
                transformative experience.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper2">
          <div className="environmentImage">
            <Image
              src={environment}
              alt="Environment"
              height={300}
              width={300}
              id="img2"
            ></Image>
            <div className="contentenviron">
              <h1>ENVIRONMENT</h1>
              <p>
                Immerse yourself in an electric <br />
                atmosphere fostering camaraderie,
                <br />
                positivity, and a strong sense of
                <br /> community in our Fitness Zone.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper3">
          <div className="resultImage">
            <Image
              src={result}
              alt="Result"
              height={300}
              width={300}
              id="img3"
            ></Image>
            <div className="contentResult">
              <h1>RESULT</h1>
              <p>
                Achieve unparalleled fitness milestones
                <br /> through proven methods and cutting-
                <br />
                edge equipment, witnessing the <br />
                transformative power of dedication <br />
                in every session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
