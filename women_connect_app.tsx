import React, { useState } from 'react';
import { Heart, Users, MessageCircle, Globe, Shield, Sparkles, Search, Filter, Plus, UserPlus, Send, Image, Smile, X, Mail, Lock, User, Check } from 'lucide-react';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [activeTab, setActiveTab] = useState('discover');
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [showNewCircle, setShowNewCircle] = useState(false);
  const [showGroupChat, setShowGroupChat] = useState(false);
  const [selectedCircle, setSelectedCircle] = useState(null);
  const [chatMessage, setChatMessage] = useState('');
  const [signUpStep, setSignUpStep] = useState(1);
  const [messages, setMessages] = useState([]);
  const [expandedStory, setExpandedStory] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [userCircles, setUserCircles] = useState([]);

  const interests = [
    'Career Growth', 'Motherhood', 'Mental Health', 'Relationships',
    'Financial Independence', 'Spirituality', 'Health & Wellness',
    'Entrepreneurship', 'LGBTQ+',
    'Single Life', 'Divorce Support', 'Loss & Grief', 'Cultural Identity',
    'Narcissist Abuse', 'Toxic Relationships', 'Self Love', 'Boundaries'
  ];

  const circles = [
    {
      id: 1,
      name: 'Thrive Together',
      members: 2847,
      topic: 'Mental Health',
      description: 'A safe space to discuss anxiety, depression, and emotional wellness',
      location: 'Global',
      vibe: 'Supportive & Understanding',
      activeNow: 12
    },
    {
      id: 2,
      name: 'Breaking Free',
      members: 1523,
      topic: 'Narcissist Abuse',
      description: 'Healing from narcissistic relationships and reclaiming your power',
      location: 'Global',
      vibe: 'Empowering & Healing',
      activeNow: 8
    },
    {
      id: 3,
      name: 'Ambitious Sisters',
      members: 3912,
      topic: 'Career Growth',
      description: 'Navigating workplace challenges, promotions, and professional growth',
      location: 'Global',
      vibe: 'Motivated & Inspiring',
      activeNow: 23
    },
    {
      id: 4,
      name: 'Sacred Journeys',
      members: 892,
      topic: 'Spirituality',
      description: 'Exploring faith, beliefs, and spiritual practices from all traditions',
      location: 'Global',
      vibe: 'Reflective & Open',
      activeNow: 5
    },
    {
      id: 5,
      name: 'New Beginnings',
      members: 1247,
      topic: 'Divorce Support',
      description: 'Finding strength and rebuilding life after separation',
      location: 'Global',
      vibe: 'Compassionate & Strong',
      activeNow: 7
    },
    {
      id: 6,
      name: 'Money Moves',
      members: 2156,
      topic: 'Financial Independence',
      description: 'Building wealth, financial literacy, and economic freedom',
      location: 'Global',
      vibe: 'Practical & Empowering',
      activeNow: 15
    },
    {
      id: 7,
      name: 'Boundaries & Self-Love',
      members: 1834,
      topic: 'Self Love',
      description: 'Learning to set healthy boundaries and prioritize yourself',
      location: 'Global',
      vibe: 'Nurturing & Growth-Focused',
      activeNow: 11
    },
    {
      id: 8,
      name: 'Mom Life Unfiltered',
      members: 3201,
      topic: 'Motherhood',
      description: 'Real talk about motherhood - the beautiful, messy, and challenging',
      location: 'Global',
      vibe: 'Honest & Supportive',
      activeNow: 19
    },
    {
      id: 9,
      name: 'Toxic-Free Zone',
      members: 2098,
      topic: 'Toxic Relationships',
      description: 'Support for recognizing red flags and leaving harmful relationships',
      location: 'Global',
      vibe: 'Protective & Empowering',
      activeNow: 14
    },
    {
      id: 10,
      name: 'Love & Connection',
      members: 1678,
      topic: 'Relationships',
      description: 'Building healthy relationships, communication, and intimacy',
      location: 'Global',
      vibe: 'Warm & Understanding',
      activeNow: 9
    },
    {
      id: 11,
      name: 'Wellness Warriors',
      members: 2543,
      topic: 'Health & Wellness',
      description: 'Physical and mental health, fitness, nutrition, and self-care',
      location: 'Global',
      vibe: 'Energetic & Supportive',
      activeNow: 18
    }
  ];

  const chatMessages = [
    {
      id: 1,
      author: 'Sarah',
      message: 'Hey everyone! Just wanted to check in. How is everyone doing today?',
      time: '10:30 AM',
      avatar: '👩🏽'
    },
    {
      id: 2,
      author: 'Maya',
      message: 'Doing better today! Started therapy last week and it is already helping 💕',
      time: '10:32 AM',
      avatar: '👩🏾'
    },
    {
      id: 3,
      author: 'Emma',
      message: 'That is amazing Maya! So proud of you for taking that step 🌟',
      time: '10:35 AM',
      avatar: '👩🏼'
    },
    {
      id: 4,
      author: 'Priya',
      message: 'I have been struggling this week but reading everyone messages helps so much',
      time: '10:40 AM',
      avatar: '👩🏻'
    }
  ];

  const stories = [
    {
      id: 1,
      author: 'Maria, 34',
      topic: 'Mental Health',
      preview: 'After years of struggling in silence, this community gave me the courage to seek help...',
      fullStory: 'After years of struggling in silence, this community gave me the courage to seek help. I had been dealing with anxiety and depression since my early twenties, but I always felt like I had to be strong for everyone else. When I found this circle, I realized I wasn\'t alone. The support and understanding from other women who truly get it made all the difference. I started therapy three months ago, and for the first time in years, I feel like I\'m healing. To anyone reading this who\'s struggling - you deserve help, you deserve peace, and you are not alone. Thank you to every sister here who showed me that asking for help is actually the bravest thing you can do.',
      reactions: 847
    },
    {
      id: 2,
      author: 'Amara, 28',
      topic: 'Career Growth',
      preview: 'I asked for that promotion and got it! Thank you all for believing in me when...',
      fullStory: 'I asked for that promotion and got it! Thank you all for believing in me when I didn\'t believe in myself. For months, I watched male colleagues with less experience get promoted while I stayed in the same position. The imposter syndrome was real - I kept thinking I wasn\'t ready, wasn\'t qualified enough. But this community helped me see my worth. You all reminded me of my achievements, helped me practice my pitch, and gave me the confidence to walk into that meeting and advocate for myself. Last week, I got the promotion AND a 20% raise! To every woman here doubting herself - you are more capable than you know. We rise together!',
      reactions: 623
    },
    {
      id: 3,
      author: 'Sofia, 41',
      topic: 'Relationships',
      preview: 'It has been 6 months since I left. I am finally sleeping peacefully. To anyone still...',
      fullStory: 'It has been 6 months since I left. I am finally sleeping peacefully. To anyone still in a toxic relationship wondering if it gets better - it does. Leaving was the hardest thing I\'ve ever done. I was scared of being alone, scared of financial instability, scared of what people would think. But the women in this circle showed me what real support looks like. They helped me find resources, reminded me of my strength, and never judged me for the time it took to leave. Today, I have my own apartment, my kids are happier, and I\'m rediscovering who I am outside of that relationship. If you\'re reading this and you\'re scared to leave - your fear is valid, but you are stronger than you know. There is a whole community here ready to catch you when you take that leap.',
      reactions: 1205
    }
  ];

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const openGroupChat = (circle) => {
    if (!isSignedIn) {
      setShowSignIn(true);
      return;
    }
    setSelectedCircle(circle);
    setMessages([...chatMessages]);
    setShowGroupChat(true);
  };

  const sendMessage = () => {
    if (chatMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        author: 'You',
        message: chatMessage,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        avatar: '👩'
      };
      setMessages([...messages, newMessage]);
      setChatMessage('');
    }
  };

  const handleSignIn = () => {
    setIsSignedIn(true);
    setShowSignIn(false);
    setSignUpStep(1);
  };

  const joinCircle = (circle) => {
    if (!isSignedIn) {
      setShowSignIn(true);
      return;
    }
    if (!userCircles.find(c => c.id === circle.id)) {
      setUserCircles([...userCircles, circle]);
    }
  };

  if (showSignIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
          <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-8 text-white text-center">
            <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={32} fill="white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Welcome to Sisters Circle</h2>
            <p className="text-pink-100">Your safe space to connect and grow</p>
          </div>

          <div className="p-8">
            {signUpStep === 1 && (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Sign In</h3>
                  <p className="text-gray-600 text-sm">Welcome back, sister!</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                      />
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleSignIn}
                  className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all mb-4"
                >
                  Sign In
                </button>

                <div className="text-center">
                  <button 
                    onClick={() => setSignUpStep(2)}
                    className="text-pink-500 font-medium hover:text-pink-600"
                  >
                    Don't have an account? Sign Up
                  </button>
                </div>
              </>
            )}

            {signUpStep === 2 && (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Create Account</h3>
                  <p className="text-gray-600 text-sm">Join our community of sisters</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                      <input
                        type="password"
                        placeholder="Create a strong password"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                      />
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setSignUpStep(3)}
                  className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all mb-4"
                >
                  Continue
                </button>

                <div className="text-center">
                  <button 
                    onClick={() => setSignUpStep(1)}
                    className="text-pink-500 font-medium hover:text-pink-600"
                  >
                    Already have an account? Sign In
                  </button>
                </div>
              </>
            )}

            {signUpStep === 3 && (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Choose Your Interests</h3>
                  <p className="text-gray-600 text-sm">Help us connect you with the right circles</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 max-h-64 overflow-y-auto">
                  {interests.map(interest => (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedInterests.includes(interest)
                          ? 'bg-pink-400 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {selectedInterests.includes(interest) && <Check size={14} className="inline mr-1" />}
                      {interest}
                    </button>
                  ))}
                </div>

                <button 
                  onClick={handleSignIn}
                  className="w-full bg-gradient-to-r from-pink-400 to-rose-400 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all mb-4"
                >
                  Complete Sign Up
                </button>

                <div className="text-center">
                  <button 
                    onClick={() => setSignUpStep(2)}
                    className="text-gray-500 text-sm hover:text-gray-700"
                  >
                    ← Back
                  </button>
                </div>
              </>
            )}

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                By continuing, you agree to our Terms of Service and Privacy Policy. 
                We are committed to keeping your information safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-pink-400 to-rose-400 p-2 rounded-2xl">
                <Heart className="text-white" size={24} fill="white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  Sisters Circle
                </h1>
                <p className="text-xs text-gray-500">Where women rise together</p>
              </div>
            </div>
            {isSignedIn ? (
              <button 
                onClick={() => setShowProfile(true)}
                className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transition-all"
              >
                My Profile
              </button>
            ) : (
              <button 
                onClick={() => setShowSignIn(true)}
                className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-4 py-2 rounded-full font-medium hover:shadow-lg transition-all"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </header>

      <nav className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-8">
            {[
              { id: 'discover', label: 'Discover', icon: Globe },
              { id: 'circles', label: 'My Circles', icon: Users },
              { id: 'stories', label: 'Stories', icon: MessageCircle }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-pink-400 text-pink-500'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon size={18} />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {activeTab === 'discover' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-8 text-white">
              <div className="flex items-start justify-between">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold mb-3">Welcome to Your Sisterhood</h2>
                  <p className="text-pink-100 text-lg mb-4">
                    Connect with women worldwide who share your journey, beliefs, and experiences. 
                    This is your safe space to be vulnerable, grow, and thrive together.
                  </p>
                  <p className="text-pink-50 text-sm mb-6 italic">
                    We encourage professionals to join our circle and donate a bit of time to support our women around the world. Your expertise can change lives.
                  </p>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => isSignedIn ? setShowNewCircle(true) : setShowSignIn(true)}
                      className="bg-white text-pink-500 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                    >
                      <Plus size={20} />
                      Start a Circle
                    </button>
                  </div>
                </div>
                <Shield size={120} className="text-pink-300 opacity-50" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex gap-4 mb-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search circles by topic, belief, or experience..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                </div>
                <button className="px-6 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 flex items-center gap-2">
                  <Filter size={20} />
                  Filter
                </button>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-700 mb-3">Quick Filters:</p>
                <div className="flex flex-wrap gap-2">
                  {interests.slice(0, 8).map(interest => (
                    <button
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedInterests.includes(interest)
                          ? 'bg-pink-400 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Discover Circles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {circles
                  .filter(circle => selectedInterests.length === 0 || selectedInterests.includes(circle.topic))
                  .map(circle => (
                  <div key={circle.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-1">{circle.name}</h4>
                        <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-medium">
                          {circle.topic}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-gray-500 mb-1">
                          <Users size={16} />
                          <span className="text-sm font-medium">{circle.members.toLocaleString()}</span>
                        </div>
                        <span className="text-xs text-green-600 font-medium">
                          {circle.activeNow} active now
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{circle.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Globe size={14} />
                          {circle.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Sparkles size={14} />
                          {circle.vibe}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => openGroupChat(circle)}
                          className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full font-medium hover:bg-pink-200 transition-all flex items-center gap-2"
                        >
                          <MessageCircle size={16} />
                          Chat
                        </button>
                        <button 
                          onClick={() => joinCircle(circle)}
                          className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg transition-all flex items-center gap-2"
                        >
                          {userCircles.find(c => c.id === circle.id) ? (
                            <>
                              <Check size={16} />
                              Joined
                            </>
                          ) : (
                            <>
                              <UserPlus size={16} />
                              Join
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {circles.filter(circle => selectedInterests.length === 0 || selectedInterests.includes(circle.topic)).length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">No circles found matching your selected interests.</p>
                  <button 
                    onClick={() => setSelectedInterests([])}
                    className="text-pink-500 font-medium hover:text-pink-600"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'circles' && (
          <div className="space-y-6">
            {userCircles.length === 0 ? (
              <div className="text-center py-12">
                <Users size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Circles</h3>
                <p className="text-gray-600 mb-6">Join circles to connect with sisters who understand your journey</p>
                <button 
                  onClick={() => setActiveTab('discover')}
                  className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                >
                  Discover Circles
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-800">Your Circles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {userCircles.map(circle => (
                    <div key={circle.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 mb-1">{circle.name}</h4>
                          <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-medium">
                            {circle.topic}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-gray-500 mb-1">
                            <Users size={16} />
                            <span className="text-sm font-medium">{circle.members.toLocaleString()}</span>
                          </div>
                          <span className="text-xs text-green-600 font-medium">
                            {circle.activeNow} active now
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{circle.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Globe size={14} />
                            {circle.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Sparkles size={14} />
                            {circle.vibe}
                          </span>
                        </div>
                        <button 
                          onClick={() => openGroupChat(circle)}
                          className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg transition-all flex items-center gap-2"
                        >
                          <MessageCircle size={16} />
                          Open Chat
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {activeTab === 'stories' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Inspiring Stories</h3>
              <p className="text-gray-600 mb-4">Real experiences from real women. Share your journey, inspire others.</p>
              <button 
                onClick={() => isSignedIn ? null : setShowSignIn(true)}
                className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Share Your Story
              </button>
            </div>

            <div className="space-y-4">
              {stories.map(story => (
                <div key={story.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold text-gray-800">{story.author}</p>
                      <span className="text-xs text-pink-500 font-medium">{story.topic}</span>
                    </div>
                    <div className="flex items-center gap-1 text-rose-400">
                      <Heart size={16} fill="currentColor" />
                      <span className="text-sm font-medium">{story.reactions}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {expandedStory === story.id ? story.fullStory : story.preview}
                  </p>
                  <button 
                    onClick={() => setExpandedStory(expandedStory === story.id ? null : story.id)}
                    className="text-pink-500 font-medium text-sm mt-3 hover:text-pink-600"
                  >
                    {expandedStory === story.id ? 'Show less ←' : 'Read more →'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {showGroupChat && selectedCircle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-4xl w-full h-[600px] flex flex-col overflow-hidden">
            <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{selectedCircle.name}</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-sm text-pink-100">
                      {selectedCircle.members.toLocaleString()} members
                    </span>
                    <span className="text-sm text-pink-100">
                      • {selectedCircle.activeNow} active now
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setShowGroupChat(false)}
                  className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
              {messages.map(msg => (
                <div key={msg.id} className="flex gap-3">
                  <div className="text-3xl flex-shrink-0">{msg.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-semibold text-gray-800">{msg.author}</span>
                      <span className="text-xs text-gray-500">{msg.time}</span>
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm">
                      <p className="text-gray-700">{msg.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-3">
                <button className="p-3 hover:bg-gray-100 rounded-full transition-all">
                  <Image size={20} className="text-gray-500" />
                </button>
                <button className="p-3 hover:bg-gray-100 rounded-full transition-all">
                  <Smile size={20} className="text-gray-500" />
                </button>
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Share your thoughts with the circle..."
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <button 
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-pink-400 to-rose-400 text-white p-3 rounded-full hover:shadow-lg transition-all"
                >
                  <Send size={20} />
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Remember: This is a safe space. Be kind, supportive, and respectful.
              </p>
            </div>
          </div>
        </div>
      )}

      {showNewCircle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Start a New Circle</h3>
            <p className="text-gray-600 mb-6">Create a safe space for women to connect and support each other.</p>
            
            <div className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="Circle Name"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400">
                <option>Select Topic</option>
                {interests.map(interest => (
                  <option key={interest}>{interest}</option>
                ))}
              </select>
              <textarea
                placeholder="Describe your circle..."
                rows="4"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowNewCircle(false)}
                className="flex-1 px-6 py-3 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="flex-1 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                Create Circle
              </button>
            </div>
          </div>
        </div>
      )}

      {showProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">My Profile</h3>
              <button 
                onClick={() => setShowProfile(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-all"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            <div className="text-center mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl">
                👩
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-1">Welcome, Sister!</h4>
              <p className="text-gray-500 text-sm">Member since today</p>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Display Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">About Me</label>
                <textarea
                  placeholder="Share a bit about yourself..."
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">My Interests</label>
                <div className="flex flex-wrap gap-2">
                  {selectedInterests.map(interest => (
                    <span key={interest} className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                      {interest}
                    </span>
                  ))}
                  {selectedInterests.length === 0 && (
                    <p className="text-gray-400 text-sm">No interests selected yet</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowProfile(false)}
                className="flex-1 px-6 py-3 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50"
              >
                Cancel
              </button>
              <button className="flex-1 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                Save Changes
              </button>
            </div>

            <button 
              onClick={() => {
                setIsSignedIn(false);
                setShowProfile(false);
              }}
              className="w-full mt-4 text-red-500 text-sm font-medium hover:text-red-600"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}

      <footer className="bg-white border-t mt-12 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield size={20} className="text-pink-400" />
            <span className="font-semibold text-gray-700">Your safety is our priority</span>
          </div>
          <p className="text-sm text-gray-500">
            All circles are moderated. Harassment, hate speech, and harmful content are not tolerated.
            <br />Every woman deserves a safe space to be heard.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;