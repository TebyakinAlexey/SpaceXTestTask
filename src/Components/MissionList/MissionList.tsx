import { useAppReducer } from "../../Hooks/useAppReducer";
import styles from "./MissionList.module.css"

const MissionList = () => {
    const [ state ] = useAppReducer();

    let launchItems: any[] = [];
    if (state.data && state.selectedLaunchSide && state.selectedRocket) {
        launchItems = state.data.filter( i => i.launch_site.site_id == state.selectedLaunchSide && i.rocket.rocket_id == state.selectedRocket).map( i => {
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
        });
    }

    return (
        <div className={styles.Main}>
            {launchItems}
        </div>
    )
}

export default MissionList;