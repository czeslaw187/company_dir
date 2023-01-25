import NavBar from "./Navbar";

function Layout({children}) {
    return ( 
        <>  
            <NavBar />
            <div className="max-w-screen min-h-screen bg-gradient-to-br from-slate-400 to-gray-50">
                {children}
            </div>
        </>
     );
}

export default Layout;