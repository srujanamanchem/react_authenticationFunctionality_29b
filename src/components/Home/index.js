import Header from '../Header'
import './index.css'
import LogoutButton from '../LogoutButton'

const Home = () => (
  <>
    <Header />
    <div className="home-route">
      <h1>Home Route</h1>
      <LogoutButton />
    </div>
  </>
)

export default Home
