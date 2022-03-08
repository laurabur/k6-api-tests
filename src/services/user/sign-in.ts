import { check } from 'k6'
import { session } from '../../utils/config.ts'

export function signIn() {
    const path = '/user/authentication/sign-in'
    const payload = JSON.stringify({
        email: 'user1646399569074@mailautomation.test.session.id',
        password: 'Password1646399569074!',
        persistence: 'NONE'
    })
    let response = session.post(path, payload)
    check(response, {'sign in status is 200': (r) => r.status === 200})
}
