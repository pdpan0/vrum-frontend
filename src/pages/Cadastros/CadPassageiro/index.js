import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

//Componentes
import Template from '../../../components/Template';
import Title from '../../../components/Title'
import { Form, Input, Label } from '../../../components/Form';

//APIs
import { cadastroPassageiro } from '../../../services/passageiro';
import { ContainerWrapper } from './style';
import { FormButton } from '../../../components/Button';
import Loading from '../../../components/Loading';

function CadPassageiro() {
    const [loading, setLoading] = useState(false)
    const [nome, setNome] = useState('');
    const [dataNasc, setDataNasc] = useState(new Date(2001,1,1));
    const [cpf, setCpf] = useState('');
    const [sexo, setSexo] = useState('');

    const history = useHistory();
    
    async function submitPassageiro(e) {
        e.preventDefault();

        setLoading(true)

        let data = {
            "nome": nome,
            "dataNasc": dataNasc,
            "cpf": cpf,
            "sexo": sexo
        };

        try {
            await cadastroPassageiro.post('#', data)
            alert('Passageiro criado com sucesso.')
            history.push("/passageiros");
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
            <Loading isLoading={loading}/>
            <Title>Conte mais sobre este Passageiro.</Title>
            <Form onSubmit={submitPassageiro}>
                <Label>
                    Nome do passageiro:<br/>
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
                <ContainerWrapper>
                Sexo:
                <Input id="sexo_m"
                    type="radio" 
                    value="M"
                    name="sexo"
                    onChange={(e) => setSexo(e.target.value)}
                    required />
                <Label htmlFor="sexo_m">Masculino</Label>
                <Input id="sexo_f"
                    type="radio" 
                    value="F"
                    name="sexo"
                    onChange={(e) => setSexo(e.target.value)}
                    required />
                <Label htmlFor="sexo_f">Feminino</Label>
                </ContainerWrapper>
                <FormButton type="submit">Cadastrar Passageiro</FormButton>
            </Form>
        </Template>
    )
}

export default CadPassageiro;