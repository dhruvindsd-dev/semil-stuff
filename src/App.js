import './App.css'
// import Login from './components/Login';
import AcademicCard from './components/AcademicCard'
import AssignmetsPanel from './components/AssignmentsPanel'
import Badge from './components/Badge'
import Banner from './components/Banner'
import BreadCrumb from './components/BreadCrumb'
import Footer from './components/Footer'
import OngoingPanel from './components/OngoingPanel'
import ProfileBanner from './components/ProfileBanner'
import Rank from './components/Rank'
import SessionCard from './components/SessionCard'
import SideBar from './components/SideBar'

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#F3F3F3' }}>
      <div
        style={{
          position: 'sticky',
          top: '0',
          zIndex: '100',
        }}>
        <Banner />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr' }}>
        <SideBar />
        <div>
          <div
            style={{
              position: 'sticky',
              top: '62px',
              zIndex: '100',
            }}>
            <BreadCrumb />
            <ProfileBanner />
          </div>

          <AcademicCard />
          <SessionCard />
          <div
            className="flex-container justify-content-center align-items-center"
            style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
            <OngoingPanel />
            <AssignmetsPanel />
          </div>
          <br />
          <Rank />
          <Badge />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
