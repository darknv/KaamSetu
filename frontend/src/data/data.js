import Contractor from '../assets/contractor.jpg';
import Cook from '../assets/cook.jpg';
import Driver from '../assets/driver.jpg';
import Electrician from '../assets/electrician.jpg';
import Mechanic from '../assets/mechainc.jpg';
import Plumber from '../assets/plumber.jpg';


const items = [
    {   
        id: 1,
        name: 'John Doe',
        image: Contractor,
        rating: 4.5,
        location: 'Lucknow, UP',
        distance: 2.5,
        services: 'Construction, Building, Renovation',
        profession: 'Contractor',
        experience: '10 years of experience in residential and commercial construction projects. Skilled in project management, budgeting, and team coordination.',
        description: 'John is a highly skilled contractor with a proven track record of delivering high-quality construction projects. He is known for his attention to detail, strong work ethic, and ability to manage complex projects efficiently.',
        joinedDate: '2020-01-15'
    },
    {   
        id: 2,
        name: 'Jane Smith',
        image: Cook,
        rating: 4.8,
        location: 'Lucknow, UP',
        distance: 5.0,
        services: 'Cleaning, Cooking',
        profession: 'Cook',
        experience: 'Jane has over 8 years of experience as a professional cook, specializing in a variety of cuisines. She is known for her creativity in the kitchen and her ability to prepare delicious meals for both small and large gatherings.',
        description: 'Jane is a talented cook with a passion for creating flavorful dishes. She has worked in various restaurants and catering services, earning a reputation for her culinary skills and dedication to providing exceptional dining experiences.',
        joinedDate: '2019-06-10'
    },
    {   
        id: 3,
        name: 'Bob Johnson',
        image: Driver,
        rating: 4.2,
        location: 'Lucknow, UP',
        distance: 3.0,
        services: 'Driving, Delivery',
        profession: 'Driver',
        experience: 'Bob has been a professional driver for over 5 years, with experience in both personal and commercial transportation. He is known for his punctuality, safe driving practices, and excellent customer service.',
        description: 'Bob is a reliable and experienced driver who takes pride in providing safe and efficient transportation services. He has a clean driving record and is familiar with the local area, ensuring timely arrivals and smooth journeys for his clients.',
        joinedDate: '2021-03-20'
    },
    {
        id: 4,
        name: 'Alice Williams',
        image: Electrician,
        rating: 4.6,
        location: 'Lucknow, UP',
        distance: 4.0,
        services: 'Electrical Work, Repairs',
        profession: 'Electrician',
        experience: 'Alice has over 10 years of experience as a licensed electrician, with expertise in residential and commercial electrical installations, repairs, and maintenance. She is known for her precision, safety consciousness, and ability to troubleshoot complex electrical issues.',
        description: 'Alice is a skilled electrician with a strong background in both residential and commercial electrical work. She is committed to providing high-quality electrical services and ensuring the safety and compliance of all installations.',
        joinedDate: '2018-11-05'
    },
    {
        id: 5,
        name: 'David Lee',
        image: Mechanic,
        rating: 4.9,
        location: 'Lucknow, UP',
        distance: 6.0,
        services: 'Car Repairs, Maintenance',
        profession: 'Mechanic',
        experience: 'David has been a professional mechanic for over 12 years, specializing in automotive repairs and maintenance. He is known for his diagnostic skills, attention to detail, and ability to work on a wide range of vehicle makes and models.',
        description: 'David is a highly experienced mechanic with a passion for keeping vehicles in top condition. He has worked in various automotive repair shops and has built a reputation for his expertise, reliability, and commitment to customer satisfaction.',
        joinedDate: '2019-08-12'        
    },{
        id: 6,
        name: 'Emily Davis',
        image: Plumber,
        rating: 4.7,
        location: 'Lucknow, UP',
        distance: 3.5,
        services: 'Plumbing, Pipe Repairs, Leak Detection',
        profession: 'Plumber',
        experience: 'Emily has over 7 years of experience as a licensed plumber, with expertise in residential and commercial plumbing systems. She is known for her problem-solving skills, efficiency, and ability to handle a wide range of plumbing issues.',
        description: 'Emily is a dedicated plumber with a strong background in both residential and commercial plumbing work. She is committed to providing high-quality plumbing services and ensuring the proper functioning of all plumbing systems.',
        joinedDate: '2020-05-18'
    }
];

export default items;