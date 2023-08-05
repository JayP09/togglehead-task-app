import React from "react";

const AccordionSection = ({
  sectionInfo,
  isActiveSection,
  setActiveIndex,
  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isActiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };

  return (
    <>
      <div
        className={`title ${isActiveSection ? "titleActive" : ""}`}
        onClick={toggleSection}
      >
        <h3 className={isActiveSection ? "active" : ""}>{sectionInfo.title}</h3>
        {isActiveSection ? (
          <i
            className="fa-solid fa-circle-minus"
            style={{ color: "#12406f" }}
          ></i>
        ) : (
          <i
            className="fa-solid fa-circle-plus"
            style={{ backgroundColor: "white", color: "#525252" }}
          ></i>
        )}
      </div>
      {isActiveSection && (
        <div className="accordionSectionContent">{sectionInfo.content}</div>
      )}
    </>
  );
};

export default AccordionSection;
