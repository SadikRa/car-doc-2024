import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 p-6">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
    <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-8 border-white" />
    </div>
    <div className='lg:w-1/2'>
        <h1 className='text-2xl text-orange-500 mb-5'>About Us</h1>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
      <button className="btn btn-primary">Get More Info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AboutUs;