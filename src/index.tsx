import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './app/App';

import 'shared/config/i18n/i18n';
import ErrorBoundary from 'app/providers/ErrorBoundary/ui/ErrorBoundary';

render(
    <BrowserRouter>
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
    </BrowserRouter>
    ,
    document.getElementById('root')
)
