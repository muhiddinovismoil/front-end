import "./aboutitem.css";
export const AboutItem = () => {
    return (
        <ul className="about__list">
            <li className="about__item">
                <div className="about_counts">
                    <p className="about__count-text">01</p>
                </div>
                <div className="about__content2">
                    <h3 className="about__sub_title">
                        Track company-wide progress
                    </h3>
                    <p className="about__text">
                        See how your day-to-day tasks fit into the wider vision.
                        Go from tracking progress at the milestone level all the
                        way done to the smallest of details. Never lose sight of
                        the bigger picture again.
                    </p>
                </div>
            </li>
            <li className="about__item">
                <div className="about_counts">
                    <p className="about__count-text">02</p>
                </div>
                <div className="about__content2">
                    <h3 className="about__sub_title">
                        Advanced built-in reports
                    </h3>
                    <p className="about__text">
                        Set internal delivery estimates and track progress
                        toward company goals. Our customisable dashboard helps
                        you build out the reports you need to keep key
                        stakeholders informed.
                    </p>
                </div>
            </li>
            <li className="about__item">
                <div className="about_counts">
                    <p className="about__count-text">03</p>
                </div>
                <div className="about__content2">
                    <h3 className="about__sub_title">
                        Everything you need in one place
                    </h3>
                    <p className="about__text">
                        03 Everything you need in one place Stop jumping from
                        one service to another to communicate, store files,
                        track tasks and share documents. Manage offers an
                        all-in-one team productivity solution.
                    </p>
                </div>
            </li>
        </ul>
    );
};
