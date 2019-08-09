import { mapGetters, mapActions } from 'vuex'
import {
  WEEKLYPLAN
} from '@/constants'

export default {
  data () {
    return {
    }
  },

  computed: {
    ...mapGetters({
      pieceCode: WEEKLYPLAN.PIECE_CODE,
      storeStatus: WEEKLYPLAN.PIECE_NUMBER_STORE
    })
  },
  methods: {
    ...mapActions([
      WEEKLYPLAN.PIECE_NUMBER_STORE,
      WEEKLYPLAN.PIECE_CODE
    ]),
    updatePieceNumberStore (store) {
      try {
        this[WEEKLYPLAN.PIECE_NUMBER_STORE](store)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('updatePieceNumberStore Error: ', error)
      }
    },
    updatePieceCode (code) {
      try {
        this[WEEKLYPLAN.PIECE_CODE](code)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('updatePieceNumberStore Error: ', error)
      }
    }
  }
}
