import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const CardStyles = styled.div`
  font-size: 3rem;
  z-index: 2;
  width: 80%;
  margin-top: 50px;
  cursor: pointer;

  .text-contents {
    padding: 0 1rem;
      
      h1{
          font-size: 2rem;
        }
        
        p {
            font-size: 1rem;
        }


        &:focus, :hover {
            background: var(--lightGreen, lightGreen); // TODO something different lol
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
`

// this is a link basically with a picture, title and subtitle.
// it will take the user to a new page showing the thing. Or a modal. Maybe a modal.

export default function Card() {
  return (
    <CardStyles>
        <ImageContainer>
            <Image src="/analog-me.JPG" alt="Meangingless text" fill className={'image'}/>
        </ImageContainer>
        <div className="text-contents">
            <h1>
                Me
            </h1>
            <p>
                An analogue picture of me bro
            </p>
        </div>
    </CardStyles>
  );
}
