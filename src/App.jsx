import { useState } from 'react';

/**
 * 
 * 
 * 
 * 
 * Here Is Your Practice Page
 * 
 * 
 * 
 * 
 * 
 */
function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md">
        <div className="text-3xl font-bold text-green-600">upwork</div>
        <nav className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-black">Find talent</a>
          <a href="#" className="text-gray-600 hover:text-black">Find work</a>
          <a href="#" className="text-gray-600 hover:text-black">Why Upwork</a>
          <a href="#" className="text-gray-600 hover:text-black">What's new</a>
          <a href="#" className="text-gray-600 hover:text-black">Enterprise</a>
        </nav>
        <div className="space-x-4">
          <button className="text-gray-600">Log in</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md">Sign up</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100">
        <h1 className="text-5xl font-bold">How work should work</h1>
        <p className="text-lg text-gray-600 mt-4">Forget the old rules. You can have the best people. Right now. Right here.</p>
        <button className="bg-green-600 text-white px-6 py-3 mt-8 rounded-md">Get started</button>
        <div className="flex justify-center mt-12 space-x-8">
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center space-x-4">
            <div className="bg-gray-200 p-4 rounded-full">
              <img src="/ios-developer.png" alt="iOS Developer" className="h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold">iOS developer to join our team</h3>
              <p className="text-gray-600">Less than 20 hrs/week · Less than 1 month · Expert</p>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">Up your work game, it's easy</h2>
            <ul className="space-y-4 mt-6 text-gray-600">
              <li><span className="font-bold">No cost to join</span> - Register and browse talent profiles, explore projects, or even book a consultation.</li>
              <li><span className="font-bold">Post a job and hire top talent</span> - Finding talent doesn't have to be a chore. Post a job or we can search for you!</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
