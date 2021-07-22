import { useContext } from "react";
import { AppState } from '../reducer';
import React from 'react';

export const ReducerContext = React.createContext<[AppState, React.Dispatch<any>] | undefined>(undefined);

/**
 * 
 * @returns Хук получения редьюсера приложения
 */
export function useAppReducer() {
    const appReducer =  useContext(ReducerContext);
    if (!appReducer) {
        throw new Error('No Context');
    }

    return appReducer;
}