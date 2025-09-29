import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactPlayer from 'react-player';
import './css/LearningVideoComponent.css';
import { Banner } from '../mainComp/Banner';

// Confetti Component
const Confetti = ({ trigger }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (trigger && canvasRef.current) {
      createConfetti();
    }
  }, [trigger]);

  const createConfetti = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#FFD700', '#FF6347', '#32CD32', '#1E90FF', '#FF69B4'];

    // Create confetti particles
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: -10,
        vx: (Math.random() - 0.5) * 4,
        vy: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;

        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation * Math.PI / 180);
        ctx.fillStyle = particle.color;
        ctx.fillRect(-5, -5, 10, 10);
        ctx.restore();

        if (particle.y > canvas.height) {
          particles.splice(index, 1);
        }
      });

      if (particles.length > 0) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();
  };

  return (
    <canvas
      ref={canvasRef}
      className="confetti-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1000
      }}
    />
  );
};

// Animated Coins Component
const AnimatedCoins = ({ show, amount }) => {
  if (!show) return null;

  return (
    <div className="animated-coins">
      {[...Array(amount)].map((_, index) => (
        <div
          key={index}
          className="coin"
          style={{
            animationDelay: `${index * 0.1}s`,
            left: `${Math.random() * 100}%`
          }}
        >
          🪙
        </div>
      ))}
    </div>
  );
};

// Quiz Component
const Quiz = ({ questions, onQuizComplete, visible }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (visible && timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timeLeft, visible, showResult]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setTimeLeft(30);
    } else {
      setShowResult(true);
      const finalScore = selectedAnswer === questions[currentQuestion].correctAnswer ? score + 1 : score;
      onQuizComplete(finalScore);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setScore(0);
    setShowResult(false);
    setTimeLeft(30);
  };

  if (!visible) return null;

  if (showResult) {
    return (
      <div className="quiz-container">
        <div className="quiz-result">
          <h3>Quiz Complete! 🎉</h3>
          <p>Your Score: {score}/{questions.length}</p>
          <button onClick={resetQuiz} className="btn-primary">Retake Quiz</button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <div className="question-counter">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        <div className="timer">⏰ {timeLeft}s</div>
      </div>
      
      <div className="question">
        <h3>{question.question}</h3>
      </div>

      <div className="answers">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`answer-option ${selectedAnswer === option ? 'selected' : ''}`}
            onClick={() => handleAnswerSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <button
        className="next-button"
        onClick={handleNextQuestion}
        disabled={!selectedAnswer}
      >
        {currentQuestion + 1 === questions.length ? 'Finish' : 'Next'}
      </button>
    </div>
  );
};

// Main Learning Video Component
const VideoLearning = () => {
  const [credits, setCredits] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCoins, setShowCoins] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Video playlist data
  const videoPlaylist = [
    {
      id: 1,
      title: "Introduction to React Hooks",
      url: "https://www.youtube.com/watch?v=O6P86uwfdR0",
      credits: 10,
      keyPoints: [
        "useState manages component state",
        "useEffect handles side effects",
        "Custom hooks enable logic reuse"
      ]
    },
    {
      id: 2,
      title: "Advanced State Management",
      url: "https://www.youtube.com/watch?v=35lXWvCuM8o",
      credits: 15,
      keyPoints: [
        "Context API for global state",
        "useReducer for complex state logic",
        "State management best practices"
      ]
    },
    {
      id: 3,
      title: "React Performance Optimization",
      url: "https://www.youtube.com/watch?v=uojLJFt9SzY",
      credits: 20,
      keyPoints: [
        "React.memo prevents unnecessary re-renders",
        "useMemo and useCallback optimize performance",
        "Code splitting and lazy loading"
      ]
    }
  ];

  // Quiz questions
  const quizQuestions = [
    {
      question: "What is the primary purpose of useState hook?",
      options: ["Managing side effects", "Managing component state", "Fetching data", "Handling events"],
      correctAnswer: "Managing component state"
    },
    {
      question: "When does useEffect run by default?",
      options: ["Before render", "After every render", "Only on mount", "Only on unmount"],
      correctAnswer: "After every render"
    }
  ];

  const currentVideo = videoPlaylist[currentVideoIndex];

  const handleVideoEnded = () => {
    const newCredits = credits + currentVideo.credits;
    setCredits(newCredits);
    setShowConfetti(true);
    setShowCoins(true);

    // Hide animations after 3 seconds
    setTimeout(() => {
      setShowConfetti(false);
      setShowCoins(false);
      setShowQuiz(true);
    }, 3000);
  };

  const handleQuizComplete = (score) => {
    const bonusCredits = score * 5;
    setCredits(credits + bonusCredits);
    setShowQuiz(false);

    if (bonusCredits > 0) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
  };

  const handleNextVideo = () => {
    if (currentVideoIndex < videoPlaylist.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
      setProgress(0);
      setIsPlaying(false);
    }
  };

  const handlePreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
      setProgress(0);
      setIsPlaying(false);
    }
  };

  const handleProgress = (progressData) => {
    setProgress(progressData.played * 100);
  };

  return (

    
    <div className="learning-video-container">

        
      {/* Header with Credits */}
      <div className="header">
        <h2>Learning Dashboard</h2>
        <div className="credits-display">
          <span className="credits-icon">🪙</span>
          <span className="credits-count">{credits}</span>
          <div className="credits-label">Credits</div>
        </div>
      </div>

      {/* Video Player Section */}
      <div className="video-section">
        <div className="video-header">
          <h3>{currentVideo.title}</h3>
          <div className="video-counter">
            Video {currentVideoIndex + 1} of {videoPlaylist.length}
          </div>
        </div>

        <div className="video-player">
          <ReactPlayer
            url={currentVideo.url}
            width="100%"
            height="400px"
            playing={isPlaying}
            controls
            onEnded={handleVideoEnded}
            onProgress={handleProgress}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        </div>

        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Key Points Section */}
      <div className="key-points">
        <h4>Key Learning Points:</h4>
        <ul>
          {currentVideo.keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Navigation Controls */}
      <div className="navigation-controls">
        <button 
          onClick={handlePreviousVideo}
          disabled={currentVideoIndex === 0}
          className="nav-button"
        >
          ← Previous
        </button>
        
        <button 
          onClick={handleNextVideo}
          disabled={currentVideoIndex === videoPlaylist.length - 1}
          className="nav-button"
        >
          Next →
        </button>
        
        <button 
          onClick={() => window.location.href = '/task1dashboard'}
          className="dashboard-button"
        >
          📊 Dashboard
        </button>
      </div>

      {/* Playlist */}
      <div className="playlist">
        <h4>Playlist</h4>
        <div className="playlist-items">
          {videoPlaylist.map((video, index) => (
            <div 
              key={video.id}
              className={`playlist-item ${index === currentVideoIndex ? 'active' : ''}`}
              onClick={() => setCurrentVideoIndex(index)}
            >
              <div className="playlist-title">{video.title}</div>
              <div className="playlist-credits">🪙 {video.credits}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quiz Component */}
      <Quiz 
        questions={quizQuestions}
        onQuizComplete={handleQuizComplete}
        visible={showQuiz}
      />

      {/* Animations */}
      <Confetti trigger={showConfetti} />
      <AnimatedCoins show={showCoins} amount={currentVideo.credits / 5} />
    </div>
  );
};

export default VideoLearning;
