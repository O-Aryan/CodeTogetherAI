import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Zap, Globe, Github, Moon, Sun, Monitor, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useApp } from '../contexts/AppContext';

export default function LandingPage() {
  const [roomId, setRoomId] = useState('');
  const [roomName, setRoomName] = useState('');
  const [isJoining, setIsJoining] = useState(false);
  const { theme, setTheme, isDark } = useTheme();
  const { actions, state } = useApp();

  const handleCreateRoom = () => {
    const name = roomName.trim() || 'Untitled Room';
    actions.createRoom(name);
  };

  const handleJoinRoom = () => {
    if (roomId.trim()) {
      actions.joinRoom(roomId.trim());
    }
  };

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Real-time Collaboration',
      description: 'Code together with multiple cursors and instant synchronization'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI-Powered Assistant',
      description: 'Get code suggestions, explanations, and improvements from Gemini AI'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Communication',
      description: 'Built-in chat with typing indicators and user presence'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Multi-language Support',
      description: 'Support for Python, JavaScript, C++, and more with real-time execution'
    }
  ];

  const themeOptions = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950 transition-colors duration-500">
      {/* Header */}
      <header className="relative z-50 px-4 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-medium">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              CodeCollab Editor
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4"
          >
            <div className="flex items-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-1 shadow-soft border border-gray-200/50 dark:border-gray-700/50">
              {themeOptions.map(({ value, icon: Icon, label }) => (
                <button
                  key={value}
                  onClick={() => setTheme(value as any)}
                  className={`p-2 rounded-md transition-all duration-200 ${
                    theme === value
                      ? 'bg-primary-500 text-white shadow-medium'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  title={label}
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
            <a
              href="https://github.com/O-bholu/"
              className="p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors shadow-soft border border-gray-200/50 dark:border-gray-700/50"
            >
              <Github className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
              Code Together
            </span>
            <br />
            <span className="text-gray-900 dark:text-gray-100">
              In Real-Time
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            The ultimate collaborative coding platform with AI assistance, real-time chat, 
            and multi-language support. Perfect for pair programming, interviews, and team projects.
          </motion.p>

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Create Room Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-8 shadow-strong border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-medium">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Create New Room
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Start a new collaborative session and invite your team
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Room name (optional)"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCreateRoom}
                  disabled={state.isLoading}
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-primary-600 hover:to-secondary-600 transition-all duration-200 shadow-medium hover:shadow-strong disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.isLoading ? 'Creating...' : 'Create Room'}
                </motion.button>
              </div>
            </motion.div>

            {/* Join Room Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-8 shadow-strong border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-success-500 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-medium">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Join Existing Room
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Enter a room ID to join an ongoing session
              </p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter room ID"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleJoinRoom}
                  disabled={!roomId.trim() || state.isLoading}
                  className="w-full bg-gradient-to-r from-accent-500 to-success-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-accent-600 hover:to-success-600 transition-all duration-200 shadow-medium hover:shadow-strong disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.isLoading ? 'Joining...' : 'Join Room'}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 shadow-soft hover:shadow-medium"
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Team Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Meet Our Team
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Team Member 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg overflow-hidden relative">
                  {/* 
                    To add your own picture:
                    1. Place your image in: public/images/bholu-yadav.jpg
                    2. Update the src below to: "/images/bholu-yadav.jpg"
                    3. Supported formats: jpg, png, webp, gif
                    
                    Alternative options:
                    - "/images/bholu-yadav.png" (if PNG format)
                    - "/images/profile.jpg" (if different name)
                    - "https://your-website.com/photo.jpg" (if hosted online)
                  */}
                  <img 
                    src="/images/bholu-yadav.jpg" 
                    alt="Bholu Yadav" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (target && fallback) {
                        target.style.display = 'none';
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center hidden">
                    <span className="text-white font-bold text-2xl">BY</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-200">Bholu Yadav</h4>
                <p className="text-indigo-400 text-sm mb-3">Full Stack Developer</p>
                <div className="space-y-1 text-xs text-gray-400">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-3 h-3" />
                    <span>vasu02062001@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-3 h-3" />
                    <span>+91 8090693422</span>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 mt-3">
                  <a href="https://github.com/O-bholu/" className="w-8 h-8 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/bholu-yadav-b64b3a293/" className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Team Member 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg overflow-hidden relative">
                  <img 
                    src="/images/aryan-pic.jpg" 
                    alt="Aryan Pandey" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (target && fallback) {
                        target.style.display = 'none';
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center hidden">
                    <span className="text-white font-bold text-2xl">AP</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-200">Aryan Pandey</h4>
                <p className="text-emerald-400 text-sm mb-3">Frontend Developer</p>
                <div className="space-y-1 text-xs text-gray-400">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-3 h-3" />
                    <span>aryanpanday4526@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-3 h-3" />
                    <span>+91 9624933937 </span>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 mt-3">
                  <a href="https://github.com/O-aryan" className="w-8 h-8 bg-gray-800 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com/in/aryan-pandey-0000000000" className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Team Member 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg overflow-hidden relative">
                  <img 
                   src="/images/vicky-kumar.jpg"
                    alt="Vicky Kumar" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (target && fallback) {
                        target.style.display = 'none';
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center hidden">
                    <span className="text-white font-bold text-2xl">VK</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-200">Vicky Kumar</h4>
                <p className="text-rose-400 text-sm mb-3">UI/UX Designer</p>
                <div className="space-y-1 text-xs text-gray-400">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-3 h-3" />
                    <span>vickykumar@example.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-3 h-3" />
                    <span>+91 8090693422</span>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 mt-3">
                  <a href="https://github.com/mariajohnson" className="w-8 h-8 bg-gray-800 hover:bg-rose-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com/in/mariajohnson" className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>

              {/* Team Member 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg overflow-hidden relative">
                  <img 
                   src="/images/bholu-yadav.jpg"
                    alt="Abhishek Singh" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (target && fallback) {
                        target.style.display = 'none';
                        fallback.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center hidden">
                    <span className="text-white font-bold text-2xl">AS</span>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-200">Abhishek Singh</h4>
                <p className="text-amber-400 text-sm mb-3">UI/UX Designer</p>
                <div className="space-y-1 text-xs text-gray-400">
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-3 h-3" />
                    <span>Abhishek@example.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-3 h-3" />
                    <span>+1 (555) 456-7890</span>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-2 mt-3">
                  <a href="https://github.com/O-bholu/" className="w-8 h-8 bg-gray-800 hover:bg-amber-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com/in/davidwilson" className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Copyright and Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="border-t border-gray-800 pt-6"
          >
            <div className="grid md:grid-cols-3 gap-6 items-center">
              {/* Copyright Section */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-3 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    CodeCollab Editor
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} This CodeCollab is made by Bholu Yadav.
                </p>
              </div>

              {/* Company Info */}
              <div className="text-center">
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2 text-gray-300">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Bholu Yadav , Team Leader</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-gray-300">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">contact@codecollab.com</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="text-center md:text-right">
                <h4 className="text-lg font-semibold mb-3 text-gray-200">Follow Us</h4>
                <div className="flex items-center justify-center md:justify-end space-x-4">
                  <a
                    href="https://github.com/O-bholu/"
                    className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/bholu-yadav-b64b3a293/"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:bholuy123@gmail.com"
                    className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    title="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}