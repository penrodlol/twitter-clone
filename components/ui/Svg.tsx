import Image from 'next/image';
import { FC } from 'react';

const defaultSize = 28;

interface SvgProps {
  name: string;
  alt: string;
  width?: number;
  height?: number;
}

const Svg: FC<SvgProps> = (props) => (
  <Image
    src={`/svg/${props.name}.svg`}
    alt={props.alt}
    aria-label={props.alt}
    width={props.width ?? defaultSize}
    height={props.height ?? defaultSize}
  />
);

export default Svg;
