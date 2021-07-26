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
import { passageiroPorId } from '../../services/passageiro'
import { serviceCorridasPorPassageiro, serviceDeletarCorrida } from '../../services/corrida';
import CorridaTable from '../../components/Tables/CorridaTable';
import Loading from '../../components/Loading';


function PassageiroDetalhes(props) {

    const [loading, setLoading] = useState(false);
    const [passageiro, setPassageiro] = useState({});
    const [corridas, setCorridas] = useState({});

    const history = useHistory();

    const passageiroId = props.match.params.id

    async function getPassageiroPorId() {
        setLoading(true)

        try {
            await passageiroPorId(passageiroId).then(res => {
                setPassageiro(res.data)
            })
        } catch (err) {
            history.push('/passageiros')
        }

        setLoading(false)
    }

    async function getCorridasPorPassageiroAsync() {
        setLoading(true);
        await serviceCorridasPorPassageiro(passageiroId).then(res =>
            setCorridas(res.data)
        )
        setLoading(false);
    }

    const deletarCorridaAsync = async (passageiroId) => {
        setLoading(true)
        try {
            await serviceDeletarCorrida(passageiroId)
            window.location.reload();
        } catch (err) {
            alert('Não foi possível realizar está operação.')
        }
        setLoading(false)
    }

    useEffect(() => {
        if (!loading) {
            getPassageiroPorId()
            getCorridasPorPassageiroAsync()
        }
    }, [passageiro])

    return (
        <Template>
            <Loading isLoading={loading} />
            <Container>
                <ImageProfile>
                    <FontAwesomeIcon icon={faUser} className="profile-icon" />
                </ImageProfile>

                <ProfileInfo>
                    <Wrapper>
                        <Title>{passageiro.nome}</Title>
                        <FontAwesomeIcon icon={faCalendar} /> {passageiro.dataNasc}<br />
                        <b>CPF:</b> {passageiro.cpf}<br />
                        <b>Sexo:</b> {passageiro.sexo}<br />
                    </Wrapper>
                </ProfileInfo>
                <TableWrapper>
                    {!corridas.length
                        ? <h3>Este passageiro ainda não tem nenhuma corrida.</h3>
                        : <CorridaTable obj={corridas} onClick={deletarCorridaAsync} />}
                </TableWrapper>
            </Container>
        </Template>
    )
}

export default PassageiroDetalhes;