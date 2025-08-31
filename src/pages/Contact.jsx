const Contact = () => {
    return (
        <div className="contact">
            <div className='contact-details'>
                <div className='info'>
                    <h1>Contact me</h1>
                    <p>I'm always open to discussing new opportunities, collaborations, or projects.<br /> Feel free to reach out through any of the channels below!</p>

                    <p><strong>Email:</strong> <a href="mailto:muhammadusman4@gmail.com">muhammadusman4@gmail.com</a></p>
                    <p><strong>Phone:</strong> <a href="tel:+921234567891">0123-4567891</a></p>
                    <p><strong>Address:</strong> 123 Main St, Your City, Your Country</p>

                    <form>
                        <p>Name : <input type="text" name="name" placeholder="Your Name" required /></p>
                        <p>Email : <input type="email" name="email" placeholder="Your Email" required /></p>
                        <textarea name="message" placeholder="Your Message" required></textarea>
                        <button onClick={()=> {alert("submitted")}}>Send</button>
                    </form>
                </div>
                <div className='social-links'>
                    <p><strong>Find me on:</strong></p>
                    <ul>
                        <li><a href="" target="_blank">LinkedIn</a></li>
                        <li><a href="" target="_blank">GitHub</a></li>
                        <li><a href="" target="_blank">Twitter</a></li>
                    </ul>

                    <p><strong>Schedule a meeting:</strong> <a href="" target="_blank">Book via Calendly</a></p>

                    <p>
                        <strong>Download My Resume:</strong>
                        <a href="Your_Resume_Link.pdf" download>Click here to download</a>
                    </p>

                    <p><strong>Let’s collaborate and build something amazing together!</strong></p></div>

            </div>
        </div>
    )
}

export default Contact;
