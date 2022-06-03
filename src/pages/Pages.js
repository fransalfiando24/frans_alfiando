import Home from './Home'
import About from './About'
import Projects from './Projects'
import ProjectDetail from './ProjectDetail'
import Contact from './Contact'
import { Route, Routes} from 'react-router-dom';

function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/projectDetail/:id" element={<ProjectDetail/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}

export default Pages
