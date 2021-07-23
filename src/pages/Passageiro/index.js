import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';

//Componentes
import PassageiroTable from '../../components/Tables/PassageiroTable';
import Template from '../../components/Template';
import Title from '../../components/Title';
import { RedirectButton } from '../../components/Button';
import MainContainer from '../../components/MainContainer';
//APIs
import { listaPassageiros } from '../../services/passageiro';

function Passageiro() {
    const [passageiros, setPassageiros] = useState([]);
    
    const history = useHistory();

    useEffect(() => {
        async function handlePassageiros() {
            try{
                await listaPassageiros.get().then(
                    res => setPassageiros(res.data)
                );
            }catch (err) {
                history.push('/')
            }
        }

        handlePassageiros()
    },[])
    
    return (
        <Template>
            <Title>Passageiros</Title>
            <MainContainer>
                <RedirectButton href="/criar">Criar novo Passageiro</RedirectButton>
            {!passageiros.length 
                ? <h1>Ainda não foi cadastrado nenhum passageiro.</h1> 
                : <PassageiroTable obj={passageiros} />}
            </MainContainer>
        </Template>
    )
}

export default Passageiro;