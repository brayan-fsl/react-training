const performRequest = async ({url = 'https://jsonplaceholder.typicode.com/posts', method = 'GET', data = {}} = {}) => {
  const body = JSON.stringify(data)
  const includeBody = method !== 'GET'
  const response = await fetch(url, {method, ...(includeBody && {body})})
  return response.json()
}

export const get = () => {
  const response = performRequest()
  return response
}

export const create = (post) => {
  const method = 'POST'
  const response = performRequest({method, data: post})
  return response
}

export const find = (id) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`
  const response = performRequest({url});
  return response
}

export const update = ({id, title, body}) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`
  const method = 'PUT'
  const response = performRequest({url, method, data: {title, body}})
  return response
}

export const destroy = (id) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`
  const method = 'DELETE'
  const response = performRequest({url, method});
  return response
}