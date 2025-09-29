import React, { useState, useEffect } from 'react';
import { Line, Bar, Doughnut, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import './css/LearningDashboard.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Sidebar Component
const Sidebar = ({ activeSection, setActiveSection, isMobile, sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { id: 'overview', icon: '📊', label: 'Overview', badge: null },
    { id: 'progress', icon: '📈', label: 'Progress', badge: '85%' },
    { id: 'videos', icon: '🎥', label: 'Videos', badge: '12' },
    { id: 'achievements', icon: '🏆', label: 'Achievements', badge: '8' },
    { id: 'analytics', icon: '📋', label: 'Analytics', badge: null },
    { id: 'calendar', icon: '📅', label: 'Calendar', badge: '3' },
    { id: 'settings', icon: '⚙️', label: 'Settings', badge: null }
  ];

  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {isMobile && sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}
      
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <span className="logo-icon">🎓</span>
            <span className="logo-text">LearnHub</span>
          </div>
          {isMobile && (
            <button className="close-sidebar" onClick={() => setSidebarOpen(false)}>
              ✕
            </button>
          )}
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            {menuItems.map(item => (
              <li key={item.id}>
                <button
                  className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleMenuClick(item.id)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                  {item.badge && <span className="nav-badge">{item.badge}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">👨‍💻</div>
            <div className="user-info">
              <div className="user-name">John Doe</div>
              <div className="user-role">Student</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Stats Card Component
const StatsCard = ({ title, value, icon, trend, trendValue, color = 'blue' }) => (
  <div className={`stats-card ${color}`}>
    <div className="stats-header">
      <div className="stats-icon">{icon}</div>
      <div className={`stats-trend ${trend}`}>
        <span className="trend-icon">{trend === 'up' ? '↗️' : '↘️'}</span>
        <span className="trend-value">{trendValue}</span>
      </div>
    </div>
    <div className="stats-content">
      <div className="stats-value">{value}</div>
      <div className="stats-title">{title}</div>
    </div>
  </div>
);

// Chart Components
const ProgressChart = () => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
      {
        label: 'Learning Progress',
        data: [20, 35, 55, 70, 80, 85],
        borderColor: '#667eea',
        backgroundColor: 'rgba(102, 126, 234, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#667eea',
        pointBorderColor: '#fff',
        pointBorderWidth: 3,
        pointRadius: 6
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          callback: function(value) {
            return value + '%';
          }
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        callbacks: {
          label: function(context) {
            return 'Progress: ' + context.parsed.y + '%';
          }
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <h3 className="chart-title">Weekly Learning Progress</h3>
      <Line data={data} options={options} />
    </div>
  );
};

const ActivityChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Videos Watched',
        data: [3, 2, 4, 1, 3, 5, 2],
        backgroundColor: '#4CAF50',
        borderRadius: 8
      },
      {
        label: 'Quiz Completed',
        data: [1, 2, 1, 3, 2, 1, 2],
        backgroundColor: '#FF9800',
        borderRadius: 8
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <h3 className="chart-title">Weekly Activity</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

const SkillsRadarChart = () => {
  const data = {
    labels: ['React', 'JavaScript', 'Node.js', 'Python', 'Problem Solving', 'System Design'],
    datasets: [
      {
        label: 'Current Skills',
        data: [85, 90, 70, 65, 80, 75],
        backgroundColor: 'rgba(102, 126, 234, 0.2)',
        borderColor: '#667eea',
        borderWidth: 3,
        pointBackgroundColor: '#667eea',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        pointLabels: {
          font: {
            size: 12
          }
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  return (
    <div className="chart-container">
      <h3 className="chart-title">Skills Assessment</h3>
      <Radar data={data} options={options} />
    </div>
  );
};

const CompletionChart = () => {
  const data = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: ['#4CAF50', '#FF9800', '#f44336'],
        borderWidth: 0,
        cutout: '70%'
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <h3 className="chart-title">Course Completion</h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

// Achievement Component
const Achievement = ({ icon, title, description, date, earned = true }) => (
  <div className={`achievement ${earned ? 'earned' : 'locked'}`}>
    <div className="achievement-icon">{icon}</div>
    <div className="achievement-content">
      <h4 className="achievement-title">{title}</h4>
      <p className="achievement-description">{description}</p>
      {earned && <span className="achievement-date">Earned on {date}</span>}
    </div>
    {earned && <div className="achievement-badge">✓</div>}
  </div>
);

// Recent Activity Component
const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'video',
      title: 'Completed: React Hooks Tutorial',
      time: '2 hours ago',
      icon: '🎥',
      color: 'blue'
    },
    {
      id: 2,
      type: 'quiz',
      title: 'Quiz Score: 95% in JavaScript Fundamentals',
      time: '5 hours ago',
      icon: '📝',
      color: 'green'
    },
    {
      id: 3,
      type: 'achievement',
      title: 'Achievement Unlocked: Problem Solver',
      time: '1 day ago',
      icon: '🏆',
      color: 'orange'
    },
    {
      id: 4,
      type: 'milestone',
      title: 'Milestone Reached: 50 Videos Watched',
      time: '2 days ago',
      icon: '🎯',
      color: 'purple'
    }
  ];

  return (
    <div className="recent-activity">
      <h3 className="section-title">Recent Activity</h3>
      <div className="activity-list">
        {activities.map(activity => (
          <div key={activity.id} className={`activity-item ${activity.color}`}>
            <div className="activity-icon">{activity.icon}</div>
            <div className="activity-content">
              <div className="activity-title">{activity.title}</div>
              <div className="activity-time">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Dashboard Component
const Task1Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="dashboard-content">
            {/* Stats Cards */}
            <div className="stats-grid">
              <StatsCard
                title="Total Credits"
                value="2,450"
                icon="🪙"
                trend="up"
                trendValue="+12%"
                color="blue"
              />
              <StatsCard
                title="Videos Completed"
                value="48"
                icon="🎥"
                trend="up"
                trendValue="+8%"
                color="green"
              />
              <StatsCard
                title="Quiz Average"
                value="87%"
                icon="📝"
                trend="up"
                trendValue="+5%"
                color="orange"
              />
              <StatsCard
                title="Study Streak"
                value="15 days"
                icon="🔥"
                trend="up"
                trendValue="+2 days"
                color="red"
              />
            </div>

            {/* Charts Grid */}
            <div className="charts-grid">
              <div className="chart-card large">
                <ProgressChart />
              </div>
              <div className="chart-card">
                <CompletionChart />
              </div>
              <div className="chart-card">
                <ActivityChart />
              </div>
              <div className="chart-card">
                <SkillsRadarChart />
              </div>
            </div>

            {/* Recent Activity */}
            <div className="activity-section">
              <RecentActivity />
            </div>
          </div>
        );

      case 'progress':
        return (
          <div className="progress-section">
            <h2 className="page-title">Learning Progress</h2>
            <div className="progress-overview">
              <div className="progress-stats">
                <div className="progress-stat">
                  <div className="stat-value">85%</div>
                  <div className="stat-label">Overall Progress</div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="progress-stat">
                  <div className="stat-value">24h 35m</div>
                  <div className="stat-label">Time Spent Learning</div>
                </div>
                <div className="progress-stat">
                  <div className="stat-value">156</div>
                  <div className="stat-label">Lessons Completed</div>
                </div>
              </div>
            </div>
            
            <div className="course-progress">
              <h3 className="section-title">Course Progress</h3>
              <div className="course-list">
                {[
                  { name: 'React Fundamentals', progress: 100, lessons: 24, color: '#4CAF50' },
                  { name: 'Advanced JavaScript', progress: 75, lessons: 18, color: '#2196F3' },
                  { name: 'Node.js Backend', progress: 45, lessons: 32, color: '#FF9800' },
                  { name: 'System Design', progress: 20, lessons: 28, color: '#9C27B0' }
                ].map((course, index) => (
                  <div key={index} className="course-item">
                    <div className="course-info">
                      <div className="course-name">{course.name}</div>
                      <div className="course-stats">{course.lessons} lessons • {course.progress}% complete</div>
                    </div>
                    <div className="course-progress-bar">
                      <div 
                        className="course-progress-fill" 
                        style={{ width: `${course.progress}%`, backgroundColor: course.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'achievements':
        return (
          <div className="achievements-section">
            <h2 className="page-title">Achievements</h2>
            <div className="achievements-grid">
              <Achievement
                icon="🎯"
                title="First Steps"
                description="Complete your first video lesson"
                date="Sept 15, 2025"
                earned={true}
              />
              <Achievement
                icon="🔥"
                title="On Fire!"
                description="Maintain a 7-day learning streak"
                date="Sept 20, 2025"
                earned={true}
              />
              <Achievement
                icon="🧠"
                title="Quick Learner"
                description="Score 90% or higher on 5 quizzes"
                date="Sept 25, 2025"
                earned={true}
              />
              <Achievement
                icon="⭐"
                title="Rising Star"
                description="Earn 1000 credits in a month"
                date=""
                earned={false}
              />
              <Achievement
                icon="🏆"
                title="Course Master"
                description="Complete an entire course track"
                date=""
                earned={false}
              />
              <Achievement
                icon="👑"
                title="Knowledge King"
                description="Complete 100 video lessons"
                date=""
                earned={false}
              />
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="analytics-section">
            <h2 className="page-title">Learning Analytics</h2>
            <div className="analytics-grid">
              <div className="analytics-card">
                <h3>Performance Trends</h3>
                <ProgressChart />
              </div>
              <div className="analytics-card">
                <h3>Skill Development</h3>
                <SkillsRadarChart />
              </div>
              <div className="analytics-card">
                <h3>Weekly Activity</h3>
                <ActivityChart />
              </div>
              <div className="analytics-card">
                <h3>Study Patterns</h3>
                <div className="study-pattern">
                  <div className="pattern-item">
                    <span className="pattern-label">Most Active Day:</span>
                    <span className="pattern-value">Wednesday</span>
                  </div>
                  <div className="pattern-item">
                    <span className="pattern-label">Peak Hours:</span>
                    <span className="pattern-value">2:00 PM - 4:00 PM</span>
                  </div>
                  <div className="pattern-item">
                    <span className="pattern-label">Avg. Session:</span>
                    <span className="pattern-value">45 minutes</span>
                  </div>
                  <div className="pattern-item">
                    <span className="pattern-label">Preferred Topic:</span>
                    <span className="pattern-value">Frontend Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="coming-soon">
            <div className="coming-soon-icon">🚧</div>
            <h2>Coming Soon</h2>
            <p>This section is under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="dashboard">
      {/* Mobile Header */}
      {isMobile && (
        <header className="mobile-header">
          <button className="menu-toggle" onClick={() => setSidebarOpen(true)}>
            ☰
          </button>
          <div className="header-title">Learning Dashboard</div>
          <div className="header-credits">
            <span className="credits-icon">🪙</span>
            <span>2,450</span>
          </div>
        </header>
      )}

      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobile={isMobile}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
        {!isMobile && (
          <header className="desktop-header">
            <h1 className="page-header">Learning Dashboard</h1>
            <div className="header-actions">
              <div className="search-box">
                <input type="text" placeholder="Search courses, videos..." />
                <span className="search-icon">🔍</span>
              </div>
              <div className="notifications">
                <span className="notification-icon">🔔</span>
                <span className="notification-badge">3</span>
              </div>
            </div>
          </header>
        )}

        <div className="content-area">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Task1Dashboard;
