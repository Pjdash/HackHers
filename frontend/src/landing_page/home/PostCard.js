// PostCard.js
import React from 'react';

function PostCard({ post, handleDelete }) {
    return (
        <div className="card p-3 mb-4">
            <div className="d-flex align-items-center mb-3">
                <img src="https://via.placeholder.com/50" alt="Profile" className="rounded-circle me-3" />
                <span className="fw-bold">{post.username}</span>
            </div>
            <p className="mb-2">{post.content}</p>
            {post.doc && (
                <div className="image-container">
                    <img
                        src={post.doc.url}
                        alt={post.doc.filename}
                        className="img-fluid mb-2"
                    />
                </div>
            )}
            <button
                className="btn btn-delete mt-4"
                onClick={() => handleDelete(post._id, post.username)}
            >
                Delete Post
            </button>
        </div>
    );
}

export default PostCard;
