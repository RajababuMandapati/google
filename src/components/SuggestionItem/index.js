// Write your code here

import './index.css'

const SuggetionItem = props => {
  const {suggetionItem, updateSearchInput} = props
  const {id, suggetion} = suggetionItem
  const onSearchResult = value => {
    updateSearchInput(value)
  }

  return (
    <li className="list-container">
      <p>{suggetion}</p>
      <button type="button" onClick={onSearchResult}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-image"
        />
      </button>
    </li>
  )
}

export default SuggetionItem
