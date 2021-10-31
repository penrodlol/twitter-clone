import { NextRouter, withRouter } from 'next/router';
import React from 'react';
import { Button } from '../ui/Button';
import Svg from '../ui/Svg';

interface LogoutCardProps {
  router: NextRouter;
}

export default withRouter(
  class LogoutCard extends React.Component<LogoutCardProps> {
    logout() {
      this.props.router.push({
        pathname: '/auth',
        query: { signin: false },
      });
    }

    render() {
      return (
        <div className="m-auto w-[320px] max-w-[600px] bg-basic-400 rounded-lg p-[30px]">
          <div className="h-10 text-center mb-5">
            <Svg name="twitter" alt="Twitter Logo" width={40} height={40} />
          </div>
          <h3 className="font-bold text-xl mb-1">Log out of Twitter?</h3>
          <p className="text-sm text-gray-400 mb-5">
            You can always log back in at any time. If you just want to switch
            accounts, you can do that by adding an existing account.
          </p>
          <div className="grid gap-4 font-sm">
            <Button
              status="secondary"
              size="sm"
              full="true"
              onClick={() => this.logout()}
            >
              <span>Log Out</span>
            </Button>
            <Button status="outline" size="sm" full="true">
              <span>Cancel</span>
            </Button>
          </div>
        </div>
      );
    }
  },
);
