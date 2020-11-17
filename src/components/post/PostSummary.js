import React from 'react';

const PostSummary = () => {
    return ( 
        <div className="card z-depth-0 post-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title ">Post title</span>
                <p>Posted by The Net Ninja</p>
                <p className="grey-text">3rd September, 2am</p>
            </div>
        </div>
    );
}
 
export default PostSummary;