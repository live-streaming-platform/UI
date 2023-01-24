import React from 'react';
import {NotificationMarker} from "./components/common";
import {Logo} from "./components/logos";
import {PageTemplate} from "./views/templates";

function App() {
    return (
        <div className="App">
            <PageTemplate>
                <NotificationMarker/>

            </PageTemplate>
        </div>
    );
}

export default App;
