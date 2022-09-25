import axios from 'axios'
import { postRequest } from '../../api/post'

const state = {
  url:null
}
const getters = {
  getCutUrl(state) {
    return state.url
  }
}
const mutations = {
  SET_CUT_URL(state, url) {
    state.url = url.data.shortUrl
  }
}
const actions = {
  async cutUrl({commit}, payload) {
   const response =  await postRequest("generate",payload,null)
      //  console.log(response,"-----------------");
       commit("SET_CUT_URL", response)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
