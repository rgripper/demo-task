import { Action, Reducer } from 'redux';
import { Person } from 'services/PeopleService';
import { AppState, initialAppState } from 'store/app/AppState';

export enum AppActionType {
    LoadPeople
}

export type AppAction =
    | {
        type: AppActionType.LoadPeople
        payload?: Person[]
    }

export const appStateReducer: Reducer<AppState> = function (state: AppState = initialAppState, action: AppAction) {
    switch (action.type) {
        case AppActionType.LoadPeople:
            return { people: action.payload! } as AppState;
        default:
            return state;
    }
};
