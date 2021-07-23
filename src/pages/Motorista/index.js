import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';

//Componentes
import MotoristaTable from '../../components/Tables/MotoristaTable';
import Template from '../../components/Template';
import Title from '../../components/Title';
import { RedirectButton } from '../../components/Button';
import MainContainer from '../../components/MainContainer';

//APIs
import { listaMotoristas } from '../../services/motorista';

function Motorista() {
    const [motoristas, setMotoristas] = useState([]);
    
    const history = useHistory();

    useEffect(() => {
        async function handleMotoristas() {
            try{
                await listaMotoristas.get().then(
                    res => setMotoristas(res.data)
                );
            }catch (err) {
                history.push('/')
            }
        }

        handleMotoristas()
    },[])
    
    return (
        <Template>
            <Title>Motorista</Title>
            <MainContainer>
                <RedirectButton href="/criar">Criar novo Motorista</RedirectButton>
            {!motoristas.length 
                ? <h1>Ainda não foi cadastrado nenhum motorista.</h1> 
                : <MotoristaTable obj={motoristas} />}
            </MainContainer>
        </Template>
    )
}

export default Motorista;