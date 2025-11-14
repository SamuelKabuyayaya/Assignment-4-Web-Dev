//This displays a "Hero" section with title, short intro and an image
export default function HeroSection() {
    return ( 

    //section container for easy css styling and navigation
    <section id="heroSection" className="hero--section">
        
        {/*Text and button on left side*/}
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                
                {/*Main title with name*/}
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">Samuel Kabuya</span>{" "}
                    <br />
                    Building my skills.
                </h1>

                {/*Description paragraph*/}
                <p className="hero--section--description">
                    I am a student at Centennial Currently, pursuing programming, and although I am still fairly new to the field, I have already gained solid foundations in different programming languages and concepts. Programming has been my focus for the past 2 years, and I've grown comfortable with writing code and solving problems, even though I can't solve them all. Therefore, I need to get more practice and smarter to become a better programmer.
                </p>
            </div>

            {/*Contact button leading to the Contact Me section*/}
            <a href="#Contact" className="btn btn-primary">
                Contact Me
            </a>
        </div>

        {/*Image on the righ side*/}
        <div className="hero--section--image">
            <img src="/img/Homepagecode.png" alt="Hero Section" />
        </div>
    </section>
    )
}