import React from 'react'
import styled from 'styled-components'

const StyledFigure = styled.figure `
  max-width: 5000px;
  display: flex;
  flex-direction: column;
  align-items: center;

  figcaption {
    text-align: center
    font-style: italic;
  }

`

export default function Figure({imageURL, caption}) {
    return (
      <StyledFigure>
      <img src={imageURL} />
      <figcaption>Awesome pic taken on {caption}</figcaption>
    </StyledFigure>
    )
  }
  