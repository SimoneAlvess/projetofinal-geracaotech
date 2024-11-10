import { FilterContainer } from "../styles/StylesGlobal";

const FilterGroup = ({ title, inputType, options }) => {
  return (
    <>
      <FilterContainer>
        <h6 className="title-size">{title}</h6>
        {options.map((option, index) => (
          <div key={index}>
            <input type={inputType} name={title} value={option.value || option.text} />
            <label>{option.text}</label>
          </div>
        ))}
      </FilterContainer>
    </>
  );
};

export default FilterGroup;
