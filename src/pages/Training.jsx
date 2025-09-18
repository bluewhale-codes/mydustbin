import React, { useState } from 'react';
import Banner from './Banner';
import { Trophy, PlayCircle, Gamepad2, Users } from "lucide-react";
import Taskbox from './Taskbox';
import Task2 from './Task2';
import Task3 from './Task3';
import OfferBanner from './OfferBanner';
import Detail from './Detail';

const Training = () => {
  const [credits, setCredits] = useState(0);

  const tasks = [
    { id: 1, title: "Watch Video Tutorial", icon: <PlayCircle className="w-10 h-10" />, credits: 50 },
    { id: 2, title: "Play Segregation Game", icon: <Gamepad2 className="w-10 h-10" />, credits: 100 },
    { id: 3, title: "Attend Workshop", icon: <Users className="w-10 h-10" />, credits: 50 },
  ];

  return (
    <div className="flex flex-col gap-10 px-4 sm:px-6 md:px-10 mt-6 mb-6">
      
      {/* Banner Section */}
      <div className="w-full">
        <Banner />
      </div>

      {/* Detail Section */}
      <div className="w-full">
        <Detail />
      </div>

      {/* Tasks Sections */}
      <div className="flex flex-col gap-6">
        <Taskbox />
        <Task2 />
        <Task3 />
      </div>

      {/* Offer Banner Section */}
      <div className="w-full">
        <OfferBanner />
      </div>
    </div>
  );
};

export default Training;
