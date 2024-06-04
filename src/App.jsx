import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import NoPage from './pages/NoPage.jsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<NoPage errorCode={404} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
