import React, { useEffect, useState } from "react";
import axios from "axios";

function Customer() {
  useEffect(() => {
    const getPosts = () => {
      return axios
        .get("http://localhost:3004/posts")
        .then((resp) => {
          setPosts(resp.data);
        })
        .catch((error) => {
          console.error("Error fetching data", error);
        });
    };
    getPosts();
  }, []);
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <div>
        <h1>Customer</h1>
        <div>
          <ul className="xl:flex xl:justify-center grid lg:grid-cols-3 sm:grid-cols-2">
            {posts.map((posts) => (
              <li
                key={posts.id}
                className="bg-black text-white rounded p-5 m-5 text-bold w-60"
              >
                <h3>Name: {posts.name} </h3>
                <h3>Email: {posts.email} </h3>
                <h3>Password: {posts.password} </h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Customer;