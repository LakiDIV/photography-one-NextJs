export default function GoogleMap() {
  return (
    <>
      <div className="m-4 rounded-sm overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13099.478288180551!2d138.7167714!3d-34.8343717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0cbd502e12541%3A0xe524a3f237b60a68!2sJust%20Natural%20By%20Rod!5e0!3m2!1sen!2slk!4v1714599423476!5m2!1sen!2slk"
          width="100%"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
