import logo from './logo.svg';
import './App.css';
import { createClient } from "urql";
import { useEffect, useState } from 'react';

function App() {
  const [dataUpdateds, setDataupdates] = useState([]);
  const QueryURL = "https://api.studio.thegraph.com/query/69475/test/version/latest";
  const query = `
    query {
      dataUpdateds(first: 5) {
        id
        newData
        blockNumber
        blockTimestamp
      }
    }
  `;
  const client = createClient({
    url: QueryURL
  });

  useEffect(() => {
    const getDataupdates = async () => {
      const { data } = await client.query(query).toPromise();
      console.log(data);
      setDataupdates(data.dataUpdateds);
    }
    getDataupdates();
  }, []);

  return (
    <div>
      {/* Render your data here */}
    </div>
  );
}

export default App;
