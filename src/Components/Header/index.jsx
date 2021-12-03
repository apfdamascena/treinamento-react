import react from 'react';
import './styles.css';

import { ReactComponent as Logo } from '../../assets/Logo.svg';

export default function Header() {

  return (
    <div className="header">

      <Logo />

      <ul className="nameList">
        <li className="nameListItem">Alex</li>
        <li className="nameListItem">Pedro</li>
        <li className="nameListItem">Juliana</li>
      </ul>

    </div>
  );
}