
import fetch from 'cross-fetch'
const hostname = process.env.HOSTNAME;
export const requestView = () => ({
  type: 'REQUEST_VIEW'
});

export function fetchView() {
  return function (dispatch) {
    dispatch(requestView());
    return fetch (`/visualization`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )

  }
}