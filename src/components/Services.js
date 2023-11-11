import React from "react";


const Services = () => {
    return (
        <div className='tc'>
            <h1 style={{fontFamily:"Lucida Handwriting"}} className='underline ma0 pa4'>Services I Provide</h1>
            <div style={{fontFamily:"papyrus"}} className="w100">
                <article className="dib br3 pa3 ma2 grow bw2 shadow-5-l">
                    <img style={{maxHeight: "400px"}} src="https://i.pinimg.com/originals/f6/93/5f/f6935f3e2df7c5618cec21328cbfcff9.jpg" className="db w-100 br2 br--top" alt=""/>
                        <div className="pa2 ph3-ns pb3-ns">
                            <div className="dt w-100 mt1">
                                <div className="dtc">
                                    <h1 className="f5 f4-ns mv0">Computerized Edge to Edge Quilting</h1>
                                </div>
                            </div>
                            <hr/>
                            <ul className="f6 lh-copy measure  mt2 mid-gray">
                                <li>
                                    section 1
                                </li>
                                <li>
                                    section 2
                                </li>
                                <li>
                                    section 3
                                </li>
                            </ul>

                        </div>
                </article>
                <article className="dib br3 pa3 ma2 grow bw2 shadow-5-l">
                    <img style={{maxHeight: "400px"}} src="https://i.pinimg.com/originals/f6/93/5f/f6935f3e2df7c5618cec21328cbfcff9.jpg" className="db w-100 br2 br--top" alt=""/>
                        <div className="pa2 ph3-ns pb3-ns">
                            <div className="dt w-100 mt1">
                                <div className="dtc">
                                    <h1 className="f5 f4-ns mv0">---Custom Computerized Quilting---</h1>
                                </div>
                            </div>
                            <ol className="f6 lh-copy measure  mt2 mid-gray">
                                <li>
                                    section 1
                                </li>
                                <li>
                                    section 2
                                </li>
                                <li>
                                    section 3
                                </li>
                            </ol>

                        </div>
                </article>
                <article className="dib br3 pa3 ma2 grow bw2 shadow-5-l">
                    <img style={{maxHeight: "400px"}} src="https://i.pinimg.com/originals/f6/93/5f/f6935f3e2df7c5618cec21328cbfcff9.jpg" className="db w-100 br2 br--top" alt=""/>
                    <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt w-100 mt1">
                            <div className="dtc">
                                <h1 className="underline f5 f4-ns mv0">Heirloom Free-Motion Quilting</h1>
                            </div>
                        </div>
                        <p className="f6 lh-copy measure mt2 mid-gray center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </article>
            </div>
            <p style={{fontFamily:"Lucida Handwriting"}} className='underline ma0 pa4'>(Prices vary with design complexity)</p>
        </div>
        )
    }

export default Services;