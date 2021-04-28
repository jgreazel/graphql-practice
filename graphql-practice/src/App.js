// import './App.css';
import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_LAUNCHES = gql`
  {
    launchesPast(limit: 10) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_LAUNCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Whoops.. something is wrong</p>;

  return (
    <>
      <h2>Github</h2>
      {console.log(data)}
    </>
  );
}

export default App;
