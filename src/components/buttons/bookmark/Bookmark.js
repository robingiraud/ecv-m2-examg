import './Bookmark.css';

export function Bookmark({ onClick }) {
    return (
        <button className="remove" onClick={onClick}>
            <i className="far fa-bookmark"></i>
        </button>
    )
}