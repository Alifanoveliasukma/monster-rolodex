import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

const App = () => {

  const onSearchChange = (event) => {
      const searchField = event.target.value.toLocaleLowerCase();
      this.setState(() => {
        return { searchField };
      });
  }
  return (
    <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox 
        className='monsters-search-box'
        onChangeHandler={onSearchChange} 
        placeholder='search monsters'
        />
        <CardList monsters={filteredMonsters}/>
      </div>
  )
}

// class App extends Component {  // proses pertama (konstruktor)
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField:'',
//     };
//   }
// // memanggil api
//   componentDidMount() {  //ketika yaitu api lalu terakhir ke render lagi
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) =>  // patokan
//       this.setState(
//         () => {
//           return {monsters: users} ; // harus sama dengan line 18
//         },
//         () => {
//           console.log(this.state);
//         }
//       )
//     );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase(); // toLocaleLowerCase akan mengubah kapital menjadi kecil
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {  
//   // kedua yaitu render

//   const { monsters, searchField } = this.state;
//   const { onSearchChange } = this;

//   const filteredMonsters = monsters.filter((monster) => {
//     return monster.name.toLocaleLowerCase().includes(searchField);
//   });

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox 
//         className='monsters-search-box'
//         onChangeHandler={onSearchChange} 
//         placeholder='search monsters'
//         />
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
//   }

export default App;
