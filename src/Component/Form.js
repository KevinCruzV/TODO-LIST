
import React, {useState} from 'react';

export default function Form({setCards}){

    const [formTitle, setFormTitle] = useState('');

    const [formText, setFormText] = useState('');

    const TitleChange = e => {
        console.log(e.target.value)
        setFormTitle(e.target.value);
    };

    const TextChange = e => {
        console.log(e.target.value)
        setFormText(e.target.value);
    };

    const NewCard = event => {
        event.preventDefault();
        setCards(previousState => {
            const id = previousState.length;
            return [...previousState, {title: formTitle, content: formText, id: id}]
        });
    };

    return(
        
        <form className="my-5 mx-auto" style={{maxWidth:'400px'}} onSubmit={NewCard}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" aria-describedby="title" onChange={TitleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">Text</label>
                <input type="text" className="form-control" id="content" onChange={TextChange}/>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
               
    );
};