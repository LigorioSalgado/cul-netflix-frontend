import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {setContext} from 'apollo-link-context';
import {InMemoryCache} from 'apollo-cache-inmemory';

const API_URL = "https://cul-clone-netflix.herokuapp.com"

const httplink = createHttpLink({
    uri:`${API_URL}/graphql`,
    credentials: 'include'
});

const authLink = setContext((_,{headers}) => {
    const token =  localStorage.getItem('token');
    return{
        headers:{
            ...headers,
            authorization:token ? `JWT ${token}` :''
        }
    }
});

const client = new ApolloClient({
    link:authLink.concat(httplink),
    cache:new InMemoryCache()
})

export default client;