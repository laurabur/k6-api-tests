import { check } from 'k6'
import { session } from '../../utils/config.ts'

export function createSong() {
    const endpoint = '/songs'
    const payload = JSON.stringify({
        title: `Song Title${Date.now()}`
    })
    let response = session.post(endpoint, payload)
    check(response, {'create song status is 201': (r) => r.status === 201})
 return response

}

export function listSongs() {
    const endpoint = '/songs'
    let response = session.get(endpoint)
    check(response, {'list songs status is 200': (r) => r.status === 200})
    return response
}


