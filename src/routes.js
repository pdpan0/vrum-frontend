import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Rotas
import Landing from './pages/Landing'
import Corrida from './pages/Corrida'
import Motorista from './pages/Motorista'
import Passageiro from './pages/Passageiro'
import NotFound from './pages/NotFound'
import CadMotorista from './pages/Cadastros/CadMotorista'
import AtualizarMotorista from './pages/Atualizar/AtualizarMotorista'
import MotoristaDetalhes from './pages/MotoristaDetalhes'

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/corridas" component={Corrida} />
                <Route path="/passageiros" component={Passageiro} />
                <Route exact path="/motoristas" component={Motorista} />
                <Route path="/motoristas/criar" component={CadMotorista} />
                <Route path="/motoristas/:id/detalhes" component={MotoristaDetalhes} />
                <Route path="/motoristas/:id/atualizar/" component={AtualizarMotorista} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default AppRouter;