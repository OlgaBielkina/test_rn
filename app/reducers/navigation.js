import AppNavigator from 'app/components/Navigation'

const initialState = {}
export default function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    default:
      return AppNavigator.router.getStateForAction(action, state)
  }
}
