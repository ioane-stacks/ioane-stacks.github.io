import { ContactData } from "./ContactData";

const Contact = () => {
    return (
        <div className="contact-page">
            <h2>Find Us</h2>
            <div className="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95213.79347428682!2d44.8135168!3d41.7759232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sge!4v1632600737907!5m2!1sen!2sge" title="Google Map" width="100% " height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div className="contact-info">
                <h2>Contact Info</h2>
                <p>Email: <a href={`mailto:${ContactData.mail}`}><b>{ContactData.mail}</b></a></p>
                {

                    ContactData.phone.map((phone, i) => {
                        return <p key={i}>Phone {i + 1}: <b>{phone.ph}</b></p>
                    })
                }
                <p>City: <b>{ContactData.city}</b></p>
                <p>Address:
                    {ContactData.street.map((addr, i) => {
                        return i === 0 ? <b key={i}> {addr.str}</b> : <b key={i}> <span>|</span> {addr.str}</b>
                    })}
                </p>
                <p>Work hours: <b>{ContactData.workHours}</b></p>
                <p>Identification: <b>{ContactData.identification}</b></p>
            </div>
        </div>
    );
}

export default Contact;