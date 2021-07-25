import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Container, ImageProfile, ProfileInfo, Wrapper } from './style';

//Componentes
import Template from '../../components/Template';
import Title from '../../components/Title';
import { RedirectButton, FormButton } from '../../components/Button';

//APIs
import { getMotoristaPorId as serviceMotoristaPorId, serviceAtivarMotorista, serviceInativarMotorista } from '../../services/motorista'


function MotoristaDetalhes(props) {
    const [motorista, setMotorista] = useState({});
    const history = useHistory();

    const motoristaId = props.match.params.id

    async function getMotoristaPorId() {
        let mounted = true

        try {
            await serviceMotoristaPorId({ motoristaId }).then(res => {
                if (mounted) {
                    setMotorista(res.data)
                }
            })
        } catch (err) {
            history.push('/motoristas')
        }

        return () => mounted = false;
    }

    async function ativarMotorista() {
        await serviceAtivarMotorista({ motoristaId });
    }

    async function inativarMotorista() {
        await serviceInativarMotorista({ motoristaId });
    }

    useEffect(() => {
        getMotoristaPorId()
    }, [motorista])

    return (
        <Template>
            <Container>
                <ImageProfile>
                    <FontAwesomeIcon icon={faUser} width="10rem" height="10rem" className="profile-icon" />
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
                        <FormButton onClick={inativarMotorista}>
                            Inativar Motorista
                        </FormButton>
                        :
                        <FormButton onClick={ativarMotorista}>
                            Ativar Motorista
                        </FormButton>
                    }
                </Wrapper>
            </Container>
        </Template>
    )
}

export default MotoristaDetalhes;