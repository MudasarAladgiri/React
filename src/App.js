import React, {Component} from 'react';
// import logo from './logo.svg';

import { CardList } from './components/card-list/card-list';
import './App.css';
import { SearchBox } from './components/searchbox/search-box';

class App extends Component {
  constructor(){
  super();
  
  this.state={
   monsters:[],
   searchfield:""
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({monsters:users}))
  }

  render(){
    const {monsters, searchfield}=this.state;
    const filteredmonster= monsters.filter(monster=>monster.name.toLowerCase().includes(searchfield.toLowerCase()))
  return (

    <div className="App">
      <h1 className='Heading'>Monsters Rolodex</h1>
      <SearchBox
       placeholder='search monster'
       handleChange={e => this.setState({searchfield:e.target.value})}
      />
      <CardList monsters={filteredmonster}/>
     
    </div>
  );
  }
}

export default App;
