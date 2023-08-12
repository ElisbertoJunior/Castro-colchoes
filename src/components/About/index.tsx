import { AboutContainer, Banner } from "./styles";
import banner from "../../assets/Banner.jpg";

const About = () => {
  return (
    <>
      <Banner src={banner} alt="Banner" />
      <AboutContainer>
        <h2>Sobre Nós - Castro Colchões:</h2>
        <p>
          Uma história é tecida com paixão pelo conforto, qualidade e bem-estar.
          Desde nossa fundação, temos sido movidos pela missão de proporcionar a
          todos uma noite de sono excepcional, porque sabemos que um sono
          tranquilo é a base para uma vida plena e saudável.
        </p>
      </AboutContainer>
    </>
  );
};

export default About;
