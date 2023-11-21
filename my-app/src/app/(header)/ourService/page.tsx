import Image from "next/image";
import service from "../../Images/service.jpg";
import spa from "../../Images/Spa.jpg";
import gym from "../../Images/Gym.jpg";
import trainer from "../../Images/trainer.jpg";
import jacuzzi from "../../Images/Jaccuzzi.jpg";
import bg from "../../Images/BG.jpg";

const Services = () => {
  return (
    <main className="serPage">
      <div className="serImg">
        <Image src={service} alt="Services" height={607} width={999}></Image>
      </div>

      <div className="welcomeTxt">
        <h1 className="service">OUR SERVICES</h1>
        <h1 id="l1">Embark on your wellness journey at our Fitness Zone,</h1>
        <h1 id="l2">where tailored excellence meets diverse fitness</h1>
        <h1 id="l3">solutions. From personalized training to cutting-edge </h1>
        <h1 id="l4">equipment, we are committed to empowering</h1>
        <h1 id="l5">transformations and fostering a supportive community.</h1>
        <h1 id="l6">Elevate your well-being with us.</h1>
      </div>
      <div className="BG">
        <Image src={bg} alt="BG" height={810} width={1000}></Image>
      </div>
      <div className="serBG">
        <div className="why">
          <h1>What We Offer?</h1>
        </div>
        <div className="wrapper">
          <div className="legacyImage">
            <Image
              src={spa}
              alt="Spa"
              height={300}
              width={300}
              id="img"
            ></Image>
            <div className="content">
              <h1>SPA</h1>
              <p>
                Indulge in tranquility at our Spa,
                <br /> where relaxation meets rejuvenation.
                <br /> Our skilled therapists offer a range
                <br /> of soothing treatments, providing
                <br /> a sanctuary to unwind and <br />
                revitalize your senses.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper1">
          <div className="legacyImage">
            <Image
              src={jacuzzi}
              alt="jacuzzi"
              height={300}
              width={300}
              id="img"
            ></Image>
            <div className="content">
              <h1>JACUZZI</h1>
              <p>
                Immerse yourself in luxury with our Jacuzzi <br />
                experience. Whether for post-workout <br />
                relaxation or a soothing escape, our Jacuzzi
                <br />
                provides the perfect blend of comfort and <br />
                therapeutic benefits for a truly indulgent
                <br /> experience.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper2">
          <div className="legacyImage">
            <Image
              src={trainer}
              alt="trainer"
              height={300}
              width={300}
              id="img"
            ></Image>
            <div className="content">
              <h1>TRAINERS</h1>
              <p>
                Meet your fitness goals with the guidance <br />
                of our experienced trainers. Passionate about
                <br /> health and wellness, our experts bring a wealth
                <br /> of knowledge to tailor workouts that align with <br />
                your individual needs, ensuring a journey
                <br /> to success.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper3">
          <div className="legacyImage">
            <Image
              src={gym}
              alt="gym"
              height={300}
              width={300}
              id="img"
            ></Image>
            <div className="content">
              <h1>EQUIPMENT</h1>
              <p>
                Explore the pinnacle of fitness technology
                <br /> with our modern machines. From cardio to <br />
                strength training, our cutting-edge equipment <br />
                ensures a diverse and effective workout, <br />
                elevating your fitness journey to new heights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Services;
