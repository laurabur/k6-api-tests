import { Httpx } from 'https://jslib.k6.io/httpx/0.0.2/index.js'

export let session = new Httpx({
    baseURL: 'https://api.test.session.id',
    headers: {
        'x-api-key': 'ErTNGKJgvJOLuAEBdSdk49EOQNV1frZ9Mu39MvAc',
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    timeout: 20000
})

