import React from "react";
import Card from "./Card";

const CardList = ({patterns}) => {
    return (
        <div>
            {patterns.map((user, i) => {
                return (<Card key={i}
                   id={patterns[i].id}
                   image={patterns[i].image}
                   name={patterns[i].name}
                    />
                );
            })
            }
        </div>
    );
}
export default CardList