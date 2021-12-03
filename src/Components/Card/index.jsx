import react from 'react'
import './styles.css';

export default function Card({ reversed, name, bio, photo }) {

    return (

        <div className="card-container">

            <div className="card-content">
                {reversed ?

                    <div className= "inline-content">
                        <div className="card-text">

                            <h2>Oie, Eu sou {name},</h2>
                            <h2>{bio}</h2>

                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                            <button>Testando</button>
                        </div>

                        <img src={photo} alt={`Foto de ${name}.`} />
                    </div>
                    :
                    <div className="inline-content">
                        <img src={photo} alt={`Foto de ${name}.`} />

                        <div className="card-text">

                            <h2>Oie, Eu sou {name},</h2>
                            <h2>{bio}</h2>

                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                            <button>Testando</button>
                        </div>

                    </div>
                }
            </div>
        </div>
    );
}