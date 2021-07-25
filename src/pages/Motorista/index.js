import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import { CreateButtonWrapper } from './style';

//Componentes
import MotoristaTable from '../../components/Tables/MotoristaTable';
import Template from '../../components/Template';
import Title from '../../components/Title';
import { RedirectButton } from '../../components/Button';
import MainContainer from '../../components/MainContainer';

//APIs
import { listaMotoristas, deletarMotorista } from '../../services/motorista';

function Motorista() {
    const [motoristas, setMotoristas] = useState([]);
    
    const history = useHistory();

    const deletarMotoristaAsync = async (motoristaId) => {
        try{
            await deletarMotorista(motoristaId)
            window.location.reload();
        } catch(err) {
            alert('Não foi possível realizar está operação.')
        }
    }

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
            <CreateButtonWrapper>
                <RedirectButton href="/motoristas/criar">
                    Criar novo Motorista
                </RedirectButton>
            </CreateButtonWrapper>
            <MainContainer>
                {!motoristas.length 
                    ? <div>Ainda não foi cadastrado nenhum motorista.</div> 
                    : <MotoristaTable obj={motoristas} onClick={deletarMotoristaAsync} />}
            </MainContainer>
        </Template>
    )
}

export default Motorista;