import { Card, CardContainer, Services } from "./styles";
import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";

const OurServices = () => {
  return (
    <Services>
      <h2>Nossos Serviços</h2>
      <CardContainer>
        <Card>
          <div>
            <img src={card1} />
          </div>
          <div>
            <h3>Travesseiros de alta qualidade</h3>
            <p>
              travesseiros de alta qualidade. Projetados meticulosamente para
              proporcionar o máximo conforto e apoio, esses travesseiros
              são a escolha ideal
            </p>
            <button type="button">Saiba mais</button>
          </div>
        </Card>
        <Card>
          <div>
            <img src={card2} />
          </div>
          <div>
            <h3>Camas</h3>
            <p>
              busca mais do que apenas uma cama comum, conforto, design e
              qualidade, nossas camas são a resposta.
            </p>
            <button type="button">Saiba mais</button>
          </div>
        </Card>
        <Card>
          <div>
            <img src={card3} />
          </div>
          <div>
            <h3>Poltronas de luxo</h3>
            <p>
              poltronas de luxo foram meticulosamente projetadas para oferecer a
              você não apenas um lugar para sentar, mas um refúgio de
              serenidade onde o relaxar
            </p>
            <button type="button">Saiba mais</button>
          </div>
        </Card>
      </CardContainer>
    </Services>
  );
};

export default OurServices;
