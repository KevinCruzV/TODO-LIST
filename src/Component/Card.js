import React from 'react';
import { CardList } from './CardList';

export default function Card ({title, content, setCards, id}){

    const Delete = e => {
        e.preventDefault();
        setCards(cardList => (
            cardList.filter(current => (id !== current.id))
        ));
    }

    return(

        <div className="col-sm-6 mx-auto">
        <div className="card">
            <div className="card-body ">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>

                <button href="#"  className="btn btn-danger" onClick={Delete}>X</button>           
            </div>
        </div>
        
      </div>
    )
};