import React from "react";
import CustomCard from "../components/CustomCard";
import "./italian.css";

function Italian() {
    const items = [
        {
            id: 1,
            title: "cheese pizza",
            rating: 4,
            price: 100,
        },
        {
            id: 2,
            title: "margereta pizza",
            rating: 4,
            price: 200,
        },
        {
            id: 3,
            title: "alfredo pasta",
            rating: 2,
            price: 250,
        },
        {
            id: 4,
            title: "rosso pasta",
            rating: 5,
            price: 300,
        },
        {
            id: 5,
            title: "panini",
            rating: 3,
            price: 200,
        },
    ];
    return (
        <div className="menu">
            {items.map((value) => {
                return <CustomCard key={value.id} item={value}></CustomCard>;
            })}
        </div>
    );
}

export default Italian;
