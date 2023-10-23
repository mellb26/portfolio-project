
// import { useNavigate } from "react-router-dom";
import { LoremIpsum } from "react-lorem-ipsum";
// import { NavBar } from "./NavBar"

export const Home = () => {
    // const navigate = useNavigate();
    //   // const navToAuth = () => {
    //   //     navigate("/Home/Auth");
    //   // };
    return (
        <>
        <div className="fade-in">
                <div className="Home-h1">
            <h1> Welcome To My Portfolio!</h1>
          </div>
            <p className="Home-p">
            Thank you for taking the time to come and visit my website,
            I had lots of fun creating it. After finishing my web development bootcamp with Northcoders 
            I wanted to develop a website that would be designed and created entierly by myself that showcased a 
            little bit more about me and my design and technical skills.
            {" "}
            I used JavaScript, React and
            Firebase to build this website.


            </p>
        </div>

      </>
    );
}