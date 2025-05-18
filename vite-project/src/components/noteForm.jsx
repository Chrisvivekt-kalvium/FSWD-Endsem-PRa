import React, {useState , useEffect} from "react";

function noteForm({ onsubmit, editNote }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if(editNote) {
            setTitle(editNote.title);
            setContent(editNote.content);
        }
    }, [editNote]);

    const handlSubmit = (e) => {
        e.preventDefault();
        if(!title || !content) return;
        const note = {title,content}
        onsubmit(note);
        setTitle(' ');
        setContent(' ');
    };

    return(
        <form onSubmit={handlSubmit}>
            <input
            type="text"
            placeholder="title"
            value={title}
            onChange={ e => setTitle(e.target.value)}
            />
        
            <input
            type="text"
            placeholder="content"
            value={content}
            onChange={ e => setContent(e.target.value)}
            />

            <button type="submit">
                {editNote ? 'Update Note' : 'Add Note'}
                </button>        
        
        </form>
    )
}
export default noteForm