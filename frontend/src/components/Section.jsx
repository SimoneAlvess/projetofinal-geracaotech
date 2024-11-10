import { SectionContainer } from "../styles/StylesGlobal";

const Section = ({ title, titleAlign = "left", link, children, className }) => {
  return (
    <>
      <SectionContainer>
        <div className="container">
          <div className={className}>
            <h2 className={`text-${titleAlign}`}>{title}</h2>
            {link && (
              <a href={link.href}>
                {link.text}
                <i className={link.icon} style={{ fontSize: "16px", paddingLeft:"8px" }}></i>
              </a>
            )}
          </div>
          <div>{children}</div>
        </div>
      </SectionContainer>
    </>
  );
};

export default Section;
