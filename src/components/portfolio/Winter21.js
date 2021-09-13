import data from "./2021_winter_data.json";

function Winter21() {

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

        <div id="main" class="wrapper style1">
            <div class="container">
                <img src="assets/2021_winter_dev/[구글폼배너] 2021 WINTER DEV-01.png" width="100%" />
                <header>
                    <h2 class="big-header">2020-2학기 에코노베이션이 개발한 프로젝트 미리보기</h2>
                </header>
                <section>
                    <br />
                    <div class="grid-container">
                        {Object.keys(data).map(k => (
                            <div>
                            <div class="grid-item" onClick={() => showModal(k)} style={{'animationDelay': `${k * 0.1}s`}}>
                                <img src={data[k].represent_img} alt={data[k].project_name} />
                                <strong>[{data[k].field}] {data[k].project_name}</strong>
                                <div>{data[k].team}</div>
                                <div>{data[k].short_description}</div>
                            </div>
                            <div id={`modal${k}`} class="modal" >
                                <div class="modal-content">
                                    <span id={`close${k}`} class="close">&times;</span>
                                    <img src={data[k].represent_img} alt={data[k].project_name} />
                                    <div class="description">
                                        <div class="hash-container">
                                            {data[k].hashtags.map((tag) => (
                                                <span className="hashtag">{tag}</span>
                                            ))}
                                        </div>
                                        <div class="description-container">
                                            <div class="title">프로젝트 한 줄 소개</div>
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

export default Winter21;

