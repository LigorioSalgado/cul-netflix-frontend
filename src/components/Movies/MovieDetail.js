import React, { Component } from 'react';
import gql from 'graphql-tag';
import  {Query} from 'react-apollo';
import Youtube from 'react-youtube';


const SINGLEMOVIE = gql`

    query SingleMovie($id:ID!){
        movie(id:$id){
            name,
            movie_url,
            sinopsis,
            duration
        }
    }


`

export default class MovieDetail extends Component {

    constructor(props){
        super(props)
        this.state = {
            id:props.match.params.id
        }
    }


  render() {
    const opts = {
        height: '390',
        width: '640',
        playerVars: { 
          autoplay: 1
        }
      };
    return (
      <div className="container">
        <div className="row">
            <div className="col s12">
                <Query query={SINGLEMOVIE} variables={{id:this.state.id}}>
                        {
                            ({loading,data,error}) => {
                                if(error) return <h4>{error}</h4>
                                if(loading) return <h4>Cargando...</h4>
                                return(
                                    <React.Fragment>
                                        <h4>{data.movie.name}</h4>

                                        <Youtube videoId={data.movie.movie_url.split("=")[1]}
                                        opts={opts} 
                                        />

                                    </React.Fragment>
                                )

                            }
                        }
                </Query>
            </div>
        </div>
      </div>
    )
  }
}
