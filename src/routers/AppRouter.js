import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import AddExpenseComponentPage from "../components/AddExpenseComponentPage";
import EditComponentPage from "../components/EditComponentPage";
import HelpComponentPage from "../components/HelpComponentPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={ExpenseDashboardPage} exact={true} />
        <Route path='/create' component={AddExpenseComponentPage} />
        <Route path='/edit/:id' component={EditComponentPage} />
        <Route path='/help' component={HelpComponentPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
