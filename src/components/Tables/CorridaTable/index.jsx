import React from 'react'
import { Link } from 'react-router-dom';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table } from '../style'
//Componentes
import Tooltip from '../../Tooltip';

const CorridaTable = ({ obj, onClick }) => (
    <Table>
        <thead>
            <tr>
                <th>Nº da Corrida</th>
                <th>Motorista</th>
                <th>Passageiro</th>
                <th>Preço Total</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {obj.map(item => (
                <tr key={item.id}>
                    <th>{item.id}</th>
                    <th>
                        <Link to={`/motoristas/${item.motorista.id}/detalhes`}>
                            {item.motorista.nome}
                        </Link>
                    </th>
                    <th>
                        <Link to={`/passageiros/${item.passageiro.id}/detalhes`}>
                            {item.passageiro.nome}
                        </Link>
                    </th>
                    <th>R$ {Number(item.precoTotal)}</th>
                    <th>
                        <Tooltip displayText="Deletar corrida" onClick={()=>onClick(item.id)}>
                            <FontAwesomeIcon icon={faTimesCircle} color="red"/>
                        </Tooltip>
                    </th>
                </tr>
            ))}
        </tbody>
    </Table>
)

export default CorridaTable;