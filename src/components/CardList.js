import React, { Fragment } from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    // if (true){ // used to test when error happending
    //     throw new Erorr('NOO');
    // }
    const cardComponent = robots.map((user, idx) => {
            return <Card 
                key={idx} 
                id={robots[idx].id} 
                name={robots[idx].name} 
                email={robots[idx].email} 
            />
    })
    return (
        <Fragment>
            {cardComponent}
        </Fragment>
    );
}

export default CardList;