import React from 'react';
import { gql } from '@apollo/client';
import { ProgramsQuery, useProgramsQuery } from './generated/graphql';
import { Carousel } from './components/Carousel/Carousel';

import './App.css';

export type FormattedProgram = {
  programName: string;
  programId: any;
  thumbnailId: any;
  thumbnailAlt: string;
  thumbnailUrl: string;
}

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

const mapProgramsData = (data: ProgramsQuery | undefined): FormattedProgram[] => {
  if (!data) {
    return []
  }

  return data.program.map((program) => ({
    programName: program.name,
    programId: program.id,
    thumbnailId: program.thumnail.id,
    thumbnailAlt: program.thumnail.alt,
    thumbnailUrl: program.thumnail.url
  }))
}

function App() {
  const { data, error, loading } = useProgramsQuery();
  const formattedData = React.useMemo(() => mapProgramsData(data), [data])

  if (error) {
    return <p>Une erreur inattendue est survenue.</p>
  }

  if (loading || !data) {
    return <p>En cours de chargement...</p>
  }

  return (
    <div className="App">
      <Carousel items={formattedData} />
    </div>
  );
}

export default App;
