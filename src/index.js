import React from 'react';
import ReactDOM from 'react-dom';
import DragonsOfMugloar from './DragonsOfMugloar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<DragonsOfMugloar />, document.getElementById('root'));
serviceWorker.unregister();
