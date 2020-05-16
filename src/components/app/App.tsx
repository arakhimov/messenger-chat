import React from 'react';
import { Messanger } from '../messanger/Messanger';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

const MessangerWithRouter = withRouter(Messanger);

export const App: React.FC = () => (<Router><MessangerWithRouter /></Router>);