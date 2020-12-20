import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Users from "./pages/Users";
import Post from "./pages/Post";

const App = () => {
  //
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/posts" component={Post} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
