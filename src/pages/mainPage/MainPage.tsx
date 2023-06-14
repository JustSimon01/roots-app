import { FunctionComponent } from 'react';
import Card from '../../components/Сard/Card';
import bd from '../../temp/bd.json';

const person = bd[0];

const MainPage: FunctionComponent = () => {
  return (
    <div className="main-block">
      <Card photo={person.photo} name={person.name} key={person._id} _id={person._id} />
    </div>
  );
};

export default MainPage;
