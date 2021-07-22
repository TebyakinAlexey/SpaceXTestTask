import { useEffect, useMemo } from "react";
import { useAppReducer } from "../../Hooks/useAppReducer";
import { selectLaunchSide, selectRocket, loadData } from '../../actions'
import { LaunchSite, Rocket } from '../../api'
import styles from './MissionFilter.module.css'

const MissionFilter = () => {
    const [ state, dispatch ] = useAppReducer();

    useEffect( () => {
        loadData(dispatch);
    }, []);
    
    
    const launchSides = useMemo( () => {
        if (state.data) {
            const dicLaunchSites: Map<string, LaunchSite> = new Map();
            for (let item of state.data) {
                if (!dicLaunchSites.has(item.launch_site.site_id)) {
                    dicLaunchSites.set(item.launch_site.site_id, item.launch_site);
                }
            }

            const launchSites = [...dicLaunchSites.values()];
            return launchSites.map( i => { return <option value={i.site_id}>{i.site_name}</option>});
        }
        
    }, [state.data]);

    const rockets = useMemo( () => {
        if (state.data) {
            const dicRockets: Map<string, Rocket> = new Map();

            for (let item of state.data) {
                if (!dicRockets.has(item.rocket.rocket_id)) {
                    dicRockets.set(item.rocket.rocket_id, item.rocket);
                }
            }

            const rockets = [...dicRockets.values()];
            return rockets.map( i => { return <option value={i.rocket_id}>{i.rocket_name}</option>});
        }
    }, [state.data]);

    if (!state.data) {
        return (
            <h1 style={{ position: 'absolute', top: '50%', left: '50%' }}>Loading...</h1>
        )
    }
    
    return (
        <div className={styles.Main}>
            <div className={styles.ComboContainer}>
                <span className={styles.ComboFont}>LaunchSite</span>
                    <select className={styles.Combo} onChange={ (e) => dispatch(selectLaunchSide(e.target.value))} value={state.selectedLaunchSide}>
                        {launchSides}
                    </select>
                </div>
            <div className={styles.ComboContainer} style={{marginLeft: 20}}>
                <span className={styles.ComboFont}>Rocket</span>
                <select className={styles.Combo} onChange={ (e) => dispatch(selectRocket(e.target.value))} value={state.selectedRocket} >
                    {rockets}
                </select>
            </div>
      </div>
    );
  }
  
  export default MissionFilter;