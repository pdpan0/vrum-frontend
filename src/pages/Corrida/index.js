import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';

//Componentes
import CorridaTable from '../../components/Tables/CorridaTable';
import Template from '../../components/Template';
import Title from '../../components/Title';
import { RedirectButton } from '../../components/Button';
import MainContainer from '../../components/MainContainer';
//APIs

function Corrida() {
    const [corridas, setCorridas] = useState([]);
    
    const history = useHistory();

    useEffect(() => {
        async function handleCorridas() {
            //TODO: API para busca das corridas
        }
        handleCorridas()
    },[])
    
    return (
        <Template>
            <Title>Corridas</Title>
            <MainContainer>
                <RedirectButton href="/criar">Criar nova Corrida</RedirectButton>
            {!corridas.length 
                ? <h1>Ainda não foi cadastrado nenhuma corrida.</h1> 
                : <CorridaTable obj={corridas} />}
            </MainContainer>
        </Template>
    )
}

export default Corrida;