import React from 'react';
import { Component } from 'react';

import Letter from './letter';

export default class Logo extends Component {
  render() {
    return (
      <section className="smoothlogo">
        <div className="smoothlogo__row">
          <Letter value="S"/>
          <Letter value="M"/>
          <Letter value="O"/>
        </div>
        <div className="smoothlogo__row">
          <Letter value="O"/>
          <Letter value="T"/>
          <Letter value="H"/>
        </div>
        <div className="smoothlogo__row">
          <Letter value="I"/>
          <Letter value="S"/>
          <Letter value="M"/>
        </div>
      </section>
    );
  }
}
