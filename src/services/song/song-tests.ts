import { describe } from 'https://jslib.k6.io/expect/0.0.4/index.js'
import * as SignIn from '../user/sign-in.ts'
import * as Song from './song-functions.ts'
import Ajv from 'https://jslib.k6.io/ajv/6.12.5/index.js'
import { createSongSchema } from '../../utils/schemas/createSongSchema.ts'
import { songListSchema } from '../../utils/schemas/songListSchema.ts'
const ajv = new Ajv()

export default function validate() {
    describe('song create schema validation', (t) => {
             SignIn.signIn()
           const response = Song.createSong()
           const schema = createSongSchema()

        console.log('response: ', JSON.stringify(response.status))
        t.expect(response.status).as('API status code').toEqual(201)

            const validate = ajv.compile(schema)
            const valid = validate(response)
            if (!valid) console.log(validate.errors)
            else console.log('valid')
        })
  describe('song list schema validation', (t) => {
    SignIn.signIn()
    const response = Song.listSongs()
    const schema = songListSchema()

    t.expect(response.status).as('API status code').toEqual(200)
    const validate = ajv.compile(schema)
    const valid = validate(response)
    if (!valid) console.log(validate.errors)
    else console.log('valid')
  })
}
