import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import "./styles/app.scss";

render (
    <p>Here goes the element</p>,
    document.getElementById('app')
);
