import React from 'react'
import './Tags.css';

const Tags = () => {
    let tags = ['Sql', 'c#', 'AngularJS', 'Angular', 'ReactJS'];
    return (
        <div className="tags row">
         <p className="tags-header">Tags</p>
            <div className="tag-list">  
                { tags.map((tag, index) => 
                    <div className="tag-element hover-magic" key={index}>{tag}</div>
                ) }
            </div>
        </div>
    );
}

export default Tags;