import Nav from './Nav'
import About from './About'
import Login from './Login'
function Home(){
    let bol=true;
    return(
        <>
     <Nav/>
     <Login/>
        <About/>
        </>
    )
}

export default Home