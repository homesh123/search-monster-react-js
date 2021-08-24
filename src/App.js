import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { Navbar,Nav,Form} from 'react-bootstrap';

class App extends Component{
  constructor(){
    super();

    this.state = {
       arts:[
        {
          name:'Abstract',
          id:1
        },
        {
          name:'Patterns',
          id:2
        },
        {
          name:'digitalArt',
          id:3
        }

      ],
      searchString: ""
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
   // .then(users => console.log(users))
    .then(users => this.setState({arts:users}))
  }
  
  render(){
    const {arts,searchString} = this.state;
    const filteredArts = arts.filter(art => art.name.toLowerCase().includes(searchString.toLowerCase()))
    return (
      <div className="App">
        <div className="header-container">
          <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Search Monster</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
    </Nav>
    <Form className="d-flex">
    <SearchBox placeholder="Search Monster" handleChange={
              e => 
              {
                this.setState( {searchString:e.target.value});
                {/*this.setState( {searchString:e.target.value}, () => console.log(this.state)); */}
                console.log(this.state) }
            } ></SearchBox>

    </Form>
  </Navbar.Collapse>
</Navbar>
</div>
           
       <CardList arts={filteredArts}></CardList>
      </div>
    );
  }
}
/* below app function gives same functionality as App class above.
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
