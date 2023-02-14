import styled from 'styled-components/native';

interface TextProps {
  size: TextSize;
  color?: string;
  weight: number;
  lineHeight?: number;
  textAlign?: string;
  opacity?: number;
  numberOfLines?: number;
  marginHorizontal?: number;
}

export enum FontWeight {
  Regular = 400,
  Medium = 500,
  SemiBold = 600,
  Bold = 700,
}

export enum TextSize {
  BaseText = '16px',
  Footer = '10px',
  CaptionSmall = '11px',
  CaptionLarge = '12px',
  BodySmall = '14px',
  Heading3 = '20px',
  Heading2 = '24px',
  Heading1 = '28px',
}

export const AppText = styled.Text.attrs(() => ({}))<TextProps>`
  color: ${(props: TextProps) => (props.color ? props.color : '#0000')};
  font-size: ${(props: TextProps) =>
    props.size ? props.size : TextSize.BaseText};
  font-family: 'THICCCBOI-Black';
  font-weight: ${(props: TextProps) => (props.weight ? props.weight : 500)};
  text-align: ${(props: TextProps) =>
    props.textAlign ? props.textAlign : 'auto'};
  number-of-lines: ${(props: TextProps) =>
    props.numberOfLines ? props.numberOfLines : 0};
  line-height: ${(props: TextProps) =>
    props.lineHeight ? props.lineHeight + 'px' : '20px'};
  opacity: ${(props: TextProps) => (props.opacity ? props.opacity : 1)};
  margin-horizontal: ${(props: TextProps) =>
    props.marginHorizontal ? props.marginHorizontal + 'px' : '0px'};
`;
