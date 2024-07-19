import Footer from "./components/footer/footer";
import Header from "./components/header/header";    
import Hook1 from "./components/hook1/Hook1";
import Hook2 from "./components/hook1/Hook2";
import Hook3 from "./components/hook1/Hook3";
import { Main1 } from "./components/main/main";
import { Main2 } from "./components/main/main";

function App(){
    const name= "meo";
    return(
        
        <div>
            <Header/> 
            <Main1/>
            <Main2/>
            <Footer/>
            <Hook1/>
            <Hook2/>
            <Hook3/>
        </div>
    )
}

export default App;