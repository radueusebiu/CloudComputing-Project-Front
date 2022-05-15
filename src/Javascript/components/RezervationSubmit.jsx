import React from "react";
import axios from "axios";


const handlerRezervationSend = async (e) => {
    const button = e.target;

    const senderName = document.getElementById('senderName').value;
    const Name = document.getElementById('senderName').value;
    const TipMasa = document.getElementById('tipMasa').value;
    const NumarPersoane = document.getElementById('numarPersoane').value;
    const DataRezervare = document.getElementById('dataRezervare').value;
    const OraRezervare = document.getElementById('oraRezervare').value;
    const CerinteSpeciale = document.getElementById('cerinteSpeciale').value;
    const senderMail = "eusebiur99@gmail.com"
    const receiverMail = "radu_eusebiu@yahoo.ro";
    const messageContent = `${senderName} a facut o rezervare pentru ${TipMasa}, in data de ${DataRezervare} - ora ${OraRezervare}, pentru un numar de ${NumarPersoane} persoane. Cerinte speciale: ${CerinteSpeciale}`;

    try {

        const responseRezervation = await axios.post(`${process.env.REACT_APP_API_URL}/rezervation`,
            {
                Name, 
                TipMasa, 
                NumarPersoane, 
                DataRezervare, 
                OraRezervare, 
                CerinteSpeciale
            }
        )

        const response = await axios.post(`${process.env.REACT_APP_API_URL}/messages/foreign`,
            {
                senderName,
                senderMail,
                receiverMail,
                messageContent
            }
        )

        console.log(response)
        console.log(responseRezervation)

        if (response) {
            alert(`\n S-a realizat o rezervare: ${response.data.messageContent}`)
        }
    }
    catch (error) {
        console.log(error);
    }
};

function RezervationSubmit() {

    return (
        <div id="RezervationSubmit">
            <h2 className='text-2xl font-bold mb-4'>Submit your rezervation.</h2>

            <form>
                {/* label + camp senderName && Name */}
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Numele Clientului:
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="senderName" type="text" placeholder="Popa Alexandru" />
                {/* label + camp senderMail */}
                {/* <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Sender Mail va fi unul standard deoarce nu este relevant neaparat email-ul clientului
                </label> */}

                {/* label + camp TipMasa*/}
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Tip Masa:
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="tipMasa" type="text" placeholder="micul dejun / pranz / cina" />

                {/* label + camp NumarPersoane */}
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Numar persoane:
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="numarPersoane" type="text" placeholder="Numar maxim de pers la o masa este de 4!" />

                {/* label + camp DataRezervare */}
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Data rezervare:
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="dataRezervare" type="text" placeholder="AAAA.LL.ZZ" />

                {/* label + camp OraRezervare */}
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Ora rezervare
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="oraRezervare" type="text" placeholder="HH:MM" />

                {/* label + camp CerinteSpeciale */}
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Cerinte speciale:
                </label>
                <textarea
                    rows={4}
                    name="comment"
                    id="cerinteSpeciale"
                    className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-800 rounded-md p-5"
                    placeholder={'Ai vreo indicatie pentru noi?'} />

            </form>

            <button
                className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-3 "
                value={"te pup"}
                onClick={handlerRezervationSend}
            >Rezerva
            </button>
        </div>
    );

}

export default RezervationSubmit;