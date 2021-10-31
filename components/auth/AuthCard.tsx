import { NextRouter, withRouter } from 'next/router';
import React from 'react';
import Svg from '../ui/Svg';
import AuthCardActions from './AuthCardActions';
import AuthCardToggle from './AuthCardToggle';
import { AuthDisclaimer } from './AuthDisclaimer';

interface AuthCardProps {
  router: NextRouter;
}

export default withRouter(
  class AuthCard extends React.Component<AuthCardProps> {
    constructor(props: AuthCardProps) {
      super(props);
    }

    render() {
      const signin = this.props.router?.query.signin === 'true';

      return (
        <div>
          {this.props.router.isReady && (
            <div>
              <div className="mb-14">
                <Svg name="twitter" alt="Twitter Logo" width={40} height={40} />
              </div>
              <h1 className="text-7xl font-extrabold mb-14">Happening now</h1>
              <h3 className="text-3xl font-extrabold mb-18 mb-20">
                {signin ? 'Sign in to Twitter' : 'Join Twitter today.'}
              </h3>
              <AuthCardActions />
              {!signin && <AuthDisclaimer />}
              <AuthCardToggle />
            </div>
          )}
        </div>
      );
    }
  },
);
