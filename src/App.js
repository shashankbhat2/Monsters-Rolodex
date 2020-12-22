import React, {Component} from 'react'
import './App.css'
import Button from './Components/Button/button.component'
import {CardList}  from './Components/Card-List/card-list.component'
import SearchBox from './Components/Search-box/search-box-comonent'

class App extends Component{  
  constructor(){
    super()

    this.state = {
      monsters: [],
      searchField: '',
      searchInput: false
    }
  }

  //When the component mounts - React renders the page
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()) //Promise and convert response to JSON 
    .then(users => this.setState({monsters: users})) //Array Promise - set Monsters to response data
    .catch(e => {
      console.log("Error fetching api", e)
    })
  } 

  showSearch = () => {
    this.setState({searchInput: !this.state.searchInput})
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  //Binds it to the state (Lexically scope -> bind to where its defined)

  render(){
    const {monsters, searchField, searchInput} = this.state;

    const filteredMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return(
      <>
      <h1 className="title">Monster Rolodex</h1>
      <div className="App">
        <Button handleButtonChange={this.showSearch} searchInput={searchInput}/>
        {searchInput && <SearchBox placeholder="Search Monsters" handleChange={this.handleChange}/>}
        <CardList monsters={filteredMonsters}/>
      </div>
      </>
    ) 
  } 
}

export default App;

