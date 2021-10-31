import React from 'react';
import { Popover } from 'react-tiny-popover';
import { Button } from '../ui/Button';
import NavProfile from './NavProfile';
import NavProfileOptions from './NavProfileOptions';
import NavRoutes from './NavRoutes';

interface NavState {
  navProfilePopoverStatus: boolean;
}

const initialState: NavState = {
  navProfilePopoverStatus: false,
};

export class Nav extends React.Component<{}, NavState> {
  constructor(props: {}) {
    super(props);

    this.state = initialState;
  }

  componentWillUnmount() {
    this.toggleNavProfilePopoverStatus(false);
  }

  toggleNavProfilePopoverStatus(status?: boolean) {
    this.setState({
      navProfilePopoverStatus: status ?? !this.state.navProfilePopoverStatus,
    });
  }

  render() {
    return (
      <div className="relative h-full">
        <div className="mb-5">
          <NavRoutes />
        </div>
        <Button full="true">Tweet</Button>
        <div className="absolute bottom-5 left-0 right-0">
          <Popover
            containerClassName="shadow-white w-72 rounded-lg"
            isOpen={this.state.navProfilePopoverStatus}
            onClickOutside={() => this.toggleNavProfilePopoverStatus(false)}
            positions={['top']}
            padding={20}
            content={() => <NavProfileOptions />}
          >
            <div
              className="rounded-full hover:bg-basic-200"
              onClick={() => this.toggleNavProfilePopoverStatus()}
            >
              <NavProfile showEllipse={true} />
            </div>
          </Popover>
        </div>
      </div>
    );
  }
}
