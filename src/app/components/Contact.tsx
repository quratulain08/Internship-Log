import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';

const Contact = () => {
  return (
    <div id="contact" className=  "px-4 my-12 lg:px-24 z-10" style={{ color: '#112d60' }} >
               <h1 className="text-3xl font-bold text-center pb-2" style={{ color: '#112d60' }}>Contact Us</h1>
      <div className="max-w-4xl mx-auto  bg-gradient-to-b from-[#7defe0] to-[#b6c0c5] rounded-lg shadow-md p-6">
 
        <div className="space-y-6 my-30">
          <div className="flex items-center space-x-4">
            <PhoneIcon className="h-6 w-6 text-[#112d60]" />
            <div>
              <h2 className="text-xl font-semibold" style={{ color: '#112d60' }}>Phone</h2>
              <p className="text-gray-700">UAN (051-111-AIR-UNI)</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <EnvelopeIcon className="h-6 w-6 text-[#112d60]" />
            <div>
              <h2 className="text-xl font-semibold" style={{ color: '#112d60' }}>Email</h2>
              <p className="text-gray-700">Webmaster@au.edu.pk</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPinIcon className="h-6 w-6 text-[#112d60]" />
            <div>
              <h2 className="text-xl font-semibold" style={{ color: '#112d60' }}>Address</h2>
              <p className="text-gray-700">Service Road E-9, Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
