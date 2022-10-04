import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Admin from "./layouts/Admin";
import { Login } from "./layouts/Login";

function App() {
    return (
        <Switch>
            <Route path="/login" render={(props) => <Login />} />
            <Route path="/" render={(props) => <Admin {...props} />} />
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export default App;
