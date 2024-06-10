import { Route } from 'react-router-dom'
import Home from '../../pages/gestao_cursos/home/Home'
import HomeCursos from '../../pages/gestao_cursos/curso/Home'
import HomeTurmas from '../../pages/gestao_cursos/turma/Home'

/**
 * @description Rotas do módulo de Gestão de Cursos.
 *
 * @author @lucas0headshot
 *
 * @returns {React.JSX.Element}
 */
const Routes = () => {
    return (
        <div>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cursos" element={<HomeCursos />}></Route>
            <Route path="/turmas" element={<HomeTurmas />}></Route>
        </div>
    )
}

export default Routes