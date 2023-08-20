import styled from 'styled-components';

// Compents
import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled className='Essays'>
            <h2>Essays</h2> 
            <Essay question='Q1: what is the diffrence between html,css,js?'>
            Html (or Hypertext markup language) is used for making web content neat and tidy. It can use hierarchy to icreese or decreese the size of a given piece of text or data depending on the type of header used. It uses different types of elements to style content and makes the user experience better. Html uses <> and </> to wrap content in a element. The element name is placed in between the <> and </>. Css is used to modify these elements and change them to satisfy user requirements. There are different ways you can change these elements using css and you can create new ones as well. Types of changes you can make include, increasing font size, bigger margins, and padding to make elements more spaced out.

Javascript on the other hand is used to add functionality and user interaction to a website. Javascript can make the webpage do something when it is clicked or make text change when the date changes. Javascript is mostly used on frontend development, but recently it has been used for backend development as well. Javascript is used for game development and is easy to learn since it has lots of resources.


            </Essay>
            <Essay question='Q2: what is the diffrence between Git and Gihub?'>
            The difference between Git and Github is that git is a local based system for updating and modifying code. GitHub Is cloud based and is a website that can also host websites as well as access git repositories from the cloud. GitHub allows developers to download projects and make branches to edit code. It also allows small projects to be downloaded and have instructions on how to use the application. Git can allow developers to collaborate on projects and add new features or branch off of the project.

Git is a version control system or VCS that works by taking a snapshot of your project when you make a repository. When you commit changes to your application Git saves the changes you made into a new update and sends it to the repo.

            </Essay>
            <Essay question='Q3 what is the diffrence between JQuery and react?'>
            The difference between JQuery and React is that JQuery works to make larger components of code into smaller components. React is built to make webpages quickly and uses components to do so. JQuery is focused on doing more in less lines of code and focuses on making Javascript easier to use on a web application. It also simplifies the complicated things from javascript. JQuery can maplute most aspects of html, css, and javascript.

While JQuery is for javascript and animation, React focus on quick and efficient user interface and web application devopment. React uses components to assemble web applications. These components are responsible for making parts of the UI. React is mostly used to create UI.


            </Essay>
            <Essay question='Q4: What is the difference between a Front-End and Back-End Developer?'>
            Frontend developers work on websites by adding user interaction and styling to websites. They work on the parts that the user will see and interact with. They work with html, css, and javascript. Frontend developers work to create user-friendly websites and UI. The average pay of a frontend developer is $78,516 as of 2023. The demand for frontend developers is projected to grow 23% till 2031.

Backend developers are responsible for the optimization and backend of the website. They make the website work behind the scenes managing server side data and APIs. Backend developers also do quality assurance testing. Which is testing every part of the website under different interactions and circumstances to make sure that bugs are rare and not website breaking. Backend developer use such programming languages as ruby, PHP, sql, and c#.

            </Essay>
            <Essay question='Q5: Edit: What is the difference between Absolute, Root and Document Relative linking?'>
            The difference between Absolute, Root and Document Relative linking is that Absolute link is that a absolute link contains the full address of the site or file. It uses the format: Scheme//server/path/resource to find what its looking for.  Relative linking is linking to a file or resource that is in the same folder or path. It is used for multiple links in the same address like a menu. Root linking works by linking files from the root directory.

            </Essay>
            <Essay question='Q6:What is the difference between jpg, gif, png and svg images?'>
            The difference between jpg, gif, png and svg images are mostly how they behave with pictures and images. JPGs or “Joint Photographic Experts Group” are used mostly for images on websites as they can compress large image files into smaller files. You can compress jpegs further by using lossy or lossless. PNGs stand for Portable Networks Graphics and are used for web graphics and company logos. PNGs are larger than jpegs, but the graphic quality is higher. PNGs can have a transparent background which can overlay onto a colored background.

GIfs are most commonly used for memes and social media and stand for Graphics Interchange Format. They are image files but they can also do small animations. They can hold multiple images to create animations like a flipbook. SVGs stand for Scaleble Vector Graphics and can be resized without losing graphic quality. SVGs are code based and generated with parameters. You need a special editing software to make svgs like illustrator.

            </Essay>
            <Essay question='Q7: Define the following Agile roles: Product Owner, Product Manager, Business Analyst, Scrum Master, UX designer, Developer/Engineer, QA/SDET, and DevOps.'>
            The product owner defines goals and objectives to insure success of the project.  Product Managers identifies user needs and objective the product will succeed in. Business Analysts help to guide the business to succes and improve the product. Scrum masters help to facilitate scrums and make sure they stay on task while in the scrum process. Scrums are a type of management frame work to orginze meetings and plans toward a end goal. 

UX designers work to empsize with the user and find out what makes them stay on the site or app. They implement what they find by making prototypes to send to other designers and developers. Designers make the application layout and engineers write code to add functionality to the website. QA testers work with the application to break it and SDETs make testing plans and and test via atomation like a program. Both QA testers  and SDETs work to test and give feedback to the developers. DevOps work together to conceive, build and  deliver the application as quick as possible with all the members of the team.

            </Essay>
            
        </EssaysStyled>
    );
}

export default Essays;

const EssaysStyled = styled.div`
    
`;