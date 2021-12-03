import react, {useState, useEffect} from 'react';
import './App.css';
import { API } from './api.js'

import Card from './Components/Card';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  const [githubUsers, setGithubUsers] = useState([]);

  async function getDataFromGithub() {

    const users = ['apfdamascena', 'Juliana-serafim', 'phsb5321']; 
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

      <Header/>
      
      {githubUsers.map((user, index) => {
        return <Card name={user.name} bio = {user.bio} photo={user.avatar_url} login= {user.login} />
      })}

      <Footer/>

    </>
  );
}

export default App;
