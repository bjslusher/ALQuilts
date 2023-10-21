import React from "react";
import PortfolioCard from "./PortfolioCard";

const PortfolioCardList = ({quilts}) => {
    return (
        <div>
            {quilts.map((user, i) => {
                return (<PortfolioCard key={i}
                              id={quilts[i].id}
                              image={quilts[i].image}
                              name={quilts[i].name}
                    />
                );
            })
            }
        </div>
    );
}
export default PortfolioCardList