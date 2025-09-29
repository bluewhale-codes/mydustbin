import React, { useState } from "react";

const WasteManagementWorkshops = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [filters, setFilters] = useState({
    sortBy: 'date',
    location: 'all',
    type: 'all'
  });
  const [showWorkshopList, setShowWorkshopList] = useState(true); // For mobile navigation

  const workshops = [
    {
      id: 1,
      title: "Home Composting Basics",
      organizer: "Green Earth Initiative",
      location: "Sector 12 Chandigarh,PGI Campus",
      type: "physical",
      prize: "1000",
      registeredCount: 45,
      maxParticipants: 50,
      daysLeft: 5,
      category: ["Workshop", "Beginner"],
      image: "https://images.tribuneindia.com/cms/gall_content/2015/5/2015_5$largeimg25_May_2015_230857470.jpg",
      description: "Learn the fundamentals of home composting, including proper techniques, materials, and maintenance for sustainable waste management.",
      detailedLocation: "Sector 12 Chandigarh,PGI Campus",
      updatedOn: "Sep 28, 2025",
      cashPrize: "1000",
      registrationDeadline: "5 days left",
      teamSize: "Individual participation",
      eligibility: "All citizens welcome",
      startDate: "Oct 5, 2025",
      duration: "4 hours",
      mode: "Physical Workshop",
      skills: ["Composting", "Organic Waste", "Sustainability"],
      agenda: [
        "Introduction to composting principles",
        "Types of composting systems",
        "Hands-on compost bin setup",
        "Troubleshooting common issues"
      ]
    },
    {
      id: 2,
      title: "Waste Segregation Masterclass",
      organizer: "Clean City Foundation",
      location: "PEC Auditorium sector 12, Chandigarh",
      type: "physical",
      prize: "1000",
      registeredCount: 32,
      maxParticipants: 40,
      daysLeft: 3,
      category: ["Workshop", "Intermediate"],
      image: "https://images.tribuneindia.com/cms/gall_content/2015/5/2015_5$largeimg25_May_2015_230857470.jpg",
      description: "Comprehensive training on waste segregation techniques, color-coding systems, and building community awareness programs.",
      detailedLocation: "PEC Auditorium sector 12, Chandigarh",
      updatedOn: "Sep 29, 2025",
      cashPrize: "1000",
      registrationDeadline: "3 days left",
      teamSize: "Groups of 2-4 members",
      eligibility: "Community leaders and citizens",
      startDate: "Oct 2, 2025",
      duration: "6 hours",
      mode: "Physical Workshop",
      skills: ["Segregation", "Community Building", "Awareness"],
      agenda: [
        "Waste segregation fundamentals",
        "Setting up segregation systems",
        "Community engagement strategies",
        "Policy and regulatory overview"
      ]
    },
    {
      id: 3,
      title: "Advanced Recycling Techniques (Online)",
      organizer: "EcoTech Solutions",
      location: "Online Platform",
      type: "online",
      prize: "500",
      registeredCount: 156,
      maxParticipants: 200,
      daysLeft: 8,
      category: ["Online", "Advanced"],
      image: "https://earth5r.org/wp-content/uploads/2024/03/Mumbai-India-Environmental-NGO-Earth5R-Circular-Economy-waste-management-1230x767-1.jpg",
      description: "Virtual workshop covering advanced recycling methods, upcycling projects, and innovative waste-to-resource technologies.",
      detailedLocation: "Online via Zoom Platform",
      updatedOn: "Sep 27, 2025",
      cashPrize: "1000",
      registrationDeadline: "8 days left",
      teamSize: "Individual or team participation",
      eligibility: "Everyone can apply",
      startDate: "Oct 8, 2025",
      duration: "3 hours",
      mode: "Online Workshop",
      skills: ["Recycling", "Innovation", "Technology"],
      agenda: [
        "Advanced recycling technologies",
        "DIY upcycling projects",
        "Waste-to-energy concepts",
        "Business opportunities in recycling"
      ]
    },
    {
      id: 4,
      title: "Community Waste Management Leadership",
      organizer: "Urban Sustainability Institute",
      location: "sector 23,Main market chandigarh",
      type: "physical",
      prize: "2000",
      registeredCount: 28,
      maxParticipants: 35,
      daysLeft: 12,
      category: ["Workshop", "Leadership"],
      image: "https://earth5r.org/wp-content/uploads/2024/03/Mumbai-India-Environmental-NGO-Earth5R-Circular-Economy-waste-management-1230x767-1.jpg",
      description: "Training program for community leaders to implement and manage waste management systems at the neighborhood level.",
      detailedLocation: "sector 23,Main market chandigarh",
      updatedOn: "Sep 26, 2025",
      cashPrize: "2000",
      registrationDeadline: "12 days left",
      teamSize: "Team of 3-5 members",
      eligibility: "Community leaders and volunteers",
      startDate: "Oct 12, 2025",
      duration: "2 Hours",
      mode: "Physical Workshop",
      skills: ["Leadership", "Community Engagement"],
      agenda: [
        "Leadership in environmental initiatives",
        "Project planning and execution",
        "Stakeholder engagement strategies",
        "Monitoring and evaluation techniques"
      ]
    },
    {
      id: 5,
      title: "Hazardous Waste Safety Training (Online)",
      organizer: "Safety First Environmental",
      location: "Online Platform",
      type: "online",
      prize: "1000",
      registeredCount: 89,
      maxParticipants: 150,
      daysLeft: 15,
      category: ["Online", "Safety"],
      image: "https://delhi.darshanacademy.org/wp-content/uploads/sites/2/2020/11/E-waste-workshop-500x333.jpg",
      description: "Online certification course for safe handling and disposal of household hazardous waste, including chemicals and electronics.",
      detailedLocation: "Online via Microsoft Teams",
      updatedOn: "Sep 25, 2025",
      cashPrize: "2000",
      registrationDeadline: "15 days left",
      teamSize: "Individual certification",
      eligibility: "All citizens and professionals",
      startDate: "Oct 15, 2025",
      duration: "5 hours",
      mode: "Online Workshop",
      skills: ["Safety Protocols", "Hazardous Waste", "Certification"],
      agenda: [
        "Identifying hazardous household waste",
        "Safety protocols and protective measures",
        "Proper disposal procedures",
        "Emergency response procedures"
      ]
    }
  ];

  const handleWorkshopSelect = (workshop) => {
    setSelectedWorkshop(workshop);
    setShowWorkshopList(false); // Hide list on mobile when workshop is selected
  };

  const handleBackToList = () => {
    setShowWorkshopList(true);
    setSelectedWorkshop(null);
  };

  const handleRegister = () => {
    if (selectedWorkshop) {
      alert(`🎓 Registering for ${selectedWorkshop.title}! You'll receive confirmation and workshop materials soon.`);
    }
  };

  const getTypeColor = (type) => {
    return type === 'online' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800';
  };

  const filteredWorkshops = workshops.filter(workshop => {
    if (filters.type !== 'all' && workshop.type !== filters.type) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          {selectedWorkshop && !showWorkshopList ? (
            <>
              <button 
                onClick={handleBackToList}
                className="flex items-center text-blue-600 font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Workshops
              </button>
              <button 
                onClick={handleRegister}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm"
              >
                Register
              </button>
            </>
          ) : (
            <>
              <h1 className="text-xl font-bold text-gray-900">Workshops</h1>
              <div className="flex items-center gap-2">
                <select 
                  className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
                  value={filters.sortBy}
                  onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                >
                  <option value="date">By Date</option>
                  <option value="prize">By Prize</option>
                  <option value="registered">By Participants</option>
                </select>
              </div>
            </>
          )}
        </div>
        
        {/* Mobile Filters */}
        {showWorkshopList && (
          <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-2">
            <button 
              className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                filters.type === 'all' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setFilters({...filters, type: 'all'})}
            >
              All
            </button>
            <button 
              className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                filters.type === 'physical' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setFilters({...filters, type: 'physical'})}
            >
              Physical
            </button>
            <button 
              className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                filters.type === 'online' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'
              }`}
              onClick={() => setFilters({...filters, type: 'online'})}
            >
              Online
            </button>
          </div>
        )}
      </div>

      <div className="md:flex min-h-screen">
        
        {/* Desktop Left Sidebar - Workshop List */}
        <div className={`md:w-1/3 bg-white md:border-r border-gray-200 overflow-y-auto ${
          showWorkshopList ? 'block' : 'hidden md:block'
        }`}>
          
          {/* Desktop Header and Filters */}
          <div className="hidden md:block p-6 border-b border-gray-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2">
                  Workshops
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <select 
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                value={filters.sortBy}
                onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
              >
                <option value="date">Sort By Date</option>
                <option value="prize">Sort By Prize</option>
                <option value="registered">Sort By Participants</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filters.type === 'all' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setFilters({...filters, type: 'all'})}
              >
                All
              </button>
              <button 
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filters.type === 'physical' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setFilters({...filters, type: 'physical'})}
              >
                Physical
              </button>
              <button 
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  filters.type === 'online' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                onClick={() => setFilters({...filters, type: 'online'})}
              >
                Online
              </button>
            </div>
          </div>

          {/* Workshop List */}
          <div className="p-4 space-y-4">
            {filteredWorkshops.map((workshop) => (
              <div
                key={workshop.id}
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedWorkshop?.id === workshop.id 
                    ? 'border-blue-500 bg-blue-50 shadow-md' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
                onClick={() => handleWorkshopSelect(workshop)}
              >
                <div className="flex items-start gap-3">
                  <img 
                    src={workshop.image} 
                    alt={workshop.title}
                    className="w-16 h-16 md:w-12 md:h-12 rounded-lg bg-gray-100 flex-shrink-0 object-cover"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm md:text-sm mb-1 line-clamp-2">
                      {workshop.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-2 truncate">
                      {workshop.organizer}
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-flex items-center text-xs text-yellow-700 bg-yellow-100 px-2 py-1 rounded">
                        💰 ₹{workshop.prize}
                      </span>
                      <span className="inline-flex items-center text-xs text-gray-600">
                        👥 {workshop.registeredCount}
                      </span>
                      <span className="inline-flex items-center text-xs text-gray-600">
                        ⏰ {workshop.daysLeft}d
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {workshop.category.slice(0, 2).map((cat, index) => (
                        <span 
                          key={index}
                          className={`text-xs px-2 py-1 rounded-full ${getTypeColor(workshop.type)}`}
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Mobile Location */}
                    <div className="md:hidden mt-2">
                      <p className="text-xs text-gray-500 flex items-center">
                        📍 {workshop.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Workshop Details */}
        <div className={`flex-1 bg-white overflow-y-auto ${
          !showWorkshopList ? 'block' : 'hidden md:block'
        }`}>
          {selectedWorkshop ? (
            <div className="p-4 md:p-8">
              {/* Workshop Header */}
              <div className="mb-6 md:mb-8">
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
                  <img 
                    src={selectedWorkshop.image}
                    alt={selectedWorkshop.title}
                    className="w-full h-48 md:w-20 md:h-20 rounded-lg bg-gray-100 object-cover"
                  />
                  
                  <div className="flex-1">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {selectedWorkshop.title}
                    </h1>
                    <p className="text-base md:text-lg text-gray-600 mb-3">
                      {selectedWorkshop.organizer}
                    </p>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        📍 {selectedWorkshop.detailedLocation}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(selectedWorkshop.type)}`}>
                        {selectedWorkshop.type === 'online' ? 'Online Workshop' : 'Physical Workshop'}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-500">
                      Updated On: {selectedWorkshop.updatedOn}
                    </p>
                  </div>
                </div>

                {/* Prize Banner */}
                <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🏆</span>
                    <span className="text-lg font-bold text-yellow-800">
                      {selectedWorkshop.cashPrize} Credits Reward
                    </span>
                  </div>
                </div>
              </div>

              {/* Mobile Action Bar */}
              <div className="md:hidden mb-6">
                <button 
                  onClick={handleRegister}
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold text-lg"
                >
                  Register Now - Free
                </button>
              </div>

              {/* Desktop Action Bar */}
              <div className="hidden md:flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">
                  Free Registration
                </div>
                
                <div className="flex items-center gap-6">
                  <button className="p-2 text-gray-500 hover:text-gray-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  
                  <button className="p-2 text-gray-500 hover:text-gray-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                  
                  <button 
                    onClick={handleRegister}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Register Now
                  </button>
                </div>
              </div>

              {/* Workshop Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">Registered</div>
                  <div className="text-xl md:text-lg font-semibold text-gray-900">{selectedWorkshop.registeredCount}</div>
                </div>
                
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">Deadline</div>
                  <div className="text-xl md:text-lg font-semibold text-gray-900">{selectedWorkshop.registrationDeadline}</div>
                </div>
                
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">Duration</div>
                  <div className="text-xl md:text-lg font-semibold text-gray-900">{selectedWorkshop.duration}</div>
                </div>
              </div>

              {/* Workshop Details */}
              <div className="space-y-6 md:space-y-8">
                {/* Description */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">About This Workshop</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedWorkshop.description}
                  </p>
                </div>

                {/* Workshop Info */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Workshop Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Team Size</div>
                      <div className="text-gray-900 font-medium">{selectedWorkshop.teamSize}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Start Date</div>
                      <div className="text-gray-900 font-medium">{selectedWorkshop.startDate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Mode</div>
                      <div className="text-gray-900 font-medium">{selectedWorkshop.mode}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Eligibility</div>
                      <div className="text-gray-900 font-medium">{selectedWorkshop.eligibility}</div>
                    </div>
                  </div>
                </div>

                {/* Skills & Topics */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Skills You'll Learn</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedWorkshop.skills.map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Agenda */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Workshop Agenda</h3>
                  <div className="space-y-3">
                    {selectedWorkshop.agenda.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 flex-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special Note for Online Workshops */}
                {selectedWorkshop.type === 'online' && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">Online Workshop Benefits</h4>
                        <p className="text-blue-800 text-sm">
                          This workshop is available online, making it accessible to citizens who don't have physical workshops nearby. 
                          You'll receive the same quality training and certification as in-person workshops.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile Bottom Action */}
              <div className="md:hidden mt-8 pb-4">
                <button 
                  onClick={handleRegister}
                  className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold text-lg"
                >
                  Register for Workshop - Free
                </button>
              </div>
            </div>
          ) : (
            // Empty state
            <div className="flex items-center justify-center h-full text-center p-8">
              <div>
                <div className="text-6xl mb-4">🏫</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Select a Workshop</h2>
                <p className="text-gray-600">
                  Choose a workshop from the list to view detailed information and register.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WasteManagementWorkshops;
