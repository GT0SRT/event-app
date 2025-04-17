import React,{useState} from 'react'
import { CiMenuFries } from 'react-icons/ci';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };
    const links = [ "Home","About us","Timeline","FAQ","Contact us"];
    const values = ['0','15','32','75','100']

    const scrollByPercent = (percent) => {
        const scrollAmount = (percent / 100) * document.body.scrollHeight;
        window.scrollBy({
          top: scrollAmount,
          behavior: 'smooth',
        });
        setIsMenuOpen(prev => !prev);
    };

  return (
    <>
        <header className='shadow-xl bg-white'>
            <div className='max-w-[1200px] mx-auto flex items-center'>
                <img src="https://media.licdn.com/dms/image/v2/D4D0BAQHlFTj_64Bpjg/company-logo_200_200/company-logo_200_200/0/1664780274479?e=2147483647&v=beta&t=sUS42L9cq-V1KrmZrEzeWHWoo1DVDGJv_7CCUyhrlNc" className='w-12 m-3 rounded-xl' alt='' />
                <nav className='hidden md:flex list-none gap-5 ml-auto text-lg font-semibold text-[#3e3e3e]'>
                    { 
                        links.map(
                            (link, index) => {
                                return <li key={index} onClick={() => scrollByPercent(values[index])} className='cursor-pointer hover:border-b-2 transition flex items-center gap-3 hover:text-[#101656] hover:border-b-[#101656]'>
                                    {link}
                                </li>
                            }
                        )
                    }
                </nav>
                <div className={isMenuOpen ? 'md:hidden ml-auto':'md:hidden bg-[#101656] w-[60%] text-white bg-blur-lg h-[70vh] absolute top-0 right-0 p-3'}>
                    <div onClick={toggleMenu} className={isMenuOpen ? 'mr-7':'ml-[80%]'}><CiMenuFries size={30} /></div>                
                    <div className={isMenuOpen ? 'hidden':''}>
                    <nav className='list-none gap-5 ml-auto text-center text-lg font-semibold text-white p-5'>
                    { 
                        links.map(
                            (link, index) => {
                                return <li key={index} onClick={() => scrollByPercent(index*20)} className='cursor-pointer transition flex items-center gap-5 p-3'>
                                    {link}
                                </li>
                            }
                        )
                    }
                    </nav>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header