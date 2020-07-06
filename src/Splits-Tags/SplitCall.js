import React from 'react';
import Split from './Split';
import './SplitCall.css';

function SplitCall() {
    return (
        <main className='Split-Call'>
            <Split className='left' flexBasis={2}>
              Content one
            </Split>
            <Split className='right'>
              Content Two
            </Split>
        </main>
      );
}

export default SplitCall;