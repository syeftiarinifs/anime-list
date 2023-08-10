import { css } from '@emotion/css';

export const styHeader = css`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 24px;

  & > div {
    cursor: pointer;
    margin: 0;

    &:hover {
      color: blue;
    }
  }
`