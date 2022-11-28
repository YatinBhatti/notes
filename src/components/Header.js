const Header=({handleToggleDark})=>{
    return(
        <div className="header">
            <h1>Notes</h1>
            <button onClick={()=>handleToggleDark((previousDarkMode)=>!previousDarkMode)} className="save">toggle mode</button>
        </div>
    )
}
export default Header;