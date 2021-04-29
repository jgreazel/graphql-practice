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

const GET_SHIPS = gql`
  {
    ships(limit: 10) {
      model
      name
      roles
      year_built
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_SHIPS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Whoops.. something is wrong</p>;

  return (
    <>
      <h2>Spacex Ships</h2>
      {data.ships.map((ship) => (
        <div>
          <h4>{ship.name}</h4>
          <p>Built: {ship.year_built}</p>
          <p>
            Roles:{" "}
            {ship.roles.map((role) => (
              <li>{role}</li>
            ))}
          </p>
        </div>
      ))}
    </>
  );
}

export default App;
