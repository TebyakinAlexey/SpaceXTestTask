import { useReducer } from 'react';
import './App.css';
import MissionFilter from './Components/MissionFilter/MissionFilter';
import MissionList from './Components/MissionList/MissionList';
import { Reducer } from './reducer';
import { ReducerContext } from './Hooks/useAppReducer'


function App() {

  const reducer = useReducer(Reducer, {});

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
