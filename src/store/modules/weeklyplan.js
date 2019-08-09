
import {
  WEEKLYPLAN
} from '@/constants'

// 最后统一导出
export default {
  state: {
    storeStatus: {
      'submitStores': 0,
      'auditedStores': 0,
      'pieceStores': 0
    },
    pieceCode: '0213'

  },

  // 定义 getters
  getters: {
    [WEEKLYPLAN.PIECE_NUMBER_STORE] (state) {
      return state.storeStatus
    },
    [WEEKLYPLAN.PIECE_CODE] (state) {
      return state.pieceCode
    }
  },
  mutations: {
    [WEEKLYPLAN.PIECE_NUMBER_STORE] (state, storeStatus) {
      state.storeStatus = storeStatus
    },
    [WEEKLYPLAN.PIECE_CODE] (state, pieceCode) {
      state.pieceCode = pieceCode
    }
  },

  actions: {
    [WEEKLYPLAN.PIECE_NUMBER_STORE] ({ commit }, storeStatus) {
      commit(WEEKLYPLAN.PIECE_NUMBER_STORE, storeStatus)
    },
    [WEEKLYPLAN.PIECE_CODE] ({ commit }, pieceCode) {
      commit(WEEKLYPLAN.PIECE_CODE, pieceCode)
    }

  }
}
