import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faUser } from '@fortawesome/free-solid-svg-icons'
import { ActionWrapper, Container, ImageProfile, ProfileInfo, TableWrapper, Wrapper } from './style';

//Componentes
import Template from '../../components/Template';
import Title from '../../components/Title';
import { FormButton } from '../../components/Button';

//APIs
import { getMotoristaPorId as serviceMotoristaPorId, serviceAtivarMotorista, serviceInativarMotorista } from '../../services/motorista'
import { serviceCorridasPorMotorista, serviceDeletarCorrida } from '../../services/corrida';
import CorridaTable from '../../components/Tables/CorridaTable';
import Loading from '../../components/Loading';


function MotoristaDetalhes(props) {

    const [loading, setLoading] = useState(false);
    const [motorista, setMotorista] = useState({});
    const [corridas, setCorridas] = useState({});

    const history = useHistory();

    const motoristaId = props.match.params.id

    async function getMotoristaPorId() {
        try {
            await serviceMotoristaPorId({ motoristaId }).then(res => {
                setMotorista(res.data)
            })
        } catch (err) {
            history.push('/motoristas')
        }
    }

    async function ativarMotoristaAsync() {
        setLoading(true)
        await serviceAtivarMotorista({ motoristaId });
        getMotoristaPorId()
        setLoading(false)
    }

    async function inativarMotoristaAsync() {
        setLoading(true);
        await serviceInativarMotorista({ motoristaId })
        getMotoristaPorId()
        setLoading(false)
    }

    async function getCorridasPorMotoristaAsync() {
        await serviceCorridasPorMotorista(motoristaId).then(res =>
            setCorridas(res.data)
        )
    }

    const deletarCorridaAsync = async (motoristaId) => {
        setLoading(true)
        try {
            await serviceDeletarCorrida(motoristaId)
            getCorridasPorMotoristaAsync()
        } catch (err) {
            alert('Não foi possível realizar está operação.')
        }
        setLoading(false)
    }

    useEffect(() => {
        if (!loading) {
            setLoading(true)
            getMotoristaPorId()
            getCorridasPorMotoristaAsync()
            setLoading(false)
        }
    }, [motorista, corridas])

    return (
        <Template>
            <Loading isLoading={loading} />
            <Container>
                <ImageProfile>
                    <FontAwesomeIcon icon={faUser} className="profile-icon" />
                </ImageProfile>

                <ProfileInfo>
                    <Wrapper>
                        <Title>{motorista.nome}</Title>
                        <FontAwesomeIcon icon={faCalendar} /> {motorista.dataNasc}<br />
                        <b>CPF:</b> {motorista.cpf}<br />
                        <b>Sexo:</b> {motorista.sexo}<br />
                        <b>Modelo do Carro:</b> {motorista.modeloCarro}<br />
                        <b>Status:</b> {motorista.status ? "Ativo" : "Inativo"}<br />
                    </Wrapper>
                </ProfileInfo>
                <ActionWrapper>
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
                </ActionWrapper>
                <TableWrapper>
                    {!corridas.length
                        ? <div>Este motorista ainda não tem nenhuma corrida.</div>
                        : <CorridaTable obj={corridas} onClick={deletarCorridaAsync} />}
                </TableWrapper>
            </Container>
        </Template>
    )
}

export default MotoristaDetalhes;