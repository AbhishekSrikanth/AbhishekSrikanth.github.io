import Abhishek from '../assets/Abhishek.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NameCard() {

    return (
        <div className="text-center items-center m-auto">
            <img src={Abhishek} className="h-60 my-12 mx-auto rounded-full border-8 shadow-2xl shadow-gray-700 border-white" alt="Abhishek.png"></img>
            <p className="mx-auto my-3 text-3xl text-black font-black">Abhishek Srikanth</p>
            <p className="mx-auto text-lg text-black">Computer Science Graduate Student</p>
            <p className="mx-auto text-md text-black">Purdue University</p>
            <p className="mx-auto my-2 text-sm text-gray-700">Ex-Full Stack Developer for Zmanda</p>
            <hr className="max-w-48 h-0.5 mx-auto my-4 bg-gray-300 border-0 rounded"></hr>
            <div className="flex space-x-4 text-2xl text-gray-500 mx-auto max-w-min my-5">
                <a className="hover:text-black" href="https://github.com/AbhishekSrikanth/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon="fa-brands fa-github" /></a>
                <a className="hover:text-black" href="https://www.linkedin.com/in/abhishek-srikanth-803734173/" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a>
                <a className="hover:text-black" href="https://t.me/OmegaPrimus" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon="fa-brands fa-telegram" /></a>
                <a className="hover:text-black" href="mailto:abhisrik99@outlook.com" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon="fa-solid fa-envelope" /></a>
            </div>
            <a href="resume-abhishek-srikanth.pdf" download className="px-4 py-1 max-w-min border-2 border-gray-500 mx-auto bg-white text-gray-500 hover:text-white hover:border-black hover:bg-black outline-black rounded-full flex items-center space-x-3">
                <div className="flex-shrink-0">
                    <FontAwesomeIcon icon="fa-solid fa-download" />
                </div>
                <p className="font-extrabold">Resume</p>
            </a>
        </div>
    );
}

export default NameCard;