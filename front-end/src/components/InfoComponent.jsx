import { DivContainer } from "../styles/StylesGlobal";

const InfoComponent = ({ title, informations }) => {
  return (
    <DivContainer>
      <ul>
        <h5>{title}</h5>
        {informations.map((info, index) => (
          <li key={index}>
            <a href={info.link}>{info.text}</a>
          </li>
        ))}
      </ul>
    </DivContainer>
  );
};

export default InfoComponent;
