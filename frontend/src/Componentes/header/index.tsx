 import logo from '../..//assets/img/logo.svg'
 import './style.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta"/>
                    <h1>DSMeta</h1>
                    <p>
                        Desenvolvido por
                        <a href="https://instagram.com/weslley_olli?igshid=YmMyMTA2M2Y=">@Weslley_olli</a>
                    </p>
            </div>
        </header>
    )
}

export default Header