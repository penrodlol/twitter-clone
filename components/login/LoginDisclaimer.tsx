import React from 'react';

export class LoginDisclaimer extends React.Component {
  render() {
    return (
      <p className="text-xs text-gray-300 max-w-[400px] mb-6">
        By signing up, you agree to the
        <a
          href="https://twitter.com/en/tos"
          className="cursor-pointer text-link mx-1"
          target="_blank"
          rel="noreferrer"
        >
          Terms of Service
        </a>
        and
        <a
          href="https://twitter.com/en/privacy"
          className="cursor-pointer text-link mx-1"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
        , including
        <a
          href="https://help.twitter.com/en/rules-and-policies/twitter-cookies"
          className="cursor-pointer text-link ml-1"
          target="_blank"
          rel="noreferrer"
        >
          Cookie Use
        </a>
        .
      </p>
    );
  }
}
