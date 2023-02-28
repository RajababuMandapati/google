// Write your code here

import {Component} from 'react'
import './index.css'
import SuggetionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachSuggetion =>
      eachSuggetion.suggestion.lowerCase().includes(searchInput.lowerCase()),
    )

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="image-container"
        />
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
            className="search-image"
          />
          <input
            type="search"
            className="search-input"
            onChangeSearchInput={this.onChangeSearchInput}
          />
          <ul>
            {searchResults.map(eachItem => (
              <SuggetionItem
                key={eachItem.id}
                suggetionItem={this.eachItem}
                updateSearchInput={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
