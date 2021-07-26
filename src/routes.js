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
import CadPassageiro from './pages/Cadastros/CadPassageiro'
import CadCorrida from './pages/Cadastros/CadCorrida'

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/corridas" component={Corrida} />
                <Route path="/corridas/criar" component={CadCorrida} />
                <Route exact path="/passageiros" component={Passageiro} />
                <Route path="/passageiros/criar" component={CadPassageiro} />
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