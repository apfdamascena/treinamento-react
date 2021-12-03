import react, { useEffect } from 'react'
import './styles.css';

import { ReactComponent as IconLinkedin } from '../../assets/Linkedin.svg';
import { ReactComponent as IconGithub } from '../../assets/icongithub.svg';

export default function Card({name, bio, photo, login }) {

    function openGithubOfUser() {
        const url = `https://github.com/${login}`
        window.open(url);
    }
    useEffect(() => {
        console.log(login);
    })

    return (

        <div className="card-container">

            <div className="card-content">
                <div className="inline-content">
                    <div className="card-text">

                        <h2>Oie, Eu sou {name}, Software Engineer</h2>
                        <p>{bio}</p>
                        
                        <div className="icons">
                            <IconGithub id="iconSize" onClick = { () =>  {
                                openGithubOfUser();
                            }}/>
                        </div>
                        
                    </div>

                    <img src={photo} alt={`Foto de ${name}.`} />
                </div>
            </div>
        </div>
    );
}