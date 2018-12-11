import React from 'react'
import {mount,shallow} from "enzyme"

import {MockedProvider} from 'react-apollo/test-utils'

import MovieDetail from '../MovieDetail';

import gql from 'graphql-tag';


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

const mocks = [
    {
        request:{
            query:SINGLEMOVIE,
            variables:{
                id:"prueba...id"
            }
        },
        result:{
            data:{
                movie:{_id:"prueba..id",name:"prueba name",movie_url:"youtube.com/movie"}
            }
        }
    }


]


describe("<MovieDetail/>", () => {

    it("Debe ejecutar render correctamente",() => {
        const component =  shallow(<MovieDetail/>)
        expect(component).toMatchSnapshot();
    })

    it("El estado debe inicializarse con el ID",() => {
        const match = {
            params:{
                id:"prueba...id"
            }
        }
         const component =  mount(
            <MockedProvider mocks={mocks} addTypename={false}>
                <MovieDetail match={match}/>
            </MockedProvider>
            )
        
        expect(component).toBe({});
   })


})