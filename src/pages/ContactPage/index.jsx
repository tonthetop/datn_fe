import { Link } from "react-router-dom"

function ContactPage() {
    return (
        <div className="text-center">
            <div>
                <h2>Contact us today to get your first order.</h2>

                <p class="tel-link mobile">
                    Phone Number:
                    <a href="tel:(84) 0905803676">Click to call</a>
                </p>
                <p class="email-link">Email: <a href="mailto:tuanak691@gmail.com">tuanak691@gmail.com</a></p>

            </div>
            <div>
                <p>We are located at: 1122 Music Lane, Chicago, IL 60007</p>
                <div>
                    <iframe style={{
                        width: "600px",
                        height: "500px",
                        style: "border:0",
                        allowfullscreen: "",
                        loading: "lazy",
                    }} src="https://www.google.com.vn/maps/embed?pb=!1m18!1m12!1m3!1d94860.99108536878!2d-88.06273341499738!3d42.01302260911952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb1c87fb312c1%3A0x74fc2bccb9ea251e!2sElk%20Grove%20Village%2C%20Illinois%2060007%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1646388814907!5m2!1svi!2s" ></iframe>
                </div>
            </div>
        </div>
    )
}
export { ContactPage }