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
import Loading from '../../components/Loading';

function Landing() {
    const [loading, setLoading] = useState(false)
    const [counters, setCounters] = useState([])
    const history = useHistory();

    useEffect(()=>{
        async function handleDashboards() {
            setLoading(true)
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
                setLoading(false)
                history.push('/')
            }
    
            setCounters(responseCounters)
            setLoading(false);
        }

        if (!loading) {
            handleDashboards()
        }

    },[])

    return (
        <Template>
            <Loading isLoading={loading}/>
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