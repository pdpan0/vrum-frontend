import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Rotas
import Landing from './pages/Landing'
import Corrida from './pages/Corrida'
import Motorista from './pages/Motorista'
import Passageiro from './pages/Passageiro'
import NotFound from './pages/NotFound'

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/corridas" component={Corrida} />
                <Route path="/motoristas" component={Motorista} />
                <Route path="/passageiros" component={Passageiro} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default AppRouter;