import React from 'react'
import './ReviewCard.css'

const ReviewCard = ({ quote, author }) => {
    return (
        <div className="review-card">
            <p>"{quote}"</p>
            <span>- {author}</span>
        </div>
    )
}

export default ReviewCard
