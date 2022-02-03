import "../styles/nav.css"

export default function NavigationBar(){
    return <div>
        <header>
            <nav className="nav">
                <p>
                    <img className="left" src="" alt="icon"/>
                    <span className="home right">Home</span>
                    <span className="cart right">Cart</span>
                </p>
            </nav>
        </header>     
    </div>
}