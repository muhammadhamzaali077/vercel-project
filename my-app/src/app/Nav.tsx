import Link from "next/link";

const Navigate = () => {
  return (
    <main>
      <Link href="/">
        <div className="logo">
          <h1 id="zone">Zone</h1>
          <h1 id="fitness"> Fitness</h1>
        </div>
      </Link>
      <div className="NavBar">
        <Link href="/" id="home">
          Home
        </Link>
        <Link href="./ourService" id="service">
          Our Services
        </Link>
        <Link href="./contact" id="contact">Contact us</Link>
        <Link href="./about" id="about">
          About
        </Link>
      </div>
    </main>
  );
};
export default Navigate;
