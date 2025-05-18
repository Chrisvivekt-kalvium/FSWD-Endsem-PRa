
function noteList({ notes,onEdit,onDelete}) {
    return (
        <ul>
            {notes.map(n=> (
                <li key={n.id}>
                    <h2>{n.title}</h2>
                    <p>{n.content}</p>
                    <button onClick={() => onEdit(n)}>Edit</button>
                    <button onClick={() => onDelete(n.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}
export default noteList