import React from "react";
import Card from "./Card";

const CardList = ({stars}) => {
    const starlist = stars.map(( star, i ) => {
        return <Card 
            key={i} 
            name={star.name} 
            email={star.email} 
            id={star.id} 
            username={star.username} 
        />
    });

    return (
        <div>
            {starlist}
        </div>
    );
}


export default CardList;