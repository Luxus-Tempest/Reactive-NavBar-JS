import React, { forwardRef, useRef } from "react";
import { ItemLeftPanel } from "./ItemLeftPanel";
import Quote from "./quote";

const PanelAbout = forwardRef(function (props, ref) {
  const onMouseOver = (e) => {
    console.log(e.target);
  };

  const mainPanelRefs = useRef(Array.from({ length: 5 }, () => null));

  const itemLeft = [
    {
      title: "Visions and Values",
      description: "Notre vision, nos valeurs, notre histoire",
      onMouseOver,
    },
    {
      title: "The Team",
      description: "Notre équipe",
      onMouseOver,
    },
    {
      title: "Blog and News",
      description: "Nos dernières actualités",
      onMouseOver,
    },
    {
      title: "Customer Stories",
      description: "Témoignages de nos clients",
      onMouseOver,
    },
    {
      title: "Partners and Resellers",
      description: "Nos partenaires et revendeurs",
      onMouseOver,
    },
  ];

  return (
    <div className="panel" ref={ref}>
      <div className="panel-left">
        {itemLeft.map((item, index) => (
          <ItemLeftPanel
            {...item}
            onMouseOver={() => {
              mainPanelRefs.current.forEach((el) =>
                el?.classList.remove("visible")
              );
              mainPanelRefs.current[index]?.classList.add("visible");
            }}
            key={item.title}
          />
        ))}
      </div>

      <div
        ref={(el) => (mainPanelRefs.current[0] = el)}
        className="panel-main visible"
      >
        <Quote
          quote="La meilleure façon de prédire l'avenir est de le créer."
          author="Peter Drucker"
          image="photo4.jpeg"
        />
      </div>

      <div ref={(el) => (mainPanelRefs.current[1] = el)} className="panel-main">
        <Quote
          quote="L'union fait la force. Ensemble, nous sommes plus forts."
          author="Proverbe africain"
          image="photo2.jpeg"
        />
      </div>

      <div ref={(el) => (mainPanelRefs.current[2] = el)} className="panel-main">
        <Quote
          quote="Restez informé avec nos dernières actualités et mises à jour."
          author="Équipe éditoriale"
          image="phot3.jpeg"
        />
      </div>

      <div ref={(el) => (mainPanelRefs.current[3] = el)} className="panel-main">
        <Quote
          quote="Découvrez comment nos clients réussissent avec nos produits."
          author="Nos clients satisfaits"
          image="phot01.jpeg"
        />
      </div>

      <div ref={(el) => (mainPanelRefs.current[4] = el)} className="panel-main">
        <Quote
          quote="Travaillons ensemble pour atteindre de nouveaux sommets."
          author="Devenir partenaire"
          image="photo4.jpeg"
        />
      </div>
    </div>
  );
});

export default PanelAbout;
