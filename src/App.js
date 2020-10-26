import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';

export default () => {

    const [movieList]


    useEffect(() => {
        const loadAll = async () => {
            let list = await Tmdb.getHomeList();
        }

        loadAll();

    }, []);

    return (
        <div>
            Hello World!
        </div>
    );
}