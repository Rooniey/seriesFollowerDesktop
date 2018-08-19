import React from "react";
import {withFetching} from "../../utils/api";

const movieList = ({data, isLoading, error}) => {
    if (!data) {
        return <p>No data yet ...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    if (isLoading) {
        return <p>Loading ...</p>;
    }

    return (
        <div className="row">
            {data.results.map(movie => {
                    const style = {
                        background: `url(https://image.tmdb.org/t/p/w500${movie.poster_path}) center / cover no-repeat`
                    };

                    return (
                        <div className="example-2 card">
                            <div className="wrapper" style={style}>
                                <div className="header">
                                    <div className="date">
                                        <span className="day">{movie.release_date}</span>
                                    </div>
                                    <ul className="menu-content">
                                        <li>
                                            <a href="#" className="fa fa-bookmark-o"></a>
                                        </li>
                                        <li><a href="#" className="fa fa-heart-o"><span>18</span></a></li>
                                        <li><a href="#" className="fa fa-comment-o"><span>3</span></a></li>
                                    </ul>
                                </div>
                                <div className="data">
                                    <div className="content">
                                        <h1 className="title"><a href="#">{movie.original_title}</a></h1>
                                        <p className="text">{movie.overview}</p>
                                        <a href="#" className="button">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
            )}
        </div>
    );
}


export const MovieList = withFetching({
    url: '/movies/popular',
    queryParams: {
        page: 1
    },
    headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJTZXJpZXNGb2xsb3dlckFwaSIsInN1YiI6IjViNzAwMWJmNWQxMGFiMDAxNGUyZTE3NSIsImlhdCI6MTUzNDUzNzIwMDg1MSwiZXhwIjoxNTM0NjIzNjAwODUxfQ.jlFBC2YnfKqYwuCpKLlkCy_91urxZk8f2tBFdbvqJL8"
    }
})(movieList);
