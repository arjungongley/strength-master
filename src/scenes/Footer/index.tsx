import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
  Elevate your fitness experience with us, where expert guidance meets personalized care. Join a community dedicated to helping you reach your goals and feel your best every step of the way.
</p>

          <p>&copy; Strength Master. All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Address</h4>
          <p className="my-5">SCO-45, Sector-27,  </p>
          <p className="my-5">Panchkula Extension,</p>
          <p>Panchkula, Haryana 134112</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
  <h4 className="font-bold">Contact Us</h4>
  <p className="my-5">
    <a href="tel:+917807971873" className="text-blue-600 hover:underline">+91 7807971873</a>
  </p>
  <p>
  <a href="https://wa.me/917807971873?text=Hello,%20I'm%20looking%20for%20more%20information%20about%20your%20gym%20services" 
    className="text-green-600 hover:underline">
    Click to chat on WhatsApp
  </a>
</p>
</div>

      </div>
    </footer>
  );
};

export default Footer;

// 'flex-basis' allows our element to take up the entire width if there's nothing else to compete with. It automatically knows how to do it
