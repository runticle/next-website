import Image from 'next/image';
import styled from 'styled-components';

const CardStyles = styled.div`
  z-index: 2;
  padding: 10px;
  transition: transform 0.6s;

  --displayArrow: none;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 10px 0;

    --displayArrow: unset
  }

  cursor: ${props => !!props.action ? 'pointer' : 'unset'};

    &:focus, :hover {
            transform: scale(1.04);
            --displayArrow: unset;

            @media screen and (max-width: 767px) {
                transform: unset;
            }
    }
`;

const TextContents = styled.div`
    padding: 0 var(--spacing);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;

    opacity: 0.7;
    background-color: black;


    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

`

const ImageContainer = styled.div`
    width: 100%;
    border-radius: 3px;
    overflow: hidden;
    position: relative;

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

    border: solid var(--lightGreen);
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
                {!!title || !!description ?
                    <TextContents>
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
                    </TextContents>
                    : null}
            </ImageContainer>
        </CardStyles>
    );
}
