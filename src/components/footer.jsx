import React from "react";

function copyright()
{
    const date = new Date();
    const year = date.getFullYear();
    return(
        <footer>
            <p>copyright @Parthib {year}</p>
        </footer>
    );
}

export default copyright;