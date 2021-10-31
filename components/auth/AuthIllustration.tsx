import Image from 'next/image';
import React from 'react';
import Svg from '../ui/Svg';

export class AuthIllustration extends React.Component {
  render() {
    return (
      <div className="relative h-full">
        <Image
          className="h-full"
          src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
          alt="Background"
          draggable="false"
          layout="fill"
          priority={true}
        />
        <div className="absolute top-1/3 left-1/4">
          <Svg name="twitter" alt="Twitter Logo" width={400} height={400} />
        </div>
      </div>
    );
  }
}
