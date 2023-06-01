import { AiOutlineInstagram } from 'react-icons/ai';
import { BsGlobe2 } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import './App.css';
import LoginCard from './components/loginCard';
import img from './images/loginImage.png';
import logo from './images/logo.svg';

function App() {
  return (
    <div className='mx-auto container p-4 grid lg:grid-cols-2 gap-5 min-w-screen min-h-screen'>
      <div className='relative w-full h-full'>
        <img src={img} alt="" className='top-0 left-0 right-0 bottom-0 min-h-[500px] w-full h-full' />
        <div>
          <img src={logo} alt="" width={100} height={100} className='absolute top-7 left-7' />
          <div className='absolute bottom-40 left-7 font-[Poppins]'>
            <h1 className='text-white text-4xl font-bold'>100% Uptime😎</h1>
            <h3 className='text-[#BFBFBF] text-2xl'>Zero Infrastructure</h3>
            <h3 className='text-[#BFBFBF] text-2xl'>Management</h3>
          </div>
          <div className='absolute bottom-7 left-7'>
            <div className='text-[#BFBFBF] flex items-center gap-2'>
              <BsGlobe2 />
              <span>aesthisia.com</span>
            </div>
          </div>
          <div className='absolute bottom-7 right-7'>
            <div className='text-white flex items-center gap-2'>
              <FaLinkedinIn size={20} />
              <FaFacebookF />
              <AiOutlineInstagram size={20} />
            </div>
          </div>
        </div>
      </div>
      <LoginCard />
    </div >
  );
}

export default App;
