const productionHost = '/articles'
// const testHost = 'http://127.0.0.1:7001/'
const testHost = '/articles'

const bookWebProductionHost = 'order/'
const bookWebHost = '/order'

export const host =  process.env.NODE_ENV === 'production' ? productionHost: testHost;
export const bookWeb = process.env.NODE_ENV === 'production' ? bookWebProductionHost: bookWebHost;