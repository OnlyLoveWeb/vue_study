export default {
  // aUpdateInfo(context, payload) {
  //   setTimeout( () => {
  //     context.commit('update')
  //     console.log(payload.message)
  //     payload.success()
  //   }, 1000)
  // }
  aUpdateInfo(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('update')
          console.log(payload)
          resolve()
        }, 1000)
      })
    }
}