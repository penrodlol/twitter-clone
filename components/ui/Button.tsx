import React, { ButtonHTMLAttributes } from 'react';

type ButtonStatus = 'primary' | 'secondary' | 'basic' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  status?: ButtonStatus;
  size?: ButtonSize;
  full?: string;
}

export class Button extends React.Component<ButtonProps> {
  fullClass = this.props.full === 'true' ? 'w-full' : 'w-max';

  statusClass() {
    switch (this.props.status) {
      case 'secondary':
        return 'bg-white text-black';
      case 'basic':
        return 'text-primary-100';
      case 'outline':
        return 'bg-transparent border';
      default:
        return 'bg-primary-100 hover:bg-primary-200';
    }
  }

  sizeClass() {
    switch (this.props.size) {
      case 'sm':
        return 'text-sm h-[40px]';
      case 'lg':
        return 'text-lg h-[49px]';
      default:
        return 'text-base h-[49px]';
    }
  }

  render() {
    return (
      <button
        className={`
          ${this.fullClass} ${this.statusClass()} ${this.sizeClass()}
          rounded-full font-bold min-w-[49px]
          pl-8 pr-8 grid grid-flow-col
          items-center gap-2 justify-center
        `}
        {...this.props}
      >
        {this.props.children}
      </button>
    );
  }
}
