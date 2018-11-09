import Api from '@/services/Api'

export default {
  create (todo) {
    return Api().post('create', todo)
  }
}
