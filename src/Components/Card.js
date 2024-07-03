import React from 'react';
import Card from 'react-bootstrap/Card';

function List() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 mb-20">
      <div>
        <p className='font-bold text-3xl mb-12'>How it works?</p>
        <h5>
          Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with
          <h5> potential buyers, and build successful business relationships, sharing valuable feedback.</h5>
        </h5>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        <div className="flex justify-center">
          <Card style={{ width: '23rem', height: '15rem' }} className="bg-cyan-50 border-none">
            <Card.Body className="flex flex-col items-center">
              <img
                src='img1.png'
                alt='logo'
                className='h-24 w-24'
              />
              <Card.Text className="text-center mt-8 font-semibold">
                Select Your Role and Sign Up
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="flex justify-center">
          <Card style={{ width: '23rem', height: '15rem' }} className="border-none">
            <Card.Body className="flex flex-col items-center">
              <img
                src='img2.png'
                alt='logo'
                className='h-24 w-24'
              />
              <Card.Text className="text-center mt-8 font-semibold">
                Buyers Post Your Requirements
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="flex justify-center">
          <Card style={{ width: '23rem', height: '15rem' }} className="border-none bg-cyan-50 ">
            <Card.Body className="flex flex-col items-center">
              <img
                src='img3.png'
                alt='logo'
                className='h-24 w-24'
              />
              <Card.Text className="text-center mt-8 font-semibold">
                Review, Select, and Contact the Best Suppliers
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="flex justify-center">
          <Card style={{ width: '23rem', height: '15rem' }} className="border-none ">
            <Card.Body className="flex flex-col items-center">
              <img
                src='img4.png'
                alt='logo'
                className='h-24 w-24'
              />
              <Card.Text className="text-center mt-8 font-semibold">
                Suppliers Complete your profile and get notified for Opportunities
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="flex justify-center">
          <Card style={{ width: '23rem', height: '15rem' }} className="border-none bg-cyan-50 ">
            <Card.Body className="flex flex-col items-center">
              <img
                src='img5.png'
                alt='logo'
                className='h-24 w-24'
              />
              <Card.Text className="text-center mt-8 font-semibold">
                Contact to Buyers and Share your Quote for the service
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="flex justify-center">
          <Card style={{ width: '23rem', height: '15rem' }} className="border-none">
            <Card.Body className="flex flex-col items-center">
              <img
                src='img6.png'
                alt='logo'
                className='h-24 w-24'
              />
              <Card.Text className="text-center mt-8 font-semibold">
                Both the Parties can Connect and Make Business Leave a feedback
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default List;
