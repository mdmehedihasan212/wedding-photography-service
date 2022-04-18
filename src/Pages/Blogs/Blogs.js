import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <section className="blogs-section m-4 p-2 g-2">
            <div>
                <  h4>Difference between authorization and authentication ?</  h4>
                <ul>
                    <li>Authentication means verifies who user is || Authorization means what resources user can access.</li>
                    <li>Authentication works through password and OTP and others systems || Authorization work through setting are implement and maintained by organization.</li>
                    <li>Authentication is first step of a good identity and access management process || Authorization takes place after authentication.</li>
                    <li>Authentication is visitable and changeable || Authorization not visitable and not changeable.</li>
                </ul>
            </div>
            <div>
                <  h4>Why are you using firebase? What other options do you have to implement authentication ?</  h4>
                <ul>
                    <li>Firebase authentication provides backend service and easy to use SDKs and ready made UI libraries to users to your app/web. It's supports famous application authentication systems.</li>
                    <li>List others option do have implement authentication below
                        (1) Back4App (2) Parse (3) AWS Amplify (4) Backendless (5) Kuzzle etc.
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <  h4>What other services does firebase provide other than authentication ?</  h4>
                    <li>Firebase many services provide us, Most useful of them are:
                        (1) Cloud Firestore
                        (2) Hosting
                        (3) Google Analytics
                        (4) Cloud Messaging
                        (5) Dynamic Links etc.
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Blogs;