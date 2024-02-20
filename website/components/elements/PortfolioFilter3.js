
'use client'
export default function PortfolioFilter3({ images_list}) {
    // Isotope

    return (
        <>

            <div className="filters2 clearfix">
                {/* <ul className="filter-tabs filter-btns clearfix">
                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All Topics <span className="count">0</span></li>
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>Business <span className="count">0</span></li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>Coaching <span className="count">0</span></li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>Financial <span className="count">0</span></li>
                    <li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}>Marketing <span className="count">0</span></li>
                    <li className={activeBtn("cat-5")} onClick={handleFilterKeyChange("cat-5")}>Technical <span className="count">0</span></li>
                </ul> */}
            </div>

            <div className="items-container row clearfix">
                {
                    images_list.map (images => {
                        return <div className="project-block-five masonry-item all cat-1 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <img src={images.url} alt="" />
                                </div>
                                <div className="lower-content">
                                    <div className="content">
                                        <h4>{images.name}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
                
            </div>

        </>
    )
}
