import style from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";

function Sidebar(){
    return(<div className={style.sidebar}>
        <Logo />
        <AppNav />

        <p>List of cities</p>

        <footer className={style.footer}>
            <p className={style.copyright}>&copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
        </footer>

    </div>)
}
export default Sidebar