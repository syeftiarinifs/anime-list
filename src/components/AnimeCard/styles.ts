import { css } from '@emotion/css';

export const styCardAnime = css`
  grid-column: span 4 / span 4;

  .sty-anime-description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }
`