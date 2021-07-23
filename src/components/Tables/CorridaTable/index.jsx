import React from 'react'
import { Table } from '../style'

const CorridaTable = ({ obj }) => (
    <Table>
        <thead>
            <tr>
                <th>Nº da Corrida</th>
                <th>Motorista</th>
                <th>Passageiro</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {obj.map(item => (
                <tr key={item.id}>
                    <th>{item.id}</th>
                    <th>{item.motorista.nome}</th>
                    <th>{item.passageiro.nome}</th>
                    <th>{item.precoTotal}</th>
                    <th></th>
                </tr>
            ))}
        </tbody>
    </Table>
)

export default CorridaTable;