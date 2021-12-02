import react from 'react'
import './styles.css'; 

export default function Card({reversed}){

    return (

        <div className="card-container">

            <div className= "card-content">
                {reversed ? 
                    <h2>oi</h2> : <h2>opa</h2>}    
                </div>
        </div>
    );
}