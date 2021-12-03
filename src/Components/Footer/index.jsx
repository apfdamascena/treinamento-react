import react from 'react'
import './styles.css';
import { ReactComponent as Bubble } from '../../assets/bubble.svg';

export default function Footer() {

return(
    <>
        <div className="footer-all">
            <Bubble className="bubble-config"/>
        </div>
    </>
);
}