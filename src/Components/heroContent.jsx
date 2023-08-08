import { Button, Container } from 'react-bootstrap';
import HeroImage from '../Assets/images/image-hero-desktop.png';
import Databiz from '../Assets/images/client-databiz.svg';
import Audiophile from '../Assets/images/client-audiophile.svg';
import Meet from '../Assets/images/client-meet.svg';
import Maker from '../Assets/images/client-maker.svg';

const HeroContent = () => {
    return (
        <>
            <Container fluid className='flex-box'>
                <div className='text-wrapper flex-box col-box'>
                    <div className='orange'>
                        <h1 className='hero-title'>Make<br />remote work</h1>
                        <p className='hero-text'>
                            Get your team in sync, no matter your location.<br />
                            Streamline processes, create team rituals and watch productivity soar.
                        </p>
                        <div className='cta-button-wrapper'>
                            <Button className='hero-button'>Learn More</Button>
                        </div>
                    </div>
                    <div className='clients flex-box'>
                        <div className='partner'>
                            <img
                                src={Databiz}
                                className=''
                                alt='client-databiz'
                            />
                        </div>
                        <div className='partner'>
                            <img
                                src={Audiophile}
                                className=''
                                alt='client-databiz'
                            />
                        </div>
                        <div className='partner'>
                            <img
                                src={Maker}
                                className=''
                                alt='client-databiz'
                            />
                        </div>
                        <div className='partner'>
                            <img
                                src={Meet}
                                className=''
                                alt='client-databiz'
                            />
                        </div>
                    </div>
                </div>
                <div className='image-wrapper'>
                    <img src={HeroImage} alt="hero" className="" />
                </div>
            </Container>
        </>
    );
}

export default HeroContent;