import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home'
import Categoria from './pages/Categoria'
import Lancamento from './pages/Lancamento'

const Routes = () => (
    <BrowserRouter>
        <Route exact path='/' component={Home} />
        <Route exact path='/categoria' component={Categoria} />
        <Route exact path='/categoria/:id' component={Categoria} />
        <Route exact path='/lancamento' component={Lancamento} />
    </BrowserRouter>
)

export default Routes