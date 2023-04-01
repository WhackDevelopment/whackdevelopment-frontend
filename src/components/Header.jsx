import Logo from '../assets/LogoBackground.svg';
import { FaGithub, FaDiscord, FaPaypal } from 'react-icons/fa';

export default function Header() {
    return (
        <div className="flex flex-col flex-wrap justify-start items-center bg-black border-b-2 border-black dark:border-purple-500 shadow-md shadow-black dark:shadow-purple-500">
            <nav class="bg-white dark:bg-black w-screen border-b-1 border-black dark:border-purple-500 shadow shadow-black dark:shadow-purple-500">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" class="flex items-center">
                        <img className="flex-none w-[50px]" src={Logo} alt="Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">WhackDevelopment</span>
                    </a>

                    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-purple-500-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent  dark:border-purple-500">
                            <li>
                                <a
                                    href="/"
                                    class="block py-2 pl-3 pr-4 text-purple-500 hover:text-slate-900 dark:hover:text-slate-100 md:bg-transparent md:text-purple-500 md:p-0 dark:text-white md:dark:text-white"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="flex flex-row flex-wrap justify-around items-center w-screen h-[50vh]">
                <img className="flex-none w-[45vh]" src={Logo} alt="LogoBackground" />
                <div className="content">
                    <div className="btns flex flex-row flex-wrap justify-around items-center">
                        <a
                            role="button"
                            href="https://github.com/WhackDevelopment"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex flex-row flex-wrap justify-center items-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                            <FaGithub className="center mr-2" /> Visit GitHub
                        </a>
                        <a
                            role="button"
                            href="https://paypal.me/WhackDevelopment"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex flex-row flex-wrap justify-center items-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                            <FaPaypal className="center mr-2" /> Visit PayPal
                        </a>
                        <a
                            role="button"
                            href="https://discord.gg/WhackDevelopment"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex flex-row flex-wrap justify-center items-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                            <FaDiscord className="center mr-2" /> Visit Discord
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
