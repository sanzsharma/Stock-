import React from 'react'

export default function TextForm(props) {
    return (
        <div>
            <h1>{props.heading}</h1>
            {/* <div class="mb-3">
                <label for="myBox" class="form-label">Email address</label>
                <input type="email" class="form-control" id="myBox" placeholder="name@example.com" />
            </div> */}
            <div class="mb-3">
                {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                <button></button>
            </div>
        </div>
    )
}
