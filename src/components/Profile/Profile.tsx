import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img className={s.imgProfileHat} src='https://sun9-71.userapi.com/impf/PI-LmSsFJruTdrBvcqMRwvBLoA0OyH2hiIx1nA/fUshwcGQfJA.jpg?size=1920x768&quality=95&crop=0,0,1920,767&sign=2d22a0dd06f53fd2268373f9c1a72cc9&type=cover_group'/>
            </div>
            <div>
               ava+description
            </div>
            <MyPosts />
        </div>
    );
};
