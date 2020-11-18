import React from 'react';

const PostSummary = ({post}) => {
    return ( 
        <div className="card z-depth-0 post-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title ">{post.title}</span>
                <p>{post.content}</p>
                <p className="grey-text">
                    { new Intl.DateTimeFormat("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                        timeZone: 'Asia/Shanghai',
                        hour: '2-digit', 
                        minute: '2-digit',
                        hour12: true
                    }).format(post.createdAt) }
                </p>
            </div>
        </div>
    );
}
 
export default PostSummary;