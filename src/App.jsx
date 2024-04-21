import React, { useState, useEffect, useRef } from 'react';
import { NavLink, BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { CgMenuLeft } from 'react-icons/cg';
import { CgClose } from 'react-icons/cg';
import logo from './assets/logo.svg';
import linkdn from './assets/linkdn.svg';
import facebook from './assets/facebook.svg';
import roundball from './assets/roundball.svg';
import blue from './assets/blue.svg';
import Service from './service';
import About from './About';
import Extra from './extra';
import Home from './home';
import Free from './free';
import Project from './project'
import { motion} from 'framer-motion';

function App() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleIcon = isToggled ?  <CgClose className='fs-2 display-2' />:<CgMenuLeft className='fs-2 display-2' /> ;

  const change = () => {
    setIsToggled((prevIsToggled) => !prevIsToggled);
  };

  const items = [
    { id: 1, name: 'Home', href: '/home' },
    { id: 2, name: 'Services', href: '/service' },
    { id: 3, name: 'About Us', href: '/about' },
    { id: 4, name: 'Extra Salespage', href: '/extra' },
    { id: 4, name: 'Project', href: '/project' },
  ];

  const [Email, setEmail] = useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleClick = () => {
    setEmail('');
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const [count, setCount] = useState(1);

  const numberRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count === 101) {
        clearInterval(intervalId);
        setLoading(false);
      } else {
        setCount((prevCount) => prevCount + 1);
        if (numberRef.current) {
          numberRef.current.innerHTML = `${count}%`;
        }
      }
    }, 46);

    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <>
      {loading ? (
        <div className="d-flex align-items-center flex-column text-lightgreen justify-content-center w-100 load">
          <p className="fs-5 fw-bold">
            accessing <img src={logo} alt="" />
          </p>
          <p ref={numberRef} className="fw-bolder fs-1"></p>
        </div>
      ) : (
        <BrowserRouter>
          <div className={`main-content ${loading ? 'hidden' : ''}`}>
            <nav className="navbar navbar-expand-lg bg-white px-4 py-2 m-0">
              <div className="container-fluid p-0">
                <div>
                  <img src={logo} alt="" className="nav-brand" />
                </div>
                <button
                  onClick={change}
                  className="navbar-toggler shadow-none border-0 text-lightgreen  "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarText"
                  aria-controls="navbarText"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  {toggleIcon}
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav ms-auto d-flex align-items-center gap-4">
                    {items.map((item) => (
                      <li className="nav-item" key={item.id}>
                        <NavLink
                          to={item.href}
                          className={({ isActive }) => {
                            return (
                              'text-grey text-decoration-none' +
                              (!isActive
                                ? 'text-grey text-decoration-none '
                                : 'border-bottom-3 Active text-lightgreen text-decoration-none ')
                            );
                          }}
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                    <li className="nav-item">
                      <NavLink to="/free" className="text-grey text-decoration-none  ">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                         type="button" className="btn bg-lightgreen rounded text-white ">
                          Book a session with us
                        </motion.button>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="service" element={<Service />} />
              <Route path="about" element={<About />} />
              <Route path="extra" element={<Extra />} />
              <Route path="free" element={<Free />} />
              <Route path="project" element={<Project />} />
            </Routes>

            <footer className="">
              <section className="bg-milk p-4 d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center">
                <div className="">
                  <h4 className="text-navyblue fs-3 fw-bolder  ">Get notified when I publish new articles</h4>
                  <p className="text-grey fs-5">Stay up to date with the latest news, announcements, and articles.</p>
                </div>
                <div className="d-flex flex-column flex-lg-row justify-content-end gap-2 col-12 col-lg-6">
                  <input
                    type="email"
                    name="email"
                    value={Email}
                    onChange={handleEmail}
                    placeholder="Enter your email"
                    className=" btn-btn-outline-danger col-12 col-lg-6 shadow-none  rounded border-none outline-none"
                    id=""
                  />
                  <motion.button
                    initial= {{
                      x: 50
                   }
                      
                     }
                      whileInView= {{x: 0, transition: {duration: 1,}}}
                     whileHover={{ scale: 1.1 }}
                     transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    type="button"
                    onClick={handleClick}
                    className="btn bg-lightgreen rounded text-white col-6 col-md-3  "
                  >
                    Subscribe
                  </motion.button>
                </div>
              </section>
              <section className="d-flex flex-column flex-md-row col-12 p-4 column-gap-4">
                <div className="col-3">
                  <img src={logo} alt="" />
                  <p className="text-grey fs-6">Design amazing digital experiences that create more happy in the world.</p>
                </div>
                <div className="p-0 col-4">
                  <p className="text-navyblue fw-bold fs-5 m-0">Pages</p>
                  <ul className="list-unstyled text-grey fs-6">
                    <li><NavLink to='/home' className='text-decoration-none text-grey' >Home</NavLink></li>
                    <li> <NavLink to='/service' className='text-decoration-none text-grey'> Services</NavLink></li>
                    <li><NavLink to='/about' className='text-decoration-none text-grey'> About us</NavLink></li>
                    <li><NavLink to='/extra' className='text-decoration-none text-grey'>Extra Sales/Landingpage</NavLink> </li>
                    <li><NavLink to='/extra' className='text-decoration-none text-grey'> Free guide</NavLink></li>
                  </ul>
                </div>
                <div className="p-0 col-4">
                  <p className="text-navyblue fw-bold fs-5 m-0">Contact</p>
                  <ul className="list-unstyled text-grey fs-6">
                    <li>+123 456 789</li>
                    <li>hello@happydigital.nl</li>
                    <li>Instagram</li>
                    <li> LinkedIn</li>
                  </ul>
                </div>
              </section>
              <section className="text-grey m-4 border-top border-3 d-flex flex-column flex-sm-row justify-content-between py-sm-3">
                <p>
                  Made with a <img src={blue} alt="another company's logo " /> by <b> HappyDigital</b>
                </p>
                <div className="d-flex gap-4">
                  <img src={linkdn} alt="" />
                  <img src={facebook} alt="" />
                  <img src={roundball} alt="" />
                </div>
              </section>
            </footer>
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
