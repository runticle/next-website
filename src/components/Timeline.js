import styled from 'styled-components';
import CVDownload from './shared/CVDownload';

const TimelineStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    flex-direction: column;
    height: 100vh;

    // only for mobile
    @media screen and (min-width: 767px) {
        display: none;
    }


    .scrollbox {
        height: 60vh;
        width: 100%;

        // hide scrollbar but keep scrolling
        overflow: scroll;
        &::-webkit-scrollbar {
            display: none;
        }

        scroll-snap-type: y mandatory;
    }
        
    div > .information {
        scroll-snap-align: center;
    }
`

const TimeBox = styled.div`
        height: 100%;
        width: 100%;
        text-align: center;
        scroll-snap-stop: always;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        z-index: 3;

        .information {
            z-index: 2;
            border-radius: 70% 0;
            background: var(--lightGreen);;
            padding: calc(var(--spacing) * 3);
            box-shadow: inset 0px -2px 5px 1px var(--middleGreen);

            color: var(--middleGreen);
        }

        &:before {
            content: '';
            position: absolute;
            left: calc(50% - 1px);
            top: 0;
            height: 100%;
            border-left: solid 2px var(--lightGreen);
        }
`

const BookEnd = styled.div`
    position: absolute;
    top: ${props => props.top ? 0 : null};
    bottom: ${props => props.top ? null : 0};
    color: var(--middleGreen);
    background: var(--lightGreen);
    padding: calc(var(--spacing) / 2);
    border-radius: 10px;
`

const Arrow = styled.div`
    position: absolute;
    bottom: 4px;
    
    border: solid var(--lightGreen);
    border-width: 0 2px 2px 0;
    padding: 10px;
    transform: rotate(45deg);
`


export default function Timeline() {


    return (
        <TimelineStyle>
            <div className="scrollbox">
                {
                    experience.map(({ company, title, dateString }, index) => (
                        <TimeBox key={index}>
                            {index === 0 ? <BookEnd top>
                                Now
                            </BookEnd> : null}
                            <div className="information">
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
                            {index === experience.length - 1 ? <BookEnd>
                                beyond
                            </BookEnd> : <Arrow />}
                        </TimeBox>
                    ))
                }
            </div>
        </TimelineStyle >
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