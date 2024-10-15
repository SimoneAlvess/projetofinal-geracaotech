import { SectionContainer } from "../styles/StylesGlobal";

const Section = ({ title, titleAlign = "left", link, children }) => {
  return (
    <>
      <SectionContainer className="container">
        <div className={`text-${titleAlign}`}>
          <h2>{title}</h2>
          {link && <a href={link.href}>{link.text}</a>}
        </div>
        <div>{children}</div>
      </SectionContainer>
    </>
  );
};

export default Section;
