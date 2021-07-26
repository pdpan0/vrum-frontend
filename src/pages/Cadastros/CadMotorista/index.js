import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

//Componentes
import Template from '../../../components/Template';
import Title from '../../../components/Title'
import { Form, Input, Label } from '../../../components/Form';
//APIs
import { cadastroMotorista } from '../../../services/motorista';
import { ContainerWrapper } from './style';
import { FormButton } from '../../../components/Button';
import Loading from '../../../components/Loading';

function CadMotorista() {
    const [loading, setLoading] = useState(false)
    const [nome, setNome] = useState('');
    const [dataNasc, setDataNasc] = useState(new Date(2001,1,1));
    const [cpf, setCpf] = useState('');
    const [sexo, setSexo] = useState('');
    const [modeloCarro, setModeloCarro] = useState('');
    const [status,] = useState(true);

    const history = useHistory();
    
    async function submitMotorista(e) {
        e.preventDefault();

        setLoading(true)

        let data = {
            "nome": nome,
            "dataNasc": dataNasc,
            "cpf": cpf,
            "sexo": sexo,
            "modeloCarro": modeloCarro,
            "status": status
        };

        try {
            await cadastroMotorista.post('#', data)
            alert('Motorista criado com sucesso.')
            history.push("/motoristas");
        } catch(err) {
            setLoading(false)
        }
    }

    function validarDataNasc(data) {
        let dateInMs = new Date(data).getTime();
        if(dateInMs > Date.now()) {
            alert('Data de nascimento não pode ser maior que a data atual.')
        } else {
            setDataNasc(data)
        }
    }

    async function validarCpf(cpf) {
        //TODO: Validar CPF
        setCpf(cpf)
    }

    return (
        <Template>
            <Loading isLoading={loading} />
            <Title>Conte mais sobre este Motorista.</Title>
            <Form onSubmit={submitMotorista}>
                <Label>
                    Nome do motorista:<br/>
                    <Input type="text" 
                       value={nome}
                       onChange={(e) => setNome(e.target.value)}
                       required />
                </Label>
                <Label>
                    Data de Nascimento:
                    <Input type="date" 
                       value={dataNasc}
                       onChange={(e) => validarDataNasc(e.target.value)}
                       required />
                </Label>
                <Label>
                    CPF:
                    <Input type="text" 
                       value={cpf}
                       onChange={(e) => validarCpf(e.target.value)}
                       required />
                </Label>
                Sexo:
                <ContainerWrapper>
                    <Label>
                        <Input type="radio" 
                            value="M"
                            name="sexo"
                            onChange={(e) => setSexo(e.target.value)}
                            required />Masculino
                    </Label>
                    <Label>
                        <Input type="radio" 
                            value="F"
                            name="sexo"
                            onChange={(e) => setSexo(e.target.value)}
                            required />Feminino
                    </Label>
                </ContainerWrapper>
                
                <Label>
                    Modelo do Carro:
                    <Input type="text" 
                       value={modeloCarro}
                       onChange={(e) => setModeloCarro(e.target.value)}
                       required />
                </Label>
                <FormButton type="submit">Cadastrar Motorista</FormButton>
            </Form>
        </Template>
    )
}

export default CadMotorista;