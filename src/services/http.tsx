import axios from 'axios'

const API_KEY = 'AIzaSyASh4msduqv02KXdQb9Kx3gZu2i0HN69PM'

export async function fetchApi(req: string) {
  //Experience API
  const url = 'https://experience-api.azurewebsites.net/' + req
  //Real API
  // const url = 'https://dev.api.wedbush.com/wedbush-clientlink-api/' + req
  const response = await axios.get(url)

  const data = response.data
  console.log('🚀 ~ file: http.js-- fetchApi ~ data ' + req, data)

  return data
}

interface AuthProps {
  mode?: string
  email: string
  password: string
}

async function authenticate({ mode, email, password }: AuthProps) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  })

  console.log(
    '🚀 ~ file: http.tsx ~ line 30 ~ authenticate ~ response.data',
    response.data
  )

  const token = response.data.idToken
  return token
}

export function createUser(email: string, password: string) {
  const authProps = {
    mode: 'signUp',
    email: email,
    password: password,
  }
  const token = authenticate(authProps)
  return token
}

export function signOn(email: string, password: string) {
  const authProps = {
    mode: 'signInWithPassword',
    email: email,
    password: password,
  }
  const token = authenticate(authProps)
  return token
}
