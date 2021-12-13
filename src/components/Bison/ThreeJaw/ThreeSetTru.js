import React, { useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'

export default function ThreeSetTru() {
    // page title
    let title = 'Bison 3 Jaw SetTru Scroll Chucks'
    useEffect(() => {
        document.title = title
    }, []);

    return (
        <>

            <div className="w-100 h-100">
                <h1 className="text-center p-0 w-100">3-JAW FORGED STEEL SET-TRU ADJUSTABLE SCROLL CHUCKS</h1>
                <div className='col'>
                    <div className="row row-content w-100 h-100 justify-content-center">

                        <Card style={{ width: '25rem' }} className="mx-5 my-5">
                            <Card.Title className="mx-auto">Forged Steel Body with 2 piece jaws</Card.Title>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <div className="align-self-center min-width-100">
                                    <Card.Img className="card-img mx-auto" variant="top" src="./img/bison_3j_2pc.png" />
                                </div>
                                <Card.Text>
                                    <ul>
                                        <li>Hardened and ground working surfaces</li>
                                        <li>2 piece jaws for ease of jaw changes</li>
                                        <li>Repeatability: 0.0006"</li>
                                        <li>The clamped workpiece is adjusted to the required concentricity by means
                                            of 4 (8 for sizes 16", 20" and 25") radially arranged adjusting screws</li>
                                        <li>Chuck body is forged from a single piece of steel</li>
                                    </ul>
                                </Card.Text>
                                <Button className="ml-5" variant="primary">See Forged Steel Options</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '25rem' }} className="mx-5 my-5 justify-content-center">
                            <Card.Title className="mx-auto">Semi-Steel Body with solid jaws</Card.Title>
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <div className="align-self-center min-width-100">
                                    <Card.Img className="card-img " variant="top" src="./img/bison_3j_solid.png" />
                                </div>
                                <Card.Text >
                                    <ul>
                                        <li>Hardened and ground working surfaces</li>
                                        <li>Repeatability: 0.0006"</li>
                                        <li>Single piece jaw design</li>
                                        <li>The clamped workpiece is adjusted to the required concentricity by means
                                            of 4 (8 for sizes 16", 20" and 25") radially arranged adjusting screws</li>
                                        <li>Chuck body made from casted iron</li>
                                    </ul>
                                </Card.Text>
                                <Button className="mt-4" variant="primary">See Semi-Steel Options</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

        </>

    )
}
