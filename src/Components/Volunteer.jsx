import React from 'react';

const Volunteer = () => {
  return (
    <section id="volunteer" className="container mx-auto p-8 bg-black">
      <div className="bg-purple-200 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">Volunteer with Food Rescue</h1>
        <p className="text-gray-700 mb-6">
          Join our mission to reduce food waste and fight hunger by becoming a Food Rescue volunteer! Your time and effort can make a huge difference in the lives of those in need and help save valuable resources.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Why Volunteer?</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Help reduce food waste and fight hunger in your community</li>
          <li>Gain valuable experience and skills</li>
          <li>Meet like-minded people and make new connections</li>
          <li>Make a meaningful impact on the environment</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">How You Can Help</h2>
        <p className="text-gray-700 mb-6">
          As a volunteer, you can participate in various activities such as:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Collecting and sorting surplus food from local donors</li>
          <li>Delivering rescued food to partner organizations</li>
          <li>Organizing community events and educational workshops</li>
          <li>Assisting with administrative tasks and outreach efforts</li>
        </ul>
        <p className="text-gray-700 mb-6">
          If you're interested in volunteering, please fill out our volunteer form or contact us for more information. We look forward to working together to make a difference!
        </p>
        <div className="text-center">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            Become a Volunteer
          </button>
        </div>
      </div>
    </section>
  );
}

export default Volunteer;
