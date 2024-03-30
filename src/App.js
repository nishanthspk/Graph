import logo from './logo.svg';
import './App.css';
import { createClient } from "urql";
import { useEffect, useState } from 'react';

function App() {
  const [dappaddeds, setDappaddeds] = useState([]);
  const QueryURL = "https://api.studio.thegraph.com/query/69475/nish/version/latest";
  const query = `
  {
    dappAddeds(first: 5) {
      id
      username
      dappName
      blockNumber
    }
    projectCreateds(first: 5) {
      id
      projectName
      projectId
      blockNumber
    }
  }
  `;
  const client = createClient({
    url: QueryURL
  });

  useEffect(() => {
    const getDappaddeds = async () => {
      const { data } = await client.query(query).toPromise();
      console.log(data);
      setDappaddeds(data.dataUpdateds);
    }
    getDappaddeds();
  }, []);

  return (
    <div>
        Dataupdates Information
        {
// dappaddeds.map((data)=>(
//   <p>{data.newData}</p>
// ))
        }
    </div>

  );
}

export default App;
