import React, {useState} from 'react';
import { CardList } from './CardList';
import Card from './Card';
import Form from './Form';

export default function CardMap(){

    const [cards, setCards] = useState(CardList);

    return(
        <>
        <Form setCards={setCards}/>

        <div className="row row-cols-1 row-cols-md-2 g-4 m-5">
                {cards.map(
                    (card) => {
                        return (
                            <Card {...card} key={card.id} setCards={setCards}/>
                        )
                    }
                )}
        </div>

        </>
    )
}
