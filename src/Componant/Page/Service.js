import React from 'react'
import Service from '../Images/Service.jpg';
export default function service() {
    return (
        <div>
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">Vision Mission and Values</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4">
                            <div class="card card-shadow">
                                <img class="card-img-top" src={Service} alt="service" />
                                <div class="card-body">
                                    <h4 class="card-title">Service 1</h4>
                                    <div className="Service-Underline"></div>
                                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy
                                        text ever since.</p>

                                    <button to="/About" type="button" class="btn btn-warning shadow">
                                        Read more..
                                    </button>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card card-shadow">
                                <img class="card-img-top" src={Service} alt="service" />
                                <div class="card-body">
                                    <h4 class="card-title">Service 1</h4>
                                    <div className="Service-Underline"></div>
                                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy
                                        text ever since.</p>

                                    <button to="/About" type="button" class="btn btn-warning shadow">
                                        Read more..
                                    </button>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div class="card card-shadow">
                                <img class="card-img-top" src={Service} alt="service" />
                                <div class="card-body">
                                    <h4 class="card-title">Service 1</h4>
                                    <div className="Service-Underline"></div>
                                    <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy
                                        text ever since.</p>

                                    <button to="/About" type="button" class="btn btn-warning shadow">
                                        Read more..
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
