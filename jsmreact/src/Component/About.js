import React from 'react'

export default function About() {
    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        What is JSMS?
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">When it comes to functionality, features, and service, the Jewellery shop management system(JSMS) is considered the market leader. The software is specially developed to simplify and streamline all facets of the jewellery business, thereby benefiting all parties involved in the process – the manufacturer, the retailer, and the customers.
                        Our jewellery management system is simple to use and quick to implement, besides saving a considerable operational cost in the long run. The system will ensure that every process, from purchasing to manufacture to sales, is carried out in a structured and error-free manner. Ultimately, this will increase both organizational productivity and customer satisfaction.
                        Additionally, you can also carry out a number of peripheral tasks associated with your business using JSMS, such as Accounting, Inventory, Employee Management, Bills and so on. In a nutshell, JSMS software is more than just a sales tool.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Our Mission
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Our Mission is to provide best jewellery shop managemnt system.</div>
                </div>
            </div>
        </div>    
    )
}
