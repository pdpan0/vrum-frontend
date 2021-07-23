import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
//Componentes
import Template from '../../components/Template';
import { Block } from '../../components/Block/Block';
import { BlockContainerWrapper } from '../../components/Block/style';
import Title from '../../components/Title';
//Apis
import { motoristaCount } from '../../services/motorista';
import { passageiroCount } from '../../services/passageiro';
import { corridaCount } from '../../services/corrida';

function Landing() {
    
    const [counters, setCounters] = useState([])
    const history = useHistory();

    useEffect(()=>{
        async function handleDashboards() {
            let responseCounters = []
    
            try {
                await motoristaCount.get().then(
                        res => responseCounters.push(res.data)
                    ) 
                await passageiroCount.get().then(
                        res => responseCounters.push(res.data)
                    )
                await corridaCount.get().then(
                        res => responseCounters.push(res.data)
                    )
            } catch (err) {
                history.push('/')
            }
    
            setCounters(responseCounters)
        }

        handleDashboards()
    },[])

    return (
        <Template>
            <Title>Dashboard</Title>
            Clique em algum board para ver os detalhes.
            <BlockContainerWrapper>
                {counters.map(item => 
                    <Block key={item.nome} counter={item.total} name={item.nome} href={`/${item.nome}`}/>)}
            </BlockContainerWrapper>
        </Template>
    )
}

export default Landing;