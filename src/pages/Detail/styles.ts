import { css } from '@emotion/css';

export const styContainer= css`
  width: 80%;
  margin: 0 auto 24px;

  .sty-image {
    background-repeat: no-repeat;
    background-size: 100%;
    display: inline-block;
    margin: 0px auto;
    position: relative;
    text-align: center;
    width: 100%;
    height: 250px;

    img {
      object-fit: cover;
      width: 100%;
      height: 250px;
      border-radius: 16px;
    }
  }

  .sty-title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 16px 0;
  }

  .sty-chip-wrapper {
    display: flex;
    margin-bottom: 16px;

    .MuiChip-root {
      margin-right: 4px;
    }
  }
`
