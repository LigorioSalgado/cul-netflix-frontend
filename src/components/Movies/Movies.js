import React, { Component } from 'react'
import gql from 'graphql-tag';
import {Query}  from 'react-apollo';
import MovieCard from './MovieCard';
import './movies.scss';

const ALLMOVIES = gql`
    query{
        movies{
            _id,
            name,
            cover,
            rating,
            rate
        }
    }

`

export default class Movies extends Component {

     

  render() {
    return (
        <div className="container Movies">
            <div className="row">
                <Query query={ALLMOVIES}>
                    {
                            ({data,error,loading}) => {
                                if(error) return <h4>{"Hubo un Error !! :("}</h4>
                                if(loading) return <h4>Cargando ...</h4>
                                const movies = data.movies.map((movie,index) => (
                                    <div className="col s4" key={index}>
                                       <MovieCard image={movie.cover} 
                                       title={movie.name}
                                       rating={movie.rating}
                                       />
                                    </div>

                                ))   
                                return(
                                    <React.Fragment>
                                        {movies}
                                    </React.Fragment>
                                )
                            }
                    }
                    
                </Query>
            </div>
        </div>
    )
  }
}
