import React from 'react';
import Monkeys from '../../../asserts/images/folder/pic1.png';
import Girraf from '../../../asserts/images/folder/pic2.png';
import Tourist from '../../../asserts/images/folder/pic3.png';
import Cameras from '../../../asserts/images/folder/pic4.png';
import Beach from '../../../asserts/images/folder/pic5.png';
import Mountains from '../../../asserts/images/folder/pic6.png';
import Village from '../../../asserts/images/folder/pic7.png';
import Caneo from '../../../asserts/images/folder/pic8.png';
import Volcano from '../../../asserts/images/folder/pic9.png';
import Church from '../../../asserts/images/folder/pic10.png';
import Towerls from '../../../asserts/images/folder/pic11.png';
import Bicycle from '../../../asserts/images/folder/pic12.png';
import Mosque from '../../../asserts/images/folder/pic13.png';
import Sun from '../../../asserts/images/folder/pic14.png';
import Child from '../../../asserts/images/folder/pic15.png';
import Afric from '../../../asserts/images/folder/pic16.png';
import Play from '../../../asserts/images/folder/pic17.png';
import Cow from '../../../asserts/images/folder/pic18.png';
import Elephant from '../../../asserts/images/folder/pic19.png';
import Family from '../../../asserts/images/folder/pic20.png';
import North from '../../../asserts/images/folder/pic21.png';
import Architecture from '../../../asserts/images/folder/pic22.png';
import Visitors from '../../../asserts/images/folder/pic23.png';
import Populations from '../../../asserts/images/folder/pic24.png';
import Button from '../../../components/Button/Button';
import './Picture.css';

const test = [
  {
    src: Monkeys,
  },
  {
    src: Girraf,
  },
  {
    src: Tourist,
  },
  {
    src: Cameras,
  },
  {
    src: Beach,
  },
  {
    src: Mountains,
  },
  {
    src: Village,
  },
  {
    src: Caneo,
  },
  {
    src: Volcano,
  },
  {
    src: Church,
  },
  {
    src: Towerls,
  },
  {
    src: Bicycle,
  },
  {
    src: Mosque,
  },
  {
    src: Sun,
  },
  {
    src: Child,
  },
  {
    src: Afric,
  },
  {
    src: Play,
  },
  {
    src: Cow,
  },
  {
    src: Elephant,
  },
  {
    src: Family,
  },
  {
    src: North,
  },
  {
    src: Architecture,
  },
  {
    src: Visitors,
  },
  {
    src: Populations,
  },
];
export default function Imgture() {
  return (
    <div className="pictures">
      <div className="pictures__btn">
        <Button content="Open Instagram" />
      </div>
      <div className="pictures__content">
        <div className="pictures__content__container">
          {test.map((data) => {
            return <img src={data.src} alt="" className="pic" />;
          })}
        </div>
      </div>
    </div>
  );
}
