import './App.css';
import NumberBox from './components/NumberBox/NumberBox';
import Header from './components/Header/Header';
import SearchBox from './components/SearchBox/SearchBox';

const NumberList = [
  {
    number: '1',
  },
  {
    number: '2',
  },
  {
    number: '3',
  },
  {
    number: '4',
  },
  {
    number: '5',
  },
  {
    number: '6',
  },
  {
    number: '7',
  },
  {
    number: '8',
  },
  {
    number: '9',
  },
];
function App() {
  return (
    <>
      <Header />
      <div className='App'>
        {NumberList.map((box, i) => {
          return <NumberBox number={box.number} key={i} />;
        })}
      </div>
      <SearchBox />
    </>
  );
}

export default App;
