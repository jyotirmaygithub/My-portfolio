import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function JavaSkills() {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8">
      <h2 className="text-3xl font-bold mb-4">Java Skills</h2>
      <div className="flex items-center space-x-4 mb-4">
        <img src="https://cdn.iconscout.com/icon/free/png-512/java-23-225999.png" alt="Java" className="w-12 h-12" />
      </div>
      <div className="space-y-2">
        <div className="flex items-start">
          <CheckCircleIcon className="text-green-500 mr-2" />
          <h3 className="text-xl font-semibold">Proficient in Java programming language.</h3>
        </div>
        <div className="flex items-start">
          <CheckCircleIcon className="text-green-500 mr-2" />
          <h3 className="text-xl font-semibold">Solid understanding of Object-Oriented Programming (OOP) principles.</h3>
        </div>
        <div className="flex items-start">
          <CheckCircleIcon className="text-green-500 mr-2" />
          <h3 className="text-xl font-semibold">Knowledge of common data structures like arrays, linked lists, stacks, queues, trees, and graphs.</h3>
        </div>
        <div className="flex items-start">
          <CheckCircleIcon className="text-green-500 mr-2" />
          <h3 className="text-xl font-semibold">Familiarity with basic algorithms such as searching and sorting.</h3>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Tools and Technologies</h3>
        <div className="space-y-2">
          <div className="flex items-start">
            <CheckCircleIcon className="text-blue-500 mr-2" />
            <h3 className="text-xl font-semibold">IDEs (IntelliJ IDEA, Eclipse)</h3>
          </div>
          <div className="flex items-start">
            <CheckCircleIcon className="text-blue-500 mr-2" />
            <h3 className="text-xl font-semibold">Version Control Systems (Git)</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
