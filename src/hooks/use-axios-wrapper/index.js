import useAxios, { configure } from 'axios-hooks';
import axios from '../../services';
configure({ axios, cache: false });

function useAxiosWrapper({ path }) {
  const [{ data, loading, error }, refetch] = useAxios(path);
  return [{ data, loading, error }, refetch];
}

export default useAxiosWrapper;
