
import { useNavigate } from "react-router-dom";
import { LoremIpsum } from "react-lorem-ipsum";
import { NavBar } from "./NavBar"

export const Home = () => {
    const navigate = useNavigate();
      const navToAuth = () => {
          navigate("/Home/Auth");
      };
    return (
        <>
        <div className="fade-in">
                <div className="Home-h1">
            <h1> Welcome To My Portfolio!</h1>
          </div>
            <p className="Home-p">
            <LoremIpsum p={2} />
            </p>
            
        </div>
      </>
    );
}