//This diplays an "About Me" section with text and image
export default function AboutMe() {
    return (
        //section container with an id for easy css styling and navigation
        <section id="AboutMe" className="about--section">
            {/*image on the left side*/}
            <div className="about--section--img">
                <img src="/img/Homepageface.png" alt="About Me" />
            </div>
            {/*Text on the right side*/}
            <div className="hero-section--content--box about--section--box">
                <div className="hero-section--content">

                    {/*Section heading*/}
                    <h1 className="about-section--heading">Who am I?</h1>

                    {/*Section subtitle*/}
                    <p className="section--title">A little bit about me.</p>

                    {/*First paragraph*/}
                    <p className="hero--section--description">
                        I am someone who enjoys solving problems with code and finding ways to use technology to make different things, from coding to 3d models. While I am still in early stages of my programming career,I already explored things like console programming, desktop apps and 3D modelling.
                    </p>

                    {/*Second paragraph*/}
                    <p className="hero--section--description">
                        My ultimate goal is to experiment with knowledge I have and improve as time goes on. In the future, I want to build many different things and learning how to code will be very handy
                    </p>

                    {/*Download resume button*/}
                    <a 
                    href="/Resume.pdf"
                    download
                    className="btn btn--resume--download"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}