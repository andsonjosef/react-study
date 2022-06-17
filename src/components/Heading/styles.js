import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xLarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xHuge};
    ${mediaFont(theme)}
  `,
};

const mediaFont = (theme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xLarge};
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, darkColor, size, uppercase }) => css`
    color: ${darkColor ? theme.colors.primaryColor : theme.colors.white};
    ${titleCase(uppercase)};
    ${titleSize[size](theme)};
  `}
`;
