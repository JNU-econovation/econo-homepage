import data from "./2021_summer_data.json";

function Summer21() {

    let showModal = (id) => {
        const modal = document.querySelector(`#modal${id}`);
        modal.style.display = "block";
        let closeButton = document.querySelector(`#close${id}`);
        closeButton.onclick = () => {
            modal.style.display = "none";
        }
        window.onclick = (e) => {
            if (e.target === modal)
                modal.style.display = "none";
        }
    }

    return (
        <div id="main" className="wrapper style1">
        <div className="container">
            <img src="assets/2021_summer_dev/images/2021_ECONOVATION_SUMMER_DEV.png" width="100%" />
            <header>
                <h2 className="big-header">2021-1학기 에코노베이션이 개발한 프로젝트 미리보기</h2>
            </header>
            <section>
                <div id="mobile_btn" className="portfolio-mobile-btn">
                    <a
                        href="https://www.youtube.com/watch?v=0eYdEDy8x-U"
                        className="mobile_btn_free blue"
                        style={{'fontSize': '0.75rem'}}
                        target="_blank"
                        >SUMMER DEV 다시보기
                    </a>
                </div>
                <br />
                <div className="grid-container">
                    {Object.keys(data).map(k => (
                        <div>
                        <div className="grid-item" onClick={() => showModal(k)} style={{'animationDelay': `${k * 0.1}s`}}>
                            <img src={data[k].represent_img} alt={data[k].project_name} />
                            <strong>[{data[k].field}] {data[k].project_name}</strong>
                            <div>{data[k].team}</div>
                            <div>{data[k].short_description}</div>
                        </div>
                        <div id={`modal${k}`} className="modal">
                            <div className="modal-content">
                                <span id={`close${k}`} className="close">&times;</span>
                                <img src={data[k].represent_img} alt={data[k].project_name} />
                                <div className="description">
                                    <div className="hash-container">
                                        {data[k].hashtags.map((tag) => (
                                            <span className="hashtag">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="description-container">
                                        <div className="title">프로젝트 한 줄 소개</div>
                                        <div>{data[k].short_description}</div>
                                    </div>
                                    {data[k].description.map(e => (
                                        <div className="description-container">
                                            <div className="title">{e.title}</div>
                                            {e.content.map(c => (
                                                <div>{c}</div>
                                            ))}
                                        </div>
                                    ))}
                                    {data[k].link ? data[k].link.map(e => (<a href={e.uri} class="project-link" target="_blank">{e.title}</a>)) : null}
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
        </div>
    );
}

export default Summer21;