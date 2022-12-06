import React, {FC} from 'react';

import styles from "./FavoriteButton.module.scss";
import {useDispatch} from "react-redux";
import {IMovie} from "../../../types/types";
import { delFavoritesAction, setFavoritesAction } from '../../../store/reducer/moviesReducer';

export enum FavoriteButtonVariant {
    forMoviePage = "forMoviePage",
    forHomePage = "forHomePage"
}

interface FavoriteButtonProps {
    variant: FavoriteButtonVariant
    movie: IMovie
    className?: string
}

const FavoriteButton: FC<FavoriteButtonProps> = ({variant, movie, className}) => {
    const dispatch = useDispatch();
    const handleAddToFavorite = () => {
        if (!movie.favorite) {
            dispatch(setFavoritesAction({...movie, favorite: !movie.favorite}));
        }
        else if (movie.favorite) {
            dispatch(delFavoritesAction({...movie, favorite: movie.favorite}))
        }

    }

    return (
        <>
            {variant === FavoriteButtonVariant.forMoviePage
                ?
                <button className={`${styles.favoriteBtn} ${movie.favorite ? styles.favorite : ""}`} onClick={handleAddToFavorite}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.77 20.7843L12.48 17.4943C12.0722 17.1843 11.5078 17.1843 11.1 17.4943L6.77 20.7843C6.45424 21.0381 6.02377 21.0959 5.65228 20.9343C5.28078 20.7727 5.02957 20.4184 5 20.0143V5.95431C5.03878 5.12998 5.40465 4.35513 6.01656 3.80141C6.62847 3.24769 7.4359 2.96081 8.26 3.00431H15.26C16.0891 2.96643 16.8987 3.26256 17.5077 3.82643C18.1166 4.39029 18.4741 5.17479 18.5 6.00431V20.0143C18.4611 20.4038 18.2163 20.7426 17.8586 20.9017C17.501 21.0609 17.0855 21.0161 16.77 20.7843Z" fill="#AFB2B6"/>
                    </svg>
                </button>
                :
                <button className={`${styles.favoriteSmallBtn} ${className}`} onClick={handleAddToFavorite}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.77 20.7843L12.48 17.4943C12.0722 17.1843 11.5078 17.1843 11.1 17.4943L6.77 20.7843C6.45424 21.0381 6.02377 21.0959 5.65228 20.9343C5.28078 20.7727 5.02957 20.4184 5 20.0143V5.95431C5.03878 5.12998 5.40465 4.35513 6.01656 3.80141C6.62847 3.24769 7.4359 2.96081 8.26 3.00431H15.26C16.0891 2.96643 16.8987 3.26256 17.5077 3.82643C18.1166 4.39029 18.4741 5.17479 18.5 6.00431V20.0143C18.4611 20.4038 18.2163 20.7426 17.8586 20.9017C17.501 21.0609 17.0855 21.0161 16.77 20.7843Z" fill="#7B61FF"/>
                    </svg>
                </button>
            }
        </>
    );
};

export default FavoriteButton;