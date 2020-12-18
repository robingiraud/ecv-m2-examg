import { useContext } from 'react';
import { ApplicationContext } from '../../domain/application.store';
import { LikePictureById, UnlikePictureById } from '../../domain/picture/picture.actions';
import { LikeButton, BookmarkButton } from '../buttons';
import './Card.css';


export function Card({ picture }) {
    const { state, dispatch } = useContext(ApplicationContext);

    const onLike = (picture) => {
        if (picture.likedBy.find(like => like._id === state.user._id))
            UnlikePictureById(dispatch, picture.id)
        else
            LikePictureById(dispatch, picture.id)
    }

    const addComment = (picture, msg) => {

    }

    if (!state.user) return null
    return (
        <div className="card">
            <div className="card-img">
                <img src={picture.download_url} />
                <LikeButton onClick={() => { onLike(picture) }} isLiked={picture.likedBy && picture.likedBy.find(like => like._id === state.user._id)} />
                <span className="likes">Likes : {picture.likedBy ? picture.likedBy.length : 0}</span>
                <BookmarkButton onClick={() => { }} />
            </div>
            <div className="card-body">
                <h3>
                    Author : {picture.author}
                </h3>
                <div className="card-comments">
                    Comments
                    <ul>
                        <li>
                            Sample comment
                        </li>
                    </ul>
                    <input type="text" placeholder="Ajouter un commentaire... "/>
                    <button onClick={ addComment }>Envoyer</button>
                </div>
            </div>
        </div>
    )

}