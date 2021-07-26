import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Container, ImageProfile, ProfileInfo, Wrapper } from './style';

//Componentes
import Template from '../../components/Template';
import Title from '../../components/Title';
import { FormButton } from '../../components/Button';

//APIs
import { getMotoristaPorId as serviceMotoristaPorId, serviceAtivarMotorista, serviceInativarMotorista } from '../../services/motorista'
import { serviceCorridasPorMotorista, serviceDeletarCorrida } from '../../services/corrida';
import CorridaTable from '../../components/Tables/CorridaTable';


function MotoristaDetalhes(props) {
    const [motorista, setMotorista] = useState({});
    const [corridas, setCorridas] = useState({});
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const motoristaId = props.match.params.id

    async function getMotoristaPorId() {
        setLoading(true)

        try {
            await serviceMotoristaPorId({ motoristaId }).then(res => {
                setMotorista(res.data)
            })
        } catch (err) {
            history.push('/motoristas')
        }

        setLoading(false)
    }

    async function ativarMotoristaAsync() {
        setLoading(true)
        await serviceAtivarMotorista({ motoristaId });
        window.location.reload();
        setLoading(false)
    }

    async function inativarMotoristaAsync() {
        setLoading(true);
        await serviceInativarMotorista({ motoristaId });
        window.location.reload();
        setLoading(false)
    }

    async function getCorridasPorMotoristaAsync() {
        setLoading(true);
        await serviceCorridasPorMotorista(motoristaId).then(res =>
            setCorridas(res.data)
        )
        setLoading(false);
    }

    const deletarCorridaAsync = async (motoristaId) => {
        setLoading(true)
        try{
            await serviceDeletarCorrida(motoristaId)
            // window.location.reload();
        } catch(err) {
            alert('Não foi possível realizar está operação.')
        }
        setLoading(false)
    }

    useEffect(() => {
        if (!loading) {
            getMotoristaPorId()
            getCorridasPorMotoristaAsync()
        }
    }, [motorista, corridas])

    return (
        <Template>
            <Container>
                <ImageProfile>
                    <FontAwesomeIcon icon={faUser} className="profile-icon" />
                </ImageProfile>
                <Wrapper>
                    <ProfileInfo>
                        <Title>{motorista.nome}</Title>
                        {motorista.dataNasc}<br />
                        {motorista.cpf}<br />
                        {motorista.sexo}<br />
                        {motorista.modeloCarro}<br />
                        {motorista.status ? "Ativo" : "Inativo"}<br />
                    </ProfileInfo>
                    {motorista.status
                        ?
                        <FormButton onClick={inativarMotoristaAsync}>
                            Inativar Motorista
                        </FormButton>
                        :
                        <FormButton onClick={ativarMotoristaAsync}>
                            Ativar Motorista
                        </FormButton>
                    }
                </Wrapper>
                {!corridas.length
                    ? <h3>Este motorista ainda não tem nenhuma corrida.</h3>
                    : <CorridaTable obj={corridas}onClick={deletarCorridaAsync} />}
            </Container>
        </Template>
    )
}

export default MotoristaDetalhes;