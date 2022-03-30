import React from "react";
import { Routes, Route } from 'react-router'
import dashboard from "./components/Dashboard"
import Login from "./components/Login"
import cohortForm from "./components/Forms/CohortForm";

const Router = () => {
  return (
      <Routes>
          <Route exact path="/login" component={Login} />
          <Route path="/dashboard" component={dashboard} />
          <Route path="/cohortForm" component={cohortForm}/>
      </Routes>
  )
}

export default Router




