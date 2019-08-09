import Request from './request'
export const allarticles = () => {
  return Request.get(`/articles/article`)
}

export const allarticlesPage = ({page, pageSize }) => {
  return Request.get(`/articles/article?page=${page}&pageSize=${pageSize}`)
}