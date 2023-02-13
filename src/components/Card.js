import Image from 'next/image';
import styled from 'styled-components';

const CardStyles = styled.div`
  font-size: 3rem;
  z-index: 2;
  width: 80%;
  margin: 0 auto;
  margin-top: calc(var(--spacing) * 2);
  transition: transform .3s;

  --displayArrow: none;

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 0;
    margin-bottom: var(--spacing);

    --displayArrow: unset
  }

  cursor: ${props => !!props.action ? 'pointer' : 'unset'};

  &:focus, :hover {
        transform: scale(1.05);
        --displayArrow: unset;

        @media screen and (max-width: 767px) {
            transform: unset;
        }
  }

  .text-contents {
    padding: 0 var(--spacing);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;

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
    height: 400px;
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

export default function Card({ title, description, imageUrl, action = null }) {
    return (
        <CardStyles onClick={action} action={action}>
            <ImageContainer>
                <Image src={imageUrl} alt={title} fill className={'image'} />
            </ImageContainer>
            {!!title || !!description ?
                <div className="text-contents">
                    <div className="text">
                        {!!title &&
                            <h1>
                                {title}
                            </h1>
                        }
                        {!!description &&
                            <p>
                                {description}
                            </p>
                        }
                    </div>
                    {!!action && <Arrow />}
                </div>
                : null}
        </CardStyles>
    );
}
