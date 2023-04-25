import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = "https://localhost:7203/api/users";

function Test() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(baseURL).then((resp) => {
          const users = resp.data;
          setData(users);
        });
      }, [setData]);


      if (!data || data.length === 0) return <p>Нет данных.</p>

    return (
        <div>
        {data.map(u => 
            <p>{u.id}: {u.name}</p>)}
        </div>
    );
}

export default Test;