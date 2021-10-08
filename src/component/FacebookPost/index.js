import React, { useState } from 'react';
import image from '../ProfileImage/image.jpg'
import FbImageLibrary from 'react-fb-image-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faShare, faComment, faPaperPlane, faSmile, faHeart } from '@fortawesome/free-solid-svg-icons'
import './style.css'

const FacebookPost = (props) => {
    const [liked, setLiked] = useState(false);
    const [commentBox, setCommentBox] = useState(false);
    const [share, setShare] = useState(false);
    const [inputComment, setInputComment] = useState('');
    const [showComment, setShowComment] = useState([]);  

    const {fbdetails : {images}} = props

    // Add Comment:
    const addComment = () => {
        const tempList = [...inputComment, showComment]
        setShowComment(tempList);           // Spread Operator Used for Changing the Reference.
        setInputComment('');
}

    // Date & Time
    const createdAt = Date()

    // Name & Description:
    const name = 'Muhammad Mairaj'
    const description = 'Excellent Wallpapers...'

    return (
        <div>
            {/* Facebook Header  */}
            <div className="facebook-post" >
                <div className="fbpost-header">
                    <div className="fbpost-headerupper">
                        <img src = {image} className="avatar" />
                        <div className="fbpost-headerinfo">
                            <h5 className="fbpost-h5">{name}</h5>
                            <p className="fbpost-time">{createdAt}</p>
                        </div>
                    </div>
                    <h4 className = 'fbpost-h1'>Nature</h4>
                    <div className="fbpost-title">{description}</div>
                </div>
               
                     {/* Facebook Images */}
                <FbImageLibrary images = {images} />

                <div className = 'fbpost-logo'>
                <i className='like' style={{ color: '#4444ff' }} ><FontAwesomeIcon icon={faThumbsUp} /></i>
                <i className='heart'  style={{ color: 'red' }} ><FontAwesomeIcon icon={faHeart} /></i>
                <i className='share-text'>2 Share</i>
                </div>
                {/* Facebook Footer */}
                <div className="facebook-footer">
                    {/* Icons (Like, Comment, Share) */}
                    <i className='thumb-icon' style={{ color: liked && '#4444ff' }} onClick={() => setLiked(!liked)}><FontAwesomeIcon icon={faThumbsUp} />Like</i>
                    <i className='share-icon'><FontAwesomeIcon icon={faComment} onClick={() => setCommentBox(!commentBox)} />Comment</i>
                    <i className='comment-icon' ><FontAwesomeIcon icon={faShare} onClick={() => setShare(!share)} />Share</i>
                </div>
                {/* Comment Section */}
                {commentBox && (
                    <div>
                        <div className='comment-section'>
                            <img src = {image} className="avatar avatar-sm" />
                            <form className="comment-wrapper" onSubmit={addComment}>
                                <input type='text' placeholder='Write a comment ' value={inputComment} onChange={e => setInputComment(e.target.value)} />
                                <i><FontAwesomeIcon icon={faSmile} /></i>
                                <i style = {{color : '#444ff'}}><FontAwesomeIcon icon={faPaperPlane} /></i>
                            </form>
                        </div>

                        <ul className="comment-list">
                            {showComment.map((val, ind) => {
                                return <li key={ind}>
                                    <img src = {image} className="avatar avatar-sm" />
                                    <div className="comment-info">
                                       <span>{val}</span>

                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                )}
            </div>

        </div>
    )
}




export default FacebookPost