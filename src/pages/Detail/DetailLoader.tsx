import StaticLoader from '../../components/StaticLoader';

const AnimeCardLoader = ( ) => {

  return(
    <div>
      <StaticLoader width="100%" height='250px' marginBottom='16px' />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <StaticLoader width="30%" height='32px' marginBottom='16px' />
        <StaticLoader width="15%" height='32px' marginBottom='16px' />
      </div>
      <StaticLoader width="40%" height='32px' marginBottom='16px' />
      <StaticLoader width="100%" height='32px' marginBottom='4x' />
      <StaticLoader width="100%" height='32px' marginBottom='4x' />
      <StaticLoader width="100%" height='32px' marginBottom='4x' />
      <StaticLoader width="100%" height='32px' marginBottom='4x' />
      <StaticLoader width="100%" height='32px' marginBottom='4x' />
    </div>
  )
}

export default AnimeCardLoader;