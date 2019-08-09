export default {
  id: -1,
  raf: {},

  start (callback) {
    this.raf[++this.id] = {
      _id: this.id,
      status: true,
      id: null
    }

    this.run(this.id, callback)

    return this.id
  },

  run (rafId, callback) {
    if (!this.raf[rafId].status) {
      return
    }
    this.raf[rafId].id = window.requestAnimationFrame(() => {
      typeof callback === 'function' && callback(rafId)
      this.run(rafId, callback)
    })
  },

  clear (rafId) {
    this.raf[rafId].status = false
    window.cancelAnimationFrame(this.raf[rafId].id)
  }
}
