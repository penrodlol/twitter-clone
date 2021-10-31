import { NextRouter, withRouter } from 'next/router';
import React from 'react';
import { supabase } from '../../utils/supabase';
import { Button } from '../ui/Button';
import Svg from '../ui/Svg';

interface AuthCardActionsProps {
  router: NextRouter;
}

export default withRouter(
  class AuthCardActions extends React.Component<AuthCardActionsProps> {
    constructor(props: AuthCardActionsProps) {
      super(props);
    }

    basicAuth(signIn: boolean) {
      if (signIn) {
        this.props.router.push('/auth/signin');
        return;
      }
    }

    googleAuth() {
      supabase.auth.signIn({
        provider: 'google',
      });
    }

    render() {
      const signin = this.props.router?.query.signin === 'true';

      return (
        <div>
          <div className="grid gap-3 w-[300px] mb-4">
            <Button
              status="secondary"
              full="true"
              size="sm"
              onClick={() => this.googleAuth()}
            >
              <Svg name="google" alt="Google logo" width={18} height={18} />
              <span>Sign {signin ? 'in' : 'up'} with Google</span>
            </Button>
            <Button
              status="secondary"
              full="true"
              size="sm"
              onClick={() => this.basicAuth(signin)}
            >
              Sign {signin ? 'in' : 'up'} with email
            </Button>
          </div>
        </div>
      );
    }
  },
);
