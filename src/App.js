import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Hook1 from "./components/hook1/Hook1";
import Hook2 from "./components/hook1/Hook2";
import Hook3 from "./components/hook1/Hook3";
import Hook4 from "./components/hook1/Hook4";
import { Main1 } from "./components/main/main";
import { Main2 } from "./components/main/main";
import img1 from "./logo192.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from "./components/hook1/Product";
import Products from "./components/hook1/Products";
import Nav1 from "./components/hook1/Nav1";
import Header1 from "./components/hook1/Header1";
import Products1 from "./components/hook1/Products1";

import Hook5 from "./components/hook1/Hook5";
import "./style.css"
import Students from "./components3/Students";
import Hook7 from "./components/hook1/Hook7";
import { useState } from "react";
import API1 from "./components/hook1/API1";
import Hook11 from "./components/hook1/Hook11";
function App(){
    const name= "meo";
    const [show,setShow] = useState(true)
    return(
        
        <div >
            {/* /* <img src={img1}/>
            <Nav1/>
            <Header/> 
            <Main1/>
            <Main2/>
            <Footer/>
            <Hook1/>
            <Hook2/>
            <Hook3/>
            <Hook4/>
            <Products/>  */}
            {/* <buttons1/>
            <Products1/> */}
            {/* <Hook5/> */}
            
            {/* <Students/> */}
            {/* {
                show?<Hook7/> : "Not show hook7"    
            }
            <button onClick={()=>setShow(!show)}>Show</button> */}

            {/* <API1/> */}

            {/* {
                show? <Hook11/>:"Not Show Hook11"
            }
            <button onClick={()=>setShow(!show)}>Show</button> */}

            <Students/>
        </div>
    )
}

export default App;