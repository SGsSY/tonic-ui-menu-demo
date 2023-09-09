import React from "react";
import { TonicProvider } from "@tonic-ui/react";
import CenterBlock from "../components/CenterBlock";
import MyMenu from "../components/MyMenu";

const App = () => {
    return (
        <div className="root">
            <TonicProvider>
                <CenterBlock>
                    <MyMenu />
                </CenterBlock>
            </TonicProvider>
        </div>
    );
};

export default App;
