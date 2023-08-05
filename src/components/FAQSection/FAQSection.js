import React, { useState } from "react";
import "./FAQSection.css";
import AccordionSection from "./AccordionSection";

const accordionData = [
  {
    title: "How does an investor gain access to MF Utility?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et turpis nec nulla iaculis sollicitudin vel a risus. Suspendisse potenti. Donec sed eros eu orci tincidunt mollis. Integer id eleifend justo. Donec dictum diam molestie, tempor magna nec, volutpat quam. Vivamus eget enim mi. Vivamus ultricies, dolor vel volutpat laoreet, dui diam dictum odio, ac lobortis augue metus quis est.",
  },
  {
    title: "Will investor be able to have multiple Common Account Numbers?",
    content:
      "Fusce a suscipit nisi, eu interdum velit. Sed aliquet consectetur augue, ac finibus nisl viverra eget. In non tempor tortor, quis posuere sem. Mauris ac ullamcorper orci. Duis volutpat nulla quis lacus bibendum elementum. Nam eu suscipit tortor, venenatis pharetra massa. Suspendisse vitae risus ut ipsum dignissim mattis id in sapien. Donec elit odio, placerat vitae risus at, pharetra scelerisque dui.",
  },
  {
    title: "How does an investor gain access to MF Utility",
    content:
      "Ut sagittis nisi ac tincidunt mattis. Vestibulum aliquet, risus sit amet fermentum scelerisque, risus justo bibendum neque, at sollicitudin nibh orci eu nisi. Integer rhoncus ipsum lacus, sit amet accumsan augue scelerisque non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc in ex ante. Phasellus rutrum massa nec nibh dapibus porttitor. Sed tempus et mi non dapibus. Praesent non feugiat elit, in elementum arcu. Nam nec est lorem. Integer a dui nec ipsum consectetur porttitor ac ac lectus. Vestibulum nec dolor lobortis, fermentum mauris vel, ullamcorper lorem. Integer congue lacinia convallis. Morbi fringilla sed metus eget scelerisque. Nunc sit amet quam augue. Aliquam eu vehicula erat, at rutrum libero.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="faqSection">
      <h1>FAQ</h1>
      <div className="accordionContainer">
        {accordionData.map((sectionInfo, index) => (
          <AccordionSection
            key={index}
            sectionInfo={sectionInfo}
            isActiveSection={index === activeIndex}
            setActiveIndex={setActiveIndex}
            sectionIndex={index}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
