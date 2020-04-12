export function fetchAnything(url, dispatch, type) {
  fetch(url)
    .then(res => res.json())
    .then(res => dispatch({ type: type, payload: res }))
    .catch(err => console.log(err));
}
