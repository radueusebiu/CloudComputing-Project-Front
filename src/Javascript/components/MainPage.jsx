import React from "react";
import Header from "./Header";
import MessagesListRezervation from "./MessagesListRezervation";
import RezervationSubmit from "./RezervationSubmit";

function MainPage(props) {

    return (
        <div id="MainPage">
            <Header title={"Aplicatia pentru rezervarea unei mese la restaurantul Bibliotheque"} />
            <h1 className="mt-10 text-blue-600 text-3x1 font-bold">Vrei sa fii sigur ca ai o masa disponibila in restaurantul nostru? <br/> Fa o rezervare in cadrul aplicatiei, iar masa va fi pregatita pentru sosirea ta. </h1>
            <div className='flex max-w-7xl m-auto px-14 py-24'>
                <div className='w-1/2 pl-5'>
                    <MessagesListRezervation />

                </div>
                <div className='w-1/2 pr-5'>
                    <RezervationSubmit />
                </div>
            </div>
        </div>
    );
}

export default MainPage;