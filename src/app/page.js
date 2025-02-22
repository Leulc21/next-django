'use client'
import { useEffect, useState } from "react";

export default function Home() {
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/reviews/")
            .then(response => response.json())
            .then(data => setReviews(data));
    }, []);
    
    return (
        <div>
            <h1>Book Reviews</h1>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <h2>{review.title} by {review.author}</h2>
                        <p>{review.review}</p>
                        <strong>Rating: {review.rating}/5</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
}