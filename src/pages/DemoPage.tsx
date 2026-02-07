import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState('ai-responses');
  const [userMessage, setUserMessage] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Hello! How can I help you today?' }
  ]);
  const [typing, setTyping] = useState(false);

  const aiSuggestions = [
    { type: 'Professional', text: 'Thank you for reaching out. I\'d be happy to assist you with this issue. Could you provide more details?' },
    { type: 'Empathetic', text: 'I understand this must be frustrating. Let me help you resolve this right away.' },
    { type: 'Technical', text: 'I\'ve reviewed your case. The issue appears to be related to configuration. Here\'s the solution...' }
  ];

  const analyticsData = {
    totalTickets: 1247,
    resolved: 1089,
    avgResponseTime: '1.8 min',
    csat: 96,
    trending: [
      { category: 'Technical', count: 423, change: '+12%' },
      { category: 'Billing', count: 287, change: '-5%' },
      { category: 'Account', count: 198, change: '+8%' }
    ]
  };

  const handleSendMessage = () => {
    if (!userMessage.trim()) return;
    
    setMessages([...messages, { role: 'user', text: userMessage }]);
    setUserMessage('');
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        text: 'I understand your concern. Let me help you with that right away. Based on our knowledge base, here are some solutions...' 
      }]);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Feature Demos</h1>
              <p className="text-gray-600">Experience our AI-powered features in action</p>
            </div>
            <Link to="/" className="text-indigo-600 hover:text-indigo-700 font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-2 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
            <button
              onClick={() => setActiveTab('ai-responses')}
              className={`px-4 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'ai-responses' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              🤖 AI Responses
            </button>
            <button
              onClick={() => setActiveTab('collaboration')}
              className={`px-4 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'collaboration' 
                  ? 'bg-purple-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              💬 Collaboration
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-4 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'analytics' 
                  ? 'bg-green-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              📊 Analytics
            </button>
            <button
              onClick={() => setActiveTab('routing')}
              className={`px-4 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'routing' 
                  ? 'bg-orange-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              🎫 Routing
            </button>
            <button
              onClick={() => setActiveTab('translation')}
              className={`px-4 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'translation' 
                  ? 'bg-cyan-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              🌍 Translation
            </button>
            <button
              onClick={() => setActiveTab('knowledge')}
              className={`px-4 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'knowledge' 
                  ? 'bg-yellow-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              📚 Knowledge
            </button>
          </div>
        </div>

        {/* AI Responses Demo */}
        {activeTab === 'ai-responses' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Live Chat with AI Assistance</h2>
              
              <div className="bg-gray-50 rounded-lg p-4 h-96 overflow-y-auto mb-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`mb-4 ${msg.role === 'user' ? 'text-right' : ''}`}>
                    <div className={`inline-block px-4 py-2 rounded-lg ${
                      msg.role === 'user' 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-white border border-gray-200'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className="flex items-center gap-2 text-gray-500">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span className="text-sm">AI is typing...</span>
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium"
                >
                  Send
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 border border-blue-100">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-2xl">✨</span> AI-Generated Suggestions
                </h3>
                <div className="space-y-3">
                  {aiSuggestions.map((suggestion, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg border border-blue-200 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                          {suggestion.type}
                        </span>
                        <span className="text-xs text-gray-500">95% confidence</span>
                      </div>
                      <p className="text-sm text-gray-700">{suggestion.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">Context-aware responses</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">Sentiment analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">Multiple tone options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">Powered by GPT-4</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Real-Time Collaboration Demo */}
        {activeTab === 'collaboration' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Agent Collaboration</h2>
              
              <div className="space-y-4">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    Online Agents (4)
                  </h3>
                  <div className="space-y-2">
                    {['Sarah Johnson', 'Mike Chen', 'Emily Rodriguez', 'David Park'].map((name, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-white p-3 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                            {name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-medium">{name}</p>
                            <p className="text-xs text-gray-500">Currently handling 3 tickets</p>
                          </div>
                        </div>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          Available
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Typing Indicators</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                      <span>Sarah is typing on Ticket #1234</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                      <span>Mike is viewing Ticket #1235</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-6 border border-purple-100">
                <h3 className="text-xl font-bold mb-4">WebSocket Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <p className="font-semibold">Real-time Updates</p>
                      <p className="text-sm text-gray-600">Instant notifications for ticket changes</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">👥</span>
                    <div>
                      <p className="font-semibold">Presence Tracking</p>
                      <p className="text-sm text-gray-600">See who's online and available</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💬</span>
                    <div>
                      <p className="font-semibold">Live Collaboration</p>
                      <p className="text-sm text-gray-600">Multiple agents can work together</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Activity Feed</h3>
                <div className="space-y-3">
                  {[
                    { agent: 'Sarah', action: 'Updated ticket status', time: '2 min ago', color: 'blue' },
                    { agent: 'Mike', action: 'Added a comment', time: '5 min ago', color: 'green' },
                    { agent: 'Emily', action: 'Changed priority to High', time: '8 min ago', color: 'red' }
                  ].map((activity, idx) => (
                    <div key={idx} className={`border-l-4 border-${activity.color}-500 pl-4 py-2`}>
                      <p className="font-medium text-gray-900">{activity.agent} {activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Demo */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white">
                <div className="text-sm font-medium mb-2">Total Tickets</div>
                <div className="text-4xl font-bold">{analyticsData.totalTickets}</div>
                <div className="text-sm mt-2 text-blue-100">↑ 12% from last month</div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
                <div className="text-sm font-medium mb-2">Resolved</div>
                <div className="text-4xl font-bold">{analyticsData.resolved}</div>
                <div className="text-sm mt-2 text-green-100">87% resolution rate</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
                <div className="text-sm font-medium mb-2">Avg Response</div>
                <div className="text-4xl font-bold">{analyticsData.avgResponseTime}</div>
                <div className="text-sm mt-2 text-purple-100">↓ 15% improvement</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl shadow-lg p-6 text-white">
                <div className="text-sm font-medium mb-2">CSAT Score</div>
                <div className="text-4xl font-bold">{analyticsData.csat}%</div>
                <div className="text-sm mt-2 text-yellow-100">Excellent rating</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">Trending Categories</h3>
                <div className="space-y-4">
                  {analyticsData.trending.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{item.category}</span>
                        <span className={`text-sm ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {item.change}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${idx === 0 ? 'bg-blue-600' : idx === 1 ? 'bg-purple-600' : 'bg-green-600'}`}
                            style={{ width: `${(item.count / analyticsData.totalTickets) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{item.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">SLA Compliance</h3>
                <div className="space-y-4">
                  {[
                    { level: 'Critical', compliance: 98, target: 95, color: 'red' },
                    { level: 'High', compliance: 94, target: 90, color: 'orange' },
                    { level: 'Medium', compliance: 96, target: 85, color: 'yellow' },
                    { level: 'Low', compliance: 99, target: 80, color: 'green' }
                  ].map((sla, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{sla.level} Priority</span>
                        <span className="text-sm text-gray-600">{sla.compliance}% (Target: {sla.target}%)</span>
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full bg-${sla.color}-600`}
                          style={{ width: `${sla.compliance}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other tabs would go here... */}
        {activeTab === 'routing' && (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">🎫</div>
            <h2 className="text-2xl font-bold mb-4">Smart Ticket Routing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ML-powered routing system that assigns tickets to the most suitable agents based on expertise, workload, and historical performance.
            </p>
          </div>
        )}

        {activeTab === 'translation' && (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">🌍</div>
            <h2 className="text-2xl font-bold mb-4">Multi-Language Support</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Automatic translation for 60+ languages with real-time language detection and bidirectional communication.
            </p>
          </div>
        )}

        {activeTab === 'knowledge' && (
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-2xl font-bold mb-4">Knowledge Base Search</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Qdrant-powered semantic search that finds relevant articles and automatically suggests helpful content based on ticket context.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
