import { useMemo } from "react";
import { useAppReducer } from "../../Hooks/useAppReducer";
import styles from "./MissionList.module.css"

const MissionList = () => {
    const [ state ] = useAppReducer();

    const items = useMemo( () => {
        if (state.data && state.selectedLaunchSide && state.selectedRocket) {
            return state.data.filter( i => i.launch_site.site_id == state.selectedLaunchSide && i.rocket.rocket_id == state.selectedRocket).map( i => {
                const data = new Date(i.launch_date_utc);
                return (
                    <div className={styles.Item}>
                        <img src={i.links.mission_patch_small} className={styles.Img}/>
                        <div className={styles.Description}>
                           <div className={styles.Header}>
                               <span style={{ fontWeight: 'bold'}}>{i.mission_name}</span>
                               <span style={{ fontWeight: 600}}>{data.toLocaleDateString()}</span>
                            </div>
                            <div>
                                {i.upcoming ? 'Upcoming' : i.details}
                            </div> 
                        </div>
                        
                    </div>
                )
            })
        }
        
    }, [state]);

    return (
        <div className={styles.Main}>
            {items}
        </div>
    )
}

export default MissionList;