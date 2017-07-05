import { Person } from 'services/PeopleService';

export const initialAppState: AppState = { people: [] };

export interface AppState {
  readonly people: Person[]
}