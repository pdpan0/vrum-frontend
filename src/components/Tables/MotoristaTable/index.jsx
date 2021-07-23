import React from 'react'
import { Table, StatusIcon } from '../style'
import Tooltip from '../../Tooltip'

const MotoristaTable = ({obj}) => (
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
                    <th>{item.nome}</th>
                    <th>{item.dataNasc}</th>
                    <th>{item.cpf}</th>
                    <th>{item.sexo}</th>
                    <th>{item.modeloCarro}</th>
                    <th>
                        <Tooltip displayText={item.status ? "Ativo" : "Inativo"}>
                            <StatusIcon status={item.status} />
                        </Tooltip>
                    </th>
                    <th></th>
                </tr>
            ))}
        </tbody>
    </Table>
)

export default MotoristaTable;