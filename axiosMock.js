export default {
  status: 200,
  delay: 500,
  get(route) {
    return responseSimulator((resolve, reject) => {
      if (this.status !== 200) reject(new Error())

      switch (route) {
        case '/example-route':
          resolve({ data: ['a', 'b', 'c'] })
          break
        default:
          break
      }
    }, this.delay)
  }
}

const responseSimulator = (callback, delay) => {
  return new Promise((resolve, reject) => {
    delaySimulation(callback, delay, resolve, reject)
  })
}

const delaySimulation = (callback, delay, resolve, reject) => {
  setTimeout(() => {
    callback(resolve, reject)
  }, delay)
}
