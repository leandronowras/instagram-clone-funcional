import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {lazy, Suspense} from 'react'
import UserContext from './contexts/user';
import useAuthListener from './hooks/use-auth-listener';


import * as ROUTES from './constants/routes'

const Dashboard = lazy(() => import ("./pages/dashboard"))
const Login = lazy(() => import ("./pages/login"))
const Signup = lazy(() => import ("./pages/signup"))
const Profile = lazy(() => import ("./pages/profile"))
const Notfound = lazy(() => import ("./pages/notfound"))

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path={ROUTES.LOGIN} component={Login} />
            <Route exact path={ROUTES.SIGN_UP} component={Signup} />
            <Route exact path={ROUTES.PROFILE} component={Profile} />
            <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route component={Notfound} />
          </Switch>
        </Suspense>

      </Router>
    </UserContext.Provider>
  );
}

export default App;
