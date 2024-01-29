import React from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div>
                New post
                <Post
                    message='Hello? how are you?'
                    likeCounts={20}
                    />
                <Post
                    message='It is my second post!'
                    likeCounts={12}

                    />
            </div>
        </div>
    );
};
