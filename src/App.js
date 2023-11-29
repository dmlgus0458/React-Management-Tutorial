import { render } from '@testing-library/react';
import './App.css';
import Customer from './components/Customer';
import { Component } from 'react';

const customers = [{
  'id': 1,
  'image': 'https://picsum.photos/200/300',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://picsum.photos/200/300',
  'name': '김종현',
  'birthday': '761222',
  'gender': '남자',
  'job': '교수'
},
{
'id': 3,
'image': 'https://picsum.photos/200/300',
'name': '마세헌',
'birthday': '913555',
'gender': '남자',
'job': '직장인'
}]

class App extends Component {
  render() {
  return (
  <div>
    {
      customers.map(c=>{ return( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />);})
  }
  </div>
  );
  }
}
    {/* <Customer
      id={customers[0].id}
      image={customers[0].image}
      name={customers[0].name}
      birthday={customers[0].birthday}
      gender={customers[0].gender}
      job={customers[0].job}
    />
    <Customer
    id={customers[1].id}
    image={customers[1].image}
    name={customers[1].name}
    birthday={customers[1].birthday}
    gender={customers[1].gender}
    job={customers[1].job}
  />
  <Customer
  id={customers[2].id}
  image={customers[2].image}
  name={customers[2].name}
  birthday={customers[2].birthday}
  gender={customers[2].gender}
  job={customers[2].job}
/> */}


export default App;
