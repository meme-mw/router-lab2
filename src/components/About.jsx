import Nav from './Nav'
function About(){
    return(
        <div className="container mx-auto flex pt-20 flex-wrap justify-around my-10">
          
            <div style={{width:"360px"}} className='pl-10'>
        <h1 className="text-xl py-5">About the Bootcamp</h1>
        <p className="w-2/3">The goal of this program is to prepare students for roles in web development, 
            server-side application development,
             and desktop development that require advanced JavaScript skills.</p>
        </div>
        <div style={{width:"360px"}} className='pt-10'>
               <img src="https://img-c.udemycdn.com/course/750x422/4505104_8592_8.jpg" alt="" style={{width:"100%"}} />
            </div>
        </div>
    )
}

export default About