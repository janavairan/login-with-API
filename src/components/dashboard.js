import Header from "./header";
import { Input, Layout } from "antd"
import { useState } from "react";
import { useSelector } from "react-redux";
import content_1 from './image/content_1.jpg';
import content_2 from './image/content_2.webp';
import content_3 from './image/content_3.jpg';
import content_4 from './image/content_4.webp';
import profile_1 from './image/img_1.jpg';
import profile_2 from './image/img_2.webp';
import profile_3 from './image/img_3.jpg';
import profile_4 from './image/img_4.jpg';
import './dashboard.css'
import React from "react";


const { Content, Sider } = Layout;
const data = [
    {
        id: 1,
        name: "Emma Smith",
        title: "Climate Change",
        date: "27 Jun 2023",
        image: content_1,
        profileImage: profile_1,
        heading: "A True love changes the differnet climate",
        describe: "When you love someone, you want to find as many ways to show them as possible. But sometimes, simply saying, 'I love you' just does not feel like enough. After all, how could three small words—which you tell your partner regularly, as it is love capture the depth and meaning of what you really feel for them?",

    },
    {
        id: 2,
        name: "Sean Bean",
        title: " A instgram post",
        date: "27 Jun 2023",
        image: content_2,
        profileImage: profile_2,
        heading: 'How to write tech blogs',
        describe: "We have all been there—having snapped a cute Instagram pic and yet wondering just what to say along with it. Whether you are looking for song lyrics, quotes, or funny captions for your Instagram account, you will find something in this list perfect for you. Find the inspiration to make your social media shine with these Instagram captions for selfies below. ",

    },
    {
        id: 3,
        name: "Briax Cox",
        title: "Admin Panel",
        date: "27 Jun 2023",
        image: content_3,
        profileImage: profile_3,
        heading: 'Admin Panel-How To Get Started The Dashboard Tutorial',
        describe: '“I love trees. They are like us. Roots on the ground and head to the sky.” These are the words of the writer Erri de Luca. How could one fail to agree with him? Think about it: trees, besides allowing life, are also the perfect metaphor for it. The need for solidity, the desire for freedom and lightness, the will to grow and expand.',

    },
    {
        id: 4,
        date: "27 Jun 2023",
        name: "Dan Wilson",
        title: "Time to cook and eat?",
        image: content_4,
        profileImage: profile_4,
        heading: 'Admin Panel-How To Get Started The Dashboard Tutorial',
        describe: "When you love someone, you want to find as many ways to show them as possible. But sometimes, simply saying, 'I love you' just doesn't feel like enough. After all, how could three small words—which you tell your partner regularly, as it is love capture the depth and meaning of what you really feel for them",

    },
]

function Dashboard() {

    const post = useSelector((state) => state.user);



    const [initialData, setInitialData] = useState(data);

    const [selectcontent, setSelectContent] = useState(null);
    const handleContent = (content) => {
        setSelectContent(content);
    };
    const sliderView = () => {
        const dataLoad = Array.isArray(post) ? post : initialData;
        return dataLoad.map((posts) => (

            <div key={posts.id} onClick={() => handleContent(posts)} >
                <div className="content_details">
                    <div>
                        <img src={posts.image} alt={posts.name} className="img_blog"></img>
                    </div>
                    <div className="content">
                        <h2 className="content_head">{posts.title}</h2>
                        <p className="upload">{posts.name},{posts.date}</p>

                    </div>
                </div>

            </div>


        ))

    }

    return (
        <>
            <Header />
            <div className="body-container">
                <Content>
                    <Layout >
                        <div className="slider_blog" >

                            <Sider>
                                <div className="blog_container">
                                    <div className="publish_content">
                                        <span>Published blogs</span>

                                        <Input placeholder=" Search" className="blog_input" ></Input>
                                    </div>
                                    <div >
                                        {sliderView()}
                                    </div>
                                </div>
                            </Sider>
                        </div>
                        <div className="body_blog">


                            <Content>
                                {selectcontent ? (
                                    <div className="preview">
                                        <div className="profile_blog" >

                                            <div>

                                                <img src={selectcontent.profileImage} alt="profile" className="content_details_img " ></img>
                                            </div>
                                            <div>
                                                <h3>{selectcontent.name}</h3>
                                                <p>{selectcontent.date}</p>
                                            </div>
                                        </div>
                                        <div className="img_preview">
                                            <img src={selectcontent.image}></img>
                                        </div>
                                        <div className="preview_content">
                                            <h2>{selectcontent.heading}</h2>
                                            <p>{selectcontent.describe}</p>
                                        </div>
                                    </div>

                                ) : (
                                    <div className="nocontent">

                                        <h1>Select The Sidebar</h1>
                                    </div>
                                )}
                            </Content>


                        </div>



                    </Layout >

                </Content>
            </div >

        </>
    )
}

export default Dashboard;
