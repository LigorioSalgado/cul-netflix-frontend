import React from 'react';
import {shallow} from "enzyme";

import MovieCard from '../MovieCard';



describe("<MovieCard/>", () => {

    it("Debe ejecutar render correctamente",() => {
        const component =  shallow(<MovieCard/>)
        expect(component).toMatchSnapshot();
    })

    it("Debe pintar props",() => {
        const movie = {
            id:"pruebaid",
            image:"pruebaimagen.jpg",
            rating:4.5,
            title:"prueba pelicula"
        }

         const component =  shallow(<MovieCard id={movie.id} 
                image={movie.image}
                rating={movie.rating}
                title={movie.title}
             />)
        
        expect(component.find(".card-title").text()).toBe(movie.title);
   })

})