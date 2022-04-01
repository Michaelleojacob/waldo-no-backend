import {render} from 'react-dom';
import App from './app/app';
import './index.css';

const Script = () => {
    return (
        <div>
            <div>
                <App />
            </div>
        </div>
    )
}

render(<Script />, document.getElementById('root'))