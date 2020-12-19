import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Users from "./pages/Users";
import Posts from "./pages/Posts";

const App = () => {
  //
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/posts" component={Posts} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
