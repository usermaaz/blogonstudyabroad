
"use client"
import React, { useState } from 'react';

export default function   Comment(){
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-8 p-6 bg-white shadow  justify-center p-5">
      <h3 className="text-4xl font-extrabold mb-6">Comments</h3>
      <div className="mb-4 flex flex-col justify-center">
        <textarea
          className="md:w-1/2 p-2 border rounded justify-center"
          placeholder="share your thoughts"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          className="md:w-1/2 mt-2 px-4 py-2 bg-blue-300 text-white rounded hover:bg-blue-500"
          onClick={handleAddComment}
        >
          Add Comment
        </button>
      </div>
      <ul className="space-y-2">
        {comments.map((comment, index) => (
          <li key={index} className="p-2 border md:w-1/2 rounded">
            {comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

