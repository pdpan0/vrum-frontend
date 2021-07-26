import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import { CreateButtonWrapper } from './style';

//Componentes
import CorridaTable from '../../components/Tables/CorridaTable';
import Template from '../../components/Template';
import Title from '../../components/Title';
import { RedirectButton } from '../../components/Button';
import MainContainer from '../../components/MainContainer';

//APIs
import { serviceCorridasRecentes, serviceDeletarCorrida } from '../../services/corrida';

function Corrida() {
    const [corridas, setCorridas] = useState([]);
    
    const history = useHistory();

    useEffect(() => {
        async function handleCorridas() {
            try{
                await serviceCorridasRecentes.get().then(
                    res => setCorridas(res.data)
                );
            }catch (err) {
                history.push('/')
            }
        }

        handleCorridas()
    },[corridas])

    const deletarCorridasAsync = async (corridaId) => {
        try{
            await serviceDeletarCorrida(corridaId)
            // window.location.reload();
        } catch(err) {
            alert('Não foi possível realizar está operação.')
        }
    }
    
    return (
        <Template>
            <Title>Corridas</Title>
            <CreateButtonWrapper>
                <RedirectButton to="/corridas/criar">
                    Criar nova Corrida
                </RedirectButton>
            </CreateButtonWrapper>
            <MainContainer>
                {!corridas.length 
                    ? <div>Ainda não foi cadastrado nenhuma corrida.</div> 
                    : <CorridaTable obj={corridas} onClick={deletarCorridasAsync} />}
            </MainContainer>
        </Template>
    )
}

export default Corrida;