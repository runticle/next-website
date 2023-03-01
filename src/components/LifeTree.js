import styled from 'styled-components';
import Heading from './shared/Heading';

const LifeTreeStyle = styled.div`
    height: 100%;
    margin-top: var(--headerHeight);
    flex: 2;
    position: relative;

    --stemThickness: 6px;

    .information {
        color: var(--darkGreen);
    }
`

const ExperienceStyles = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-around;
    max-width: 1000px;

    margin: var(--headerHeight) auto;
    
    
    @media screen and (max-width: 768px) {
        >h1 {
            display: none;
        }
        transform: scale(0.6); // haha absolutely horrendous but I hate the mobile timeline and don't want to redo it
    }
`

// main stem
const Trunk = styled.div`
    @keyframes growing {
        from { background-position: 100% 100%; }
        to { background-position: 0 0; }
    }

    height: 100%;
    position: absolute;
    left: calc(50% - var(--stemThickness) / 2);
    width: var(--stemThickness, 100px);
    background-image: linear-gradient(
        to top,
        var(--middleGreen) 0%,
        var(--middleGreen) 30%,
        var(--lightGreen) 50%,
        var(--middleGreen) 70%
      );
    background-size: auto 50%;
    animation: growing 3s linear infinite;
    box-shadow: var(--boxShadowSection);

`

// bristol leaf
const LeafBristol = styled.div`
    position: absolute;
    left: calc(50% + 24px);
    bottom: 16%;
    transform: rotate(20deg);
    width: 240px;

    text-align: center;
    z-index: 2;
    border-radius: 70% 0;
    background-image: linear-gradient(
        -38deg,
        var(--lightGreen) 0%,
        var(--middleGreen) 50%,
        var(--lightGreen) 100%
    );
    padding: calc(var(--spacing) * 2);


    .information {
        transform: rotate(-20deg);
    }

    box-shadow: var(--boxShadowSection);
`

// quick coins leaf
const LeafQuickCoins = styled.div`
    position: absolute;
    right: calc(50% + 24px);
    bottom: 32%;
    transform: rotate(-20deg);
    width: 240px;

    text-align: center;
    z-index: 2;
    border-radius:0 70% ;
       background-image: linear-gradient(
        38deg,
        var(--lightGreen) 0%,
        var(--middleGreen) 50%,
        var(--lightGreen) 100%
    );;
    padding: calc(var(--spacing) * 2);

    .information {
        transform: rotate(20deg);
    }

    box-shadow: var(--boxShadowSection);
`

// emtec leaf
const LeafEmtec = styled.div`
    position: absolute;
    left: calc(50% + 24px);
    bottom: 48%;
    transform: rotate(20deg);
    width: 240px;


    text-align: center;
    z-index: 2;
    border-radius: 70% 0;
       background-image: linear-gradient(
        -38deg,
        var(--lightGreen) 0%,
        var(--middleGreen) 50%,
        var(--lightGreen) 100%
    );;
    padding: calc(var(--spacing) * 2);

    .information {
        transform: rotate(-20deg);
    }

    box-shadow: var(--boxShadowSection);

 
`

// makers leaf
const LeafMakers = styled.div`
    position: absolute;
    bottom: 64%;
    right: calc(50% + 24px);
    transform: rotate(-20deg);
    width: 240px;

    text-align: center;
    z-index: 2;
    border-radius: 0 70%;
       background-image: linear-gradient(
        38deg,
        var(--lightGreen) 0%,
        var(--middleGreen) 50%,
        var(--lightGreen) 100%
    );;
    padding: calc(var(--spacing) * 2);

    .information {
        transform: rotate(20deg);
    }

    box-shadow: var(--boxShadowSection);
`

// lesalon leaf
const LeafLeSalon = styled.div`
    position: absolute;
    left: calc(50% + 24px);
    bottom: 80%;
    transform: rotate(20deg);
    width: 240px;
    
    text-align: center;
    z-index: 2;
    border-radius: 70% 0;
       background-image: linear-gradient(
        -38deg,
        var(--lightGreen) 0%,
        var(--middleGreen) 50%,
        var(--lightGreen) 100%
    );;
    padding: calc(var(--spacing) * 2);

    .information {
        transform: rotate(-20deg);
    }

    box-shadow: var(--boxShadowSection);
`



export default function LifeTree() {

    const renderLeaf = ({ company, title, dateString }) => <div className="information">
        <p>
            {company}
        </p>
        <p>
            {dateString}
        </p>
        <p>
            {title}
        </p>
    </div>


    return (
        <ExperienceStyles>
            <LifeTreeStyle>
                <LeafLeSalon>
                    {renderLeaf(experience[0])}
                </LeafLeSalon>
                <LeafMakers>
                    {renderLeaf(experience[1])}
                </LeafMakers>
                <LeafEmtec>
                    {renderLeaf(experience[3])}
                </LeafEmtec>
                <LeafQuickCoins >
                    {renderLeaf(experience[2])}
                </LeafQuickCoins>
                <LeafBristol >
                    {renderLeaf(experience[4])}
                </LeafBristol>
                <Trunk />
                {/* <Leaves /> */}
            </LifeTreeStyle >
            <Heading>
                Experience & Education
            </Heading>
        </ExperienceStyles>
    )
}

const experience = [
    {
        company: "LeSalon Beauty",
        title: "Senior Developer",
        dateString: "Feb 2019 - July 2022",
    },
    {
        company: "Makers Academy",
        title: "Coding Bootcamp",
        dateString: "Sep 2018 - Jan 2019",
    },
    {
        company: "Quick-Coins",
        title: "Co-Founder",
        dateString: "Sep 2014 - July 2015",
    },
    {
        company: "Emtec Products",
        title: "Acoustic Engineer",
        dateString: "Sep 2016 - Jan 2018",
    },
    {
        company: "Bristol University",
        title: "Mechanical Engineering",
        dateString: "Sep 2012 - July 2016",
    },

]