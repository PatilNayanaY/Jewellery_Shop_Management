import React from 'react'

export default function ContactUs() {
    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Feel free to mail us
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Feel free to email us for some personal advice, it's what we do best. We are available to help you source a specific piece of jewellery, loose diamond, or to guide you through the process of deciding exactly what is right for that special someone - maybe even yourself! You can email us on service@gmail.com</div>
                </div>
            </div>
        </div>
    )
}
