import  {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory'

const API_URL = "https://cul-clone-netflix.herokuapp.com";

const httplink =  createHttpLink({
    uri:`${API_URL}/graphql`,
    credentials:"include"
})


export default new ApolloClient({
    link:httplink,
    cache:new InMemoryCache()
})
