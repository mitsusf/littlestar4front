import React from 'react'

const Card = ({ name, email, id, username}) => { // Object destructuring of props
    return (
        <div className="bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="stars" src={`https://robohash.org/${id}?size=260x260`} />
            
            
            <div>
                <h2>
                    {name}
                </h2>
                <p>
                    {email}
                </p>
            </div>
        </div>
    )
}

export default Card;