import  {ApolloClient} from 'apollo-client'; // Cliente de Graphql de apollo
import {createHttpLink} from 'apollo-link-http';// Trae el schema de graphql
import {setContext} from 'apollo-link-context' //Setear cabezeras en el request
import {InMemoryCache} from 'apollo-cache-inmemory' // Cache de graphql

const API_URL = "https://cul-clone-netflix.herokuapp.com";

const httplink =  createHttpLink({
    uri:`${API_URL}/graphql`,
    credentials:"include"// solo se agrega  cuando hay credentials en el backend
})

const authLink =  setContext((_,{headers}) => {
    const token =  localStorage.getItem('netflixToken');
    return{
        headers:{
            ...headers,
            
            authorization:token ? `JWT ${token}` : ''
        }
    }

})

export default new ApolloClient({
    link:authLink.concat(httplink),
    cache:new InMemoryCache()
})
