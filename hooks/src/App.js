import React from 'react';

import HookSwitcher from './use-state';
import ContextProvider from './use-context';
import UseEffectComp from './use-effect';

function App() {
  return (
    <div>
      <HookSwitcher></HookSwitcher>
      <ContextProvider />
      <UseEffectComp/>
    </div>
  );
}

export default App;
