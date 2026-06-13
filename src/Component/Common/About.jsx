import { useNavigate, useSearchParams } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    const [searchparams,setSearchparams] = useSearchParams();
    
    const navigatecontact = () => {
        navigate('/contact');
    }
    const update=()=>{
        setSearchparams(prev=>{
            prev.set('location','Delhi');
            prev.set('area','North');
            return prev;
        })
    }


    return (
        <div>
            <h1>About Us</h1>
            <br>
            </br>
            <button onClick={() => navigatecontact()} className="btn btn-primary">Contact</button>
            <br></br>
            <h2>The location is : {searchparams.get('location')}</h2>
             <h2>The Area is : {searchparams.get('area')}</h2>
             <br>
             </br>
             <button onClick={() => update()} className="btn btn-primary">Update</button>
        </div>
    );
}

export default About;