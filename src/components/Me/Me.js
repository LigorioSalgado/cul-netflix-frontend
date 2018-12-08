import React, { Component } from 'react'
import gql  from  'graphql-tag';
import {Query} from 'react-apollo';


const GETPROFILE = gql`

    query GETPROFILE{
        me{
            first_name,
            last_name,
            email,
            birth_date,
            gender,
            nationality,
            subscription_id{
                type_subscription,
                start_date,
                end_date
            }
        }
    }
`

export default class Me extends Component {
    render() {
        return (
            <div className="container">
                <Query query={GETPROFILE}>
                    {
                        ({loading,error,data}) => {
                           if(error) return <h4>Hubo un Error!</h4>
                           if(loading) return <h4>Loading...</h4>
                            const {me} = data
                            //const ends_date = me.subscription_id.start_date ;

                            return(
                                <div className="col s12">
                                    <h4>Nombre: {me.first_name} {me.last_name}</h4>

                                    <h5>Email: {me.email}</h5>

                                    <h5>Birth Date: {me.birth_date}</h5>

                                    <h5>Gender: {me.gender}</h5>

                                    <h5>Nationality: {me.nationality}</h5>

                                    <h5>Subscritpion: {me.subscription_id.type_subscription}</h5>

                                    

                                    <button className="waves-effect waves-light btn btn-primary"> 
                                        Upgrade Subscription
                                    </button>

                                </div>
                           )
                        }
                    }

                </Query>
            </div>
        )
    }
}
