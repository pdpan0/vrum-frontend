import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ContainerWrapper } from './style';

//Componentes
import Template from '../../../components/Template';
import Title from '../../../components/Title'
import { Form, Input, Label } from '../../../components/Form';
import { FormButton } from '../../../components/Button';
//APIs
import { serviceCadastrarCorrida } from '../../../services/corrida';
import { getMotoristas } from '../../../services/motorista'
import { listaPassageiros as serviceListaPassageiros } from '../../../services/passageiro'
import Loading from '../../../components/Loading';



function CadCorrida() {
    const [loading, setLoading] = useState(false)
    const [listaMotoristas, setListaMotoristas] = useState([])
    const [listaPassageiros, setListaPassageiros] = useState([])
    const [passageiroSelecionado, setPassageiroSelecionado] = useState(0);
    const [motoristaSelecionado, setMotoristaSelecionado] = useState(0);
    const [precoTotal, setPrecoTotal] = useState(0);

    const history = useHistory();

    async function submitCorrida(e) {
        e.preventDefault();

        if (validarPrecoTotal(precoTotal) &&
            validarMotoristaSelecionado(motoristaSelecionado) &&
            validarPassageiroSelecionado(passageiroSelecionado)) {

            setLoading(true)

            let data = {
                "motoristaId": motoristaSelecionado,
                "passageiroId": passageiroSelecionado,
                "precoTotal": precoTotal
            };

            try {
                await serviceCadastrarCorrida.post('#', data)
                alert('Corrida criada com sucesso.')
                history.push("/corridas");
            } catch (err) {
                setLoading(false)
            }
        }
    }

    async function getMotoristasAsync() {
        await getMotoristas.get().then(res => setListaMotoristas(res.data))
    }

    async function getPassageirosAsync() {
        await serviceListaPassageiros.get().then(res => setListaPassageiros(res.data))
    }

    function validarMotoristaSelecionado(motoristaId) {
        if (motoristaId == 0) {
            alert('Escolha um motorista válido.')
            return false;
        }

        return true;
    }

    function validarPassageiroSelecionado(passageiroId) {
        if (passageiroId == 0) {
            alert('Escolha um passageiro válido.')
            return false;
        }

        return true
    }

    function validarPrecoTotal(preco) {
        let precoTotal = Number(preco)

        if (precoTotal <= 0.0) {
            alert('Preço não pode ser menor que 0')
            return false;
        } else {
            setPrecoTotal(precoTotal)
            return true;
        }
    }

    useEffect(() => {
        if (!loading) {
            try {
                setLoading(true)
                getMotoristasAsync()
                getPassageirosAsync()
            } catch (err) {
                setLoading(false)
            }
            setLoading(false)
        }
    }, [])

    return (
        <Template>
            <Loading isLoading={loading} />
            <Title>Crie sua corrida</Title>
            <Form onSubmit={submitCorrida}>
                <Label>
                    Selecione o motorista:<br />
                    <select onChange={(e) => setMotoristaSelecionado(Number(e.target.value))} required>
                        <option value="0">Escolha um motorista</option>
                        {!listaMotoristas.length
                            ? null :
                            listaMotoristas.map(item => item.status
                                ? <option key={item.id} value={item.id}>{item.nome}</option> 
                                : null)}
                    </select>
                </Label>
                <Label>
                    Selecione o passageiro:<br />
                    <select onChange={(e) => setPassageiroSelecionado(Number(e.target.value))} required>
                        <option value="0">Escolha um passageiro</option>
                        {!listaPassageiros.length
                            ? null
                            : listaPassageiros.map(item => <option key={item.id} value={item.id}>{item.nome}</option>)}
                    </select>
                </Label>
                <Label>
                    Preço Total:
                    <Input type="number"
                        value={precoTotal}
                        onChange={(e) => setPrecoTotal(Number(e.target.value))}
                        required />
                </Label>
                <FormButton type="submit">Cadastrar Corrida</FormButton>
            </Form>
        </Template>
    )
}

export default CadCorrida;