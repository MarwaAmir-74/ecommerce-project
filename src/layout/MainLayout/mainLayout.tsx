import { Outlet } from 'react-router-dom'
import Footer from '../../component/shared/Footer/Footer'
import Header from '../../component/shared/Header/Header'
import style from './/style.module.css'
const {container ,wrapper} = style
function MainLayout() {
  return (
    <div className={container}>
        <Header/>
        <div className={wrapper}>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default MainLayout