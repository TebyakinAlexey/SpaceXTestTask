import { useMemo } from "react";
import { useAppReducer } from "../../Hooks/useAppReducer";
import { selectLaunchSide, selectRocket } from '../../actions'
import styles from './MissionFilter.module.css'

const MissionFilter = () => {
    const [ state, dispatch ] = useAppReducer();
    
    function getLaunchSideItems() {
        let launchSides: any[] = [];
        if (state.data) {
            const dicLaunchSites: Set<string> = new Set();

            for (let item of state.data) {
                const i = item.launch_site;
                if (!dicLaunchSites.has(i.site_id)) {
                    dicLaunchSites.add(i.site_id);
                    
                    launchSides.push(<option key={i.site_id} value={i.site_id}>{i.site_name}</option>)
                }
            }
        }
        
        return launchSides;
    }
    function getRocketsItems() {
        let rockets: any[] = [];
        if (state.data) {
            const dicRockets: Set<string> = new Set();

            for (let item of state.data) {
                const i = item.rocket;
                if (!dicRockets.has(i.rocket_id)) {
                    dicRockets.add(i.rocket_id);
                    rockets.push(<option key={i.rocket_id} value={i.rocket_id}>{i.rocket_name}</option>)
                }
            }
        }

        return rockets;
    }
    
    const { launchSidesItems, rocketItems } = useMemo( () => {
        return {
            launchSidesItems: getLaunchSideItems(),
            rocketItems: getRocketsItems()
        }
    }, [state.data])

    return (
        <div className={styles.Main}>
            <div className={styles.ComboContainer}>
                <span className={styles.ComboFont}>LaunchSite</span>
                <select className={styles.Combo} onChange={ (e) => dispatch(selectLaunchSide(e.target.value))} value={state.selectedLaunchSide}>
                    {launchSidesItems}
                </select>
            </div>
            <div className={styles.ComboContainer} style={{marginLeft: 20}}>
                <span className={styles.ComboFont}>Rocket</span>
                <select className={styles.Combo} onChange={ (e) => dispatch(selectRocket(e.target.value))} value={state.selectedRocket} >
                    {rocketItems}
                </select>
            </div>
      </div>
    );
  }
  
  export default MissionFilter;