import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Tooltip from '../../Tooltip';
import { Table } from '../style'

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
                    <th>{item.motorista.nome}</th>
                    <th>{item.passageiro.nome}</th>
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