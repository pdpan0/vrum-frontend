import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Table } from '../style'
import { Link } from 'react-router-dom';
//Componentes
import Tooltip from '../../Tooltip';

const PassageiroTable = ({obj, onClick}) => (
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
                    <th><Link to={`/passageiros/${item.id}/detalhes`}>{item.nome}</Link></th>
                    <th>{item.dataNasc}</th>
                    <th>{item.cpf}</th>
                    <th>{item.sexo}</th>
                    <th>
                        <Tooltip displayText="Deletar passageiro" onClick={()=>onClick(item.id)}>
                            <FontAwesomeIcon icon={faTimesCircle} color="red"/>
                        </Tooltip>
                    </th>
                </tr>
            ))}
        </tbody>
    </Table>
)

export default PassageiroTable;