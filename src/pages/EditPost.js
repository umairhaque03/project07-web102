import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client'


const EditPost = ({data}) => {

    const {id} = useParams();
    const [post, setPost] = useState({id: null, title: "", author: "", description: ""});

    useEffect(() => {
        const result = data.filter(item => String(item.id) === id)[0];
        setPost({title: result.title, author: result.author, description: result.description});
    }, [data, id]);


    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    
    const updatePost = async (event) => {
        event.preventDefault();
        const { error } = await supabase
        .from('Posts')
        .update({ title: post.title, author: post.author,  description: post.description})
        .eq('id', id)

        if (error) {
            console.log(error);
        }

        window.location = "/";
    }

    const deletePost = async (event) => {
        event.preventDefault();
        const { error } = await supabase
        .from('Posts')
        .delete()
        .eq('id', id) 

        if (error) {
            console.log(error);
        }

        window.location = "/";
    }
    const Avengers = [
        "Iron Man",
        "Captain America",
        "Thor",
        "Hulk",
        "Black Widow",
        "Hawkeye",
        "Spider-Man",
        "Doctor Strange",
        "Black Panther",
        "Captain Marvel",
      ];

    return (
        <div>
            <form>
                <label>Name of avenger</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange}/><br />
                <br/>

                <label>Strength (PA) </label><br />
                <input type="text" id="author" name="author" value={post.author} onChange={handleChange}/><br />
                <br/>

                <label>Choose Avenger: </label>
        <br />
        <ul>
          {Avengers.map((avenger) => (
            <li key={avenger}>
              <button
                id="description"
                value={avenger}
                onClick={(event) => {
                  event.preventDefault();
                  event.target.classList.add("selected");
                  handleChange({
                    target: { name: "description", value: avenger },
                  });
                }}
              >
                {avenger}
              </button>
            </li>
          ))}
          </ul>
                <br/>
                <input type="submit" value="Submit" onClick={updatePost}/>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost