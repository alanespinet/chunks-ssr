import Home from './components/Home';
import Add from './components/Add';
import App from './components/App';
import { chunksLoadData } from './components/ChunksList';

export default [
  {
    component: App,
    routes: [
      {
        loadData: chunksLoadData,
        path: '/',
        component: Home,
        exact: true
      }, {
        path: '/add',
        component: Add
      }
    ]
  }
];
