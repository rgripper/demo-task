import { Store } from "redux";
import { AppState } from "store/app/AppState";
import { Person } from 'services/PeopleService';
import { AppActionType } from "store/app/appStateReducer";

export interface AppActions {
  loadPeople(people: Person[]): void
}

export function createAppActions(store: Store<AppState>): AppActions {
  return {
    loadPeople(people: Person[]) {
      store.dispatch({ type: AppActionType.LoadPeople, payload: people })
    }
  }
}