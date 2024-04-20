import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.scss";
import jane from "./assets/jane.svg";
import yellowstar from "./assets/yellowstar.svg";
import layer from "./assets/layer.svg";
import syp from "./assets/syp.svg";
import circool from "./assets/circool.svg";
import catalog from "./assets/catalog.svg";
import qu from "./assets/qu.svg";
import four from "./assets/four.svg";
import calender from "./assets/calender.svg";
import alarm from "./assets/alarm.svg";
import flower from "./assets/flower.svg";
import aboutimg from "./assets/aboutbigimg.svg";

function About() {
  return (
    <>
      <section className="p-4 bg-milk text-navyblue d-flex flex-column flex-lg-row justify-content-between align-items-center">
        <div className="col-lg-5">
          <p></p>
          <h1 className="fw-bolder display-2">About me</h1>
          <p>
            I help people to discover their true potential and live a fulfilling
            life... Discover the simple 3 steps that I discovered to hack
            productivity. It just works and it is begin using backed by science.
            Wanna transform your life?
          </p>
          <button type="button" class="btn bg-lightgreen rounded text-white ">
            Book a session with us
          </button>
        </div>
        <div className="col-lg-5">
          <img src={aboutimg} className="w-100" alt="" />
        </div>
      </section>
      <section className="px-4 text-grey text-center my-5 d-flex flex-column gap-4">
        <p>From startups to the world’s largest companies</p>
        <div className="d-flex flex-column flex-lg-row col-7 col-lg-12 m-auto gap-3 gap-lg-0 justify-content-between">
          <img src={layer} alt="" />
          <img src={syp} alt="" />
          <img src={circool} alt="" />
          <img src={catalog} alt="" />
          <img src={qu} alt="" />
        </div>
      </section>
      <section className="text-navyblue p-4 bg-milk my-4">
        <h2 className="fw-bolder  display-6 col-lg-4">
          Hear out what my clients say about me.
        </h2>
        <div className="d-flex  my-4 flex-column flex-lg-row justify-content-end gap-5 flex-wrap">
          <div className="bg-white col-lg-3 col-12 col-md-4 p-3 O  m-auto m-md-0 rounded">
            <p>
              "I gained so much <b>confidence</b> in my ability to connect and
              deepen my relationships with people. "
            </p>
            <p>
              <b>Jane</b>
            </p>
            <img src={jane} alt="" />
            <div>
              <img src={yellowstar} alt="" />
              <img src={yellowstar} alt="" />
              <img src={yellowstar} alt="" />
              <img src={yellowstar} alt="" />
              <img src={yellowstar} alt="" />
            </div>
          </div>
          <div className="bg-white col-lg-3 col-12 col-md-4 O p-3 m-auto m-md-0 rounded">
            <p>
              "I gained so much <b>confidence</b> in my ability to connect and
              deepen my relationships with people. "
            </p>
            <p>
              <b>Jane</b>
            </p>
            <img src={jane} alt="" />
            <div>
              <img src={yellowstar} alt="" />
              <img src={yellowstar} alt="" />
              <img src={yellowstar} alt="" />
              <img src={yellowstar} alt="" />
              <img src={yellowstar} alt="" />
            </div>
          </div>
          <div className="bg-white col-lg-3 col-12 col-md-4 O p-3 m-auto m-md-0 rounded">
            <p>
              "I gained so much <b>confidence</b> in my ability to connect and
              deepen my relationships with people. "
            </p>
            <p>
              <b>Jane</b>
            </p>
            <img src={jane} alt="" />
            <div>
              <img src={yellowstar} alt="" />
              <img src={yellowstar} alt="" />
              <img src={yellowstar} alt="" />
              <img src={yellowstar} alt="" />
              <img src={yellowstar} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="text-center text-navyblue p-4">
        <p className="m-0">How does it work?</p>
        <h2 className="fw-bolder  display-6">
          Are you ready to transform your life?
        </h2>
        <p className="col-lg-6 m-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam.
        </p>
        <div className="d-flex flex-wrap gap-2 justify-content-between col-12 my-4">
          <div className="col-lg-3 p shadow-sm p-2 rounded">
            <div>
              <img src={four} alt="" />
            </div>
            <p>
              <b>Ready to start? Let’s talk!</b>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div className="col-lg-3  p shadow-sm p-2 rounded">
            <div>
              <img src={calender} alt="" />
            </div>
            <p>
              <b>Ready to start? Let’s talk!</b>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div className="col-lg-3 p shadow-sm p-2 rounded">
            <div>
              <img src={four} alt="" />
            </div>
            <p>
              <b>Ready to start? Let’s talk!</b>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div className="col-lg-3 p shadow-sm p-2 rounded">
            <div>
              <img src={flower} alt="" />
            </div>
            <p>
              <b>Ready to start? Let’s talk!</b>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div className="col-lg-3 p shadow-sm p-2 rounded">
            <div>
              <img src={alarm} alt="" />
            </div>
            <p>
              <b>Ready to start? Let’s talk!</b>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
          <div className="col-lg-3 p shadow-sm p-2 rounded">
            <div>
              <img src={four} alt="" />
            </div>
            <p>
              <b>Ready to start? Let’s talk!</b>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
        </div>
      </section>
      <div>
        <div className="text-navyblue text-center p-4">
          <h2 className=" display-6  fw-bolder text-navyblue text-center">
            {" "}
            Good to know.
          </h2>
          <p>Everything you need to know about the my services.</p>
        </div>
        <div
          class="accordion text-navyblue  container"
          id="accordionPanelsStayOpenExample"
        >
          <div class="accordion-item accordion-flush border-0">
            <h2
              class="accordion-header shadow-0  border-top"
              id="panelsStayOpen-headingOne"
            >
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <b className="text-navyblue">
                  How long does the coaching process take?{" "}
                </b>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body text-navyblue">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </div>
            </div>
          </div>
          <div class="accordion-item accordion-flush border-0">
            <h2
              class="accordion-header shadow-0  border-top"
              id="panelsStayOpen-headingTwo"
            >
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                <b className="text-navyblue">
                  What if I wanted to end my coaching engagement?{" "}
                </b>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item accordion-flush border-0">
            <h2
              class="accordion-header shadow-0  border-top"
              id="panelsStayOpen-headingThree"
            >
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                <b className="text-navyblue">Can I change through coaching? </b>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item accordion-flush border-0">
            <h2
              class="accordion-header shadow-0  border-top"
              id="panelsStayOpen-headingFour"
            >
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                <b className="text-navyblue">How often do we meet? </b>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="my-5 mx-4 py-5 px-2 text-navyblue d-flex flex-column align-items-center  rounded-4 bg-milk">
        <h4 className="text-center">Still have questions?</h4>
        <p className="text-center">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <div>
          <button
            type="button"
            class="btn bg-lightgreen rounded text-white m-auto "
          >
            Get in touch
          </button>
        </div>
      </section>
    </>
  );
}
export default About;
