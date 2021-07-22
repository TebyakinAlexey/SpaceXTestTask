import ActionTypes from './actionTypes'
import { SpaceXItem } from './api';

/**
 * Интерфейс состояния приложения
 */
export interface AppState {
    selectedLaunchSide?: string;
    selectedRocket?: string;
    data?: SpaceXItem[]
}


export const Reducer = (state: AppState = {}, action) => {
    switch (action.type) {
        case ActionTypes.SetCommonData: {
            const newState: AppState = {
                data: action.data
            }

            if (newState.data && newState.data.length != 0) {
                const firstItem = newState.data[0];
                newState.selectedLaunchSide = firstItem.launch_site.site_id;
                newState.selectedRocket = firstItem.rocket.rocket_id;
            }

            return newState;
        }
        case ActionTypes.SelectLaunch: {
            const newState: AppState = {
                ...state,
                selectedLaunchSide: action.selectedLaunchSide
            }
            return newState;
        }
        case ActionTypes.SelectRocket: {
            const newState: AppState = {
                ...state,
                selectedRocket: action.selectedRocket
            }
            return newState;
        }

        default: return state
    }
}
