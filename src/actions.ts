import ActionTypes from './actionTypes'
import { SpaceXItem } from './api'
import axios from 'axios'

const spaceXURL = 'https://api.spacexdata.com/v3/launches';

export function setCommonData(data: SpaceXItem[]) {
    return {
        type: ActionTypes.SetCommonData,
        data: data
    }
}
export function selectLaunchSide(launchSide: string) {
    return {
        type: ActionTypes.SelectLaunch,
        selectedLaunchSide: launchSide
    }
}

export function selectRocket(rocket: string) {
    return {
        type: ActionTypes.SelectRocket,
        selectedRocket: rocket
    }
}

export function loadData(dispatch) {
    const ax = axios.create();
    ax.get(spaceXURL).then( res => 
        dispatch(setCommonData(res.data))
    );
}