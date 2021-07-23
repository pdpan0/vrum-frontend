import React from 'react'
import { Table } from '../style'

const PassageiroTable = ({ obj }) => (
    <Table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Data de Nascimento</th>
                <th>CPF</th>
                <th>Sexo</th>
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
                    <th></th>
                </tr>
            ))}
        </tbody>
    </Table>
)

export default PassageiroTable;