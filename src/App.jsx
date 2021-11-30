import './App.css';
import {API} from './api.js'
import react, {useState, useEffect} from 'react';


function App() {
  const [githubUsers, setGithubUsers] = useState([]);

  async function getDataFromGithub() {

    const users = ['phsb5321', 'Juliana-serafim', 'apfdamascena']; 
    const receivedFromGithub = [];

    for(const user of users){
      await API.get(`/${user}`).then((response) => {
        const {data} = response;
        receivedFromGithub.push(data);
      })
    }

    setGithubUsers(receivedFromGithub);
  }

  useEffect(() => {
    getDataFromGithub();
  }, [])

  return (
    <>
      {githubUsers.map((user) => {
        return <h2 key={user.login}>{user.login}</h2>
      })}
    
    </>
  );
}

export default App;
