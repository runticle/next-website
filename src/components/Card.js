import Image from 'next/image';
import styled from 'styled-components';

const CardStyles = styled.div`
  font-size: 3rem;
  z-index: 2;
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  transition: transform .3s; /* Animation */

  --displayArrow: none;

  cursor: pointer;

  &:focus, :hover {
        transform: scale(1.1);
        --displayArrow: unset;
  }

  .text-contents {
    padding: 0 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .text{
        
        h1{
            font-size: 2rem;
        }
        
        p {
            font-size: 1rem;
        }
    }


    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 250px;
    border-radius: 15px;
    overflow: hidden;

    > div {
    position: unset !important;
    }

    .image {
    object-fit: cover;
    width: 100% !important;
    position: relative !important;
    height: 100% !important;
    }
`;

const Arrow = styled.div`

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

    border: solid var(--black, black);
    border-width: 0 3px 3px 0;
    padding: 4px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    display: var(--displayArrow);

    animation: fadeIn 0.7s;
`;

// this is a link basically with a picture, title and subtitle.
// it will take the user to a new page showing the thing. Or a modal. Maybe a modal.

export default function Card({title, description, imageUrl, action=null}) {
  return (
    <CardStyles>
        <ImageContainer>
            <Image src={imageUrl} alt={title} fill className={'image'}/>
        </ImageContainer>
        <div className="text-contents">
            <div className="text">
                <h1>
                    {title}
                </h1>
                <p>
                    {description}
                </p>
            </div>
            {!!action && <Arrow />}
        </div>
    </CardStyles>
  );
}
