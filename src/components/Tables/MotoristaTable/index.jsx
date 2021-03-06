import React from 'react'
import { Link } from 'react-router-dom'
import { Table, StatusIcon } from '../style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import Tooltip from '../../Tooltip'

const MotoristaTable = ({obj, onClick}) => (
    <Table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Data de Nascimento</th>
                <th>CPF</th>
                <th>Sexo</th>
                <th>Modelo do Carro</th>
                <th>Status</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {obj.map(item => (
                <tr key={item.id}>
                    <th><Link to={`/motoristas/${item.id}/detalhes`}>{item.nome}</Link></th>
                    <th>{item.dataNasc}</th>
                    <th>{item.cpf}</th>
                    <th>{item.sexo}</th>
                    <th>{item.modeloCarro}</th>
                    <th>
                        <Tooltip displayText={item.status ? "Ativo" : "Inativo"}>
                            <StatusIcon status={item.status} />
                        </Tooltip>
                    </th>
                    <th>
                        <Tooltip displayText="Deletar motorista" onClick={()=>onClick(item.id)}>
                            <FontAwesomeIcon icon={faTimesCircle} color="red"/>
                        </Tooltip>
                    </th>
                </tr>
            ))}
        </tbody>
    </Table>
)

export default MotoristaTable;