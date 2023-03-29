const logo = require('./image-1.png');
const CallToActions = () => {
    return (<>
        <section class="call-to-action">

            <div class="auto-container"><div class="outer-box aos-init aos-animate" data-aos="fade-up">


                <div class="wrapper">
                    <div id="one">   <div class="content-column">
                        <div class="sec-title">
                            <h2>Recruiting?</h2>
                            <div class="text">Advertise your jobs to millions of monthly users and search 15.8 million
                                <br /> CVs in our database.</div>
                            <a style={{ textDecoration: 'none' }} href="#" class="theme-btn btn-style-one bg-blue">
                                <span class="btn-title">Start Recruiting Now</span>
                            </a>
                        </div>
                    </div></div>
                    <div id="two">  <div class="image-column">
                        <figure class="image"><img src={String(logo)} alt="resource" />
                        </figure>
                    </div></div>
                </div>

            </div>
            </div>
        </section></>
    );
};

export default CallToActions;