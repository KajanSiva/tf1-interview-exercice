import React from 'react';
import { gql } from '@apollo/client';
import { ProgramsQuery, useProgramsQuery } from './generated/graphql';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './App.css';

type formattedProgram = {
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

const mapProgramsData = (data: ProgramsQuery | undefined): formattedProgram[] => {
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

const ProgramThumbnail = ({program}: {program: formattedProgram}) => {
  return (
    <div>
      <div className="program-thumbnail-wrapper">
        <img className="program-thumbnail" src={program.thumbnailUrl} alt="" width="100%" />
      </div>
      <p className="program-name">{program.programName}</p>
    </div>
  )
}

function App() {
  const { data, error, loading } = useProgramsQuery();
  const formattedData = React.useMemo(() => mapProgramsData(data), [data])

  console.log("--- data: ", data);
  console.log("--- error: ", error);
  console.log("--- loading: ", loading);

  if (error) {
    return <p>Une erreur inattendue est survenue.</p>
  }

  if (loading || !data) {
    return <p>En cours de chargement...</p>
  }

  return (
    <div className="App">
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {formattedData.map((program) => (
          <SwiperSlide>
            <ProgramThumbnail program={program} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
