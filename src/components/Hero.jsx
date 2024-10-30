import User from '../assets/img/user.png'
import { ReactTyped } from 'react-typed'
import { AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className="text-white">
        <div className="max-w-[800px] mt-[96px] w-full h-scree mx-auto text-center flex flex-col md:flex-row ">
            <img src={User} alt="/" className='h-auto md:max-w-[45%] sm:max-w-[70%] max-w-[80%] p-4 mx-auto mb-3' />
            <div className='flex flex-col my-auto'>
              <h1 className='text-[#00FFFF] md:text-7xl text-4xl font-bold md:py-4 uppercase'>Hi, I am Carl!</h1>
              <div>
                <ReactTyped className='text-[#c2c2c2] md:text-4xl text-2xl'
                strings={['Front-end Developer','Game Developer', 'Graphic Designer']}
                typeSpeed={100}
                backSpeed={50}
                loop
                />
              </div>
              <div className='flex mt-1 py-4 justify-center'>
                <AiFillGithub className='text-5xl mx-2 cursor-pointer'/>
                <AiFillLinkedin className='text-5xl mx-2 cursor-pointer'/>
              </div>
              <button className='bg-white text-[#131313] font-medium uppercase text-1xl w-fit px-5 py-3 rounded-full cursor-pointer mx-auto'>Connect with me</button>
            </div>
        </div>
    </div>
  )
}

export default Hero