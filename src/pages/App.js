import { useState } from 'react';
import github from '../assets/github.png';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';
import Button from '../components/Button';
import api from '../services/api';
import { Notify } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.7.min.css';
import 'notiflix/dist/notiflix-3.2.7.min.js';


function App() {

  const [repositories, setRepositories] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('');
  const handleSearchRepo = async () => {


    await api.get(`repos/${currentRepo}`)
      .then(function (response) {
        const isExist = repositories.find(repo => repo.id === response.data.id);
        if (!isExist) {
          setRepositories(prev => [...prev, response.data]);
          setCurrentRepo('');
        } else {
          Notify.warning('Repositório já existe!', { timeout: 3000 });
        }
      }).catch(function (error) {
        if (error.response.request.status === 403) {
          Notify.failure(`Opps! Ocorreu um problema, essa é a resposta da API:\n ${error.response.data.message}`, { timeout: 5000 });
        } else if (error.response.request.status === 404) {
          Notify.failure('Repositório não encontrado', { timeout: 5000 });
        } else {
          Notify.failure('Opps! ocorreu um erro inesperado!', { timeout: 5000 });

          console.log(error);
        }
      });

  }

  const handleRemoverRepo = (id) => {
    setRepositories(repositories.filter(item => item.id !== id));
  }


  return (
    <div className="App">
      <Container>
        <img width={72} height={72} src={github} alt="logo do github" />
        <Input value={currentRepo} onChange={e => setCurrentRepo(e.target.value)} />
        <Button onClick={handleSearchRepo} />
        {repositories.map(repo => <ItemRepo repo={repo} onRemove={e => { handleRemoverRepo(repo.id); e.preventDefault(); }} />)}
      </Container>
    </div>
  );
}

export default App;
