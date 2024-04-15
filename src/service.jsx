import coaching from "./assets/coaching.svg";
import gcs from './assets/gcs.svg';
import frame2 from './assets/frame2.svg';
import sevicebigimg from './assets/servicebigimg.svg'
import one from './assets/one.svg'
import two from './assets/two.svg'
import three from './assets/three.svg'
import four from './assets/four.svg'
import face from './assets/face.svg'
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './App.scss'
function Service() {
    return(
        <>
        
        <div className="bg-milk px-4 py-5 d-flex flex-column flex-lg-row justify-content-between align-items-center " >
            <div className="text-navyblue col-lg-6">
                <p>
                I can help you in these patricular areas.
                </p>
                <h1 className="fw-bolder display-2 col-md-10 ">
                I help people to discover their true potential
                </h1>
                <p className="col-md-9">
                I help people to discover their true potential and live a fulfilling life...
Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?
                </p>
            </div>
            <div className="col-lg-5 col-12 ">
                <img src={sevicebigimg }  className="w-75" alt="" />
            </div>
      </div>
      <div className="text-navyblue py-5 container">
        <h2 className=" text-center  col-lg-5  pb-5 pb-md-0 m-auto fw-bolder  display-6" >I can help you in these particular areas.</h2>
        <div className="  m-auto d-flex flex-column flex-md-row gap-md-2 flex-wrap gap-4 justify-content-center p-md-5">
<div className="col-lg-4 col-12 r border p-2">
    <img src={gcs} alt="" />
    <p><b className="fs-5 ">Group Coaching Sessions</b></p>
  <p className=" col-lg-11">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
  </p>
</div>
<div className="col-lg-4 r border p-2">
    <img src={coaching} alt="" />
    <p><b className="fs-5 ">Group Coaching Sessions</b></p>
  <p className="col-lg-11">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
  </p>
</div>
<div className="col-lg-4 r border p-2">
    <img src={frame2} alt="" />
    <p><b className="fs-5 ">Online course</b></p>
  <p className=" col-lg-11">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
  </p>
</div>
<div className="col-lg-4 r border p-2">
    <img src={coaching} alt="" />
    <p><b className="fs-5 ">1:1 Coaching</b></p>
  <p className=" col-lg-11">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
  </p>
</div>
        </div>
      </div>
      <div className="text-navyblue p-4 mb-lg-5">
        <p>How does it work?</p>
        <h2 className=" display-6  fw-bolder col-lg-4" >Are you ready to transform your life?</h2>
        <p className="col-lg-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.
</p>
<div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
    <div className="col-lg-6 d-flex flex-column gap-4">
      <section className="d-flex align-items-start gap-2">
        <img src={one} alt="" />
        <div>
          <b>Talk to me first</b>
          <p className="col-lg-">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
      </section>
      <section className="d-flex align-items-start gap-2">
        <img src={two} alt="" />
        <div>
          <b>Schedule a meeting</b>
          <p className="col-lg-">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
      </section>
      <section className="d-flex align-items-start gap-2">
        <img src={three} alt="" />
        <div>
          <b>Online consultation</b>
          <p className="col-lg-">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
      </section>
      <section className="d-flex align-items-start gap-2">
        <img src={four} alt="" />
        <div>
          <b>Ready to start? Let’s talk!</b>
          <p className="col-lg-">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
      </section>

    </div>
    <div className="col-lg-5 bol-9">
      <img src={face} alt="" className="w-100" />
    </div>
</div>
      </div>
      <div>

        <div className="text-navyblue text-center p-4">
          <h2 className=" display-6  fw-bolder text-navyblue text-center"> Good to know.</h2>
          <p>
          Everything you need to know about the my services.
          </p>
        </div>
            <div class="accordion text-navyblue  container" id="accordionPanelsStayOpenExample">
  <div class="accordion-item accordion-flush border-0">
    <h2 class="accordion-header shadow-0  border-top" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
       <b className="text-navyblue">How long does the coaching process take? </b>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body text-navyblue">
Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
     </div>
    </div>
  </div>
  <div class="accordion-item accordion-flush border-0">
    <h2 class="accordion-header shadow-0  border-top" id="panelsStayOpen-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      <b className="text-navyblue">What if I wanted to end my coaching engagement? </b>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item accordion-flush border-0">
    <h2 class="accordion-header shadow-0  border-top" id="panelsStayOpen-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      <b className="text-navyblue">Can I change through coaching? </b>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item accordion-flush border-0">
    <h2 class="accordion-header shadow-0  border-top" id="panelsStayOpen-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
      <b className="text-navyblue">How often do we meet? </b>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>  
      </div>


</div>
      
      <section className="my-5 mx-4 py-5 px-2 text-navyblue d-flex flex-column align-items-center  rounded-4 bg-milk">
 <h4 className="text-center">Still have questions?</h4>
 <p className="text-center">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
 <div>
 <NavLink to='../free'>
   <button type="button"  class="btn bg-lightgreen rounded text-white m-auto ">Get in touch</button>
  </NavLink>
 </div>
 
                    
      </section>
      
        </>
    );
    
}
export default Service