import React from 'react';

import {PageTemplate} from "./views/templates";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPageContent from "./components/routes/MainPageContent/MainPageContent";
import ChannelPageContent from "./components/routes/ChannelPageContent/ChannelPageContent";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <PageTemplate>
                    <Routes>
                        <Route path={'/'}>
                            <Route index  element={<MainPageContent/>}/>
                            <Route path={':username'} element={<ChannelPageContent/>}/>
                        </Route>
                    </Routes>
                </PageTemplate>
            </BrowserRouter>
        </div>
    );
}

export default App;
