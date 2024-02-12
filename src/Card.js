import React from 'react';
// I must import react 'cause I'm not writing in html, 
// I'm writing in JSX, wich work with react!!!!!!!


const Card = ({name, email, id}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;

// ricordati i fottuti apostrofi che non sono apostrofi sul src dell'immagine.
