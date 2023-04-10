import React, { useState } from "react";
import "./CreatePost.css";
import { supabase } from "../client";

const CreatePost = () => {
  const [post, setPost] = useState({ title: "", author: "", description: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createPost = async (event) => {
    event.preventDefault();

    const { error } = await supabase
      .from("Posts")
      .insert({
        title: post.title,
        author: post.author,
        description: post.description,
      })
      .select();

    if (error) {
      console.log(error);
    }

    window.location = "/";
  };

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
        <label>Name of Avenger</label> <br />
        <input
          type="text"
          id="title"
          name="title"
          value={post.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Strength (PA)</label>
        <br />
        <input
          type="text"
          id="author"
          name="author"
          value={post.author}
          onChange={handleChange}
        />
        <br />
        <br />
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
        <br />
        <br />
        <input type="submit" value="Submit" onClick={createPost} />
      </form>
    </div>
  );
};

export default CreatePost;
