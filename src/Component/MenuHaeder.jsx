function MenuHeader(){
    return(
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
             <a className="navbar-brand" href="/">React Tutorial </a>

               <ul className="navbar-nav">
                <li className="nav-item">
                   <a className="nav-link">Home</a>
                </li>
                  <li className="nav-item">
                   <a className="nav-link">About</a>
                </li>
                  <li className="nav-item">
                   <a className="nav-link">Contact</a>
                </li>

               </ul>
          </div>
       </nav>
    )
}
export default MenuHeader