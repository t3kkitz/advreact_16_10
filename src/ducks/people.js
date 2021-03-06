import {appName} from '../config'
import {Record, List} from 'immutable'

/**
 * Constants
 * */
export const moduleName = 'people'
const prefix = `${appName}/${moduleName}`
export const ADD_PERSON = `${prefix}/ADD_PERSON`

/**
 * Reducer
 * */
const ReducerState = Record({
    entities: new List([])
})

const PersonRecord = Record({
    id: null,
    firstName: null,
    lastName: null,
    email: null
})

export default function reducer(state = new ReducerState(), action) {
    const {type, payload} = action

    switch (type) {
        case ADD_PERSON:
            return state.update('entities', entities => entities.push(new PersonRecord(payload.person)))

        default:
            return state
    }
}
/**
 * Selectors
 * */

/**
 * Action Creators
 * */

export function addPerson(person) {
    return (dispatch) => {
        dispatch({
            type: ADD_PERSON,
            payload: {
                person: {id: Date.now(), ...person}
            }
        })
    }
}