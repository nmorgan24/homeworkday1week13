import picofme from "../img/picofme.png";

function Footer(props) {
  return (
    <div className="Footer" style={{ border: "3px solid black" }}>
      <div className="FooterCard">
        <h1>About The Developer</h1>
        <p>
        Hey there, I'm Nyijia Morgan, a 21-year-old software engineering student who's passionate about technology and coding. There's something about creating and problem-solving through programming that truly excites me. Besides my academic pursuits, I absolutely adore anime; the captivating stories and stunning art always manage to whisk me away to different worlds. Another thing I'm really into is shoes - I just love exploring unique designs and styles. Oh, and cars! The intricacies of their mechanics fascinate me, and I enjoy learning about the latest innovations in the automotive industry. With all these interests combined, I'm on a journey to build an exciting and fulfilling career as a software engineer while indulging in the things I love the most. Life's an adventure, and I'm ready to embrace it!
        </p>
      </div>
      <img src={picofme} alt="Picture of Nyijia" />
    </div>
  );
}

export default Footer;