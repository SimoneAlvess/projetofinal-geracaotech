import { useState } from "react";
import { ContainerProductOption } from "../styles/StylesGlobal";

const ProductOptions = ({ options, radius, shape, type }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <ContainerProductOption>
      {options.map((option, index) => (
        <div
          key={index}
          className={`${shape} ${type} ${selectedOption === option ? "selected" : ""}`}
          onClick={() => handleSelect(option)}
          style={{
            width: shape === "circle" ? "31px" : "auto",
            height: shape === "circle" ? "31px" : "46px",
            borderRadius: shape === "square" ? radius : "",
            backgroundColor: type === "color" ? option : "",
          }}
        >
          {type === "text" ? option : null}
        </div>
      ))}
    </ContainerProductOption>
  );
};

export default ProductOptions;
