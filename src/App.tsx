import React from 'react';
import { gql } from '@apollo/client';
import { useProgramsQuery } from './generated/graphql';

export const QUERY_LAUNCH_LIST = gql`
  query Programs {
    program {
      id
      image_id
      name
      created_at
      updated_at
      thumnail {
        alt
        created_at
        id
        updated_at
        url
      }
    }
  }
`;

function App() {
  const { data, error, loading } = useProgramsQuery();

  console.log("--- data: ", data);
  console.log("--- error: ", error);
  console.log("--- loading: ", loading);

  return (
    <div className="App">
    </div>
  );
}

export default App;
