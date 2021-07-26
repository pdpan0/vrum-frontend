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
import Loading from '../../components/Loading';

function Corrida() {
    const [loading, setLoading] = useState(false)
    const [corridas, setCorridas] = useState([]);
    
    const history = useHistory();

    useEffect(() => {
        async function handleCorridas() {
            setLoading(true)
            try{
                await serviceCorridasRecentes.get().then(
                    res => setCorridas(res.data)
                );
            }catch (err) {
                setLoading(false)
                history.push('/')
            }
            setLoading(false)
        }

        if(!loading) {
            handleCorridas()
        }
    },[corridas])

    const deletarCorridasAsync = async (corridaId) => {
        setLoading(true)
        try{
            await serviceDeletarCorrida(corridaId)
            // window.location.reload();
        } catch(err) {
            alert('Não foi possível realizar está operação.')
            setLoading(false)
        }
        setLoading(false)
    }
    
    return (
        <Template>
            <Loading isLoading={loading} />
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