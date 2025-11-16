'use client';
import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI assistant. I can help you learn about Digicon's services, our Free Payroll Audit (One Quarter), and schedule Secure Conference Room access. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue.toLowerCase());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const generateBotResponse = (input: string): string => {
    // Check for contact/lead capture intent
    if (input.includes('contact') || input.includes('email') || input.includes('phone') || input.includes('reach')) {
      return "I'd love to help you get in touch! Please provide your name, email, and company, and our team will reach out within 24 hours. You can also schedule direct access to a Secure Conference Room where you can securely share information and work directly with our team.";
    }

    // Check for Conference Room scheduling
    if (input.includes('schedule') || input.includes('conference') || input.includes('room') || input.includes('appointment') || input.includes('meeting')) {
      return "Great! To schedule Secure Conference Room access, I'll need your email address and preferred time. Conference Rooms provide enterprise-grade security for all your sensitive data and documents. Would you like to proceed?";
    }

    // Check for payroll audit questions
    if (input.includes('payroll') || input.includes('audit') || input.includes('savings') || input.includes('quarter')) {
      return "Our Free Payroll Audit (One Quarter) analyzes 3 months of your payroll data to uncover hidden savings, overpayments, and errors. We typically find 15-20% in cost reductions. This service is completely FREE and helps you understand where you can save. All file uploads happen securely in Secure Conference Rooms with military-grade encryption. Would you like to schedule a Conference Room to get started?";
    }

    // Check for Voice AI Bot questions
    if (input.includes('voice') || input.includes('ai bot') || input.includes('assistant')) {
      return "If you like this AI bot experience, we also offer Voice AI Bots for your business! Our Voice AI solutions can handle customer inquiries, sales calls, and support 24/7. Schedule an appointment in a Secure Conference Room for more information about our Voice AI solutions and see a live demo.";
    }

    // Check for security questions
    if (input.includes('security') || input.includes('secure') || input.includes('safe') || input.includes('confidential')) {
      return "Security is our top priority! All sensitive data uploads happen exclusively in Secure Conference Rooms, which feature: military-grade AES-256-GCM encryption, single-use access codes, auto-expiration after 90 days, complete audit trails, and SOC 2 Type II compliance. Your data is never accessible to unauthorized parties.";
    }

    // Check for services questions
    if (input.includes('service') || input.includes('what do') || input.includes('help') || input.includes('offer')) {
      return "Digicon AI Systems provides enterprise-grade AI solutions including: 1) Free Payroll Audit (One Quarter) - analyzing 3 months of data to find savings, 2) Secure Conference Rooms - secure collaboration spaces, 3) Voice AI Bots - automated voice assistants for your business, 4) Enterprise system audits across 6 core areas (Payroll, HRIS, ERP, CRM, Compliance, AI Infrastructure). What would you like to know more about?";
    }

    // Default response
    return "Thanks for your question! I can help you with: \n• Free Payroll Audit (One Quarter) information\n• Secure Conference Room scheduling and security\n• Voice AI Bot services\n• General questions about Digicon's offerings\n\nWhat would you like to know more about?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Widget Button - Fixed at bottom right */}
      <div className="fixed bottom-6 right-6 z-[100]">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center space-x-2 group"
            aria-label="Open chat"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="font-semibold hidden group-hover:inline-block pr-2 whitespace-nowrap">Ask me anything</span>
          </button>
        )}

        {/* Chat Window */}
        {isOpen && (
          <div className="bg-slate-800 border border-blue-500/30 rounded-2xl shadow-2xl w-96 h-[600px] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-white font-bold">Digicon AI Assistant</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition"
                aria-label="Close chat"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-200'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-700 rounded-lg p-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area - Fixed at bottom with proper spacing */}
            <div className="border-t border-slate-700 p-4 bg-slate-800">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSend}
                  disabled={isTyping || !inputValue.trim()}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-center min-w-[48px]"
                  aria-label="Send message"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Click or tap above to ask questions
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
