import axios, { AxiosPromise } from 'axios'
import { settings } from '../settings'
import * as fetchJsonp from 'fetch-jsonp'

export interface Pet {
  name: string
  type: string
}

export interface Person {
  name: string
  gender: string
  age: number
  pets: Pet[] 
}

export class PeopleService {
  async getAll(): Promise<Person[]> {
    const response = await fetchJsonp(settings.baseUrl + '/people.json');
    if (!response.ok) throw new Error('Invalid response');
    const people = await response.json() as any[];

    return people.map(x => ({ ...x, pets: x.pets || [] })); // null is bad!, patching
  }
}