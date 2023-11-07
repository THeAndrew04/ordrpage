export default function Navbar(){
    return <nav className='nav'>
        <a href = "/" classname = "Orders"> <h1> Orders </h1> </a>
        <ul>
            <li>
                <a href="/Home"> <h3>Home </h3> </a>
            </li>
            <li>
                <a href="/Logout"> <h3> Logout </h3></a>
            </li>
        </ul>
    </nav>
}