import react, {useState, useEffect} from 'react';
import './App.css';
import { API } from './api.js'

import Card from './Components/Card';
import Header from './Components/Header';


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
      <Header />
      {githubUsers.map((user) => {
        return <Card reversed/>
      })}
    </>
  );
}

export default App;
