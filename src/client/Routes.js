import Home from './components/Home';
import { chunksLoadData } from './components/ChunksList';

export default [
  {
    loadData: chunksLoadData,
    path: '/',
    component: Home,
    exact: true
  }
];
