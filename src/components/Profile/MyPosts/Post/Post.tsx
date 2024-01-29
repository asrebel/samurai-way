import React from 'react';
import s from "./Post.module.css";

type PostType = {
    message: string
    likeCounts: number
}

export const Post: React.FC<PostType> = (
    {
        message,
        likeCounts,

    }) => {
    return (
        <div className={s.item}>
            <img
                src='https://avatars.mds.yandex.net/i?id=ee68be0dbf22c97fe41c893d0870913afabdc65c-10703717-images-thumbs&n=13'/>
            {message}
            <div>
                <span> likes {likeCounts}</span>
            </div>
        </div>
    );
};

