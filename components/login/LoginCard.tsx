import { NextRouter, withRouter } from 'next/router';
import React from 'react';
import { Button } from '../ui/Button';
import Svg from '../ui/Svg';
import { LoginDisclaimer } from './LoginDisclaimer';

interface LoginCardProps {
  router: NextRouter;
}

export default withRouter(
  class LoginCard extends React.Component<LoginCardProps> {
    constructor(props: LoginCardProps) {
      super(props);
    }

    render() {
      return (
        <div>
          {this.props.router.isReady && (
            <div>
              <div className="mb-14">
                <Svg name="twitter" alt="Twitter Logo" width={40} height={40} />
              </div>
              <h1 className="text-7xl font-extrabold mb-14">Happening now</h1>
              <h3 className="text-3xl font-extrabold mb-18 mb-20">
                {this.props.router.query?.signIn === 'true'
                  ? 'Sign in to Twitter'
                  : 'Join Twitter today.'}
              </h3>
              <div className="grid gap-3 w-[300px] mb-4">
                <Button status="secondary" full="true" size="sm">
                  <Svg name="google" alt="Google logo" width={18} height={18} />
                  <span>Sign up with Google</span>
                </Button>
                <Button status="secondary" full="true" size="sm">
                  Sign up with email
                </Button>
              </div>
              {this.props.router.query?.signIn !== 'true' && (
                <LoginDisclaimer />
              )}
              {this.props.router.query?.signIn === 'true' ? (
                <p className="text-sm">
                  Dont have an account?
                  <button
                    className="cursor-pointer text-link ml-1"
                    onClick={() =>
                      this.props.router.push('/login?signIn=false')
                    }
                  >
                    Sign up
                  </button>
                </p>
              ) : (
                <p className="text-sm">
                  Already have an account?
                  <button
                    className="cursor-pointer text-link ml-1"
                    onClick={() => this.props.router.push('/login?signIn=true')}
                  >
                    Sign in
                  </button>
                </p>
              )}
            </div>
          )}
        </div>
      );
    }
  },
);
