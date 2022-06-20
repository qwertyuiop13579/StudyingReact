import React from 'react';

import HookSwitcher from './use-state';
import ContextProvider from './use-context';

function App() {
  return (
    <div>
      <HookSwitcher></HookSwitcher>
      <ContextProvider />
    </div>
  );
}

export default App;
