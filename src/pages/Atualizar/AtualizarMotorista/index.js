import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

//Componentes
import Template from '../../../components/Template';
import Title from '../../../components/Title'
import { Form, Input, Label } from '../../../components/Form';

//APIs
import { atualizarMotorista, getMotoristaPorId as serviceMotoristaPorId } from '../../../services/motorista';
import { ContainerWrapper } from './style';
import { FormButton } from '../../../components/Button';

function AtualizarMotorista(props) {
    const [nome, setNome] = useState('');
    const [dataNasc, setDataNasc] = useState(new Date(2001,1,1));
    const [cpf, setCpf] = useState('');
    const [sexo, setSexo] = useState('');
    const [modeloCarro, setModeloCarro] = useState('');
    const [status, setStatus] = useState(true);

    const history = useHistory();

    
    const motoristaId = props.match.params.id

    async function getMotoristaPorId() {
        let mounted = true
        try{
            await serviceMotoristaPorId({motoristaId}).then(res => {
                if (mounted) {
                    setNome(res.data.nome)
                    setDataNasc(res.data.dataNasc)
                    setCpf(res.data.cpf)
                    setSexo(res.data.sexo)
                    setModeloCarro(res.data.modeloCarro)
                    setStatus(res.data.status)
                }
            })
        } catch(err) {
            history.push('/motoristas')
        }
        
        return () => mounted = false;
    }
    
    async function submitMotorista(e) {
        e.preventDefault();

        let data = {
            "nome": nome,
            "dataNasc": dataNasc,
            "cpf": cpf,
            "sexo": sexo,
            "modeloCarro": modeloCarro,
            "status": status
        };

        try {
            await atualizarMotorista.post('#', data)
            history.push("/motoristas");
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        getMotoristaPorId()
    }, [])

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
                
                <Label>
                    Sexo:
                    <ContainerWrapper>
                        <Input type="radio" 
                            name="sexo"
                            value="M"
                            onChange={(e) => setSexo(e.target.value)}
                            required
                            // {...sexo == 'M' ? 'checked' : ''}
                        />Masculino
                        <Input type="radio"
                            name="sexo"
                            value="F"
                            onChange={(e) => setSexo(e.target.value)}
                            required
                            // {...sexo == 'F' ? 'checked' : ''}
                        />Feminino
                    </ContainerWrapper>
                </Label>
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

export default AtualizarMotorista;