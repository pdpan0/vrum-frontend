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
import { getMotoristas, deletarMotorista } from '../../services/motorista';
import Loading from '../../components/Loading';

function Motorista() {
    const [loading, setLoading] = useState(false)
    const [motoristas, setMotoristas] = useState([]);
    
    const history = useHistory();

    useEffect(() => {
        async function handleMotoristas() {
            setLoading(true)
            try{
                await getMotoristas.get().then(
                    res => setMotoristas(res.data)
                );
            }catch (err) {
                setLoading(false)
                history.push('/')
            }
            setLoading(false)
        }

        if(!loading) {
            handleMotoristas()
        }
    },[motoristas])

    const deletarMotoristaAsync = async (motoristaId) => {
        setLoading(true)
        try{
            await deletarMotorista(motoristaId)
            // window.location.reload();
        } catch(err) {
            setLoading(false)
            alert('Não foi possível realizar está operação.')
        }
        setLoading(false)
    }
    
    return (
        <Template>
            <Loading isLoading={loading} />
            <Title>Motorista</Title>
            <CreateButtonWrapper>
                <RedirectButton to="/motoristas/criar">
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