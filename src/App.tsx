import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppProvider, useApp } from './contexts/AppContext';
import LandingPage from './components/LandingPage';
import CollaborativeEditor from './components/CollaborativeEditor';

function AppContent() {
  const { state, actions } = useApp();
  const { roomId } = useParams();

  React.useEffect(() => {
    if (roomId && !state.currentRoom) {
      actions.joinRoom(roomId);
    }
  }, [roomId, state.currentRoom, actions]);

  return (
    <div className="min-h-screen transition-colors duration-300">
      {state.currentRoom ? <CollaborativeEditor /> : <LandingPage />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AppProvider>
          <Routes>
            <Route path="/" element={<AppContent />} />
            <Route path="/:roomId" element={<AppContent />} />
          </Routes>
        </AppProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;