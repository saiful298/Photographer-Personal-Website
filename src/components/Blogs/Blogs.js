import React from 'react';

const Blogs = () => {
    return (
        <div>
            <hr />
            <h5> QUES: Difference between authorization and authentication</h5>
            <p>ANS: Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.
                In the digital world, authentication and authorization accomplish these same goals. Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of users.</p>
            <hr />
            <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
            <p>ANS: Firebase Authentication Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices. Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend. </p>
            <hr />
            <h5>What other services does firebase provide other than authentication</h5>
            <p>Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. Now, let’s look at some of the services and use of it.
                There are many services which Firebase provides, Most useful of them are:
                (1)Cloud Firestore  ==== (2)Cloud Functions   ====   (3) Hosting ====  (4) Google Analytics
                =====(5)Predictions  ======(6)  Cloud Messaging ===== (7)  Dynamic Links =====(8)    Remote Config/////
                Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. Now, let’s look at some of the services and use of it.</p>
        </div>
    );
};

export default Blogs;