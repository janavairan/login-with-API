import { Button } from "antd"
import { StepBackwardOutlined } from "@ant-design/icons"
import content_1 from './image/content_1.jpg';
import content_2 from './image/content_2.webp';
import content_3 from './image/content_3.jpg';
import content_4 from './image/content_4.webp';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import './previewpage.css';

const data = [
    {
        id: 1,
        image: content_1,
        heading: "A True love changes the differnet climate",
        describe: "When you love someone, you want to find as many ways to show them as possible. But sometimes, simply saying, 'I love you' just does not feel like enough. After all, how could three small words—which you tell your partner regularly, as it is love capture the depth and meaning of what you really feel for them?",

    },
    {
        id: 2,
        image: content_2,
        heading: 'How to write tech blogs',
        describe: "We have all been there—having snapped a cute Instagram pic and yet wondering just what to say along with it. Whether you are looking for song lyrics, quotes, or funny captions for your Instagram account, you will find something in this list perfect for you. Find the inspiration to make your social media shine with these Instagram captions for selfies below. ",

    },
    {
        id: 3,
        image: content_3,
        heading: 'Admin Panel-How To Get Started The Dashboard Tutorial',
        describe: '“I love trees. They are like us. Roots on the ground and head to the sky.” These are the words of the writer Erri de Luca. How could one fail to agree with him? Think about it: trees, besides allowing life, are also the perfect metaphor for it. The need for solidity, the desire for freedom and lightness, the will to grow and expand.',

    },
    {
        id: 4,
        image: content_4,
        heading: 'Admin Panel-How To Get Started The Dashboard Tutorial',
        describe: "When you love someone, you want to find as many ways to show them as possible. But sometimes, simply saying, 'I love you' just doesn't feel like enough. After all, how could three small words—which you tell your partner regularly, as it is love capture the depth and meaning of what you really feel for them",

    },
]
console.log(data);
function Previewpage() {

    const post = useSelector((state) => state.user);
    return (
        <div className="main_container">

            <div className="containers">
                <div>
                    <Button style={{ color: 'grey' }}><Link to={"/back"}><StepBackwardOutlined />Back</Link> </Button>
                </div>
                <div className="buttons_container">
                    <Button className="delete_button" >Delete</Button>
                    <Button type="primary" style={{ marginRight: '5px' }}>Edit</Button>
                    <Button type="primary" style={{ marginRight: '5px' }}>Publish</Button>
                </div>
            </div>
            {data.map((posts, index) => (
                <div key={index}>


                    <div className="image_preview">
                        <img className="image_content" src={posts.image}></img>
                    </div>
                    <div className="preview_content">
                        <h3>{posts.heading}</h3>
                        <p>{posts.describe}</p>
                    </div>



                </div>
            ))}

        </div>
    )
}
export default Previewpage