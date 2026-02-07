import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg5djlzMy02IDYtNmgybDMtM3YtMmwtMy0zaDJsMy0zdi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="text-white text-sm font-medium">🚀 Powered by GPT-4 & Advanced AI</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Support That <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-300">Understands</span> You
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Experience intelligent customer support with AI-powered responses, real-time collaboration, 
              and seamless ticket management. Available 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/register"
                className="group bg-white hover:bg-gray-50 text-indigo-600 px-10 py-4 rounded-xl text-lg font-bold shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                Start Free Trial
                <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
              </Link>
              <Link
                to="/login"
                className="bg-transparent hover:bg-white/10 text-white px-10 py-4 rounded-xl text-lg font-bold border-2 border-white/30 backdrop-blur-sm transition-all duration-200"
              >
                Sign In
              </Link>
            </div>
            
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-green-300 text-xl">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300 text-xl">✓</span>
                <span>Setup in 2 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-300 text-xl">✓</span>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">&lt;2min</div>
              <div className="text-gray-600">Avg Response Time</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">10k+</div>
              <div className="text-gray-600">Tickets Resolved</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">24/7</div>
              <div className="text-gray-600">AI Availability</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to deliver exceptional customer support at scale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:scale-105">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:rotate-6 transition-transform">
                🤖
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">AI-Powered Responses</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                GPT-4 powered AI generates contextual responses, suggests solutions, and learns from your knowledge base.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Smart reply suggestions</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Sentiment analysis</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✓</span> Auto-categorization</li>
              </ul>
              <Link to="/demo" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Try Demo →
              </Link>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 hover:scale-105">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:rotate-6 transition-transform">
                💬
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Real-Time Collaboration</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                WebSocket-powered live chat with typing indicators, presence tracking, and instant notifications.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-center gap-2"><span className="text-purple-500">✓</span> Live chat support</li>
                <li className="flex items-center gap-2"><span className="text-purple-500">✓</span> Agent collaboration</li>
                <li className="flex items-center gap-2"><span className="text-purple-500">✓</span> Typing indicators</li>
              </ul>
              <Link to="/demo" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Try Demo →
              </Link>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-100 hover:scale-105">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:rotate-6 transition-transform">
                📊
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Advanced Analytics</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Track performance metrics, SLA compliance, and customer satisfaction with comprehensive dashboards.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> CSAT & NPS tracking</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> SLA monitoring</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Performance insights</li>
              </ul>
              <Link to="/demo" className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Try Demo →
              </Link>
            </div>

            <div className="group bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:scale-105">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:rotate-6 transition-transform">
                🎫
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Smart Ticket Routing</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                ML-powered ticket routing assigns cases to the best agents based on expertise and workload.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-center gap-2"><span className="text-orange-500">✓</span> Auto-assignment</li>
                <li className="flex items-center gap-2"><span className="text-orange-500">✓</span> Priority detection</li>
                <li className="flex items-center gap-2"><span className="text-orange-500">✓</span> Load balancing</li>
              </ul>
              <Link to="/demo" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Try Demo →
              </Link>
            </div>

            <div className="group bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-cyan-100 hover:scale-105">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:rotate-6 transition-transform">
                🌍
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Multi-Language Support</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Automatic translation for 60+ languages with language detection and bidirectional communication.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-center gap-2"><span className="text-cyan-500">✓</span> 60+ languages</li>
                <li className="flex items-center gap-2"><span className="text-cyan-500">✓</span> Auto-detection</li>
                <li className="flex items-center gap-2"><span className="text-cyan-500">✓</span> Real-time translation</li>
              </ul>
              <Link to="/demo" className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Try Demo →
              </Link>
            </div>

            <div className="group bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-yellow-100 hover:scale-105">
              <div className="bg-gradient-to-br from-yellow-500 to-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transform group-hover:rotate-6 transition-transform">
                📚
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Knowledge Base Search</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Qdrant-powered semantic search finds relevant articles and suggests helpful content automatically.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li className="flex items-center gap-2"><span className="text-yellow-500">✓</span> Semantic search</li>
                <li className="flex items-center gap-2"><span className="text-yellow-500">✓</span> Auto-suggestions</li>
                <li className="flex items-center gap-2"><span className="text-yellow-500">✓</span> Vector embeddings</li>
              </ul>
              <Link to="/demo" className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Try Demo →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Support?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join thousands of companies delivering exceptional customer experiences with AI-powered support.
          </p>
          <Link
            to="/register"
            className="inline-block bg-white hover:bg-gray-50 text-indigo-600 px-12 py-5 rounded-xl text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            Start Your Free Trial Today
          </Link>
        </div>
      </div>
    </div>
  );
}
