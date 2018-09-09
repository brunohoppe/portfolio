
import fetch from 'cross-fetch'
export const requestView = () => ({
  type: 'REQUEST_VIEW'
});

export function fetchView() {
  return function (dispatch) {
    dispatch(requestView());
    return fetch (`https://localhost:8000/visualization`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )

  }
}