import React, { Component } from 'react';
import {Input} from '../../common/Input';
import FileUploader from 'react-firebase-file-uploader';
import firebaseConfig  from '../../firebaseConfig';




export default class MovieForm extends Component {
 constructor(props){
    super(props)
    this.state = {
        name:"",
        genre:"COMEDY",
        director:"",
        cast:[],
        sinopsis:"",
        duration:"",
        realesed_date:"",
        rating:4.5,
        rate:"",
        language:"",
        cover:"",
        movie_url:"",
        progress:0,
        actor:{
            castName:"",
            age:""
        }
    }
 }


 addCast = (e) => {
     e.preventDefault();
    const newCast = {
        name:this.state.actor.castName,
        age:this.state.actor.age
    }
    this.setState(
        {cast:[...this.state.cast,newCast],
         actor:{castName:"",age:""}
        }
    )
 }
 handleCastInput = (e) => {
     const {id,value} =  e.target
     let newCast = {...this.state.actor}
     newCast[id] = value
     this.setState(
         {
             actor:{...newCast}
         }
     )

 }

 CastInput = () => {
    return(
        <React.Fragment>
            
            <div className="col s10">
                <ul>    
                    {this.state.cast.map((actor,index) =>(
                        <li key={index}>{actor.name}</li>
                    ))
                }

                </ul>
            </div>
          
            <div className="col s5 input-field">
                    <Input type="text" 
                        id="castName" name="Name" 
                        value={this.state.actor.castName}
                        setInput={this.handleCastInput}
                        required/>
            </div>
            <div className="col s5 input-field">
                    <Input type="text" 
                        id="age" name="Age" 
                        value={this.state.actor.age}
                        setInput={this.handleCastInput}
                        required/>
            </div>  

            <div className="col s10">
                <a href="" className="waves-effect waves-ligth btn btn-primary"
                onClick={this.addCast}
                >Agregar</a>
            </div>

        </React.Fragment>
        
    )

}



 handleInput =  (e) => {
    const {id,value} =  e.target
     this.setState(
        {[id]:value}
     )
 }

 handleUploadError = (error) => {
    console.log(error)
 }
 
 
 progressFile = (progress) => {
    this.setState({progress})
 }

 handleUploadSucces = (filename) => {
    this.setState({progress:100})
    firebaseConfig.storage()
        .ref("covers")
        .child(filename)
        .getDownloadURL()
        .then(url => this.setState({cover:url}))
        .catch(err => console.log(err) )

 }
 
 


  render() {
    return (
      <div className="container">
        <form>
            <div className="row">
                <div className="col s10 input-field">
                    <Input type="text" 
                        id="name" name="Title" 
                        value={this.state.name}
                        setInput={this.handleInput}
                        required/>
                </div>
                <div className="col s10 ">
                    <label htmlFor="genre">Genre</label>
                    <select  id="genre" value={this.state.genre} className="browser-default" onChange={this.handleInput}>
                        <option value="COMEDY">Comedy</option>
                        <option value="ACTION">Action</option>
                        <option value="DRAMA">Drama</option>
                        <option value="SCIFY">Science Fiction</option>
                        <option value="HORROR">Horror</option>
                    </select>
                </div>

              
                <div className="col s10 input-field">
                    <Input type="text" 
                            id="director" name="Director" 
                            value={this.state.director}
                            setInput={this.handleInput}
                            required/>
                </div>
                {this.CastInput()}

                <div className="col s10 input-field">
                    <textarea  className="materialize-textarea" id="sinopsis" cols="30" rows="10" value={this.state.sinopsis}
                    onChange={this.handleInput}
                    ></textarea>
                    <label htmlFor="sinopsis">Sinopsis</label>
                </div>

                <div className="col s10 input-field">
                    <Input type="text" 
                            id="duration" name="Duration" 
                            value={this.state.duration}
                            setInput={this.handleInput}
                            required/>
                </div>

                <div className="col s10 input-field">
                    <Input type="text" 
                            id="realesed_date" name="Released Date" 
                            value={this.state.realesed_date}
                            setInput={this.handleInput}
                            required/>
                </div>

                <div className="col s10">
                    <label htmlFor="rate">Rate</label>
                    <select  id="rate" value={this.state.rate}  className="browser-default" onChange={this.handleInput} >
                        <option value="A">Clasification A</option>
                        <option value="B">Clasification B</option>
                        <option value="C">Clasification C</option>
                        <option value="B15">Clasification B15</option>
                    </select>
                </div>

                <div className="col s10 input-field">
                    <Input type="text" 
                            id="language" name="Language" 
                            value={this.state.language}
                            setInput={this.handleInput}
                            required/>
                </div>

                <div className="col s10 input-field">
                    <Input type="text" 
                            id="movie_url" name="Movie Url" 
                            value={this.state.movie_url}
                            setInput={this.handleInput}
                            required/>
                </div>

                <div className="col s10 ">
                    <label className="btn btn-primary">
                        <FileUploader
                            hidden
                            accept="image/*"
                            randomizeFilename
                            storageRef={
                                firebaseConfig.storage().ref('covers')
                            }
                            onUploadError={this.handleUploadError}
                            onProgress={this.progressFile}
                            onUploadSuccess={this.handleUploadSuccess}
                        />
                    Agregar Cover
                    </label>
                    <span>Progress: {this.state.progress}%</span>

                </div>
            </div>
        </form>
      </div>
    )
  }
}
