import React from 'react'
import { Form, FormGroup } from "reactstrap";

const Addcarsform = () => {
  return (
    <Form >
        <FormGroup className="addcar__form d-inline-block me-4 mb-4">
        <input type="number"  id="id"  placeholder="id" />
        </FormGroup>
        <FormGroup className="addcar__form d-inline-block ms-1 mb-4">
        <input type="text"  id="brand"  placeholder="Brand name" />
        </FormGroup>
        <FormGroup className="addcar__form d-inline-block me-4 mb-4">
        <input type="text"  id="ratings"  placeholder="ratings" />
        </FormGroup>

        <FormGroup className="addcar__form d-inline-block ms-1 mb-4">
        <input type="text"  id="Carname"  placeholder="Carname" />
        </FormGroup>

        <FormGroup className="addcar__form d-inline-block me-4 mb-4">
        <input type="text"  id="model"  placeholder="Model" />
        </FormGroup>

        <FormGroup className="addcar__form d-inline-block ms-1 mb-4">
        <input type="text"  id="price"  placeholder="Price" />
        </FormGroup>
        <FormGroup className="addcar__form d-inline-block me-4 mb-4">
        <input type="text"  id="speed"  placeholder="Speed" />
        </FormGroup>

        <FormGroup className="addcar__form d-inline-block ms-1 mb-4">
        <input type="text"  id="gps"  placeholder="Gps" />
        </FormGroup>
        <FormGroup className="addcar__form d-inline-block me-4 mb-4">
        <input type="text"  id="seatType"  placeholder="SeatType" />
        </FormGroup>
        
        <FormGroup className="addcar__form d-inline-block ms-1 mb-4">
        <input type="text"  id="automatic"  placeholder="Automatic" />
        </FormGroup>

        <FormGroup className="addcar__form d-inline-block me-4 mb-4">
        <input type="text"  id="description"  placeholder="description" />
        </FormGroup>

    </Form>
  )
}

export default Addcarsform