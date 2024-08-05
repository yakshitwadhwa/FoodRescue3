import React from 'react';

const About = () => {
  return (
    <section id="about" className="container mx-auto p-8">
      <div className="bg-gray-200 shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">About Food Rescue</h1>
        <p className="text-gray-700 mb-4">
          Welcome to Food Rescue! Our mission is to reduce food waste and hunger by rescuing surplus food from various sources and redistributing it to those in need. We believe that by working together, we can make a significant impact on both the environment and the community.
        </p>
        <p className="text-gray-700 mb-4">
          Our platform connects food donors with local organizations that can use or distribute the food to those who need it most. Through our efforts, we aim to create a more sustainable and equitable food system for everyone.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Our Vision</h2>
        <p className="text-gray-700 mb-4">
          At Food Rescue, our vision is to create a world where no one goes hungry and no food goes to waste. We strive to educate the public about the importance of food sustainability and provide the tools and resources necessary to make a difference. Join us in our mission to rescue food and fight hunger.
        </p>
      </div>
    </section>
  );
}

export default About;
