import { toast } from 'react-toastify';

const ContactForm = () => {

    const handleForm = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks For Your Message")
    }

    return (
        <>
            <form className="contact-form contact-form" onSubmit={handleForm}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input className="form-control" id="name" name="name" placeholder="Full name" type="text" autoComplete='off' required />
                            <span className="alert-error" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="email" name="email" placeholder="Email address" type="email" autoComplete='off' required />
                            <span className="alert-error" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="phone" name="phone" placeholder="Phone number" type="text" autoComplete='off' required />
                            <span className="alert-error" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group comments">
                            <textarea className="form-control" id="comments" name="comments" placeholder="Tell us about your project or query" autoComplete='off' required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <button className="btn btn-md circle btn-gradient animation" style={{ fontWeight: '500', textTransform: 'initial' }} type="submit" name="submit" id="submit">
                            <i className="fa fa-paper-plane" style={{ marginLeft: '-6px' }} />
                            &nbsp;&nbsp;&nbsp;
                            Get in touch
                        </button>
                    </div>
                </div>
                {/* Alert Message */}
                <div className="col-lg-12 alert-notification">
                    <div id="message" className="alert-msg" />
                </div>
            </form>
        </>
    );
};

export default ContactForm;