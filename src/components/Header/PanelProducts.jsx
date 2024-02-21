import React, { forwardRef, useRef } from "react";
import { ItemLeftPanel } from "./ItemLeftPanel";
import { Product } from "./Product";

const PanelProducts = forwardRef(function (props, ref) {
  const onMouseOver = (e) => {
    console.log(e.target);
  };

  const mainPanelRefs = useRef(Array.from({ length: 3 }, () => null));

  const itemLeft = [
    {
      title: "Sports",
      onMouseOver,
    },
    {
      title: "Immobilier",
      onMouseOver,
    },
    {
      title: "Informatique",
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
        <div className="panel-search">Sports </div>

        <div className="panel-columns">
          <div className="panel-center">
            <div className="panel-products">
              <div>
                <Product
                  title="Football"
                  description="Pour les passionnés de football."
                />
                <Product
                  title="Basketball"
                  description="Idéal pour les amateurs de basketball."
                />
                <Product
                  title="Natation"
                  description="Parfait pour les nageurs."
                />
              </div>

              <div>
                <Product
                  title="Cyclisme"
                  description="Pour les amateurs de cyclisme."
                />
                <Product
                  title="Athlétisme"
                  description="Équipement de qualité pour les athlètes."
                />
                <Product
                  title="Fitness"
                  description="Articles de fitness pour rester en forme."
                />
              </div>

              <div>
                <Product
                  title="Accessoires de sport"
                  description="Accessoires essentiels pour tous les sports."
                />
                <Product
                  title="Sports nautiques"
                  description="Équipement pour les sports aquatiques."
                />
                <Product
                  title="Sports d'hiver"
                  description="Matériel pour les sports d'hiver."
                />
              </div>
            </div>
          </div>
          <div className="panel-right">
            <p className="subtitle">Visite rapide</p>
            <ul>
              <li>Visiter une section par catégorie →</li>
              <li>Visiter une section par catégorie →</li>
              <li>Visiter une section par catégorie →</li>
              <li>Visiter une section par catégorie →</li>
            </ul>
          </div>
        </div>
      </div>

      <div ref={(el) => (mainPanelRefs.current[1] = el)} className="panel-main">
        <div className="panel-search">Immobilier</div>

        <div className="panel-columns">
          <div className="panel-center">
            <div className="panel-products">
              <div>
                <Product
                  title="Appartements"
                  description="Des appartements confortables pour tous les goûts."
                />
                <Product
                  title="Maisons"
                  description="Des maisons spacieuses pour toute la famille."
                />
                <Product
                  title="Terrains"
                  description="Terrains disponibles pour la construction."
                />
              </div>

              <div>
                <Product
                  title="Bureaux"
                  description="Espaces de bureau modernes et fonctionnels."
                />
                <Product
                  title="Locaux commerciaux"
                  description="Locaux pour les entreprises et commerces."
                />
                <Product
                  title="Investissements immobiliers"
                  description="Options d'investissement dans l'immobilier."
                />
              </div>

              <div>
                <Product
                  title="Résidences secondaires"
                  description="Maisons de vacances dans des endroits pittoresques."
                />
                <Product
                  title="Immeubles de rapport"
                  description="Immeubles pour un investissement locatif."
                />
                <Product
                  title="Propriétés de luxe"
                  description="Propriétés haut de gamme et de prestige."
                />
              </div>
            </div>
          </div>
          <div className="panel-right">
            <p className="subtitle">Visite rapide</p>
            <ul>
              <li>Visiter une section par catégorie →</li>
              <li>Visiter une section par catégorie →</li>
              <li>Visiter une section par catégorie →</li>
              <li>Visiter une section par catégorie →</li>
            </ul>
          </div>
        </div>
      </div>

      <div ref={(el) => (mainPanelRefs.current[2] = el)} className="panel-main">
        <div className="panel-search">Informatique</div>

        <div className="panel-columns">
          <div className="panel-center">
            <div className="panel-products">
              <div>
                <Product
                  title="Ordinateurs portables"
                  description="Derniers modèles d'ordinateurs portables."
                />
                <Product
                  title="PC de bureau"
                  description="Puissance et performance pour tous les besoins."
                />
                <Product
                  title="Accessoires informatiques"
                  description="Accessoires essentiels pour votre configuration."
                />
              </div>

              <div>
                <Product
                  title="Composants PC"
                  description="Tout ce dont vous avez besoin pour assembler votre PC."
                />
                <Product
                  title="Logiciels"
                  description="Derniers logiciels pour améliorer votre productivité."
                />
                <Product
                  title="Périphériques de jeu"
                  description="Équipement de jeu pour les passionnés."
                />
              </div>

              <div>
                <Product
                  title="Réseaux et Wi-Fi"
                  description="Solutions pour une connectivité rapide et fiable."
                />
                <Product
                  title="Imprimantes et scanners"
                  description="Appareils pour vos besoins d'impression et de numérisation."
                />
                <Product
                  title="Stockage de données"
                  description="Options de stockage pour sécuriser vos données."
                />
              </div>
            </div>
          </div>
          <div className="panel-right">
            <p className="subtitle">Visite rapide</p>
            <ul>
              <li>Visiter une section par catégorie →</li>
              <li>Visiter une section par catégorie →</li>
              <li>Visiter une section par catégorie →</li>
              <li>Visiter une section par catégorie →</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PanelProducts;
