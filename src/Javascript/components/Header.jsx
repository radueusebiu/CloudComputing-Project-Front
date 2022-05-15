import React from "react";


function Header(props) {

    const { title } = props;

    return (
        <header id="Header" className='h-12 bg-sky-500 flex justify-center'>
            <span className='text-black text-bold text-xl self-center'>
                {title}
            </span>
        </header>

    );
}

export default Header;