import { user } from './local'

export default function () {
  return {
    Authorization: user().token
  }
}
