import { css } from '@emotion/css';

export const styCardAnime = css`
  grid-column: span 4 / span 4;

  .sty-anime-description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }
`;

export const styCardAnimeLoader = css`
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`;