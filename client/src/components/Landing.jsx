import React from 'react'
import bg1 from '../assets/bg1.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'


const Landing = () => {
  return (
    <div className="text-gray-800 mb-16">
                    <div className="relative">
                        <img src={bg1} alt="Person skiing on a snowy mountain" className="w-full h-96 object-cover" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <h1 className="text-5xl font-bold text-black">FitBook</h1>
                            <p className="text-xl text-black mt-2">Your sports hub, in one app</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8 space-x-4">
                        <img src={img1} alt="Aerial view of a basketball court with players" className="w-1/2 h-64 object-cover" />
                        <img src={img2} alt="Person standing on a soccer field with a soccer ball" className="w-1/2 h-64 object-cover" />
                    </div>
                    <div className="grid grid-cols-3 gap-8 mt-8 px-16">
                        <h2 className="text-3xl font-bold">FitBook</h2>
                  
                    </div>
                    <div className="grid grid-cols-3 gap-8 mt-8 px-16">
                        <div className="flex items-start space-x-4">
                            <i className="fas fa-info-circle text-2xl text-gray-600"></i>
                            <div>
                                <h3 className="text-xl font-bold">Communities</h3>
                                <p className="text-gray-600">Find Sports and Fitness Communities with like-minded people</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <i className="fas fa-info-circle text-2xl text-gray-600"></i>
                            <div>
                                <h3 className="text-xl font-bold">Mentors</h3>
                                <p className="text-gray-600">Find Mentors to get roadmaps and gain knowledge from the best.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <i className="fas fa-info-circle text-2xl text-gray-600"></i>
                            <div>
                                <h3 className="text-xl font-bold">Professionals</h3>
                                <p className="text-gray-600">Follow professional athletes in their journey to become the best.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <i className="fas fa-info-circle text-2xl text-gray-600"></i>
                            <div>
                                <h3 className="text-xl font-bold">Business</h3>
                                <p className="text-gray-600">Are you a Businessman? Want to join the community and sell your commodities.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <i className="fas fa-info-circle text-2xl text-gray-600"></i>
                            <div>
                                <h3 className="text-xl font-bold">Trainer</h3>
                                <p className="text-gray-600">Are you a Trainer or Coach and looking to train athletes? Join us.</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <i className="fas fa-info-circle text-2xl text-gray-600"></i>
                            <div>
                                <h3 className="text-xl font-bold">Events</h3>
                                <p className="text-gray-600">Get notified for Events and Training Sessions in your fields of interest.</p>
                            </div>
                        </div>
                    </div>
                    <footer className="bg-white py-16">
                        <div className="text-center text-gray-600">

                        </div>
                    </footer>
                </div>
            );
        };

export default Landing