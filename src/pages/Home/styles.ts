import { css } from '@emotion/css';

export const styContainer= css`
  width: 80%;
  margin: 0 auto 24px;

  .sty-anime-container {
    display: grid;
    grid-template-columns: repeat(12, minmax(0px, 1fr));
    gap: 1rem;
  }

  .sty-pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
  }

  .sty-input {
    width: 100%;
    margin-bottom: 16px;
  }
`
