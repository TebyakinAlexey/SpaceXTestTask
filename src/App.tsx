import { useEffect, useReducer } from 'react';
import './App.css';
import MissionFilter from './Components/MissionFilter/MissionFilter';
import MissionList from './Components/MissionList/MissionList';
import { Reducer } from './reducer';
import { ReducerContext } from './Hooks/useAppReducer'
import { loadData } from './actions'


function App() {

  const reducer = useReducer(Reducer, {});
  const [ state, dispatch ] = reducer;

  useEffect( () => {
    loadData(dispatch);
  }, []);

  if (!state.data) {
    return (
        <h1 style={{ position: 'absolute', top: '50%', left: '50%' }}>Loading...</h1>
    )
  }

  return (
      <div style={{ left: '50%', position: 'absolute',  transform: 'translateX(-50%)', width: '600px'}}>
        <ReducerContext.Provider value={reducer}>
          <h1>Launches</h1>
          <MissionFilter/>
          <MissionList/>
        </ReducerContext.Provider>
      </div>
  );
}

export default App;
