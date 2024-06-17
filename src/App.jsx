import React, { useState, useEffect } from 'react';
import Card from './Components/Card'; 

export default function App() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await fetch('/Placeholder.json');
      const jsonResponse = await response.json();
      const cleanData = jsonResponse.results.map(user => ({
        name: user.name,
        username: user.username,
        email: user.email
      }));
      setData(cleanData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="all-card">
        {data.map((user, index) => (
          <Card key={index} user={user} />
        ))}
      </div>
    </>
  );
}
