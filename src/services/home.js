
import Request from './request'

// 获取当前用户的部分信息
// export const loadUserCurrent = (id: string) => Request.get(`/public/static/json/${id}.json`)
export const loadUserCurrent = () => Request.get(`/`)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

export const news = () => Request.get(`/news/`)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
export const roomList = () => Request.get(`/roomList/`)
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});

