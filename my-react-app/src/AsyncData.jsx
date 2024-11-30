import React, { useState, useEffect } from "react";
import axios from "axios";

const AsyncData = () => {
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      setError(null); 

      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(response.data); 
      } catch (err) {
        setError("Помилка підчас завантаження даних"); 
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Завантаження даних...</p>; 
  if (error) return <p>{error}</p>; 

  return (
    <div>
      <h1>Отримані дані:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AsyncData;
