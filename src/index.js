import React from 'react';
import ReactDOM from 'react-dom';
import DragonsOfMugloar from './DragonsOfMugloar';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(<DragonsOfMugloar />, document.getElementById('root'));
serviceWorker.unregister();
