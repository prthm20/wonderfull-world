'use client'
import React, { useState, ChangeEvent } from 'react';
import Navbar from '../../components/ui/Navbar';
import { Plan } from '../../Apis/Dest/page3';
import axios from 'axios';
import Directions from '../../components/ui/GoogelMaps/Directions'
import { SessionProvider } from "next-auth/react";
import { useToast } from "../../components/ui/use-toast"

interface Accommodation {
  CheckInDate: string;
  CheckOutDate: string;
  AdditionalInfo: string;
  Name: string;
  Address: string;
  Type: string;
  ContactInfo: string;
  CostPerNight: number;
  TotalCost: number;
}

interface Activity {
  Name: string;
  AdditionalInfo: string;
  Booking: string;
  Cost: number;
  Time: string;
  Location: string;
}

interface Budget {
  Currency: string;
  TotalCost: number;
  FlightCost: number;
  AccommodationCost: number;
  FoodCost: number;
  ActivitiesCost: number;
}

interface Transportation {
  Mode: string;
  Details: {
    AdditionalInfo: string;
    DepartureLocation: string;
    DepartureTime: string;
    Duration: string;
    Booking: string;
    ArrivalLocation: string;
    ArrivalTime: string;
    Cost: number;
  }
}

interface PlanDetails {
  Details:{
    Accommodation: Accommodation[];
    Activities: Activity[];
    Budget: Budget;
    PackingList: string[];
    Transportation: Transportation[];
  }
}

const Route: React.FC = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [date, setDate] = useState('');
  const [days, setDays] = useState<string | number>('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [wantToSend, setWantToSend] = useState(false);

  const [accommodation, setAccommodation] = useState<Accommodation | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [budget, setBudget] = useState<Budget | null>(null);
  const [packingList, setPackingList] = useState<string[]>([]);
  const [transportation, setTransportation] = useState<Transportation[]>([]);

  const [plan, setTravelPlan] = useState<any>(null);

  const handleStartChange = (e: ChangeEvent<HTMLInputElement>) => setStart(e.target.value);
  const handleEndChange = (e: ChangeEvent<HTMLInputElement>) => setEnd(e.target.value);
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => setDate(e.target.value);
  const handleDaysChange = (e: ChangeEvent<HTMLInputElement>) => setDays(e.target.value);
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const onPlanSendClick = () => setWantToSend(true);

  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "",
      description: "generating your plan this may take sometime.........",
  })  
    const daysNumber = parseInt(days as string, 10); // Convert days to a number
    const data: PlanDetails = await Plan(start, end, date, daysNumber);
    if(data){
      toast({
        title: "Success",
        description: "Plan generated succesfully",
    })  
    }
    setAccommodation(data.Details.Accommodation[0]);
    setActivities(data.Details.Activities);
    setBudget(data.Details.Budget);
    setPackingList(data.Details.PackingList);
    setTransportation(data.Details.Transportation);

    setTravelPlan({ 
      accommodation: data.Details.Accommodation[0], 
      activities: data.Details.Activities, 
      budget: data.Details.Budget, 
      packingList: data.Details.PackingList, 
      transportation: data.Details.Transportation 
    });
  };
  const { toast } = useToast()

  const onSendEmail = async () => {
    try {
      const response = await axios.post('/api/plansend', { 
        accommodation, activities, budget, packingList, transportation, email, name 
      });
      if(response){
        toast({
          title: "Success",
          description: "email sent succesfully",
      })  
      }
      console.log(response.data);
    } catch (error: any) {
      console.log('Unable to send email', error.message);
    }
  };

  return (
    <>
    
      <SessionProvider>
        <Navbar/>
      </SessionProvider>
    <div className="min-h-screen bg-gradient-to-r pt-20 from-indigo-200 via-purple-200 to-pink-200">
      <div className="max-w-screen mx-auto mt-16 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-8">Plan Your Trip</h1>
        <form onSubmit={handleSearchSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              type="text"
              value={start}
              onChange={handleStartChange}
              placeholder="Your Location"
              className="flex-1 bg-teal-50 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
            <input
              type="text"
              value={end}
              onChange={handleEndChange}
              placeholder="Your Destination"
              className="flex-1 bg-teal-50 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
            <input
              type="date"
              value={date}
              onChange={handleDateChange}
              placeholder="Date of Departure"
              className="flex-1 bg-teal-50 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
            <input
              type="number"
              value={days}
              onChange={handleDaysChange}
              placeholder="Days"
              className="flex-1 bg-teal-50 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-fuchsia-500 hover:to-violet-500 transition-all duration-300"
          >
            Generate
          </button>
        </form>
      </div>

      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {plan ? (
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-8">
             <div >
                <Directions start={start} end={end} />
            </div>
            <div className='text-center text-3xl font-semibold mb-6'>
              Your plan &darr;
            </div>
            <div>
              <button
                type="button"
                onClick={onPlanSendClick}
                className="w-full py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-fuchsia-500 hover:to-violet-500 transition-all duration-300"
              >
                Get Plan On your Email
                <div>
                  Lets Go &rarr;
                </div>
              </button>
              <div>
                {wantToSend ? (
                  <div className='m-4 justify-center text-center'>
                    <input
                      type="text"
                      value={name}
                      onChange={handleNameChange}
                      placeholder="Your Name"
                      className=" bg-teal-50 m-3 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Your Email address"
                      className=" bg-teal-50 m-3 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                    <button
                      type="button"
                      onClick={onSendEmail}
                      className="w-full py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-fuchsia-500 hover:to-violet-500 transition-all duration-300"
                    >
                      Send &rarr;
                    </button>
                  </div>
                ) : "generating your Plan..."}
              </div>

              {/* Rendering the plan details */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Accommodation</h2>
                {accommodation ? (
                  <>
                    <p>Check In Date: {accommodation.CheckInDate}</p>
                    <p>Check Out Date: {accommodation.CheckOutDate}</p>
                    <p>Info: {accommodation.AdditionalInfo}</p>
                    <p>Name of place: {accommodation.Name}</p>
                    <p>Address: {accommodation.Address}</p>
                    <p>Additional information about place: {accommodation.ContactInfo}</p>
                    <p>Cost per night: {accommodation.CostPerNight}</p>
                    <p>Total: {accommodation.TotalCost}</p>
                  </>
                ) : (
                  <p>No accommodation details available</p>
                )}
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Activities</h2>
                {activities.length > 0 ? (
                  activities.map((activity, index) => (
                    <div key={index} className="mb-4">
                      <p>Name: {activity.Name}</p>
                      <p>Additional Info: {activity.AdditionalInfo}</p>
                      <p>Booking: {activity.Booking}</p>
                      <p>Cost: {activity.Cost}</p>
                      <p>Time: {activity.Time}</p>
                      <p>Location: {activity.Location}</p>
                    </div>
                  ))
                ) : (
                  <p>No activities planned</p>
                )}
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Budget</h2>
                {budget ? (
                  <>
                    <p>Currency: {budget.Currency}</p>
                    <p>Total Cost: {budget.TotalCost}</p>
                    <p>Flight Cost: {budget.FlightCost}</p>
                    <p>Accommodation Cost: {budget.AccommodationCost}</p>
                    <p>Food Cost: {budget.FoodCost}</p>
                    <p>Activities Cost: {budget.ActivitiesCost}</p>
                  </>
                ) : (
                  <p>No budget details available</p>
                )}
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Packing List</h2>
                {packingList.length > 0 ? (
                  <ul>
                    {packingList.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No packing list available</p>
                )}
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Transportation</h2>
                {transportation.length > 0 ? (
                  transportation.map((transport, index) => (
                    <div key={index} className="mb-4">
                      <p>Mode: {transport.Mode}</p>
                      <p>Additional Info: {transport.Details.AdditionalInfo}</p>
                      <p>Departure Location: {transport.Details.DepartureLocation}</p>
                      <p>Departure Time: {transport.Details.DepartureTime}</p>
                      <p>Duration: {transport.Details.Duration}</p>
                      <p>Booking: {transport.Details.Booking}</p>
                      <p>Arrival Location: {transport.Details.ArrivalLocation}</p>
                      <p>Arrival Time: {transport.Details.ArrivalTime}</p>
                      <p>Cost: {transport.Details.Cost}</p>
                    </div>
                  ))
                ) : (
                  <p>No transportation details available</p>
                )}
              </div>
            </div>
          </div>
        ) :""}
      </div>
    </div>
    </>
  );

};

export default Route;
