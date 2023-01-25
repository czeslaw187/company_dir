import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap'
import Link from "next/link";

function NavBar() {
    const [isOpen,setIsOpen] = useState(false)
    const toggle =()=> setIsOpen(!isOpen)
    const categories = ['employees','departments','locations']
    return ( 
        <Navbar expand={'md'} className="w-full h-[5rem] border-2 rounded-t-md border-slate-300 bg-gradient-to-br from-slate-200 to-slate-100 flex flex-row justify-between items-center">
                <NavbarBrand href="/"><h1 className="text-2xl">Company Directory</h1></NavbarBrand>
                <NavbarToggler onClick={toggle} className="ml-auto mr-1"/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar className="bg-gradient-to-br from-slate-200 to-slate-100 w-3/12 md:w-6/12 ml-auto">
                        {
                            categories && categories.map((el,id)=>{
                                return (
                                    <NavItem key={id} className="ml-auto mr-3 my-3 hover:underline">
                                        <Link href={`/${el ==='employees' ? '' : el}`} style={{textDecoration: 'none', color: 'black'}}>
                                            {el}
                                        </Link>
                                    </NavItem>
                                )
                            })
                        }
                    </Nav>
                </Collapse>
            </Navbar>
     );
}

export default NavBar;

