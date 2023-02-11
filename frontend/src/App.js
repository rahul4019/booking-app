import Layout from './components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getHotels } from './features/hotel/hotelSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotels());
  }, []);

  return <Layout />;
}

export default App;
