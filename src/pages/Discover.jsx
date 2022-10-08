import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/api';

const Discover = () => {
  const genreTitle = 'pop';
  const { data, isFetching, error } = useGetTopChartsQuery();
  console.log(data);

  if (isFetching) return <Loader title='Loading songs ...' />;
  if (error) return <Error />;

  return (
    <>
      <div className='flex flex-col'>
        <div className='w-full flex justify-between items-center sm: flex-row flex-col mt-4 mb-10'>
          <h2 className='font-bold text-left text-3xl text-white'>
            Discover {genreTitle}{' '}
          </h2>
          <select
            onChange={() => {}}
            value=''
            className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm: mt-0 mt-5 '
          >
            {genres.map((genre) => (
              <option key={genre.value}> {genre.title}</option>
            ))}
          </select>
        </div>
        <div className='flex flex-wrap sm: justify-start justify-center gap-8'>
          {data.map((item, i) => (
            <SongCard key={item.key} song={item} i={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Discover;
