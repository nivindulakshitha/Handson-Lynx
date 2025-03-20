import { root } from '@lynx-js/react'
import { MemoryRouter, Routes, Route } from 'react-router'

import { App } from './screens/App.jsx'
import Splash from './screens/Splash.jsx'

root.render(
    <MemoryRouter>
        <Routes>
            <Route path='/' element={<Splash />} />
            <Route path='/app' element={<App />} />
        </Routes>
    </MemoryRouter>
);

if (import.meta.webpackHot) {
    import.meta.webpackHot.accept()
}
