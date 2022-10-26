import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <div className=' container'>
            <h2 className=' mb-3 mt-5'>FAQ Page</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is a web developer?</Accordion.Header>
                    <Accordion.Body>
                        A web developer is a programmer who makes websites, and apps for the World Wide Web. A web developer builds a website from the bottom up, developing everything from layout to functions and features on the page.
                        TL;DR: a web developer makes what you’re looking at right now.
                        A good web developer can make almost anything happen on a website, and can build custom code to accommodate the needs of their client. Web developers have an intricate understanding of various programming languages and how they’re used.
                        A web developer might work at one organization as a permanent full-time employee, or work as an independent consultant. A web developer salary depends on what kind of work you’re involved in, your location, experience and level of seniority.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Are a web developer and a web designer the same thing?</Accordion.Header>
                    <Accordion.Body>
                        Not exactly. Here’s how it breaks down:

                        A web developer is more concerned with functionality and features of a website, and versed in the programming languages required to create them. Web developers will still need to understand the aesthetics and art direction of the site as they implement features.

                        A web designer will create the logos, graphics, and layout that determine the look and feel of a website. Web designers will use software like Adobe Photoshop and Illustrator to create these materials. A web designer with a knowledge of code can help him/her better communicate with the web developer.

                        A developer with skills in both development and design is extremely valuable, and could make for a great PM (project manager) on any web project.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What does web development entail exactly?</Accordion.Header>
                    <Accordion.Body>
                        Web development isn’t just building what the user sees. There’s a lot underneath the hood of a modern website, and a good web developer can traverse across the entire terrain.
                        Client-side scripting:
                        Client-side scripting refers to the creation of a website’s layout, look and feel, using languages like HTML, CSS, and JavaScript. It also refers to the creation of web apps that execute themselves inside a user’s web browser.

                        Client-Side languages:

                        HTML
                        CSS
                        JavaScript
                        Jquery
                        Web developers who specialize in client-side scripting are known as front-end developers.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What makes a good web developer?</Accordion.Header>
                    <Accordion.Body>
                        It takes more than an awesome portfolio to score a full-time web developer position at a company. You can do the work well, but can you work well with the company?

                        Here’s what hiring managers are looking for:

                        The skillset. You’ll need to have a great grasp of the programming languages and frameworks to get around in your job (see above). Smart companies are looking to continually improve their processes, which means the code you’re using will constantly be changing. You’ll need to keep up.

                        Willingness to keep learning. Don’t be stuck in the way you’ve always done things. The industry moves at an exponential rate, so web developers need to be on the cutting edge of all web technology. Plus, your knowledge will give more ability to teach others on your team.

                        Ability to solve problems. All developers solve problems every day. A great web developer knows how to figure out the direction the solution to a problem needs to take.

                        Be flexible. Some web developers might consider their code a work of art and might not want to mess with it. But modern websites are always changing. You’ll always want to improve upon what you previously built. Listen to others and get input. There are infinite solutions. Another team member might find a solution you would have never thought of.

                        Excellent communication skills. Sometimes you won’t be able to solve a problem. This is where the ability to speak up comes in. You’ll have to communicate what the problem is to your team and why it can’t be solved. Or if you feel the need to pivot in direction, you’ll need to let others know why.

                        Ability to get stuff done. You’ll be working with clients as a web developer, so that means you’ll have deadlines (since they will). You might fall into multiple problems, which could cause projects to become delayed – and you’ll need the ability to power through them all, even when you’re ready to give up.

                        Time management ability. This is important for the same reason as the above point. Your team may work in SCRUM and have sprints every week, or have some other project management system in place. But it’s still on you to prioritize the multitude of tasks you need to do to help your team meet its goal.
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    );
};

export default Faq;