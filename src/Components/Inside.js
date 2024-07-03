import React from 'react';
import 'tailwindcss/tailwind.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Inside() {
    return (
        <div className="relative">
            <img
                src='projebyimgs.png'
                alt='logo'
                className='w-full h-[32rem] object-cover'
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-0">
                <h1 className="text-3xl md:text-6xl font-bold">
                    Are You a Supplier?
                </h1>
                <p className='text-2xl md:text-6xl mt-4'>
                    Explore Matching Opportunities.
                </p>

                <div className='w-112 md:w-3/4 mt-8 flex flex-col md:flex-row md:items-center md:justify-center md:gap-3'>
                    <InputGroup className="w-full md:w-2/6 mb-6 md:mb-0 h-14">
                        <InputGroup.Text id="basic-addon1"><img
                            src='icons.png'
                            alt='logo'
                            className='h-5 w-5'
                        /> </InputGroup.Text>
                        <Form.Control
                            placeholder="Search your required service here"
                            aria-label="Search service"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <InputGroup className="w-full md:w-2/6 mb-6 md:mb-0 h-14">
                        <InputGroup.Text id="basic-addon2"><img
                            src='icon2.png'
                            alt='logo'
                            className='h-5 w-5'
                        /> </InputGroup.Text>
                        <Form.Control
                            placeholder="Search your desired location here"
                            aria-label="Search location"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                    <Button variant="success" className='font-bold w-full md:w-[8rem] h-14 '>
                        Search
                    </Button>
                </div>
                <div className='d-flex mt-4'>
                    <p className='font-bold text-lg'>Are you a buyer?</p>
                    <p className='underline text-lg ml-4'>Click here if you are looking to post a requirements</p>
                </div>
            </div>
        </div>
    );
}

export default Inside;
