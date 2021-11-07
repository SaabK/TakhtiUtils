import React from 'react'

export default function About(props) {
    
    return (
        <>
        <div className="container">
            <h2 className="text-center my-3">About TakhtiUtils</h2>
            <p className="About-Us-Para"><strong>TakhtiUtils</strong> is a Text-Based Application, that helps with writing text. This is an Application made by Ali Bin Naseer. This application includes features, such as <strong className="underline-this">Removing Extra Spaces</strong> from the text, <strong className="underline-this">Capitalizing the text</strong> And Converting it to <strong className="underline-this">UpperCase</strong> or <strong className="underline-this">LowerCase</strong></p>
        </div>
        

        <div className="container">
            <h2 className="text-center my-3">FAQ's</h2>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            How can I contact the Owner?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body text-color-black" >
                            You can contact me by E-mailing me at <code>AliIsWorking459@gmail.com</code>. I will reply whenever I am free 😊.
                            <p><strong>Note: </strong>Do not E-mail me random things, Thank You!</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Does Ali have Social Media?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body text-color-black" >
                            Yes, I do use social media.
                            <ul>
                                <li style = {{listStyle: "square"}}>Instagram: <code>@BakwasBoye</code></li>
                                <li style = {{listStyle: "square"}}>Twitter: <code>@AliBinTweets</code></li>
                                <li style = {{listStyle: "square"}}>Discord: <code>discord.gg/BakwasBoy</code></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
