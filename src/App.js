import './App.css';
import NumberBox from './components/NumberBox/NumberBox';

const NumberList = [
  {
    name: 'Abebe Bekele',
    email: 'abebe.bekele@gmail.com',
  },
  {
    name: 'Abebe Bekele',
    email: 'abebe.bekele@gmail.com',
  },
  {
    name: 'Abebe Bekele',
    email: 'abebe.bekele@gmail.com',
  },
  {
    name: 'Abebe Bekele',
    email: 'abebe.bekele@gmail.com',
  },
  {
    name: 'Abebe Bekele',
    email: 'abebe.bekele@gmail.com',
  },
  {
    name: 'Abebe Bekele',
    email: 'abebe.bekele@gmail.com',
  },
  {
    name: 'Abebe Bekele',
    email: 'abebe.bekele@gmail.com',
  },
  {
    name: 'Abebe Bekele',
    email: 'abebe.bekele@gmail.com',
  },
  {
    name: 'Abebe Bekele',
    email: 'abebe.bekele@gmail.com',
  },
];
function App() {
  return (
    <div className='App'>
      {NumberList.map((box, i) => {
         return <NumberBox name={box.name} email={box.email} key={i} />
      })}
    </div>
  );
}

export default App;
