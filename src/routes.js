import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Rotas
import Home from './pages/Home'

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    )
}

export default AppRouter;