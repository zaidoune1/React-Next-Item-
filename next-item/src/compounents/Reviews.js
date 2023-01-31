    import datas from "./Datas"
    import DataReviews from "./DataReviews";
    import "../styles/container.css";
    const Reviews = () => {

    return (

        <>
        <div className="container">

            <section className="section-container">
    
                <h2 className="title">Our Team</h2>
                <div className="bloc-title"></div>

                    <DataReviews items={datas} />

            </section>

        </div>
        </>
    )
    }

    export default Reviews