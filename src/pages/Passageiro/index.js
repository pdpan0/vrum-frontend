import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';

//Componentes
import PassageiroTable from '../../components/Tables/PassageiroTable';
import Template from '../../components/Template';
import Title from '../../components/Title';
import { RedirectButton } from '../../components/Button';
import MainContainer from '../../components/MainContainer';
//APIs
import { deletarPassageiro, listaPassageiros } from '../../services/passageiro';
import { CreateButtonWrapper } from '../Motorista/style';

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
    },[passageiros])

    const deletarPassageiroAsync = async (passageiroId) => {
        try{
            await deletarPassageiro(passageiroId)
            // window.location.reload();
        } catch(err) {
            alert('Não foi possível realizar está operação.')
        }
    }
    
    return (
        <Template>
            <Title>Passageiros</Title>
            <CreateButtonWrapper>
                <RedirectButton to="/passageiros/criar">
                    Criar novo Passageiro
                </RedirectButton>
            </CreateButtonWrapper>
            <MainContainer>
            {!passageiros.length 
                ? <h1>Ainda não foi cadastrado nenhum passageiro.</h1> 
                : <PassageiroTable obj={passageiros} onClick={deletarPassageiroAsync}/>}
            </MainContainer>
        </Template>
    )
}

export default Passageiro;