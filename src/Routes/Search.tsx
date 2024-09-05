import { useSearchParams } from 'react-router-dom';

function Search() {
  const [searchParams, _] = useSearchParams();
  const keyword = searchParams.get('keyword');

  console.log(keyword);
  return <h1>search</h1>;
}

export default Search;
