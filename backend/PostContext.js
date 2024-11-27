import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/posts')
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error('Errore durante il recupero degli articoli:', error);
            });
    }, []);

    return (
        <PostContext.Provider value={{ posts }}>
            {children}
        </PostContext.Provider>
    );
};


