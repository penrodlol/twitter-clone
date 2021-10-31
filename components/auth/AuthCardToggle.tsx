import { NextRouter, withRouter } from 'next/router';
import React from 'react';

export default withRouter(
  class AuthCardToggle extends React.Component<{ router: NextRouter }> {
    toggleSignIn(signin: boolean) {
      this.props.router.push({
        pathname: '/auth',
        query: { signin: signin },
      });
    }

    render() {
      return (
        <div>
          {this.props.router?.query.signin === 'true' ? (
            <p className="text-sm">
              Dont have an account?
              <button
                className="cursor-pointer text-link ml-1"
                onClick={() => this.toggleSignIn(false)}
              >
                Sign up
              </button>
            </p>
          ) : (
            <p className="text-sm">
              Already have an account?
              <button
                className="cursor-pointer text-link ml-1"
                onClick={() => this.toggleSignIn(true)}
              >
                Sign in
              </button>
            </p>
          )}
        </div>
      );
    }
  },
);
