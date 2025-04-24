import { ACTIONS } from "./Calculator"

function DigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  )
}
export default DigitButton;