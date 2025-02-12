import "./buttons.css";
export const Buttons = (cname1, cname2) => {
    return (
        <div className={cname1}>
            <button id="nice-btn" className={cname2}>
                Get Started
            </button>
        </div>
    );
};
